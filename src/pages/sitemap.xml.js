// pages/sitemap.xml.js
const Sitemap = () => {
    return null;
  };
  
  export const getServerSideProps = async ({ res }) => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
              http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    
    <url>
      <loc>https://www.cleanmyspace.ng/</loc>
      <lastmod>2024-09-05T05:32:12+00:00</lastmod>
      <priority>1.00</priority>
    </url>
    <url>
      <loc>https://www.cleanmyspace.ng/Home</loc>
      <lastmod>2024-09-05T05:32:12+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://www.cleanmyspace.ng/AboutUs</loc>
      <lastmod>2024-09-05T05:32:12+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://www.cleanmyspace.ng/Services</loc>
      <lastmod>2024-09-05T05:32:12+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://www.cleanmyspace.ng/Projects</loc>
      <lastmod>2024-09-05T05:32:12+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://www.cleanmyspace.ng/Contacts</loc>
      <lastmod>2024-09-05T05:32:12+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    
    </urlset>`;
  
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();
  
    return {
      props: {},
    };
  };
  
  export default Sitemap;
  