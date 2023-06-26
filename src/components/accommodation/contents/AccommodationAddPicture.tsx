import { useRef, ChangeEvent } from 'react';
import styled from 'styled-components';
import { TbPhotoPlus } from 'react-icons/tb';
import { AiOutlinePicture, AiOutlinePlus } from 'react-icons/ai';

import ImageOption from './ImageOption';
import imageReader from '../../../utils/imageReader';
import { useRecoilState } from 'recoil';
import { imageDataState, imageListState, isPassedState } from '../../../recoil/atoms';

export default function AccommodationAddPicture() {
  const [isPassed, setIsPassed] = useRecoilState(isPassedState);
  const [imageData, setImageData] = useRecoilState(imageDataState);
  const [imageList, setImageList] = useRecoilState(imageListState);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (file?.[0]) {
      const newImageData = new FormData();
      imageData.forEach((value, key) => {
        newImageData.append(key, value);
      });

      newImageData.append('houseImages', file[0]);
      setImageData(newImageData);

      try {
        const result = (await imageReader(file[0])) as string;
        const newImageList = [...imageList];

        if (newImageList.some(item => item.image === '')) {
          const index = newImageList.findIndex(item => item.image === '');
          newImageList.splice(index, 1, { image: result, isFocused: false });
        } else {
          newImageList.push({ image: result, isFocused: false });
        }

        if (newImageList[0].image?.length !== 0) {
          setIsPassed(false);
        } else {
          setIsPassed(true);
        }

        setImageList(newImageList);
      } catch (err) {
        console.log(err);
      }
    }
  };

  /**같은 이미지를 연속으로 업로드할때 필요한 함수 */
  const resetFileInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <StyledFlexDiv>
      {imageList[0]?.image === '' && (
        <StyledContainer>
          <StyledImgIcon />
          <StyledContentTitle>여기로 사진을 끌어다 놓으세요.</StyledContentTitle>
          <StyledContentSubTitle>최대 5장의 사진을 선택하세요.</StyledContentSubTitle>
          <StyledLabel htmlFor="file"></StyledLabel>
          <StyledInput onChange={handleOnChange} id="file" type="file" accept="image/*"></StyledInput>
        </StyledContainer>
      )}
      {imageList[0]?.image !== '' &&
        imageList.map((item, idx) => {
          if (idx === 0) {
            return (
              <StyledContainer key={idx}>
                <ImageOption index={idx} setImageList={setImageList} imageList={imageList} />
                <StyledImage src={item.image} alt="이미지" />
              </StyledContainer>
            );
          } else {
            return (
              <div key={idx}>
                {item.image === '' ? (
                  <StyledPlusContainer>
                    <StyledPlusImgIcon />
                    <StyledPlusLabel htmlFor={`file${idx}`}></StyledPlusLabel>
                    <StyledPlusInput
                      onChange={handleOnChange}
                      id={`file${idx}`}
                      type="file"
                      accept="image/*"
                    ></StyledPlusInput>
                  </StyledPlusContainer>
                ) : (
                  <StyledPlusContainer>
                    <ImageOption index={idx} setImageList={setImageList} imageList={imageList} />
                    <StyledImage src={item.image} alt="이미지" />
                  </StyledPlusContainer>
                )}
              </div>
            );
          }
        })}
      {imageList[0]?.image !== '' && imageList.length < 5 && (
        <StyledPlusContainer>
          <StyledLastImgIcon />
          <StyledPlusLabel htmlFor="fileLast"></StyledPlusLabel>
          <StyledPlusInput
            ref={inputRef}
            onChange={handleOnChange}
            id="fileLast"
            type="file"
            accept="image/*"
            onClick={resetFileInput}
          ></StyledPlusInput>
          <StyledLastContentSubTitle>추가</StyledLastContentSubTitle>
        </StyledPlusContainer>
      )}
    </StyledFlexDiv>
  );
}

const StyledFlexDiv = styled.div`
  display: flex;
  width: 600px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
`;

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 330px;
  border: 2px dotted rgba(0, 0, 0, 0.2);
  z-index: 1;

  &:hover {
    border: 2px solid black;
  }
`;

const StyledLabel = styled.label`
  z-index: 10;
  width: 600px;
  height: 330px;
`;

const StyledInput = styled.input`
  display: none;
`;

const StyledImgIcon = styled(TbPhotoPlus)`
  position: absolute;
  top: 100px;
  font-size: 80px;
  z-index: -1;
`;

const StyledContentTitle = styled.p`
  position: absolute;
  z-index: -1;
  top: 190px;
  text-align: center;
  font-weight: 600;
`;

const StyledContentSubTitle = styled.p`
  position: absolute;
  z-index: -1;
  top: 220px;
  text-align: center;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.7);
`;

const StyledPlusContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 290px;
  height: 200px;
  align-items: center;
  border: 2px dotted rgba(0, 0, 0, 0.2);
  z-index: 10;

  margin-top: 30px;

  &:hover {
    border: 2px solid black;
  }
`;

const StyledPlusLabel = styled.label`
  z-index: 10;
  width: 290px;
  height: 200px;
`;

const StyledPlusInput = styled.input`
  display: none;
`;

const StyledPlusImgIcon = styled(AiOutlinePicture)`
  position: absolute;
  top: 80px;
  font-size: 40px;
  z-index: -1;
  color: rgba(0, 0, 0, 0.4);
`;

const StyledLastImgIcon = styled(AiOutlinePlus)`
  position: absolute;
  top: 70px;
  font-size: 40px;
  z-index: -1;
  color: rgba(0, 0, 0, 0.4);
`;

const StyledLastContentSubTitle = styled.p`
  position: absolute;
  z-index: -1;
  top: 120px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
