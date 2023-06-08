import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Hosting from '../pages/Hosting';
import Detail from '../pages/Detail';
import Booking from '../pages/Booking';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'hosting',
        element: <Hosting />,
      },
      {
        path: 'detail',
        element: <Detail />,
      },
      {
        path: 'booking',
        element: <Booking />,
      },
    ],
  },
]);

export default router;
