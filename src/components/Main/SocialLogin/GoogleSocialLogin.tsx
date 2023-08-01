import { GOOGLE_SOCIAL_LOGOIN_PATH } from '../../../constants/api/userApi';
import SocialButton from '../../shared/Modal/Button/SocialButton';
import { FcGoogle } from 'react-icons/fc';

const API_URL = process.env.REACT_APP_API_URL;

export default function GoogleSocialLogin() {
  const login = () => {
    window.location.href = `${API_URL}${GOOGLE_SOCIAL_LOGOIN_PATH}`;
  };

  return <SocialButton onClick={login} containerColor="#F4F4F4" icon={FcGoogle} label="구글 로그인" />;
}
