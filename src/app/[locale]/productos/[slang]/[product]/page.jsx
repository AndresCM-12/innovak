import { WORDPRESS_API_URL } from "../../../constants/constants";
import Promesol from "./page-client";

export default async function HomeProduct({ params }) {
  const locale = params.locale;
  console.log("locale: ", locale);
  const products = await getProducts(locale);

  return <section>{<Promesol products={products} />}</section>;
}

async function getProducts(locale) {
  try {
    const response = await fetch(WORDPRESS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
              query NewQuery {
                categories(where: {name: "detalles-productos"}) {
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
    return content;
  } catch (error) {
    return [];
  }
}
