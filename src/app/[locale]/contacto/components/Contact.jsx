"use client";
import React from "react";
import headerBgQuejas from "../../../../../public/contacto/bgQuejas.png";
import headerBgContacto from "../../../../../public/contacto/bgContacto.png";
import headerBgBolsaTrabajo from "../../../../../public/contacto/bgBolsaTrabajo.png";
import styles from "./contacto.module.css";

export default function ContactPageClient({ texts }) {
  const [index, setIndex] = React.useState(0);

  var pagesInfo = [
    {
      header: "Formulario de contacto",
      title: "CONTACTO",
      subtitle:
        "Comunícate con nosotros y nos pondremos en contacto contigo tan pronto como nos sea posible. ¡Esperamos tener noticias tuyas!",
      image: headerBgContacto.src,
    },
    {
      header: "Bolsa de trabajo",
      title: "BOLSA DE TRABAJO",
      subtitle:
        "INNOVAK GLOBAL, es la empresa con la más amplia experiencia en bioestimulación desde la raíz, contribuyendo a la producción de cultivos sanos en alianza con la naturaleza; somos reconocidos internacionalmente como líder en el desarrollo de soluciones biorracionales con enfoque a mejorar la calidad de los alimentos frescos y la productividad de las cosechas.",
      image: headerBgBolsaTrabajo.src,
    },
    {
      header: "Buzón de quejas y sugerencias",
      title: "BUZÓN DE QUEJAS",
      subtitle: "",
      image: headerBgQuejas.src,
    },
    {
      header: "Denuncia ética",
      title: "DENUNCIA ÉTICA",
      subtitle: "",
      image: headerBgQuejas.src,
    },
  ];
  return (
    <>
      <article
        className={styles.header}
        style={{
          backgroundImage: `url(${pagesInfo[index].image})`,
          zIndex: 0,
        }}
      >
        <h1>{pagesInfo[index].header}</h1>
        <p>{pagesInfo[index].subtitle}</p>
      </article>
      <div className={styles.selectOptionWrapper}>
        {pagesInfo.map((page, i) => (
          <>
            <div
              className={index === i ? `${styles.active}` : ""}
              key={i}
              onClick={() => setIndex(i)}
            >
              <p>{page.title}</p>
            </div>
            <span className={styles.separator}></span>
            
          </>
        ))}
      </div>
      <h1>Contacto</h1>
      <p>Esta es la página de contacto</p>
    </>
  );
}
