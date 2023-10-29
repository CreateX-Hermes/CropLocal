import { useSelector } from 'react-redux';
import SellerManagerPage from './SellerManagerPage';
import BecomeALocal from '../BecomeALocal/BecomeALocal';

export default function SellerTab() {
  const { user: userInformation } = useSelector((state) => state.user);

  return <>{userInformation.isSeller ? <SellerManagerPage /> : <BecomeALocal />}</>;
}
