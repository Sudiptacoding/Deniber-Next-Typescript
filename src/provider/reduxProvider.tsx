'use client';
import useSyncUser from '@/lib/useSyncUser';
import store from '@/redux/store';
import { Provider } from 'react-redux';


const SyncUserComponent = () => {
  useSyncUser(); 
  return null; 
};

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>
    <SyncUserComponent />
    {children}
  </Provider>;
};
export default ReduxProvider;