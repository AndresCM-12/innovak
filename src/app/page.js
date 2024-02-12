"use client";
import "swiper/css";
import "swiper/css/navigation";

import allStyles from "./page.module.css";
import styles from "./inicio.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

import image1 from "../../public/inicio/costarica.png";
import image2 from "../../public/inicio/politecnica.png";
import image3 from "../../public/inicio/ciatej.png";
import image4 from "../../public/inicio/geneve.png";
import image5 from "../../public/inicio/organic.png";
import image6 from "../../public/inicio/ciad.png";
import alianzasBackground from "../../public/inicio/alianzasBackground.png";
import tecnologiasBackground from "../../public/inicio/tecnologiaBackground.svg";
import tecnologia1 from "../../public/inicio/tecnologia1.png";
import tecnologia2 from "../../public/inicio/tecnologia2.png";
import tecnologia3 from "../../public/inicio/tecnologia3.png";
import tecnologiasCircleBackground from "../../public/inicio/tecnologiasCircleBackground.svg";
import imgReviewIvanQuiñonez from "../../public/images/reviews/ivanQuiñonez.png";
import imgReviewJorgeAdrian from "../../public/images/reviews/jorgeAdrian.png";
import imgReviewReynaldoCabrera from "../../public/images/reviews/reynaldoCabrera.png";
import imgInnovakNews from "../../public/inicio/innovakNews.png";

import { useState } from "react";

export default function Home() {
  return (
    <div className={allStyles.mainWrapper}>
      <main className={allStyles.main}>
        <HeroSection />
        <Alianzas />
        <Tecnologias />
        <Testimonials />
        <News />
      </main>
    </div>
  );
}

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <h1>50 AÑOS AGREGANDO VALOR AL SUELO</h1>
      <p>
        Es una línea de formulaciones dirigida a resolver problemas de
        compactación o salinidad de suelos, de uso en la mayoría de los
        cultivos. Son productos de fácil aplicación por cualquier sistema de
        riego (gravedad, goteo, aspersión o micro aspersión) o en mezcla con
        fertilizantes granulados. Su efecto es rápido y contundente avalado por
        su uso en la agricultura por más de 50 años.
      </p>
      <span>Desde 1973/2023</span>
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
        <source src="/videos/main.mp4" />
      </video>
    </section>
  );
}

function Alianzas() {
  const alianzas = [
    { number: "70", title: "PAÍSES" },
    { number: "166", title: "PRODUCTOS" },
    { number: "67", title: "AÑOS" },
    { number: "9,000", title: "CLIENTES" },
  ];

  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <section
      style={{
        backgroundImage: `url(${alianzasBackground.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
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
        <h2>ALIANZAS ESTRATÉGICAS</h2>
        <Swiper
          id="alianzasSwiper"
          className={styles.swiperWrapper}
          modules={[Navigation]}
          navigation={true}
          slidesPerView={"auto"}
          spaceBetween={50}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} style={{ width: "300px" }}>
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
    </section>
  );
}

function Tecnologias() {
  const tecnologias = [
    {
      image: tecnologia1,
      text: `ECCA Carboxy es la Ecotecnología de la obtención de Compuestos Carboxy Aromáticos con efecto bioestimulante.`,
    },
    {
      image: tecnologia2,
      text: `RDR (Regulación de la Dinámica Radicular) es una tecnología enfocada en la raíz y su medio ambiente para maximizar la productividad de los cultivos de manera sustentable.`,
    },
    {
      image: tecnologia3,
      text: `PFENERGY
      Es una tecnología creada a partir de polifenoles, generando opciones sustentables para mitigar el estrés, incrementar la actividad rizosférica, mejorar la absorción de nutrientes y generar una mayor productividad y calidad.`,
    },
  ];
  return (
    <section className={styles.tecnologiasWrapper}>
      <article>
        <h2>TECNOLOGÍAS</h2>
        <p>
          En Innovak Global integramos tres tecnologías innovadoras
          desarrolladas internamente a favor de una agricultura sustentable:
        </p>
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
          <div key={index} className={styles.brandItem}>
            <div
              className={styles.brandItemImage}
              style={{
                backgroundImage: `url(${tecnologiasBackground.src})`,
              }}
            >
              <Image
                src={tecnologia.image}
                alt="Tecnologías"
                width={150}
                height={150}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <p>{tecnologia.text}</p>
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
        <div className={styles.seeMoreButton}>ver más</div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [showVideos, setShowVideos] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);

  const videos = [
    `<iframe style={{height: '100%', width: '100%'}} src="https://www.youtube.com/embed/DHsCqyxqwZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    `<iframe style={{height: '100%', width: '100%'}} src="https://www.youtube.com/embed/ni78a3IFzwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    `<iframe style={{height: '100%', width: '100%'}} src="https://www.youtube.com/embed/ZkRGuKr0acM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    `<iframe style={{height: '100%', width: '100%'}} src="https://www.youtube.com/embed/M3vX4dqk_L4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  ];

  const handleLinkClick = (index) => {
    setVideoIndex(index);
    setShowVideos(true);
  };

  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
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
        <SwiperSlide className={allStyles.reviewContainer}>
          <Image
            src={imgReviewIvanQuiñonez}
            width={150}
            height={150}
            alt="review"
          />
          <p>Navolato, Sinaloa</p>
          <p>
            El Ing. Iván Quiñonez, nos habla de las dificultades de trabajar con
            suelos compactados y comparte su experiencia utilizando el Promesol
            5X. Comenta como lo ha ayudado a mantener su cultivo en óptimo
            desarrollo y la importancia de tener un suelo manejable.
          </p>
          <h6>Ing. Iván Quiñónez Medrano</h6>
          <a
            onClick={() => {
              handleLinkClick(1);
            }}
          >
            Conoce su testimonio
          </a>
        </SwiperSlide>
        <SwiperSlide className={allStyles.reviewContainer}>
          <Image src={imgReviewJorgeAdrian} alt="review" />
          <p>Culiacán, Sinaloa</p>
          <p>
            El Ing. Jorge Adrian, nos platica cómo ha afrontado diferentes
            problemáticas y cómo es que ha conocido a innovak global y la
            aplicación promesol que le ayuda en el mejoramiento de la estructura
            del suelo además de las condiciones de aireación beneficiando en su
            cultivo y productividad.
          </p>
          <h6>Ing. Jorge Adrian Ibarra Avila</h6>
          <a
            onClick={() => {
              handleLinkClick(2);
            }}
          >
            Conoce su testimonio
          </a>
        </SwiperSlide>
        <SwiperSlide className={allStyles.reviewContainer}>
          <Image src={imgReviewReynaldoCabrera} alt="review" />
          <p>Michoacán México</p>
          <p>
            Conoce la historia de éxito de promesol en el campo al cual de
            llamaban “las piedras” en michoacán México. El Agricultor Reynaldo
            Cabrera nos platica cómo fue que utilizó Promesol, observó su efecto
            y continuar utilizándolo hasta la fecha.
          </p>
          <h6>Agricultor. Reynaldo Cabrera Oropreza </h6>
          <a
            onClick={() => {
              handleLinkClick(3);
            }}
          >
            Conoce su testimonio
          </a>
        </SwiperSlide>
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
    </motion.div>
  );
}

function News() {
  return (
    <section>
      <article></article>
    </section>
  );
}
