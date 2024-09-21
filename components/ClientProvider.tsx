import { Provider } from 'react-redux';
import store from '../app/store/store';

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ClientProvider;
