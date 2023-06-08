import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Hosting from '../pages/Hosting';
import Booking from '../pages/Booking';
import Detail from '../pages/Detail';

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
