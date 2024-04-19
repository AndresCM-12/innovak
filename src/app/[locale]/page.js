"use client";
import "swiper/css";
import "swiper/css/navigation";

import allStyles from "./page.module.css";
import styles from "./inicio.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

import image1 from "../../../public/inicio/costarica.png";
import image2 from "../../../public/inicio/politecnica.png";
import image3 from "../../../public/inicio/ciatej.png";
import image4 from "../../../public/inicio/geneve.png";
import image5 from "../../../public/inicio/organic.png";
import image6 from "../../../public/inicio/ciad.png";
import image7 from "../../../public/inicio/arkansas.png";
import tecnologiasBackground from "../../../public/inicio/tecnologiaBackground.svg";
import tecnologia1 from "../../../public/inicio/tecnologia1.png";
import tecnologia2 from "../../../public/inicio/tecnologia2.png";
import tecnologia3 from "../../../public/inicio/tecnologia3.png";
import tecnologiasCircleBackground from "../../../public/inicio/tecnologiasCircleBackground.svg";
import imgReviewIvanQuiñonez from "../../../public/images/reviews/ivanQuiñonez.png";
import imgReviewJorgeAdrian from "../../../public/images/reviews/jorgeAdrian.png";
import imgReviewReynaldoCabrera from "../../../public/images/reviews/reynaldoCabrera.png";
import imgInnovakNews from "../../../public/inicio/innovakNews.png";
import map from "../../../public/inicio/map.png";

import { useEffect, useState } from "react";
import Link from "next/link";
import localFont from "next/font/local";

const avenir = localFont({
  src: "../../../public/fonts/Avenir-normal.otf",
  variable: "--font-avenir",
});
const futura = localFont({
  src: "../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

export default function Home() {
  const images = [image1, image2, image3, image4, image5, image6, image7];

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
      <main className={allStyles.main}>
        <HeroSection />
        <Alianzas images={images} />
        <Tecnologias />
        <Testimonials />
        <News />
        <FormBody />
      </main>
    </div>
  );
}

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <h1>PIONEROS EN BIOESTIMULACIÓN DESDE LA RAÍZ</h1>
      <p>
        En Innovak Global desarrollamos y comercializamos productos
        biorracionales y tecnologías diferenciadas en la agricultura para
        contribuir a una naturaleza sustentable.
      </p>
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

function Alianzas({ images }) {
  const alianzas = [
    { number: "+30", title: "PAÍSES" },
    { number: "+48", title: "PRODUCTOS" },
    { number: "67", title: "AÑOS" },
    { number: "6", title: "FILIALES" },
  ];

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
        <source src="/videos/alianzas1.webm" />
        <source
          src="/videos/alianzas2.mp4"
          media="screen and (max-width: 770px) "
        />
      </video>
    </section>
  );
}

function Tecnologias() {
  const [lang, setLang] = useState("mxn");

  useEffect(() => {
    const locale = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("NEXT_LOCALE="))
      .split("=")[1];
    setLang(locale);
  }, []);

  const tecnologias = [
    {
      image: tecnologia1,
      text: `ECCA Carboxy es la Ecotecnología de la obtención de Compuestos Carboxy Aromáticos con efecto bioestimulante.`,
      link: `/${lang}/nuestras-raices/ecca-carboxy`,
    },
    {
      image: tecnologia2,
      text: `RDR (Regulación de la Dinámica Radicular) es una tecnología enfocada en la raíz y su medio ambiente para maximizar la productividad de los cultivos de manera sustentable.`,
      link: `/${lang}/nuestras-raices/rdr`,
    },
    {
      image: tecnologia3,
      text: `PFENERGY
      Es una tecnología creada a partir de polifenoles, generando opciones sustentables para mitigar el estrés, incrementar la actividad rizosférica, mejorar la absorción de nutrientes y generar una mayor productividad y calidad.`,
      link: `/${lang}/nuestras-raices/pfenergy`,
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
          <div key={index} className={styles.brandItem} onClick={() => window.open(tecnologia.link, "_blank")}>
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
        <a href={`${lang}/nuestras-raices`}>
          <div className={styles.seeMoreButton}>ver más</div>
        </a>
      </div>
    </section>
  );
}

function Testimonials() {
  const [showVideos, setShowVideos] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);

  const videos = [
    `https://www.youtube.com/embed/DHsCqyxqwZM`,
    `https://www.youtube.com/embed/ni78a3IFzwY`,
    `https://www.youtube.com/embed/ZkRGuKr0acM`,
    `https://www.youtube.com/embed/M3vX4dqk_L4`,
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
        <SwiperSlide
          className={allStyles.reviewContainer}
          style={{
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
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
        <SwiperSlide
          className={allStyles.reviewContainer}
          style={{
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
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
        <SwiperSlide
          className={allStyles.reviewContainer}
          style={{
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
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
  const [lang, setLang] = useState("mxn");

  useEffect(() => {
    const locale = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("NEXT_LOCALE="))
      .split("=")[1];
    setLang(locale);
  }, []);

  const news = [
    {
      title: "Sistema radicular de la vid",
      text: `El optimo de desarrollo del sistema radicular de la vid es primordial para el logro del potencial de producción, tanto en rendimiento como en calidad. Desde la formación de la parra, después de ser plantada en el suelo, la actividad radicular determina, en gran medida, la capacidad para su formación.

      Una vez que el viñedo entra en producción la raíz influye en la calidad y rendimiento por tres razones (Ruiz, 2005): La primera es que la raíces son el principal factor en el balance de carbohidratos en la vid. La segunda que proveen de agua y nutrientes para el crecimiento aéreo y producción de frutos. Y la tercera que recogen señales positivas o negativas provenientes de suelo que se trasmiten bioquímicamente a la parte aérea, con repercusión en la fruta.`,
      link: "https://www.innovakglobal.com/sistema-radicular-de-la-vid/#tab-9cfd2d5e3b53d325c13",
      image:
        "https://www.innovakglobal.com/wp-content/uploads/2020/02/WhatsApp-Image-2018-10-01-at-2.22.21-PM-1.jpg",
    },
    {
      title: "Resistencia Sistémica",
      text: "El ataque de insectos y patógenos en plantas ha sido causante de preocupación en las últimas décadas. Es por esto, que se han realizado diversos estudios con el fin de conocer el mecanismo de las plantas que le permiten defenderse de éstos mediante un complejo sistema que incluye múltiples niveles de protección. Los mecanismos de protección que han desarrollado para defenderse de factores bióticos y abióticos son físicos o químicos y constitutiva o inducida. Las barreras físicas consisten en la composición y estructura de la cutícula, tricomas, estomas, pared celular entre otras.  Las barreras químicas constan en producción de taninos, terpenos, resinas alcaloides (antes del ataque de un patógeno). La desventaja de esta forma de defenderse radica en el tiempo de respuesta, es decir, requiere de años de modificaciones evolutivas, generación de genes estructurales para que se dé el cambio en una barrera física o química (5).",
      link: "https://www.innovakglobal.com/resistencia-sistemica/",
      image:
        "https://www.innovakglobal.com/wp-content/uploads/2020/02/2DO-LUGAR-PLAGAS-Y-ENFERMEDADES.jpg",
    },
    {
      title: "Costo de un amarre deficiente y tamaños pequeños de fruto.",
      text: `Dentro de los principales problemas que se presentan en los cultivares de manzana se encuentran la caída de los frutos y el calibre reducido de los mismos al inicio de su desarrollo. Estos problemas son en parte asociados a las variaciones en las condiciones climáticas de las regiones de producción y en parte a problemas que derivan de los diferentes sistemas de manejo de la producción.

      El estado de Chihuahua aporta el 55% de la producción de manzana mexicana, as pérdidas en rendimiento por caída de frutos, ocasionadas por condiciones ambientales adversas, en dicha entidad van de 14% a un 32%. Tomando en cuenta que en 2014 el estado tenía en producción 26,666 hectáreas (SAGARPA).`,
      link: "https://www.innovakglobal.com/costo-de-un-amarre-deficiente-y-tamanos-pequenos-de-fruto/",
      image:
        "https://www.innovakglobal.com/wp-content/uploads/2020/03/Arte-Incas1.jpg",
    },
  ];
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
          <div className={styles.newsButton}>Ver todo</div>
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
            />
            <div
              style={{
                height: "380px",
              }}
            ></div>
            <div className={styles.newsItemFloating}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link href={item.link}>
                <div className={styles.newsButtonOutlined}>Ver más</div>
              </Link>
            </div>
          </div>
        ))}
      </article>
      {/* News */}
    </section>
  );
}

function FormBody() {
  return (
    <section className={allStyles.formWrapper}>
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className={allStyles.ficha}
      >
        <h1
          style={{
            marginBottom: "20px",
          }}
        >
          ¡Contáctanos!
        </h1>
        <p className={allStyles.text}>+52 (614) 436 01 38</p>
        <p className={allStyles.text}>info@innovakglobal.com</p>
        <p className={allStyles.text}>
          Blvd. Vicente Lombardo Toledano #6615Col. La Concordia C.P.
          31375Chihuahua, Chihuahua, México.
        </p>
        <div>
          <Image
            src={map}
            alt="Innovak News"
            width={300}
            height={400}
            style={{
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </motion.div>

      <div className={allStyles.form}>
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <input type="text" name="País" placeholder="País*" required />
            <input type="text" name="Estado" placeholder="Estado*" required />
          </div>
          <input
            type="text"
            name="Tipo_consulta"
            placeholder="Tipo de consulta*"
            required
          />
          <div className={allStyles.checkboxWrapper}>
            <input
              type="radio"
              id="uno"
              name="privacidad"
              value="Información de distribuidores"
            />
            <label htmlFor="uno">Acepto datos de privacidad</label>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}
