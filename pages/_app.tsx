import '../styles/global.css';

import { AppProps } from 'next/dist/next-server/lib/router/router';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { ga } from '../lib/ga';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageView(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}
