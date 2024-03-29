import { Provider as ReduxProvider } from "react-redux";
import { makeStore, wrapper } from "@/redux/store";
import type { AppProps } from 'next/app'



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={makeStore}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

export default wrapper.withRedux(MyApp);