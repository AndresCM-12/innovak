import ContactoPageClient from "./components/Contact";
import { WORDPRESS_API_URL } from "../../constants/constants";
import { Metadata } from "next";

export async function generateMetadata({ params }) {
  const metaData: Metadata = {
    title: "Innovak Global",
    description:
      "En Innovak Global desarrollamos y comercializamos productos biorracionales y tecnologías diferenciadas en la agricultura para contribuir a una naturaleza sustentable.",
    robots: "index, follow",
    openGraph: {
      type: "website",
      url: "https://innovakglobal.com/innovak-news",
      siteName: "Innovak Global",
      title: "Innovak Global",
      description:
        "En Innovak Global desarrollamos y comercializamos productos biorracionales y tecnologías diferenciadas en la agricultura para contribuir a una naturaleza sustentable.",
    },
  };
  return metaData;
}

export default async function ContactoPage({ params }) {
  const info = await getInfo(params.locale);

  return (
    <section>
      <ContactoPageClient info={info} />
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
                categories(where: {name: "nuestras-noticias"}) {
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
