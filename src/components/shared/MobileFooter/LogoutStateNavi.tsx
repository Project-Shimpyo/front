import { BottomNavigationAction } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NewMobileFooter from '../../shared/MobileFooter/NewMobileFooter';
import { useNavigate } from 'react-router-dom';
import { CustomIcon } from '../../shared/MobileFooter/CustomIcon';
import { HiPaperAirplane } from 'react-icons/hi';
import useResponseToViewPort from '../../../hooks/useResponseToViewPort';
import { useSetRecoilState } from 'recoil';
import { loginModalAtom } from '../../../recoil/modalAtoms';

export default function LogoutStateNavi({ intersectionWidthValue, currentValue }: { intersectionWidthValue: number, currentValue?: number }) {
  const navigation = useNavigate();
  const { viewPortWidth } = useResponseToViewPort();
  const setLoginModal = useSetRecoilState(loginModalAtom);

  const homeNavi = <BottomNavigationAction icon={<CustomIcon />} label="홈" onClick={() => navigation('/')} />;

  const reservationNavi = (
    <BottomNavigationAction
      icon={<HiPaperAirplane size={25} />}
      label="예약 내역"
      onClick={() => setLoginModal(true)}
    />
  );

  const loginNavi = (
    <BottomNavigationAction icon={<AccountCircleIcon />} label="로그인" onClick={() => setLoginModal(true)} />
  );

  console.log("currentValue:", currentValue)
  return (
    <div>
      {viewPortWidth <= intersectionWidthValue && (
        <NewMobileFooter defaultValue={currentValue !== undefined ? currentValue : null} Action0={homeNavi} Action1={reservationNavi} Action2={loginNavi} />
      )}
    </div>
  );
}
