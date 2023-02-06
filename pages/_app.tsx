import "../styles/global.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Analytics } from "@vercel/analytics/react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Provider as ReduxProvider } from "react-redux";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Screen as LoadingScreen } from "../components/loading";
export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <UserProvider>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
            <Analytics />
          </UserProvider>
        </QueryClientProvider>
      </PersistGate>
    </ReduxProvider>
  );
}
