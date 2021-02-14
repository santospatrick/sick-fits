import React from 'react';
import Page from 'components/Page';

function _app({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default _app;
