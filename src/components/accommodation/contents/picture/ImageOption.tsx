import { useState, ChangeEvent, MouseEvent, useEffect, useRef } from 'react';
import { SlOptions } from 'react-icons/sl';
import styled from 'styled-components';

import { type ImageItem } from '../../../../constants/accommodation';
import imageReader from '../../../../utils/imageReader';
import { useRecoilState } from 'recoil';
import { imageDataState, disabledState } from '../../../../recoil/accommodationAtoms';

interface ImageOptionProps {
  index: number;
  setImageList: (imageList: ImageItem[]) => void;
  imageList: ImageItem[];
}

export default function ImageOption({ index, setImageList, imageList }: ImageOptionProps) {
  const [disabled, setDisabled] = useRecoilState(disabledState);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [imageData, setImageData] = useRecoilState(imageDataState);

  const divRef = useRef<HTMLDivElement>(null);

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsClicked(preState => !preState);
  };

  const deleteImage = (index: number) => () => {
    const newImageData = new FormData();
    imageData.forEach((value, key) => {
      newImageData.append(key, value);
    });

    const imageDataValues = Array.from(imageData.getAll('houseImages'));

    const newImageList = [...imageList];
    newImageList.splice(index, 1);
    imageDataValues.splice(index, 1);

    if (newImageList.length === 0) {
      newImageList.push({ image: '', isFocused: false });
    }

    if (newImageList[0].image?.length !== 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }

    newImageData.delete('houseImages');
    imageDataValues.forEach(value => newImageData.append('houseImages', value));

    setIsClicked(false);
    setImageData(newImageData);
    setImageList(newImageList);
  };

  const editImage = (index: number) => async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    setIsClicked(true);
    if (file?.[0]) {
      const imageDataValues = Array.from(imageData.getAll('houseImages'));

      const newImageData = new FormData();
      imageData.forEach((value, key) => {
        newImageData.append(key, value);
      });

      try {
        const result = (await imageReader(file[0])) as string;
        const newImageList = [...imageList];

        newImageList.splice(index, 1, { image: result, isFocused: false });
        imageDataValues.splice(index, 1, file[0]);

        setImageList(newImageList);

        newImageData.delete('houseImages');

        imageDataValues.forEach(value => newImageData.append('houseImages', value));
        setImageData(newImageData);

        setIsClicked(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (divRef.current && !divRef.current.contains(e.target as Node)) {
        setIsClicked(false);
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <StyledRelativeDiv ref={divRef}>
      <StyledBtn onMouseDown={handleOnClick}>
        <SlOptions />
      </StyledBtn>

      {isClicked && (
        <StyledOptionContainer>
          <StyledOption>
            <StyleLabel htmlFor="editFile">수정하기</StyleLabel>
            <StyledInput onChange={editImage(index)} id="editFile" type="file" accept="image/*" />
          </StyledOption>
          <StyledOption onClick={deleteImage(index)}>삭제</StyledOption>
        </StyledOptionContainer>
      )}
    </StyledRelativeDiv>
  );
}

const StyledRelativeDiv = styled.div`
  position: absolute;
  top: 8%;
  right: 5%;
`;

const StyledBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: rgba(255, 255, 255, 0.1);
  transition: transform 0.25s ease-in-out;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
    transform: scale(1.04);
    box-shadow: 0 3px 10px 3px rgba(0, 0, 0, 0.07);
  }

  &:active {
    transform: scale(0.95);
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);
  }
`;

const StyledOptionContainer = styled.div`
  width: 100px;
  background-color: white;
  position: absolute;
  right: 20%;
  top: 120%;

  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px 0;
`;

const StyledOption = styled.li`
  list-style: none;
  font-size: 13px;
  cursor: pointer;
  text-indent: 10px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:last-child {
    padding: 10px 0;
  }
`;

const StyledInput = styled.input`
  display: none;
`;

const StyleLabel = styled.label`
  display: block;
  cursor: pointer;
  padding: 10px 0;
`;
