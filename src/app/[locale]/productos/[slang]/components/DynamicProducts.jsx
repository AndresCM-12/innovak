"use client";
import React from "react";
import styles from "./dynamicProducts.module.css";
import Image from "next/image";

export default function DynamicProductsClient({
  texts,
  params,
  pagesInfo,
  selectedInfo,
}) {
  const [index, setIndex] = React.useState(selectedInfo);

  return (
    <section>
      {/* Dynamic Header */}
      <article
        className={styles.header}
        style={{
          backgroundColor: "#00318D",
          zIndex: 0,
        }}
      >
        <div
          className={styles.titleWrapper}
          style={{
            backgroundImage: `url(${pagesInfo[index].image})`,
          }}
        >
          <h1>{pagesInfo[index].title}</h1>
        </div>

        <div className={styles.linksWrapper}>
          <div>
            {pagesInfo.map((page, i) => (
              <a
                href={"/" + params["locale"] + pagesInfo[i].link}
                key={i + "a"}
              >
                <h6
                  href={page.link}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    padding: "10px",
                    display: i === index ? "none" : "block",
                  }}
                >
                  {page.title}
                </h6>
              </a>
            ))}
          </div>
        </div>
      </article>
      {/* Dynamic Header */}

      {/* content */}
      <ProductsList productImages={pagesInfo[index].products} />
      {/* content */}
    </section>
  );
}

function ProductsList({ productImages }) {
  return (
    <section className={styles.products}>
      {productImages.map((product, i) => (
        <div className={styles.productsImages} key={i + "div"}>
          <Image src={product} alt="product" width={200} height={200} />
        </div>
      ))}
    </section>
  );
}
