"use client";
import "swiper/css";
import "swiper/css/navigation";

import allStyles from "./page.module.css";
import styles from "./inicio.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import tecnologiasBackground from "../../../public/inicio/tecnologiaBackground.svg";
import tecnologiasCircleBackground from "../../../public/inicio/tecnologiasCircleBackground.svg";
import imgInnovakNews from "../../../public/inicio/innovakNews.png";

import { useEffect, useState } from "react";
import Link from "next/link";
import localFont from "next/font/local";

const futura = localFont({
  src: "../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

export default function Home({ news, info }) {
  return (
    <div className={allStyles.mainWrapper}>
      <style jsx global>
        {`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: ${futura.style.fontFamily};
          }
        `}
      </style>
      {info.hero && (
        <main className={allStyles.main}>
          <HeroSection info={info.hero} />
          <Alianzas
            info={info.alianzas}
            images={info.imagenesAlianzas}
            video={info.hero.alianzasVideo}
          />
          <Tecnologias info={info.tecnologias} />
          <Testimonials info={info.testimonios} />
          <News news={news} info={info.noticias} />
          <FormBody info={info.contacto} />
        </main>
      )}
    </div>
  );
}

function HeroSection({ info }) {
  return (
    <section className={styles.heroSection}>
      <h1>{info.titulo}</h1>
      <p>{info.subTitulo}</p>
      <video
        autoPlay
        muted
        loop
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <source src={info.video} />
      </video>
    </section>
  );
}

function Alianzas({ info, images, video }) {
  const alianzas = info;

  return (
    <section style={{ position: "relative" }}>
      {/* Counter */}
      <article className={styles.counterWrapper}>
        {alianzas.map((item, index) => (
          <div key={index} className={styles.counterItem}>
            <h3>{item.number}</h3>
            <p>{item.title}</p>
          </div>
        ))}
      </article>
      {/* Counter */}

      {/* Alianzas */}
      <article className={styles.alianzasWrapper}>
        <h2> </h2>
        <Swiper
          id="alianzasSwiper"
          className={styles.swiperWrapper}
          modules={[Navigation]}
          navigation={true}
          slidesPerView={"auto"}
          spaceBetween={50}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} style={{ width: "200px" }}>
              <Image
                className={styles.image}
                src={image}
                alt="Alianza"
                width={300}
                height={100}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </article>
      {/* Alianzas */}

      <video
        autoPlay
        muted
        loop
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <source src={video} />
        <source
          src="/videos/alianzas2.mp4"
          media="screen and (max-width: 770px) "
        />
      </video>
    </section>
  );
}

function Tecnologias({ info }) {
  const [lang, setLang] = useState("mx");

  useEffect(() => {
    const locale = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("NEXT_LOCALE="))
      .split("=")[1];
    setLang(locale);
  }, []);

  const tecnologias = info.tecnologias;
  return (
    <section className={styles.tecnologiasWrapper}>
      <article>
        <h2>{info.titulo}</h2>
        <p>{info.subTitulo}</p>
      </article>

      {/* Tecnologias */}
      <article
        className={styles.brandsWrapper}
        style={{
          backgroundImage: `url(${tecnologiasCircleBackground.src})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginTop: "-2px",
        }}
      >
        {tecnologias.map((tecnologia, index) => (
          <div
            key={index}
            className={styles.brandItem}
            onClick={() => window.open(tecnologia.link, "_blank")}
          >
            <div
              className={styles.brandItemImage}
              style={{
                backgroundImage: `url(${tecnologiasBackground.src})`,
              }}
            >
              <Image
                src={tecnologia.imagen}
                alt="Tecnologías"
                width={150}
                height={150}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <p>{tecnologia.descripcion}</p>
          </div>
        ))}
      </article>
      {/* Tecnologias */}
      <div
        style={{
          backgroundColor: "white",
          marginBottom: "60px",
          marginTop: "-4px",
        }}
      >
        <a href={`${lang}/nuestras-raices#tecnologias`}>
          <div className={styles.seeMoreButton}>{info.cta}</div>
        </a>
      </div>
    </section>
  );
}

function Testimonials({ info }) {
  const [showVideos, setShowVideos] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);

  const videos = [...info.map((item) => item.video)];

  const handleLinkClick = (index) => {
    setVideoIndex(index);
    setShowVideos(true);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingInline: "10%",
        paddingBlock: "5%",
      }}
    >
      <div
        onClick={() => {
          setShowVideos(false);
        }}
        className={allStyles.videosContainer}
        style={{ display: showVideos ? "grid" : "none" }}
      >
        <div className={allStyles.videoWrapper}>
          <div>
            <iframe
              style={{ height: "100%", width: "100%" }}
              src={videos[videoIndex]}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div
        className={allStyles.arrows}
        id="arrowLeft"
        style={{
          padding: 20,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="36"
          viewBox="0 0 16 36"
          fill="none"
        >
          <path d="M15 1L1 18L15 35" stroke="#00318D" />
        </svg>
      </div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 5,
          disableOnInteraction: false,
        }}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{ nextEl: "#arrowRight", prevEl: "#arrowLeft" }}
      >
        {info.map((item, index) => (
          <SwiperSlide
            key={index}
            className={allStyles.reviewContainer}
            style={{
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Image src={item.imagen} width={150} height={150} alt="review" />
            <p>{item.ubicacion}</p>
            <p>{item.descripcion}</p>
            <h6>{item.nombre}</h6>
            <a
              onClick={() => {
                handleLinkClick(index);
              }}
            >
              {item.cta}
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={allStyles.arrows}
        id="arrowRight"
        style={{
          padding: 20,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="36"
          viewBox="0 0 16 36"
          fill="none"
        >
          <path d="M1 35L15 18L1 1" stroke="#00318D" />
        </svg>
      </div>
    </div>
  );
}

function News({ news, info }) {
  const [lang, setLang] = useState("mx");

  useEffect(() => {
    const locale = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("NEXT_LOCALE="))
      .split("=")[1];
    setLang(locale);
  }, []);

  return (
    <section>
      {/* Image */}
      <article className={styles.newsImageWrapper}>
        <Image
          src={imgInnovakNews}
          alt="Innovak News"
          width={300}
          height={90}
          style={{
            objectFit: "contain",
          }}
        />
        <div className={styles.newsSeparator}></div>
        <Link href={`${lang}/innovak-news`}>
          <div className={styles.newsButton}>{info.cta}</div>
        </Link>
      </article>
      {/* Image */}

      {/* News */}
      <article className={styles.newsWrapper}>
        {news.map((item, index) => (
          <div key={index} className={styles.newsItem}>
            <Image
              src={item.image}
              alt="Innovak News"
              width={150}
              height={150}
              style={{
                backgroundColor: "#0d0e49",
              }}
            />
            <div
              style={{
                height: "380px",
              }}
            ></div>
            <div className={styles.newsItemFloating}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link
                href={"/" + lang + "/innovak-news/" + item.link.split("/")[3]}
              >
                <div className={styles.newsButtonOutlined}>{item.cta}</div>
              </Link>
            </div>
          </div>
        ))}
      </article>
      {/* News */}
    </section>
  );
}

function FormBody({ info }) {
  const infoFormulario = info.formulario;
  return (
    <section className={allStyles.formWrapper}>
      <div className={allStyles.ficha}>
        <h1
          style={{
            marginBottom: "20px",
          }}
        >
          {info.titulo}
        </h1>
        <p className={allStyles.text}>{info.telefono}</p>
        <p className={allStyles.text}>{info.correo}</p>
        <p className={allStyles.text}>{info.direccion}</p>
        <div>
          <Image
            src={info.imagen}
            alt="Innovak News"
            width={300}
            height={400}
            style={{
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <div className={allStyles.form}>
        <p>{infoFormulario.requerido}</p>
        <form
          action="https://formsubmit.co/redes@innovakglobal.com"
          method="POST"
        >
          <input
            type="text"
            name="Nombre"
            placeholder={infoFormulario.nombre}
            required
          />
          <input
            type="text"
            name="Teléfono de contacto"
            placeholder={infoFormulario.telefono}
            required
          />
          <input
            type="text"
            name="Correo electrónico"
            placeholder={infoFormulario.correo}
            required
          />
          <input
            type="text"
            name="Nombre de la agrícola o institución"
            placeholder={infoFormulario.agricola}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <input
              type="text"
              name="País"
              placeholder={infoFormulario.pais}
              required
            />
            <input
              type="text"
              name="Estado"
              placeholder={infoFormulario.estado}
              required
            />
          </div>
          <input
            type="text"
            name="Tipo_consulta"
            placeholder={infoFormulario.consulta}
            required
          />
          <div className={allStyles.checkboxWrapper}>
            <input
              type="radio"
              id="uno"
              name="privacidad"
              value="Información de distribuidores"
            />
            <label htmlFor="uno">{infoFormulario.aviso}</label>
          </div>
          <button type="submit">{infoFormulario.boton}</button>
        </form>
      </div>
    </section>
  );
}
