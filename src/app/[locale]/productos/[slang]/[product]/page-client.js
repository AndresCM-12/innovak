"use client";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "../../../page.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import ClipLoader from "react-spinners/ClipLoader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";

import darkLogo from "../../../../../../public/images/logo_dark.png";

import localFont from "next/font/local";
const futura = localFont({
  src: "../../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

export default function Promesol({ products, info }) {
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
            info={info}
          />
        )}
      </div>
    </div>
  );

  function MainBody({ allProducts, selectedIndex, info }) {
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
            <FormBody
              allProducts={allProducts}
              selectedIndex={selectedIndex}
              info={info}
            />
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
      <div className={styles.mainContainer}>
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

  function FormBody({ allProducts, selectedIndex, info }) {
    const product = allProducts[selectedIndex];
    const handleDownloadClick = (selectedProduct) => {
      window.open(selectedProduct.ficha, "_blank");
    };

    return (
      <>
        <div className={styles.ficha}>
          <h1>{info.titulo}</h1>
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
                {info.descargar}
              </button>
            ) : null}
          </div>
        </div>
        <div className={styles.form}>
          <p>{info.formulario.requerido}</p>
          <form
            id="formContactoProductoDetalles"
            action="https://formsubmit.co/redes@innovakglobal.com"
            method="POST"
          >
            <Swiper
              id="detallesProductos"
              pagination={{
                type: "progressbar",
                position: "bottom",
                number: true,
                type: "fraction",
              }}
              scrollbar={{
                hide: false,
              }}
              modules={[Pagination, Scrollbar]}
              draggable={false}
              allowTouchMove={false}
              slidesPerView={1}
              spaceBetween={12}
              style={{
                maxWidth: "448px",
                width: "100%",
                minWidth: "320px",
                margin: "0px",
              }}
            >
              <SwiperSlide className={styles.swiperSlide}>
                <input
                  type="text"
                  name="Nombre"
                  placeholder={info.formulario.nombre}
                  required
                />
                <input
                  type="text"
                  name="Teléfono de contacto"
                  placeholder={info.formulario.telefono}
                  required
                />
                <input
                  type="text"
                  name="Correo electrónico"
                  placeholder={info.formulario.correo}
                  required
                />
                <input
                  type="text"
                  name="Nombre de la agrícola o institución"
                  placeholder={info.formulario.agricola}
                />
                <button
                  onClick={() => {
                    //First we validate the first 4 inputs of the form
                    const form = document.getElementById(
                      "formContactoProductoDetalles"
                    );
                    const inputs = form.getElementsByTagName("input");
                    let isValid = true;
                    for (let i = 0; i < 4; i++) {
                      if (!inputs[i].checkValidity()) {
                        isValid = false;
                        inputs[i].reportValidity();
                        break;
                      }
                    }
                    if (!isValid) return;
                    document
                      .getElementById("detallesProductos")
                      .swiper.slideNext();
                  }}
                >
                  {info.formulario.botonContinuar}
                </button>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <input
                  type="text"
                  name="Cultivo"
                  placeholder={info.formulario.cultivo}
                />
                <input
                  type="text"
                  name="País"
                  placeholder={info.formulario.pais}
                  required
                />
                <input
                  type="text"
                  name="Estado"
                  placeholder={info.formulario.estado}
                  required
                />
                <input
                  type="text"
                  name="Localidad"
                  placeholder={info.formulario.localidad}
                  required
                />
                <button
                  onClick={() => {
                    //First we validate the next 4 inputs of the form
                    const form = document.getElementById(
                      "formContactoProductoDetalles"
                    );
                    const inputs = form.getElementsByTagName("input");
                    let isValid = true;
                    for (let i = 4; i < 8; i++) {
                      if (!inputs[i].checkValidity()) {
                        isValid = false;
                        inputs[i].reportValidity();
                        break;
                      }
                    }
                    if (!isValid) return;
                    document
                      .getElementById("detallesProductos")
                      .swiper.slideNext();
                  }}
                >
                  {info.formulario.botonContinuar}
                </button>
              </SwiperSlide>
              <SwiperSlide
                className={styles.swiperSlide}
                style={{ paddingBottom: "48px" }}
              >
                <h5>{info.formulario.comoPodemosAyudarte}</h5>
                <div className={styles.checkboxWrapper}>
                  <input
                    type="radio"
                    id="uno"
                    name="Servicio"
                    value="Información de distribuidores"
                  />
                  <label htmlFor="uno">
                    {info.formulario.informacionDistribuidores}
                  </label>
                </div>
                <div className={styles.checkboxWrapper}>
                  <input
                    type="radio"
                    id="dos"
                    name="Servicio"
                    value="Asesoría técnica"
                  />
                  <label htmlFor="dos">{info.formulario.asesoriaTecnica}</label>
                </div>
                <div className={styles.checkboxWrapper}>
                  <input
                    type="radio"
                    id="tres"
                    name="Servicio"
                    value="Información de producto"
                  />
                  <label htmlFor="tres">
                    {info.formulario.informacionProductos}
                  </label>
                </div>
                <input
                  type="text"
                  name="Producto/Problemática"
                  placeholder={info.formulario.productoProblematica}
                  required
                />
                <textarea
                  name="Mensaje"
                  placeholder={info.formulario.mensaje}
                ></textarea>
                <button type="submit">{info.formulario.boton}</button>
              </SwiperSlide>
            </Swiper>
          </form>
        </div>
      </>
    );
  }
}
