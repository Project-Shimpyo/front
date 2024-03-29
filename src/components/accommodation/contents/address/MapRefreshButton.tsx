import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { accommodationState } from '../../../../recoil/accommodationAtoms';
import { getLatLngFromAddress } from '../../../../utils/getLatLngFromAddress';
import { IoMdRefreshCircle } from 'react-icons/io';
import { useState } from 'react';

interface StyledMapRefreshButtonProps {
  select?: 'true' | 'false';
}

export default function MapRefreshButton() {
  const [accommodation, setAccommodation] = useRecoilState(accommodationState);
  const [isSelect, setIsSelect] = useState<'true' | 'false'>('false');

  const newAccommodation = { ...accommodation };

  const RefreshButton = async () => {
    try {
      setIsSelect('true');
      const latlng = await getLatLngFromAddress(newAccommodation.address.fullAddress);

      newAccommodation.address = {
        ...newAccommodation.address,
        lat: latlng?.lat as number,
        lng: latlng?.lng as number,
      };

      setAccommodation(newAccommodation);
    } catch (err) {
      console.log(err);
    } finally {
      setIsSelect('false');
    }
  };

  return <StyledMapRefreshButton select={isSelect} size={'40px'} onClick={RefreshButton}></StyledMapRefreshButton>;
}

const StyledMapRefreshButton = styled(IoMdRefreshCircle)<StyledMapRefreshButtonProps>`
  cursor: pointer;
  margin: 2rem;
  border-radius: 50%;
  &:hover {
    color: rgba(0, 0, 0, 0.4);
  }

  ${({ select }) =>
    select === 'false' &&
    `
    transform: scale(1.2);
    transition: transform 0.5s ease-in-out;
  `}
`;
