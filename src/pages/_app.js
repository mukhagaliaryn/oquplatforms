import '@/src/styles/globals.css';
import '@/src/styles/parser.css';
import "@/src/styles/index.css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import NextNprogress from 'nextjs-progressbar';
import { Provider } from 'react-redux';
import { useStore } from '@/src/redux/store';
import Alert from '../components/Alert';
import { Inter_Tight, Poppins } from 'next/font/google'


const inter = Inter_Tight({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-poppins',
})


const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <div className={`${inter.variable} ${poppins.variable} font-inter`}>
      <Provider store={store}>
        <NextNprogress
          color="#3b81f5"
          startPosition={0.3}
          stopDelayMs={200}
          height={2}
          showOnShallow={true}
        />
        <Component {...pageProps} />
        <Alert />
      </Provider>
    </div>
  )
}


export default MyApp;
