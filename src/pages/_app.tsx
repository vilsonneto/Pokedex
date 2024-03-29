import { Provider as ReduxProvider } from "react-redux";
import store  from "@/redux/store";
import type { AppProps } from 'next/app'



export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}