"use client";
import React, { useState } from "react";
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
      title: "Ingeniero Desarrollo Sistemas Internos",
      place: "Chihuahua, Chihuahua",
      link: "https://factork.buk.mx/seleccions/b79bbc7fe3f6b0856f9afcd078d409d5a5c990633be16df780ec108c2e0e2a76a8664c1ad29db78e9eab04c054598d1f5eb4997d94ba0655e65dfd9f1abbfd17/postular?referrer=portal",
    },
    {
      title: "Almacenista Tool Crib",
      place: "Chihuahua, Chihuahua",
      link: "https://factork.buk.mx/seleccions/cb66092f1334316295072e3db82ad31949608c3b26a6e01d1772b98772f925e973f534c0efe019ff34895eb75bcf80b81133487a2830cae661937de06391a7b0/postular?referrer=portal",
    },
    {
      title: "Almacenista",
      place: "Chihuahua, Chihuahua",
      link: "https://factork.buk.mx/seleccions/5b41ecee187ec43efa2d2ba5cd60a3d27b45f7fccf05f2a2c7705be8f5ba70a5a8a26960f41936012505d22fc47f0b419483d868e3a22900acfd3b76472c554d/postular?referrer=portal",
    },
    {
      title: "Operadores de Producción",
      place: "Chihuahua, Chihuahua",
      link: "https://factork.buk.mx/seleccions/bdde41fdab8a674044a9652b9cc35a6adb1521e74a245ca3e01611c782fa72cf4cb4a64441f2a9ff488d600f53c1a69fbd05bd77007518826fd5657edc739cc7/postular?referrer=portal",
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
      content: <FormBodyDenuncia />,
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
    </>
  );
}

function FormBody() {
  return (
    <section className={allStyles.formWrapper} style={{
      marginTop: "20px"
    }}>
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

function FormBodyDenuncia() {
  return (
    <section className={styles.denunciaEtica}>
      <iframe
        src="https://innovak.lineaetica.com.mx/contents/denunciar-ahora?l=es#"
        frameBorder="0"
      ></iframe>
    </section>
  );
}

function FormBodyBolsaDeTrabajo({ jobs }) {
  const [filtredJobs, setFiltredJobs] = useState(jobs);
  return (
    <section
      className={styles.formQuejas}
      style={{
        minHeight: "830px",
      }}
    >
      <div className={styles.form}>
        <h1>PROCESOS DE SELECCIÓN</h1>
        <div className={styles.searchMenu}>
          <input
            placeholder="Buscar empleo"
            onChange={() => {
              setFiltredJobs(
                jobs.filter((job) =>
                  job.title
                    .toLowerCase()
                    .includes(event.target.value.toLowerCase())
                )
              );
            }}
          />
          <Image src={icon} alt="icon" width={20} height={20} />
        </div>
        <div className={styles.jobList}>
          {filtredJobs.map((job, i) => (
            <div key={i} className={styles.job}>
              <div>
                <h6>{job.title}</h6>
                <p>{job.place}</p>
              </div>
              <span>
                <Image src={eyeIcon} alt="icon" width={20} height={20} />
                <a href={job.link} target="_blank">
                  Ver empleo
                </a>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
