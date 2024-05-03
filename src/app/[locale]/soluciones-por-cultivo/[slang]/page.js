import SolucionesPorFruto from "./components/SolucionesPorFruto";
import { WORDPRESS_API_URL } from "../../constants/constants";
import { headers } from "next/headers";

export async function generateMetadata({ params }) {
  const headersList = headers();
  const domain = headersList.get("host") || "";
  const fullUrl = headersList.get("referer") || "";
  const solution = fullUrl.split("/").pop();
  console.log(solution);

  return {
    title: "Soluciones por fruto",
    description: "Soluciones por fruto - description",
  };
}

export default async function ContactoPage({ params }) {
  const locale = params.locale;
  const info = await getInfo(locale);

  return (
    <section>
      <SolucionesPorFruto info={info} />
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
                categories(where: {name: "soluciones-por-fruto"}) {
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
    console.log(rawContent);
    var content = JSON.parse(rawContent);
    return content[0];
  } catch (error) {
    return [];
  }
}
