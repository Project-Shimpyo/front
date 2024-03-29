import { CustomizedFavoriteIcon, CustomizedFavoriteBorderIcon, CustomizedIconButton } from './Cards.styled';
import { useState } from 'react';
import { accessTokenAtom, loginStateAtom } from '../../../recoil/userAtoms';
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import { loginModalAtom } from '../../../recoil/modalAtoms';
import useAuthorizedRequest from '../../../hooks/useAuthorizedRequest';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { WISHLIST_API_PATH } from '../../../constants/api/homeListApi';

interface ResultData {
  accessToken: string;
}

interface ToggleFavoriteProps {
  houseId: number;
  wished: boolean;
}

const ToggleFavorite = ({ houseId, wished }: ToggleFavoriteProps) => {
  const navigation = useNavigate();
  const setAccessToken = useSetRecoilState(accessTokenAtom);
  const loginState = useRecoilValue(loginStateAtom);
  const [favorite, setFavorite] = useState(false);
  const setLoginModal = useSetRecoilState(loginModalAtom);

  const handleUnAutorization = (error: AxiosError) => {
    setAccessToken('');
    navigation('/');
    console.error(error.message);
  };

  const { responseData, sendRequest } = useAuthorizedRequest<ResultData>({
    onUnauthorized: handleUnAutorization,
  });

  const handleClick = async (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    if (!loginState) {
      setLoginModal(true);
      return;
    }
    if (!favorite) {
      await sendRequest({
        url: `${WISHLIST_API_PATH}`,
        method: 'POST',
        withCredentials: true,
        body: {
          houseId: houseId,
        },
      });
    } else {
      await sendRequest({
        url: `${WISHLIST_API_PATH}/${houseId}`,
        method: 'DELETE',
        withCredentials: true,
      });
    }
    setFavorite(prevState => !prevState);
  };
  return (
    <CustomizedIconButton onClick={handleClick}>
      {favorite ? <CustomizedFavoriteIcon /> : <CustomizedFavoriteBorderIcon />}
    </CustomizedIconButton>
  );
};

export default ToggleFavorite;
