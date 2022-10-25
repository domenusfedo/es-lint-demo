import '../styles/global.css';
import type { AppProps } from 'next/app';
import { airbnbRulesTest } from '../modules/test/airbnbRulesTest';

function MyApp({ Component, pageProps }: AppProps) {
  airbnbRulesTest();
  return <Component {...pageProps} />;
}

export default MyApp;
