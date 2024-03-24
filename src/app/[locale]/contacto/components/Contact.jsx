"use client";
import React from "react";
import headerBgQuejas from "../../../../../public/contacto/bgQuejas.png";
import headerBgContacto from "../../../../../public/contacto/bgContacto.png";
import headerBgBolsaTrabajo from "../../../../../public/contacto/bgBolsaTrabajo.png";
import styles from "./contacto.module.css";
import allStyles from "../../page.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import map from "../../../../../public/inicio/map.png";
import icon from "../../../../../public/contacto/search.png";
import eyeIcon from "../../../../../public/contacto/eye.svg";

import localFont from "next/font/local";
const futura = localFont({
  src: "../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

export default function ContactPageClient({ texts }) {
  const [index, setIndex] = React.useState(0);
  var jobs = [
    {
      title: "Operadores de producción",
      place: "Chihuahua, Chihuahua",
    },
    {
      title: "Ingeniero Desarrollo Sistemas Internos",
      place: "Chihuahua, Chihuahua",
    },
    {
      title: "Almacenista",
      place: "Chihuahua, Chihuahua",
    },
  ];

  var pagesInfo = [
    {
      header: "Formulario de contacto",
      title: "CONTACTO",
      subtitle:
        "Comunícate con nosotros y nos pondremos en contacto contigo tan pronto como nos sea posible. ¡Esperamos tener noticias tuyas!",
      image: headerBgContacto.src,
      content: <FormBody />,
    },
    {
      header: "Bolsa de trabajo",
      title: "BOLSA DE TRABAJO",
      subtitle:
        "INNOVAK GLOBAL, es la empresa con la más amplia experiencia en bioestimulación desde la raíz, contribuyendo a la producción de cultivos sanos en alianza con la naturaleza; somos reconocidos internacionalmente como líder en el desarrollo de soluciones biorracionales con enfoque a mejorar la calidad de los alimentos frescos y la productividad de las cosechas.",
      image: headerBgBolsaTrabajo.src,
      content: <FormBodyBolsaDeTrabajo jobs={jobs} />,
    },
    {
      header: "Buzón de quejas y sugerencias",
      title: "BUZÓN DE QUEJAS",
      subtitle: "",
      image: headerBgQuejas.src,
      content: <FormBodyQuejas />,
    },
    {
      header: "Denuncia ética",
      title: "DENUNCIA ÉTICA",
      subtitle: "",
      image: headerBgQuejas.src,
      content: <FormBodyQuejas />,
    },
  ];

  const handleNextStep = (i) => {
    window.scrollTo(0, 0);
    setIndex(i);
  };

  return (
    <>
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
        <h1>{pagesInfo[index].header}</h1>
        <p>{pagesInfo[index].subtitle}</p>
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
    </>
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

function FormBodyQuejas() {
  return (
    <section className={styles.formQuejas}>
      <div className={styles.form}>
        <form
          action="https://formsubmit.co/redes@innovakglobal.com"
          method="POST"
        >
          <input
            type="text"
            name="Tu nombre y/o empresa"
            placeholder="Tu nombre y/o empresa*"
            required
          />
          <input
            type="text"
            name="Correo electronico"
            placeholder="Correo electronico*"
            required
          />
          <input type="text" name="Producto" placeholder="Producto*" required />
          <input type="text" name="Teléfono" placeholder="Teléfono" />
          <input
            type="text"
            name="¿Cuál fue tu experiencia?"
            placeholder="¿Cuál fue tu experiencia?*"
            required
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}

function FormBodyBolsaDeTrabajo({ jobs }) {
  return (
    <section className={styles.formQuejas}>
      <div className={styles.form}>
        <h1>PROCESOS DE SELECCIÓN</h1>
        <div className={styles.searchMenu}>
          <input placeholder="Buscar empleo" />
          <Image src={icon} alt="icon" width={20} height={20} />
        </div>
        <div className={styles.jobList}>
          {jobs.map((job, i) => (
            <div key={i} className={styles.job}>
              <div>
                <h6>{job.title}</h6>
                <p>{job.place}</p>
              </div>
              <span>
                <Image src={eyeIcon} alt="icon" width={20} height={20} />
                Ver empleo
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
