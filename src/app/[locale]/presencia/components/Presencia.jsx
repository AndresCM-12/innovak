"use client";
import React from "react";
import styles from "./presencia.module.css";

import localFont from "next/font/local";
const futura = localFont({
  src: "../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

import mexicoMap from "../../../../../public/presencia/mexico.svg";
import background from "../../../../../public/presencia/background.png";
import Image from "next/image";

export default function PresenciaClient({ texts }) {
  const [index, setIndex] = React.useState(0);

  var contactInfo = [
    {
      title: "CUENTAS CLAVE Y BAJA",
      info: {
        nombre: "Lopez Perez, Javier",
        telefono: "6461513910",
        email: "jlopez@innovakglobal.com",
        productos: ["Hortalizas"],
      },
    },
    {
      title: "PACIFICO CENTRO",
      info: {
        nombre: "Miranda Lopez, Maria Irene",
        telefono: "6474820634",
        email: "mmiranda@innovakglobal.com",
        productos: ["Hortalizas", "Papa", "Granos"],
      },
    },
    {
      title: "SINALOA SUR",
      info: {
        nombre: "Puga Lopez, Arnoldo",
        telefono: "6671870291",
        email: "apuga@innovakglobal.com",
        productos: ["Tomate", "Chile"],
      },
    },
    {
      title: "GOLFO",
      info: {
        nombre: "Roman Reyes, Javier",
        telefono: "2831049879",
        email: "jroman@innovakglobal.com",
        productos: ["Piña"],
      },
    },
    {
      title: "BAJÍO",
      info: {
        nombre: "Gallaga Espinoza, Francisco Javier",
        telefono: "4771337460",
        email: "fgallaga@innovakglobal.com",
        productos: ["Cebolla", "Tomate", "Chile", "Papa", "Ajo"],
        contacto_con: ["fresa", "zanahoria", "Esparrago", "aguacate"],
      },
    },
    {
      title: "ALTIPLANO",
      info: {
        nombre: "Assad Ruiz, Alonso Hiram",
        telefono: "7352069271",
        email: "hassad@innovakglobal.com",
        productos: ["Cebolla", "Papa", "Chile", "Tomate"],
      },
    },
    {
      title: "OCCIDENTE",
      info: {
        nombre: "Hernandez Ponce, Carlos Ignacio",
        telefono: "4433960753",
        email: "chernandez@innovakglobal.com",
        productos: ["Aguacate", "Papa", "Sandia", "Papaya"],
      },
    },
    {
      title: "SURESTE",
      info: {
        nombre: "Castañeda Varela, Jesus Alexis",
        telefono: "9991377255",
        email: "acastaneda@innovakglobal.com",
        productos: ["Banano", "Papaya", "Sandia", "Soya"],
      },
    },
    {
      title: "SURESTE",
      info: {
        nombre: "Avendaño Abadia, Jesus Enrique",
        telefono: "9631370984",
        email: "eavendano@innovakglobal.com",
        productos: ["Soya", "Jitomate", "Mango", "Banano"],
      },
    },
  ];

  var pagesInfo = [
    {
      title: "MÉXICO",
      subtitle: "",
      image: background.src,
      content: <MapMexico map={mexicoMap} contactInfo={contactInfo} />,
    },
    // {
    //   title: "ESTADOS UNIDOS",
    //   subtitle: "",
    //   image: background.src,
    //   content: <Map />,
    // },
    // {
    //   title: "BRASIL",
    //   subtitle: "",
    //   image: background.src,
    //   content: <Map />,
    // },
    // {
    //   title: "TURQUÍA",
    //   subtitle: "",
    //   image: background.src,
    //   content: <Map />,
    // },
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
      {/* <div className={styles.selectOptionWrapper}>
        {pagesInfo.map((page, i) => (
          <>
            <div
              className={index === i ? `${styles.active}` : ""}
              onClick={() => handleNextStep(i)}
            >
              <p>{page.title}</p>
            </div>
            <span key={i + "span"} className={styles.separator}></span>
          </>
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
  return (
    <section className={styles.presenciaWrapper}>
      <div className={styles.mapWrapper}>
        <Image width={10} height={10} src={map} alt="Mexico" />
      </div>
      <div className={styles.infoWrapper}>
        {contactInfo.map((contact, i) => (
          <div className={styles.contactInfoWrapper}>
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
                {contact.info.telefono}
              </p>
            )}
            {contact.info.email && (
              <p>
                <strong>Email: </strong>
                {contact.info.email}
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
