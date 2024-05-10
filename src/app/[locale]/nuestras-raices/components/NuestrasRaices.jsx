"use client";
import React from "react";
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

import tecnologiasCircleBackground from "../../../../../public/inicio/tecnologiasCircleBackground.svg";
import tecnologiasBackground from "../../../../../public/inicio/tecnologiaBackground.svg";

import leftIcon from "../../../../../public/nuestrasraices/line/left.svg";
import rightIcon from "../../../../../public/nuestrasraices/line/right.svg";

import next_arrow from "../../../../../public/nuestrasraices/next_arrow.svg";
import prev_arrow from "../../../../../public/nuestrasraices/prev_arrow.svg";

import raices from "../../../../../public/nuestrasraices/raices.svg";

import localFont from "next/font/local";

const futura = localFont({
  src: "../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

export default function NuestrasRaicesClient({ fetchedContent }) {
  var certifications = fetchedContent.certificaciones;

  var distintivos = fetchedContent.distintivos;

  var reconocimientos = fetchedContent.reconocimientos;

  var valores = fetchedContent.valores;

  var revolucionItems = fetchedContent.revolucionItems;

  var lineaDelTiempo = fetchedContent.lineaDelTiempo;

  var pagesInfo = [
    {
      title: fetchedContent.info.cabecera.menu.quienesSomosTitulo,
      subtitle: "",
      image: background.src,
      content: (
        <QuienesSomos
          valores={valores}
          lineaDelTiempo={lineaDelTiempo}
          info={fetchedContent.info.inicio}
          video={fetchedContent.info.cabecera.video}
        />
      ),
      hash: "quienes-somos",
    },
    {
      title: fetchedContent.info.cabecera.menu.tecnologiasTitulo,
      subtitle: "",
      image: background.src,
      content: <Tecnologias info={fetchedContent.info.tecnologias} />,
      hash: "tecnologias",
    },
    {
      title: fetchedContent.info.cabecera.menu.certificacionesTitulo,
      subtitle: "",
      image: background.src,
      content: (
        <Certificaciones
          certifications={certifications}
          distintivos={distintivos}
          reconocimientos={reconocimientos}
          info={fetchedContent.info.certificaciones}
        />
      ),
      hash: "certificaciones",
    },
    {
      title: fetchedContent.info.cabecera.menu.evolucionTitulo,
      subtitle: "",
      image: background.src,
      content: (
        <Revolucion
          items={revolucionItems}
          info={fetchedContent.info.evolucionSustentable}
          video={fetchedContent.info.evolucionSustentable.video}
        />
      ),
      hash: "evolucion-sustentable",
    },
  ];

  const getCurrentIndex = () => {
    const hash = window.location.hash;
    var tempIndex = 0;
    switch (hash) {
      case "#quienes-somos":
        tempIndex = 0;
        break;
      case "#tecnologias":
        tempIndex = 1;
        break;
      case "#certificaciones":
        tempIndex = 2;
        break;
      case "#evolucion-sustentable":
        tempIndex = 3;
        break;
      default:
        tempIndex = 0;
        break;
    }
    return tempIndex;
  };

  //Set current index of pageInfo on first load
  const [index, setIndex] = React.useState(getCurrentIndex());

  //Set current index of pageInfo on hash change to generate history navigation
  window.addEventListener("hashchange", () => {
    setIndex(getCurrentIndex());
  });

  const handleNextStep = (i) => {
    window.location.hash = pagesInfo[i].hash;
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
          backgroundImage: `url(${fetchedContent.info.cabecera.imagen})`,
          zIndex: 0,
        }}
      >
        <h1>{fetchedContent.info.cabecera.titulo}</h1>
        <p>{fetchedContent.info.cabecera.texto}</p>
      </article>
      {/* Dynamic Header */}

      {/* Select Option */}
      <div className={styles.selectOptionWrapper}>
        {pagesInfo.map((page, i) => (
          <div
            className={index === i ? `${styles.active}` : ""}
            key={i + "div"}
            onClick={() => handleNextStep(i)}
          >
            <p>{page.title}</p>
          </div>
        ))}
      </div>
      {/* Select Option */}

      {/* Form */}
      {pagesInfo[index].content}
      {/* Form */}
    </section>
  );
}

function QuienesSomos({ valores, lineaDelTiempo, info, video }) {
  return (
    <>
      <section className={styles.quienesSomosWrapper}>
        <article className={styles.titleWrapper}>
          <div className={styles.title}>
            <h1>{info.quienesTitulo}</h1>
            <p>{info.quienesTexto}</p>
          </div>
          <video autoPlay muted loop controls>
            <source src={video} type="video/mp4" />
          </video>
        </article>

        <article className={styles.misionWrapper}>
          <div>
            <h2>{info.misionTitulo}</h2>
            <p>{info.misionText}</p>
          </div>
          <div>
            <h2>{info.visionTitulo}</h2>
            <p>{info.visionText}</p>
          </div>
          <Image src={raices} alt="background" />
        </article>

        <article className={styles.valoresMainWrapper}>
          <h3>{info.valoresTitulo}</h3>
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
          <h3>{info.nuestrasRaicesTitulo}</h3>
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
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
                overflow: "hidden",
              }}
              className={styles.lineaDelTiempoItemWrapper}
            >
              <div className={styles.item}>
                <h4>{item.date}</h4>
                <div className={styles.textWrapperIcon}>
                  <Image
                    src={leftIcon}
                    alt="background"
                    width={24}
                    height={24}
                    className={styles.iconLeft}
                  />
                  <p>{item.description}</p>
                  <Image
                    src={rightIcon}
                    alt="background"
                    width={24}
                    height={24}
                    className={styles.icon}
                  />
                </div>
              </div>
              <div className={styles.filter}></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

function Certificaciones({
  certifications,
  distintivos,
  reconocimientos,
  info,
}) {
  return (
    <section className={styles.wrapper}>
      <article className={styles.certificacionesWrapper}>
        <div>
          <h1>{info.certificacionesReconocimientoTitulo}</h1>
        </div>
        <div className={styles.subWrapper}>
          <Image
            className={styles.certificationIcon}
            src={certificationIcon}
            height={80}
            width={47}
            alt="background"
          />
          <h2>{info.certificacionesTitulo}</h2>
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
          <h2>{info.distintivosTitulo}</h2>
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
          <h2>{info.reconocimientosTitulo}</h2>
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

function Tecnologias({ info }) {
  const tecnologias = info.tecnologias;
  return (
    <section
      className={allStyles.tecnologiasWrapper}
      style={{
        marginTop: "-40px",
      }}
    >
      <article>
        <h2>{info.titulo}</h2>
        <p>{info.subTitulo}</p>
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
      ></div>
    </section>
  );
}

function Revolucion({ items, info, video }) {
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
        <source src={video} type="video/mp4" />
      </video>
      <div className={revolucionStyles.floatingText}>
        <p>{info.texto}</p>
      </div>
      <div className={revolucionStyles.featuresWrapper}>
        {items.map((item, i) => (
          <div className={revolucionStyles.item} key={i}>
            <Image
              src={item.img}
              width={300}
              height={100}
              objectFit="contain"
              alt="Ámbito"
            />
            <div className={revolucionStyles.text}>
              <h6>{item.text}</h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
