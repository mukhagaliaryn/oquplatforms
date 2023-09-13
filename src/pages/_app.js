import '@/src/styles/globals.css';
import '@/src/styles/parser.css';
import "@/src/styles/calendar.css";
import 'react-day-picker/dist/style.css';
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
      <div className={`${inter.variable} ${poppins.variable}`}>
        <Component {...pageProps} />
      </div>
      <Alert />
    </Provider>
  )
}


export default App;
