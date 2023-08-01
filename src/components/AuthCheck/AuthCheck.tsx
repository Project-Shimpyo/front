import { useRecoilValue } from 'recoil';
import { loginStateAtom } from '../../recoil/userAtoms';

import { Navigate, useLocation } from 'react-router-dom';

interface AuthCheckProps {
  option: string | null;
  children: React.ReactNode;
}

const AuthCheck: React.FC<AuthCheckProps> = ({ children, option }) => {
  const isLoggedIn = useRecoilValue(loginStateAtom);
  const currentLocation = useLocation();

  if (option === 'ONLY_LOGIN' && !isLoggedIn) {
    return (
      <Navigate
        to={`/?redirect_url=${encodeURIComponent(currentLocation.pathname)}`}
        replace
        state={{ redirectedFrom: currentLocation }}
      />
    );
  }

  if (option === 'ONLY_LOGOUT' && isLoggedIn) {
    return <Navigate to={'/'} replace />;
  }

  return <>{children}</>;
};

export default AuthCheck;
