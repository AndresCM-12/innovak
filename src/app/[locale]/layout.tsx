import Script from "next/script";
import FooterBody from "./components/Footer";
import HeaderBody from "./components/Header";
import { WORDPRESS_API_URL } from "./constants/constants";
import "./globals.css";
import localFont from "next/font/local";

const avenir = localFont({
  src: "../../../public/fonts/Avenir-normal.otf",
  variable: "--font-avenir",
});

export default async function RootLayout({ children, params }) {
  const info = await getInfo(params.locale);

  return (
    <html lang={params.locale}>
      <head>
      <Script id="show-banner">
        {`function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"dcc0b515f21b1789786792d888833c75"})});`}
      </Script>
      </head>
      <body className={avenir.className}>
        <HeaderBody info={info.header} />
        {children}
        <FooterBody info={info.footer} />
          <a
            href={"https://wa.me/"+info.header.numeroContacto}
            target="_blank"
            rel="noopener noreferrer"
          >
        <div id="floatingWhatsAppButton">
            <img
              src={info.header.whatsappIcon}
              alt="WhatsApp"
              className="whatsapp-icon"
            />
        </div>
          </a>
      </body>
    </html>
  );
}

async function getInfo(locale) {
  try {
    const response = await fetch(WORDPRESS_API_URL, {
      cache: "no-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
              query NewQuery {
                categories(where: {name: "header-footer"}) {
                  edges {
                    node {
                      id
                      posts(where: {tag: "${locale}"}) {
                        nodes {
                          id
                          content
                        }
                      }
                    }
                  }
                }
              }
            `,
      }),
    });

    const rawData = await response.json();
    var rawContent =
      rawData.data.categories.edges[0].node.posts.nodes[0].content;
    if (rawContent.includes("&#91;")) {
      rawContent = rawContent.replaceAll("&#91;", "[");
    }
    const firstIdx = rawContent.indexOf("[");
    const lastIdx = rawContent.lastIndexOf("]");
    rawContent = rawContent.substring(firstIdx, lastIdx + 1);
    var content = JSON.parse(rawContent);
    return content[0];
  } catch (error) {
    return [];
  }
}
