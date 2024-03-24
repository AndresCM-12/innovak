"use client";
import React from "react";
import styles from "./nuestrasRaices.module.css";
import allStyles from "../../inicio.module.css";
import revolucionStyles from "./revolucion.module.css";
import bgImage from "../../../../../public/nuestrasraices/revolucionBackground.svg";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

import certificationIcon from "../../../../../public/nuestrasraices/certificationIcon.svg";
import background from "../../../../../public/innovak-news/background.png";

import logoBio from "../../../../../public/nuestrasraices/logo_bio.png";
import logoEsr from "../../../../../public/nuestrasraices/logo_ESR.png";
import logoOmri from "../../../../../public/nuestrasraices/logo_omri.png";
import logoWellbeing from "../../../../../public/nuestrasraices/logo_wellbeing.png";

import tecnologia1 from "../../../../../public/inicio/tecnologia1.png";
import tecnologia2 from "../../../../../public/inicio/tecnologia2.png";
import tecnologia3 from "../../../../../public/inicio/tecnologia3.png";
import tecnologiasCircleBackground from "../../../../../public/inicio/tecnologiasCircleBackground.svg";
import tecnologiasBackground from "../../../../../public/inicio/tecnologiaBackground.svg";

import innovacion from "../../../../../public/nuestrasraices/valores/innovacion.svg";
import integridad from "../../../../../public/nuestrasraices/valores/integridad.svg";
import pasion from "../../../../../public/nuestrasraices/valores/pasion.svg";
import servicio from "../../../../../public/nuestrasraices/valores/servicio.svg";
import trascendencia from "../../../../../public/nuestrasraices/valores/trascendencia.svg";

import lineaDelTiempoBg1 from "../../../../../public/nuestrasraices/1954.png";

import localFont from "next/font/local";
const futura = localFont({
  src: "../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

export default function NuestrasRaicesClient({ texts }) {
  const [index, setIndex] = React.useState(0);

  var certifications = [
    {
      img: logoBio,
      title: "BIOAGRICERT",
      description:
        "Es una certificadora internacional que garantiza a los productores orgánicos, la certidumbre de procesos de certificación eficientes y confiables, asegurando al público consumidor un producto respaldado por la calidad de su sello.",
    },
    {
      img: logoOmri,
      title: "OMRI",
      description:
        "Es un organismo certificador que ofrece una revisión independiente para productos de marca a ser usados como insumos en agricultura y procesamiento orgánico. Los estándares de OMRI están basados en el Programa Orgánico Nacional (NOP, por sus siglas en inglés) de los Estados Unidos y en los estándares del Régimen Orgánico de Canadá (COR, por sus siglas en inglés).",
    },
  ];

  var distintivos = [
    {
      img: logoWellbeing,
      title: "FACTOR WELLBEING",
      description: `Somos una empresa promotora del bienestar
        En Innovak Global, cuidamos el bienestar de nuestros colaboradores. Por lo que gestionamos continuamente en la organización nuestros procesos organizacionales de reclutamiento, inducción, operación, retroalimentación y desarrollo personal con prácticas positivas específicas para generar bienestar en los trabajadores a la par de incrementar la productividad y rentabilidad de nuestra empresa.
        El Instituto de Ciencias del Bienestar Integral por parte del TecMilenio es el responsable de llevar a cabo el proceso de evaluación para la gestión del distintivo Factor Wellbeing cada año.`,
    },
    {
      img: logoEsr,
      title: "ESR",
      description: `

        Orgullosamente Innovak Global es una empresa socialmente responsable, generando compromiso en políticas, programas, toma de decisiones y acciones que benefician no solo al propio negocio, sino que, incidimos positivamente en la gente, el medio ambiente y las comunidades en que operamos, más allá de nuestras obligaciones, atendiendo sus expectativas.
        Distintivo`,
    },
  ];

  var reconocimientos = [
    {
      title: "2017 - Distintivo Chihuahua Compromiso con la Competitividad",
      description: `Se otorga a las organizaciones que han alcanzado un nivel de calidad básico aceptable, en la evaluación de sus sistemas operativos y administrativos, basados en el Modelo Nacional para la Competitividad (PYMES o empresas grandes). Este reconocimiento es otorgado a organizaciones que cuenten con los elementos suficientes de calidad y sólo en su primer año de participación.`,
    },
    {
      title: "2017 - Premio Chihuahua a la Competitividad",
      description: `Se otorga a las organizaciones participantes que logren el mayor puntaje en la evaluación anual, basada en el Modelo Nacional de Competitividad o en el Modelo para MIPYMES Competitivas y tenga 3 años de experiencia en sistemas de administración por calidad.`,
    },
    {
      title: "2018 - Distintivo Chihuahua mejoramiento hacia la Competitividad",
      description: `Se otorga a organizaciones que en el ciclo del concurso logran el mayor puntaje de mejoramiento de un sistema de administración por calidad total con respecto al ciclo anterior. Para obtener este reconocimiento es indispensable la participación en al menos dos ediciones continuas.`,
    },
    {
      title: "2018 - Empresa Competitiva",
      description: `Se otorga a las empresas que han participado de manera consecutiva en el Modelo Chihuahua a la Competitividad y que a su vez han demostrado un mejoramiento generando valor competitivo hacia sus grupos de interés.`,
    },
    {
      title: "2019 - Premio Nacional de Exportación",
      description: `Categoría: Empresas Exportadoras Grandes Agropecuarias Otorgado por la Secretaría de Economía de México por ser sinónimo de competitividad a nivel mundial y motor del crecimiento económico.`,
    },
  ];

  var valores = [
    {
      img: servicio,
      title: "SERVICIO",
      description:
        "Brindar el máximo apoyo, con humildad y sencillez, para superar las expectativas de nuestros clientes internos y externos, todo esto en un ambiente de trabajo en equipo.",
    },
    {
      img: integridad,
      title: "INTEGRIDAD",
      description:
        "Coherencia entre lo que pensamos, decimos y actuamos. Hablar con la verdad y ser honestos. Es justicia y equidad.",
    },
    {
      img: pasion,
      title: "PASIÓN",
      description:
        "Amor y entrega incondicional por lo que hacemos. Trabajar arduamente, con persistencia y coraje para terminar lo que empezamos.",
    },
    {
      img: innovacion,
      title: "INNOVACIÓN",
      description:
        "Generar nuevas ideas para hacer las cosas diferentes y romper paradigmas. Inspirarse, porque se vale equivocarse pero no se vale no intentar.",
    },
    {
      img: trascendencia,
      title: "TRASCENDENCIA",
      description:
        "Dejar huella en este mundo y darle sentido a nuestro trabajo para influir positivamente en una agricultura sustentable.",
    },
  ];

  var lineaDelTiempo = [
    {
      date: "1950",
      description: `Nace Representaciones Industriales S.A. de C.V.  dedicada a comercializar maquinaria, equipo industrial, tratamiento industriales para madera, celulosa y suavizadores de agua.`,
      background: lineaDelTiempoBg1.src,
    },
    {
      date: "1955",
      description: `Se crea el Laboratorio de Análisis Agrícolas e Industriales, S.A. de C.V.  en asociación con el Señor Joseph L. Hearn para ofrecer servicios de análisis de suelo y agua.`,
      background: lineaDelTiempoBg1.src1,
    },
    {
      date: "1957",
      description: `Funda Productos Químicos de Chihuahua, S.A de C.V. empresa formuladora y comercializadora de productos de limpieza industrial .`,
      background: lineaDelTiempoBg1.src,
    },
    {
      date: "1962",
      description: `Tras el estudio de estas referencias, se diseñaron algunos procesos obteniendo diferentes extractos y con esto se realizaron experimentaciones para probar su capacidad desincrustante en el proceso de lavado de botellas y máquinas lavadoras.
        Como resultado de éstas investigaciones se definió un extracto denominado TOG, que aunque mostrara cierta capacidad desincrustante no fue lo suficiente efectivo para poder posicionarlo como una solución.
        `,
      background: lineaDelTiempoBg1.src,
    },
    {
      date: "1962",
      description: `Tras el estudio de estas referencias, se diseñaron algunos procesos obteniendo diferentes extractos y con esto se realizaron experimentaciones para probar su capacidad desincrustante en el proceso de lavado de botellas y máquinas lavadoras.
        Como resultado de éstas investigaciones se definió un extracto denominado TOG, que aunque mostrara cierta capacidad desincrustante no fue lo suficiente efectivo para poder posicionarlo como una solución.
        `,
      background: lineaDelTiempoBg1.src,
    },
  ];

  var pagesInfo = [
    {
      title: "QUIENES SOMOS",
      subtitle: "",
      image: background.src,
      content: (
        <QuienesSomos valores={valores} lineaDelTiempo={lineaDelTiempo} />
      ),
    },
    {
      title: "TECNOLOGÍAS",
      subtitle: "",
      image: background.src,
      content: <Tecnologias />,
    },
    {
      title: "CERTIFICACIONES",
      subtitle: "",
      image: background.src,
      content: (
        <Certificaciones
          certifications={certifications}
          distintivos={distintivos}
          reconocimientos={reconocimientos}
        />
      ),
    },
    {
      title: "REVOLUCIÓN SUSTENTABLE",
      subtitle: "",
      image: background.src,
      content: <Revolucion />,
    },
  ];

  const handleNextStep = (i) => {
    window.scrollTo(0, 0);
    setIndex(i);
  };

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
          backgroundImage: `url(${pagesInfo[index].image})`,
          zIndex: 0,
        }}
      >
        <h1>LOCALIZADOR DE COMERCIALES</h1>
      </article>
      {/* Dynamic Header */}

      {/* Select Option */}
      <div className={styles.selectOptionWrapper}>
        {pagesInfo.map((page, i) => (
          <>
            <div
              className={index === i ? `${styles.active}` : ""}
              key={i + "div"}
              onClick={() => handleNextStep(i)}
            >
              <p>{page.title}</p>
            </div>
            <span key={i + "span"} className={styles.separator}></span>
          </>
        ))}
      </div>
      {/* Select Option */}

      {/* Form */}
      {pagesInfo[index].content}
      {/* Form */}
    </section>
  );
}

function QuienesSomos({ valores, lineaDelTiempo }) {
  return (
    <>
      <section className={styles.quienesSomosWrapper}>
        <article className={styles.titleWrapper}>
          <div className={styles.title}>
            <h1>¿QUIENES SOMOS?</h1>
            <p>
              Nos sentimos orgullosos de ser la empresa con la más amplia
              experiencia en BIOESTIMULACIÓN DESDE LA RAÍZ, contribuyendo a la
              producción de cultivos sanos en alianza con la naturaleza; somos
              reconocidos internacionalmente como LÍDER EN EL DESARROLLO DE
              SOLUCIONES BIORRACIONALES con enfoque a mejorar la calidad de los
              alimentos y la productividad de las cosechas
            </p>
            <p>
              Con una presencia de casi 70 años en la agricultura tecnificada,
              en Innovak concebimos, DESARROLLAMOS Y COMERCIALIZAMOS
              BIOESTIMULANTES que resuelven problemas críticos de los cultivos.
              Es EN LA RAÍZ en donde enfocamos objetivos, tecnología y la
              filosofía compartida con el agricultor, de producir con excelencia
              cultivos saludables, cuidando la salud de la tierra y respetando
              el medio ambiente.Por todo esto somos una empresa de raíces
              sólidas, de raíces productivas, de raíces mexicanas.
            </p>
          </div>
          <video autoPlay muted loop controls>
            <source src="/videos/quienesSomos.mp4" type="video/mp4" />
          </video>
        </article>

        <article className={styles.misionWrapper}>
          <div>
            <h2>MISIÓN</h2>
            <p>
              En Innovak Global desarrollamos y comercializamos productos
              bioestimulantes, biorracionales y tecnologías diferenciadas para
              contribuir a una agricultura sustentable.
            </p>
          </div>
          <div>
            <h2>VISIÓN</h2>
            <p>
              Ser la empresa con mayor participación de mercado en el segmento
              de productos bioestimulantes en Latinoamérica.
            </p>
          </div>
        </article>

        <article className={styles.valoresMainWrapper}>
          <h3>VALORES</h3>
          <div className={styles.valoresWrapper}>
            {valores.map((valor, i) => (
              <div key={i} className={styles.valorWrapper}>
                <Image
                  src={valor.img}
                  height={70}
                  width={60}
                  style={{ objectFit: "contain", objectPosition: "top" }}
                  alt="background"
                />
                <div>
                  <h4>{valor.title}</h4>
                  <div className={styles.divider}></div>
                  <p>{valor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className={styles.lineaDelTiempoWrapper}>
        <div className={styles.titleWrapper}>
          <h3>NUESTRAS RAÍCES EN EL TIEMPO</h3>
        </div>
        <Swiper
          id="lineaDelTiempoSwiper"
          navigation={true}
          slidesPerView={"auto"}
          spaceBetween={0}
          freeMode={true}
          className={styles.lineaDelTiempo}
        >
          {lineaDelTiempo.map((item, i) => (
            <SwiperSlide
              key={i}
              style={{
                backgroundImage: `url(${item.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
              className={styles.lineaDelTiempoItemWrapper}
            >
              <div className={styles.item}>
                <h4>{item.date}</h4>
                <p>{item.description}</p>
              </div>
              <div className={styles.filter}></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

function Certificaciones({ certifications, distintivos, reconocimientos }) {
  return (
    <section className={styles.wrapper}>
      <article className={styles.certificacionesWrapper}>
        <div>
          <h1>CERTIFICACIONES Y RECONOCIMIENTOS</h1>
        </div>
        <div className={styles.subWrapper}>
          <Image
            className={styles.certificationIcon}
            src={certificationIcon}
            height={80}
            width={47}
            alt="background"
          />
          <h2>CERTIFICACIONES</h2>
          <div className={styles.divider}></div>
          <div className={styles.certWrapper}>
            {certifications.map((cert, i) => (
              <div key={i} className={styles.cert}>
                <Image
                  src={cert.img}
                  height={80}
                  width={280}
                  style={{
                    objectFit: "contain",
                    objectPosition: "left",
                  }}
                  alt="background"
                />
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
              </div>
            ))}
          </div>
          <h2>DISTINTIVOS</h2>
          <div className={styles.divider}></div>
          <div className={styles.certWrapper}>
            {distintivos.map((cert, i) => (
              <div key={i} className={styles.cert}>
                <Image
                  src={cert.img}
                  height={80}
                  width={300}
                  style={{
                    objectFit: "contain",
                    objectPosition: "left",
                  }}
                  alt="background"
                />
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
              </div>
            ))}
          </div>
          <h2>RECONOCIMIENTOS</h2>
          <div className={styles.divider}></div>
          <div className={styles.certWrapper}>
            {reconocimientos.map((cert, i) => (
              <div key={i} className={styles.cert}>
                <h4>{cert.title}</h4>
                <p>{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
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
    <section
      className={allStyles.tecnologiasWrapper}
      style={{
        marginTop: "-40px",
      }}
    >
      <article>
        <h2>TECNOLOGÍAS</h2>
        <p>
          En Innovak Global integramos tres tecnologías innovadoras
          desarrolladas internamente a favor de una agricultura sustentable:
        </p>
      </article>

      {/* Tecnologias */}
      <article
        className={allStyles.brandsWrapper}
        style={{
          backgroundImage: `url(${tecnologiasCircleBackground.src})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginTop: "-2px",
        }}
      >
        {tecnologias.map((tecnologia, index) => (
          <div key={index} className={allStyles.brandItem}>
            <div
              className={allStyles.brandItemImage}
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
      ></div>
    </section>
  );
}

function Revolucion() {
  return (
    <section
      className={revolucionStyles.backgroundWrapper}
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <div className={revolucionStyles.floatingText}>
        <p>
          La demanda de alimentos, el impacto del cambio climático y la
          necesidad de una agricultura sustentable juegan un papel crucial en la
          innovación tecnológica. Innovak Global enfoca sus objetivos y
          tecnología hacia una la filosofía compartida con el agricultor;
          PRODUCIR CON EXCELENCIA cultivos saludables, cuidando la salud de la
          tierra y RESPETANDO EL MEDIO AMBIENTE en diversos aspectos:
        </p>
      </div>
    </section>
  );
}

// 1920x800 || 600x800
