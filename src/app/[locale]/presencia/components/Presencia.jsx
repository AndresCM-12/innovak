"use client";
import React, { useState } from "react";
import styles from "./presencia.module.css";

import localFont from "next/font/local";
const futura = localFont({
  src: "../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

import mexicoMap from "../../../../../public/presencia/mexico.svg";
import background from "../../../../../public/presencia/background.png";
import Image from "next/image";
import icon from "../../../../../public/contacto/search.png";

export default function PresenciaClient({ info }) {
  var contactInfo = info.mapa.comerciantes;

  var pagesInfo = [
    {
      title: info.mapa.region,
      subtitle: "",
      image: info.info.imagenFondo,
      content: <MapMexico map={info.mapa.imagen} contactInfo={contactInfo} />,
      hash: "mexico",
    },
    // {
    //   title: "ESTADOS UNIDOS",
    //   subtitle: "",
    //   image: background.src,
    //   content: <Map />,
    //   hash: "usa",
    // },
    // {
    //   title: "BRASIL",
    //   subtitle: "",
    //   image: background.src,
    //   content: <Map />,
    //   hash: "brasil",
    // },
    // {
    //   title: "TURQUÍA",
    //   subtitle: "",
    //   image: background.src,
    //   content: <Map />,
    //   hash: "turquia",
    // },
  ];

  const getCurrentIndex = () => {
    const hash = window.location.hash;
    var tempIndex = 0;
    switch (hash) {
      case "#mexico":
        tempIndex = 0;
        break;
      case "#usa":
        tempIndex = 1;
        break;
      case "#brasil":
        tempIndex = 2;
        break;
      case "#turquia":
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
          backgroundImage: `url(${pagesInfo[index].image})`,
          zIndex: 0,
        }}
      >
        <h1>LOCALIZADOR DE COMERCIALES</h1>
      </article>
      {/* Dynamic Header */}

      {/* Select Option */}
      {/* <div className={styles.selectOptionWrapper}>
        {pagesInfo.map((page, i) => (
          <div
            className={index === i ? `${styles.active}` : ""}
            key={i + "div"}
            onClick={() => handleNextStep(i)}
          >
            <p>{page.title}</p>
          </div>
        ))}
      </div> */}
      {/* Select Option */}

      {/* Form */}
      {pagesInfo[index].content}
      {/* Form */}
    </section>
  );
}

function Map() {
  return (
    <section className={styles.presenciaWrapper} style={{ height: "800px" }}>
      <div className={styles.mapWrapper}></div>
    </section>
  );
}

function MapMexico({ map, contactInfo }) {
  const [filtredByProductList, setFiltredByProductList] = useState(contactInfo);
  return (
    <section className={styles.presenciaWrapper}>
      <div className={styles.mapWrapper}>
        <Image width={10} height={10} src={map} alt="Mexico" />
      </div>
      <div className={styles.searchMenu}>
        <input
          placeholder="Buscar por estado"
          onChange={(event) => {
            const estados = event.target.value.toLowerCase();
            console.log(estados);
            const newList = contactInfo.filter((contact) => {
              return contact.info.estados.some((estado) => {
                return estado.toLowerCase().includes(estados);
              });
            });
            setFiltredByProductList(newList);
          }}
        />
        <Image src={icon} alt="icon" width={20} height={20} />
      </div>
      <div className={styles.infoWrapper}>
        {filtredByProductList.map((contact, i) => (
          <div
            key={i}
            className={styles.contactInfoWrapper}
            style={{
              backgroundColor: contact.bgColor,
              color: contact.color,
            }}
          >
            <h3>{contact.title}</h3>
            {contact.info.nombre && (
              <p>
                <strong>Nombre: </strong>
                {contact.info.nombre}
              </p>
            )}
            {contact.info.telefono && (
              <p>
                <strong>Teléfono: </strong>
                <a href={`tel:${contact.info.telefono}`}>
                  {contact.info.telefono}
                </a>
              </p>
            )}
            {contact.info.email && (
              <p>
                <strong>Email: </strong>
                <a href={`mailto:${contact.info.email}`}>
                  {contact.info.email}
                </a>
              </p>
            )}
            {contact.info.whatsapp && (
              <p>
                <strong>WhatsApp: </strong>
                <a
                  href={`https://wa.me/${contact.info.whatsapp}/`}
                  target="_blank"
                >
                  {contact.info.whatsapp}
                </a>
              </p>
            )}
            {contact.info.estados && (
              <p>
                <strong>Estados: </strong>
                {contact.info.estados.join(", ")}
              </p>
            )}
            {contact.info.productos && (
              <p>
                <strong>Experiencia en: </strong>
                {contact.info.productos.join(", ")}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
