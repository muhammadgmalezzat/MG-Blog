import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import postsReducer from '../Redux/Reducers/reducer';

// Create the Redux store
const store = createStore(postsReducer);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
