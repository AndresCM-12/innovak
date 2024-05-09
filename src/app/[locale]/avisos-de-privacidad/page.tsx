import { Metadata } from "next";
import { WORDPRESS_API_URL } from "../constants/constants";
import AvisoDePrivacidadPageClient from "./components/AvisoDePrivacidad";

export async function generateMetadata({ params }) {
  const metaData: Metadata = {
    title: "Innovak Global - Avisos de Privacidad",
    description:
      "En Innovak Global desarrollamos y comercializamos productos biorracionales y tecnologías diferenciadas en la agricultura para contribuir a una naturaleza sustentable.",
    robots: "index, follow",
    openGraph: {
      type: "website",
      url: "https://innovakglobal.com/avisos-de-privacidad",
      siteName: "Innovak Global",
      title: "Innovak Global",
      description:
        "En Innovak Global desarrollamos y comercializamos productos biorracionales y tecnologías diferenciadas en la agricultura para contribuir a una naturaleza sustentable.",
    },
  };
  return metaData;
}

export default async function AvisoDePrivacidadPage({ params }) {
  const locale = params.locale;
  const info = await getInfo(locale);
  const html = await getHTMLContent(locale);

  return (
    <section>
      <AvisoDePrivacidadPageClient info={info} html={html} />
    </section>
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
                categories(where: {name: "aviso-privacidad"}) {
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
    console.error("Error:", error);
    return [];
  }
}

async function getHTMLContent(locale) {
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
                categories(where: {name: "aviso-privacidad"}) {
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
    const firstIdx = rawContent.indexOf("<content>");
    const lastIdx = rawContent.lastIndexOf("<content>");
    rawContent = rawContent.substring(firstIdx + 10, lastIdx + 1);

    //Then we split and create arrays for each <divider> tag
    rawContent = rawContent.split("<divider>");
    return rawContent;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}
