import { WORDPRESS_API_URL } from "../../constants/constants";
import Technologyclient from "./components/Technology";

export default async function TechnologyPage({ params }) {
  const locale = params.locale;
  const info = await getInfo(locale);

  return (
    <section>
      <Technologyclient info={info} />
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
                categories(where: {name: "rdr"}) {
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
    console.log("Error fetching data: ", error);
    return [];
  }
}
