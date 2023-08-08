import '@/src/styles/globals.css';
import '@/src/styles/fonts.css';
import NextNprogress from 'nextjs-progressbar';
import { Provider } from 'react-redux';
import { useStore } from '@/src/redux/store';
import Alert from '../components/Alert';


const App = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <NextNprogress
        color="#fb923c"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
      <Alert />
    </Provider>
  )
}


export default App;
