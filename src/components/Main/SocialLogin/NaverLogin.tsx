import { NAVER_SOCIAL_LOGOIN_PATH } from '../../../constants/api/userApi';
import SocialButton from '../../shared/Modal/Button/SocialButton';
import { SiNaver } from 'react-icons/si';

const API_URL = process.env.REACT_APP_API_URL;

export default function NaverLogin() {
  const naverButtonClickHandler = () => {
    window.location.href = `${API_URL}${NAVER_SOCIAL_LOGOIN_PATH}`;
  };
  return (
    <>
      {/* <div ref={naverRef} style={{ display: 'none' }} id="naverIdLogin"></div> */}
      <SocialButton
        onClick={naverButtonClickHandler}
        iconColor="#FFFFFF"
        containerColor="#17B75E"
        icon={SiNaver}
        label="네이버 로그인"
      />
    </>
  );
}
