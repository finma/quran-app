import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useRouter } from "next/dist/client/router";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Provider store={store}>
      <AnimateSharedLayout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.query} />
        </AnimatePresence>
      </AnimateSharedLayout>
    </Provider>
  );
}
