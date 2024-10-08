// components/CustomHead.js

import Head from "next/head";

const CustomHead = ({ title, description, keywords, schemaData, image, imageWidth, imageHeight }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      
      {schemaData ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      ) : null}
    </Head>
  );
};

CustomHead.defaultProps = {
  title: "Your Website Title",
  description: "Your website description here.",
  keywords:
    "cleaning services Abuja, janitorial services, cleaning company, laundry service, cleaning services, cleaning services services, cleaning firms, cleaning janitorial, cleaning services cleaning services, a cleaning service, laundry, and cleaning services, cleaning and services, cleaning companies in abuja",
  image: "https://www.cleanmyspace.ng/_next/static/media/cleanmyspace1.073937be.webp", // default image
  imageWidth: "1200",
  imageHeight: "630",
};

export default CustomHead;
