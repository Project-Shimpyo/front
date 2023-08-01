import './App.css';
import './fonts.css';
import { useSetRecoilState } from 'recoil';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { REGENERATION_REFRESH_API_PATH } from './constants/api/userApi';
import { accessTokenAtom } from './recoil/userAtoms';
import useLogout from './hooks/useLogout';
import Loading from './components/shared/Loading';
import axios, { AxiosResponse } from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

interface ResultData {
  accessToken: string;
}

interface IresponseData {
  isSuccess: boolean;
  code: number;
  message: string;
  result: ResultData;
}

function App() {
  const { logoutHandler } = useLogout();
  const setAccessToken = useSetRecoilState(accessTokenAtom);
  const [isCheckLoginState, setIsCheckLoginState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [, setErrorMessage] = useState<string>('');

  const sendRefreshToken = async () => {
    setIsLoading(true);
    setIsCheckLoginState(false);
    setErrorMessage('');
    try {
      const response: AxiosResponse<IresponseData> = await axios({
        url: `${API_URL}${REGENERATION_REFRESH_API_PATH}`,
        withCredentials: true,
        method: 'GET',
      });
      if (response.data.isSuccess) {
        setAccessToken(response.data.result.accessToken);
      } else {
        logoutHandler();
      }
    } catch (error: any) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else if (error.request) {
        setErrorMessage(error.message);
      }
      setErrorMessage(error.response.data.message);
    } finally {
      setIsLoading(false);
      setIsCheckLoginState(true);
    }
  };

  useEffect(() => {
    sendRefreshToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading || !isCheckLoginState) {
    return <Loading />;
  }

  return <Outlet />;
}

export default App;
