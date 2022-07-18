import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
// import { store } from "@/rtk/store";
// import { Provider } from "react-redux";

const app = ({ Component, pageProps }: AppProps) => {
  return (
    // <Provider store={store}>
    //   <Component {...pageProps} />
    // </Provider>
    <RecoilRoot>
      <Component />
    </RecoilRoot>
  );
};

export default app;
