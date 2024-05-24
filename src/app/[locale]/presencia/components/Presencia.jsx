"use client";
import React, { useEffect, useState } from "react";
import styles from "./presencia.module.css";

import localFont from "next/font/local";
const futura = localFont({
  src: "../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

import Image from "next/image";
import icon from "../../../../../public/contacto/search.png";

export default function PresenciaClient({ info }) {
  var pagesInfo = info.map((item) => {
    return {
      title: item.mapa.region,
      subtitle: "",
      image: item.info.imagenFondo,
      content: (
        <Map
          map={item.mapa.imagen}
          contactInfo={item.mapa.comerciantes}
          info={item.info}
        />
      ),
      hash: item.info.hash,
    };
  });

  const getCurrentIndex = () => {
    var hash = window.location.hash;
    var tempIndex = 0;
    if (hash === "") {
      hash = "#" + window.location.pathname.split("/")[1];
    }
    switch (hash) {
      case "#mx":
        tempIndex = 0;
        break;
      case "#eu":
        tempIndex = 1;
        break;
      case "#br":
        tempIndex = 2;
        break;
      case "#tr":
        tempIndex = 3;
        break;
      case "#co":
      default:
        tempIndex = 4;
        break;
      case "#pe":
        tempIndex = 5;
        break;
      case "#cl":
        tempIndex = 6;
        break;
      case "#intl":
        tempIndex = 7;
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
        <h1>{pagesInfo[index].title}</h1>
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

function Map({ map, contactInfo, info }) {
  const [filtredByProductList, setFiltredByProductList] = useState(contactInfo);

  useEffect(() => {
    setFiltredByProductList(contactInfo);
  }, [contactInfo]);
  return (
    <section className={styles.presenciaWrapper}>
      <div className={styles.mapWrapper}>
        <Image width={10} height={10} src={map} alt="Mexico" />
      </div>
      <div className={styles.searchMenu}>
        <input
          placeholder={info.placeHolder}
          onChange={(event) => {
            const estados = event.target.value.toLowerCase();
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
                <strong>{info.fields?.nombre}</strong>
                {contact.info.nombre}
              </p>
            )}
            {contact.info.telefono && (
              <p>
                <strong>{info.fields?.telefono}</strong>
                <a href={`tel:${contact.info.telefono}`}>
                  {contact.info.telefono}
                </a>
              </p>
            )}
            {contact.info.email && (
              <p>
                <strong>{info.fields?.email}</strong>
                <a href={`mailto:${contact.info.email}`}>
                  {contact.info.email}
                </a>
              </p>
            )}
            {contact.info.whatsapp && (
              <p>
                <strong>{info.fields?.whatsapp}</strong>
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
                <strong>{info.fields?.estados}</strong>
                {contact.info.estados.join(", ")}
              </p>
            )}
            {contact.info.productos && (
              <p>
                <strong>{info.fields?.experiencia}</strong>
                {contact.info.productos.join(", ")}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
