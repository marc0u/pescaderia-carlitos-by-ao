import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Pescadería Carlitos by_AO</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          key="viewport"
          name="viewport"
          content="initial-scale=1.0, with=device-width"
        />
      </Head>
      {children}
    </div>
  );
};

BaseLayout.prototype = {
  children: PropTypes.element.isRequired,
};

export default BaseLayout;
