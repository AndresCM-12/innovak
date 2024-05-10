"use client";
import React, { useEffect, useState } from "react";
import styles from "./dynamicProducts.module.css";
import Image from "next/image";

import localFont from "next/font/local";
const futura = localFont({
  src: "../../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});
export default function DynamicProductsClient({
  params,
  pagesInfo,
  selectedInfo,
}) {
  const [index, setIndex] = useState(selectedInfo);

  return (
    <section>
      <style jsx global>{`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${futura.style.fontFamily};
        }
      `}</style>
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
            backgroundSize: "cover",
          }}
        >
          <h1>{pagesInfo[index].title}</h1>
        </div>

        <div className={styles.linksWrapper}>
          <div>
            {pagesInfo.map((page, i) => (
              <a
                href={pagesInfo[i].link}
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
                  - {page.title}
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
        <div
          className={styles.productsImages}
          key={i + "div"}
          onClick={() => {
            //Open link in new tab
            window.open(`${product.link}`, "_blank");
          }}
        >
          <Image src={product.image} alt="product" width={200} height={200} />
          <div className={styles.separator}></div>
          <div>
            <h6>{product.title}</h6>
            <p>{product.text}</p>
            <span>Ver más</span>
          </div>
        </div>
      ))}
    </section>
  );
}
