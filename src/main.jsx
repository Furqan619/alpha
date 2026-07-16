import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './ReduxStore/store';
import Routing from './Routes/route';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Routing />
  </Provider>
);
