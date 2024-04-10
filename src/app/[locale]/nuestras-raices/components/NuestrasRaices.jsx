"use client";
import React, { useEffect, useState } from "react";
import styles from "./nuestrasRaices.module.css";
import allStyles from "../../inicio.module.css";
import revolucionStyles from "./revolucion.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Image from "next/image";

import certificationIcon from "../../../../../public/nuestrasraices/certificationIcon.svg";
import background from "../../../../../public/nuestrasraices/background.png";
import bgImage from "../../../../../public/nuestrasraices/revolucionBackground.svg";

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

import img1950 from "../../../../../public/nuestrasraices/line/1954.jpg";
import img1955 from "../../../../../public/nuestrasraices/line/1955.jpg";
import img1957 from "../../../../../public/nuestrasraices/line/1957.jpg";
import img1961 from "../../../../../public/nuestrasraices/line/1961.jpg";
import img1962 from "../../../../../public/nuestrasraices/line/1962.jpg";
import img1967 from "../../../../../public/nuestrasraices/line/1967.jpg";
import img1970 from "../../../../../public/nuestrasraices/line/1970.jpg";
import img1973 from "../../../../../public/nuestrasraices/line/1973.jpg";
import img1974 from "../../../../../public/nuestrasraices/line/1974.jpg";
import img1984 from "../../../../../public/nuestrasraices/line/1984.jpg";
import img1985 from "../../../../../public/nuestrasraices/line/1985.jpg";
import img1987 from "../../../../../public/nuestrasraices/line/1987.jpg";
import img1990 from "../../../../../public/nuestrasraices/line/1990.jpg";
import img1992 from "../../../../../public/nuestrasraices/line/1992.jpg";
import img1993 from "../../../../../public/nuestrasraices/line/1993.jpg";
import img1994 from "../../../../../public/nuestrasraices/line/1994.jpg";
import img2002 from "../../../../../public/nuestrasraices/line/2002.jpg";
import img2005 from "../../../../../public/nuestrasraices/line/2005.jpg";
import img2007 from "../../../../../public/nuestrasraices/line/2007.jpg";
import img2008 from "../../../../../public/nuestrasraices/line/2008.jpg";
import img2013 from "../../../../../public/nuestrasraices/line/2013.jpg";
import img2014 from "../../../../../public/nuestrasraices/line/2014.jpg";
import img2016 from "../../../../../public/nuestrasraices/line/2016.jpg";
import img2017 from "../../../../../public/nuestrasraices/line/2017.jpg";
import img2019 from "../../../../../public/nuestrasraices/line/2019.jpg";
import img2021 from "../../../../../public/nuestrasraices/line/2021.jpg";

import rev1 from "../../../../../public/nuestrasraices/revolución/1.png";
import rev2 from "../../../../../public/nuestrasraices/revolución/2.png";
import rev3 from "../../../../../public/nuestrasraices/revolución/3.png";
import rev4 from "../../../../../public/nuestrasraices/revolución/4.png";

import next_arrow from "../../../../../public/nuestrasraices/next_arrow.svg";
import prev_arrow from "../../../../../public/nuestrasraices/prev_arrow.svg";

import raices from "../../../../../public/nuestrasraices/raices.svg";

import localFont from "next/font/local";
import next from "next";
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

  var revolucionItems = [
    {
      img: rev1,
    },
    {
      img: rev2,
    },
    {
      img: rev3,
    },
    {
      img: rev4,
    },
  ];

  var lineaDelTiempo = [
    {
      date: "1954",
      description: `Nace Representaciones 
      Industriales S.A. de C.V. 
      dedicada a comercializar 
      maquinaria, equipo 
      industrial, tratamiento 
      industriales para madera, 
      celulosa y suavizadores de 
      agua`,
      background: img1950.src,
    },
    {
      date: "1955",
      description: `Se crea el Laboratorio de Análisis 
      Agrícolas e Industriales, S.A. de 
      C.V. en asociación con el Señor 
      Joseph L. Hearn para ofrecer 
      servicios de análisis de suelo y 
      agua.`,
      background: img1955.src,
    },
    {
      date: "1957",
      description: `Don Vicente Medina Holguín
      funda Productos Químicos de 
      Chihuahua, S.A de C.V. empresa 
      formuladora y comercializadora 
      de productos de limpieza 
      industrial .
      `,
      background: img1957.src,
    },
    {
      date: "1961",
      description: `Don Vicente en la búsqueda de 
      alternativas de materiales con 
      propiedades desincrustantes, 
      encuentra referencias bibliográficas de experimentos que se 
      realizaban en Rusia sobre el uso 
      de ácidos orgánicos con 
      propiedades quelatantes 
      provenientes de cascarillas 
      agrícolas
        `,
      background: img1961.src,
    },
    {
      date: "1962",
      description: `Tras el estudio de estas 
      referencias, se diseñaron algunos 
      procesos obteniendo diferentes 
      extractos y con esto se realizaron 
      experimentaciones para probar 
      su capacidad desincrustante en el 
      proceso de lavado de botellas y 
      máquinas lavadoras.
      Como resultado de éstas 
      investigaciones se definió un 
      extracto denominado TOG, que 
      aunque mostrara cierta capacidad 
      desincrustante no fue lo 
      suficiente efectivo para poder 
      posicionarlo como una solución.
        `,
      background: img1962.src,
    },
    {
      date: "1967",
      description: `El joven estudiante Luis Roberto 
      Medina que cursaba sus estudios 
      de ingeniería química dirige la 
      reorientación del ramo de los 
      productos
        `,
      background: img1967.src,
    },
    {
      date: "1970",
      description: `Lanzamiento de una nueva línea 
      de productos llamados Proquelates, que son micronutrientes 
      quelatados para aplicación foliar. 
      Esta nueva línea de productos 
      impulsa el ingreso al sector 
      agrícola 
        `,
      background: img1970.src,
    },
    {
      date: "1973",
      description: `Creación del primer acondicionador de suelos llamado Promesol, 
      para atender la problemática de 
      la salinización y compactación. 
      Consolidación de la oferta de 
      productos agrícolas y lanzamiento de PROQUISA como marca en 
      el sector agrícola 
        `,
      background: img1973.src,
    },
    {
      date: "1974",
      description: `PROQUISA ingresa al mercado 
      de Estados Unidos exportando 
      Promesol a CSI Chemical, 
      convirtiéndose en una de las 
      primeras empresas maquiladoras 
      químicas de México con permiso 
      de exportación
        `,
      background: img1974.src,
    },
    {
      date: "1984",
      description: `Inicia la presencia 
      en España e Italia
        `,
      background: img1984.src,
    },
    {
      date: "1985",
      description: `En conjunto con CSI Chemical, se 
      diseña el primer calcio orgánico, 
      llamado Nutrical
        `,
      background: img1985.src,
    },
    {
      date: "1987",
      description: `Productos Químicos de 
      Chihuahua se vincula con la 
      Universidad de Arkansas para 
      probar la hipótesis que 
      fundamenta la tecnología con 
      base en ácidos carboxy, sus 
      modos de acción y los efectos 
      fisiológicos de las diferentes 
      fracciones del TOG.
        `,
      background: img1987.src,
    },
    {
      date: "1990",
      description: `Nace la tecnología ECCA 
      Carboxy detonando un nuevo 
      portafolio de productos debido a 
      la validación de hipótesis de las 
      fracciones del TOG así como el 
      surgimiento de nuevos descubrimientos sobre su uso y aplicaciones específicas que resuelven 
      problemas en la agricultura. 
      Lanzamiento de la línea Carboxy.
        `,
      background: img1990.src,
    },
    {
      date: "1992",
      description: `Formulación del primer bioestimulante foliar Packhard.
        `,
      background: img1992.src,
    },
    {
      date: "1993",
      description: `Posicionamiento en el mercado 
      de la tecnología ECCA Carboxy 
      mediante una red de asesores 
      técnicos y comerciales que 
      consolidan un proceso diferenciado de transferencia de tecnologías; bajo un esquema de 
      demostración en campo.
        `,
      background: img1993.src,
    },
    {
      date: "1994",
      description: `Inicia la exportación de Nutrical a 
      Japón, comercializada bajo el 
      nombre de Cal Plus. 
      ECCA Carboxy se aplica en 
      fertirrigación directo a la raíz. 
      Debido a la incursión del riego por 
      goteo en el mercado agrícola, se 
      experimentan los efectos fisiológicos de ECCA Carboxy en las plantas 
      al ser aplicados directamente en la
        `,
      background: img1994.src,
    },
    {
      date: "2002",
      description: `Lanzamiento de Nutrisorb como 
      un bioestimulante activando la 
      raíz para la asimilación de 
      nutrientes.
        `,
      background: img2002.src,
    },
    {
      date: "2003",
      description: `Nace ExuRoot como un inductor 
      de exudados radiculares.
        `,
      background: img2002.src,
    },
    {
      date: "2005",
      description: `Lanzamiento de la nueva marca INNOVAK 
      GLOBAL.
      Nueva tecnología: Introducción de la 
Tecnología de la Regulación de la Dinámica 
Radicular (RDR), donde la empresa se 
constituye como especialista en la raíz y nace 
una línea especializada de productos 
biológicos para acondicionamiento de la raíz 
y su medio ambiente
        `,
      background: img2005.src,
    },
    {
      date: "2007",
      description: `Asume la dirección de la empresa 
      Luis Román Medina, tercer 
      generación de la familia Medina. 
      Desarrollo de nuevas soluciones 
      en base a fracciones de ecca en 
      combinación con hormonas 
      sintéticas (Radigrow y Selecto 
      XL).
        `,
      background: img2007.src,
    },
    {
      date: "2008",
      description: `Obtención de la certificación internacional "Biogricert" de productos diversos 
      para su aplicación en la agricultura 
      orgánica.
        `,
      background: img2008.src,
    },
    {
      date: "2009",
      description: `Obtención de la certificación internacional "Biogricert" de productos diversos 
      para su aplicación en la agricultura 
      orgánica.
        `,
      background: img2008.src,
    },
    {
      date: "2013",
      description: `Innovak Global evoluciona sus 
      programas Biofit a una nueva 
      versión "Ready-to-Use" 
      nombrada Biofit RTU, como un 
      polvo soluble que concentra 
      todos los componentes en una 
      formulación, con un método de 
      aplicación simplificada.
        `,
      background: img2013.src,
    },
    {
      date: "2014",
      description: `Innovak Global continúa 
      con el proceso de 
      institucionalización 
      reconfigurando su 
      esquema organizacional y 
      nombra al Dr. Alberto 
      Araujo como nuevo 
      Director General y aunado 
      a éste se fortalece el 
      equipo directivo, así como 
      posiciones estratégicas 
      preparándose para el 
      futuro.
        `,
      background: img2014.src,
    },
    {
      date: "2016",
      description: `Se obtiene la certificación OMRI 
      en varios de los productos 
      microbiológicos.
        `,
      background: img2016.src,
    },
    {
      date: "2017",
      description: `Consolidación de los esfuerzos 
      de internacionalización con la 
      entrada a Brasil, Francia y 
      Ecuador (entre otros).
      Relanzamiento de RDR como 
      Tecnología de la Raíz
        `,
      background: img2017.src,
    },
    {
      date: "2019",
      description: `Lanzamiento de la línea de 
      protección de cultivos.
      Nace Balox como bioestimulante 
      contra el estrés salino.
        `,
      background: img2019.src,
    },
    {
      date: "2021",
      description: `Rhizoxfera Ts recibe el 
      premio al proyecto más 
      innovador del 
      Biostimulants World 
      Congress
        `,
      background: img2021.src,
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
      content: <Revolucion items={revolucionItems} />,
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
        <h1>NUESTRAS RAÍCES</h1>
        <p>
          Desarrollamos y comercializamos BIOESTIMULANTES que resuelven
          problemas críticos de los cultivos, somos líderes en el desarrollo de
          SOLUCIONES BIORRACIONALES para la agricultura. En la RAÍZ enfocamos
          objetivos, tecnología y la filosofía compartida con el agricultor, de
          producir con excelencia cultivos saludables, cuidando la salud de la
          tierra y respetando el medio ambiente.
        </p>
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
          <Image src={raices} alt="background" />
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
          <div className={styles.controls}>
            <Image
              id="swiper_button_prev"
              src={prev_arrow}
              width={10}
              height={28}
              alt="flecha de navegacion"
            />
            <Image
              id="swiper_button_next"
              src={next_arrow}
              width={10}
              height={28}
              alt="flecha de navegacion"
            />
          </div>
        </div>
        <Swiper
          id="lineaDelTiempoSwiper"
          navigation={{
            nextEl: "#swiper_button_next",
            prevEl: "#swiper_button_prev",
          }}
          slidesPerView={"auto"}
          modules={[Navigation]}
          spaceBetween={0}
          freeMode={true}
          className={styles.lineaDelTiempo}
          pagination={true}
        >
          {lineaDelTiempo.map((item, i) => (
            <SwiperSlide
              key={i}
              style={{
                backgroundImage: `url(${item.background})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
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
          <div
            style={{
              cursor: "pointer",
            }}
            key={index}
            className={allStyles.brandItem}
            onClick={() => window.open(tecnologia.link, "_blank")}
          >
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

function Revolucion({ items }) {
  return (
    <section className={revolucionStyles.backgroundWrapper}>
      <video
        autoPlay
        muted
        loop
        style={{
          objectFit: "cover",
        }}
      >
        <source src="/videos/revolucionSustentable.mp4" type="video/mp4" />
      </video>
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
      <div
        style={{
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
          margin: "0 auto",
          paddingBottom: "80px",
        }}
      >
        {items.map((item, i) => (
          <Image src={item.img} />
        ))}
      </div>
    </section>
  );
}
