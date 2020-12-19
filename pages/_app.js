import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import qs from 'query-string';
import store from "../src/redux/store";
import "../styles/global.css";
import 'react-toastify/dist/ReactToastify.css';

export default function Index({ Component, pageProps }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const router = useRouter();

  const handleRouteChange = () => {
    const parsedUrl = qs.parse(window.location.hash);
    if (parsedUrl) {
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    router.events.on('hashChangeComplete', handleRouteChange);
  }, []);

  useEffect(() => {
    handleRouteChange();
  }, []);

  return (
    <Provider store={store}>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        draggable
        pauseOnFocusLoss
        pauseOnHover
        closeButton={false}
      />
      <Component {...pageProps} />
    </Provider>
  );
}
