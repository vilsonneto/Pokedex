import { Provider as ReduxProvider } from "react-redux";
import store from "@/redux/store";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ReduxProvider>
  );
}
