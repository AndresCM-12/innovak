import { WORDPRESS_API_URL } from "../../[locale]/constants/constants";
import ProductsClient from "./components/Products";

export default async function ContactoPage({ params }) {
  const locale = params.locale;
  const categories = await getProductsCategories(locale);

  return (
    <section>
      <ProductsClient categorias={categories} />
    </section>
  );
}

async function getProductsCategories(locale) {
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
                categories(where: {name: "categorias-productos"}) {
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
      rawContent = rawContent.replace("&#91;", "[");
    }
    
    const firstIdx = rawContent.indexOf("[");
    const lastIdx = rawContent.lastIndexOf("]");
    rawContent = rawContent.substring(firstIdx, lastIdx + 1);
    
    var content = JSON.parse(rawContent);
    console.log(content);
    return content;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}
