"use client";
import "swiper/css";
import "swiper/css/navigation";
import styles from "../../../page.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import ClipLoader from "react-spinners/ClipLoader";

import darkLogo from "../../../../../../public/images/logo_dark.png";

import localFont from "next/font/local";
const futura = localFont({
  src: "../../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

export default function Promesol({ products }) {
  const [currentProductIndex, setCurrentProductIndex] = useState();

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const id = window.location.href.split("/").pop();
    setCurrentProductIndex(products.findIndex((product) => product.id === id));

    setLoading(false);
    window.scrollTo(0, 20);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#2255FA",
        height: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: "transparent",
        }}
      >
        {isLoading ? (
          <MainLoading />
        ) : (
          <MainBody
            allProducts={products}
            selectedIndex={currentProductIndex}
          />
        )}
      </div>
    </div>
  );

  function MainBody({ allProducts, selectedIndex }) {
    return (
      <div className={styles.mainWrapper}>
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
        <main
          className={styles.main}
          style={{
            marginTop: "150px",
            backgroundColor: "white",
          }}
        >
          <div className={styles.whiteGradient}>
            <section id="raices" className={styles.rootContainer}>
              <RootBody
                allProducts={allProducts}
                selectedIndex={selectedIndex}
              />
            </section>

            <section className={styles.presenceContainer} id="presencia">
              {allProducts[selectedIndex].comoFunciona?.titulo && (
                <>
                  <div>
                    <h2>{allProducts[selectedIndex].comoFunciona.titulo}</h2>
                    <p>{allProducts[selectedIndex].comoFunciona.descripcion}</p>
                  </div>
                  <video
                    autoPlay
                    loop
                    muted
                    controls
                    src={allProducts[selectedIndex].comoFunciona.video}
                  ></video>
                </>
              )}
            </section>
          </div>

          <div className={styles.blueGradient}>
            <section className={styles.beneficiosContainer} id="oferta">
              <BenefitsBody
                allProducts={allProducts}
                selectedIndex={selectedIndex}
              />
            </section>
            <section className={styles.specsWrapper} id="productos">
              <SpecsBody
                allProducts={allProducts}
                selectedIndex={selectedIndex}
              />
            </section>
          </div>
          <section id="network" className={styles.formWrapper}>
            <FormBody allProducts={allProducts} selectedIndex={selectedIndex} />
          </section>
        </main>
      </div>
    );
  }

  function MainLoading() {
    return (
      <div className={styles.mainLoadingWrapper}>
        <div>
          <Image src={darkLogo} alt="logo" />
          <ClipLoader color="#FFFFFF" size={12} />
        </div>
      </div>
    );
  }

  function RootBody({ allProducts, selectedIndex }) {
    return (
      <>
        <div className={styles.rootInfo}>
          <div className={styles.rootText}>
            <h1>{allProducts[selectedIndex].title}</h1>
            <span
              style={{
                marginBottom: "4px",
                display: "block",
              }}
            >
              {allProducts[selectedIndex].text}
            </span>
            <hr></hr>
            <p>{allProducts[selectedIndex].description}</p>
          </div>
          <div className={styles.rootTechnology}>
            <h4>Tecnologías</h4>
            <a href="#network">Solicita más información</a>
          </div>

          <div className={styles.rootLogo} style={{ width: "320px" }}>
            {allProducts[selectedIndex].tecnologias.map((tecnologia, index) => {
              return (
                <Image
                  key={index}
                  src={tecnologia}
                  alt={"Imagen de tecnologia " + index}
                  width={300}
                  height={80}
                  style={{
                    width: "30%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              );
            })}
            {/* <Image
              src={imgRoot}
              alt="Logo root"
              style={{
                width: "52%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            <Image
              src={imgEcca}
              alt="Logo ecca"
              style={{
                width: "40%",
                height: "100%",
                objectFit: "cover",
              }}
            /> */}
          </div>
        </div>

        <div className={styles.rootImage}>
          {allProducts[selectedIndex].portada ? (
            <Image
              priority={false}
              src={allProducts[selectedIndex].portada}
              width={500}
              height={500}
              alt="Imagen de presentacion de producto"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          ) : null}
        </div>
      </>
    );
  }

  function BenefitsBody({ allProducts, selectedIndex }) {
    const product = allProducts[selectedIndex];
    return (
      <>
        <div className={styles.textContainer}>
          <h1>
            {product.beneficios && product.beneficios.title
              ? product.beneficios.title
              : ""}
          </h1>
          <p>
            {product.beneficios && product.beneficios.description
              ? product.beneficios.description
              : ""}
          </p>
        </div>
        <div className={styles.imagesContainer}>
          {product.beneficios && product.beneficios.items
            ? product.beneficios.items.map((item, index) => {
                return (
                  <>
                    <div className={styles.divider}> </div>
                    <Benefit key={index} image={item.image} text={item.text} />
                    {index == product.beneficios.items.length - 1 ? (
                      <div className={styles.divider}> </div>
                    ) : null}
                  </>
                );
              })
            : null}
        </div>
      </>
    );
  }

  function Benefit({ image, text }) {
    return (
      <div className={styles.imageWrapper}>
        <div className={styles.background}>
          <Image src={image} width={100} height={100} alt="Beneficio" />
        </div>
        <p>{text}</p>
      </div>
    );
  }

  function SpecsBody({ allProducts, selectedIndex }) {
    const product = allProducts[selectedIndex];

    return (
      <div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className={styles.mainContainer}
      >
        <h1>
          {product.especificaciones && product.especificaciones.title
            ? product.especificaciones.title
            : ""}
        </h1>
        <div className={styles.specsImagesRow}>
          {product.especificaciones &&
            product.especificaciones.items &&
            product.especificaciones.items.map((item, index) => {
              return (
                <div key={index} className={styles.imageRow}>
                  <Image
                    src={item.image}
                    height={100}
                    width={100}
                    alt="especificaciones del producto"
                  />
                  <h6>{item.text}</h6>
                </div>
              );
            })}
        </div>
        <p>
          {product.especificaciones && product.especificaciones.description
            ? product.especificaciones.description
            : ""}
        </p>
      </div>
    );
  }

  function FormBody({ allProducts, selectedIndex }) {
    const product = allProducts[selectedIndex];
    const handleDownloadClick = (selectedProduct) => {
      // Shows the same document
      // console.log(selectedProduct.ficha);
      // const doc = `/fichaTecnica.pdf`;
      // const link = document.createElement("a");
      // link.href = doc;
      // link.download = selectedProduct.ficha;
      // console.log(link.download);
      // link.click();
      window.open(selectedProduct.ficha, "_blank");
    };
    return (
      <>
        <div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className={styles.ficha}
        >
          <h1>Obtén la ficha técnica</h1>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path d="M16.0695 5.35645V24.997" stroke="black" />
              <path
                d="M7.14197 16.0693L16.0695 24.9968L24.997 16.0693"
                stroke="black"
              />
              <circle cx="16.0695" cy="16.0695" r="15.5695" stroke="black" />
            </svg>
            {product.ficha ? (
              <button
                onClick={() => {
                  handleDownloadClick(product);
                }}
              >
                Descargar ficha técnica
              </button>
            ) : null}
          </div>
        </div>
        <div className={styles.form}>
          <p>Los campos marcados con * son obligatorios</p>
          <form
            action="https://formsubmit.co/redes@innovakglobal.com"
            method="POST"
          >
            <input type="text" name="Nombre" placeholder="Nombre*" required />
            <input
              type="text"
              name="Teléfono de contacto"
              placeholder="Teléfono de contacto*"
              required
            />
            <input
              type="text"
              name="Correo electrónico"
              placeholder="Correo electrónico*"
              required
            />
            <input
              type="text"
              name="Nombre de la agrícola o institución"
              placeholder="Nombre de la agrícola o institución"
            />
            <input type="text" name="Cultivo" placeholder="Cultivo" />
            <input type="text" name="País" placeholder="País*" required />
            <input type="text" name="Estado" placeholder="Estado*" required />
            <input
              type="text"
              name="Localidad"
              placeholder="Localidad*"
              required
            />
            <h5>¿Cómo podemos ayudarte?</h5>
            <div className={styles.checkboxWrapper}>
              <input
                type="radio"
                id="uno"
                name="Servicio"
                value="Información de distribuidores"
              />
              <label htmlFor="uno">Información de distribuidores</label>
            </div>
            <div className={styles.checkboxWrapper}>
              <input
                type="radio"
                id="dos"
                name="Servicio"
                value="Asesoría técnica"
              />
              <label htmlFor="dos">Asesoría técnica</label>
            </div>
            <div className={styles.checkboxWrapper}>
              <input
                type="radio"
                id="tres"
                name="Servicio"
                value="Información de producto"
              />
              <label htmlFor="tres">Información de producto</label>
            </div>
            <input
              type="text"
              name="Producto/Problemática"
              placeholder="Producto/Problemática*"
              required
            />
            <textarea name="Mensaje" placeholder="Tu mensaje"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </>
    );
  }
}
