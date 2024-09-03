// components/CustomHead.js

import Head from "next/head";

const CustomHead = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

CustomHead.defaultProps = {
  title: "Your Website Title",
  description: "Your website description here.",
  keywords:
    "cleaning services Abuja, janitorial services, cleaning company, laundry service, cleaning services, cleaning services services, cleaning firms, cleaning janitorial, cleaning services cleaning services, a cleaning service, laundry, and cleaning services, cleaning and services, cleaning companies in abuja"
};

export default CustomHead;
