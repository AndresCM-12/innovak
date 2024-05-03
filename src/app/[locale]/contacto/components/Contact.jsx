"use client";
import React, { useState } from "react";

import styles from "./contacto.module.css";
import allStyles from "../../page.module.css";
import Image from "next/image";

import icon from "../../../../../public/contacto/search.png";
import eyeIcon from "../../../../../public/contacto/eye.svg";

import localFont from "next/font/local";
const futura = localFont({
  src: "../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

export default function ContactPageClient({ info }) {
  console.log(info);
  var jobs = info.bolsaTrabajo.trabajos;

  var pagesInfo = [
    {
      header: info.contacto.titulo,
      title: info.info.contactoTitulo,
      subtitle: info.contacto.subTitulo,
      image: info.contacto.imagenFondo,
      content: <FormBody info={info.contacto.contacto} />,
      hash: "contacto",
    },
    {
      header: info.bolsaTrabajo.titulo,
      title: info.info.bolsaTrabajoTitulo,
      subtitle: info.bolsaTrabajo.subTitulo,
      image: info.bolsaTrabajo.imagenFondo,
      content: <FormBodyBolsaDeTrabajo jobs={jobs} info={info.bolsaTrabajo} />,
      hash: "bolsa-de-trabajo",
    },
    {
      header: info.buzonQuejas.titulo,
      title: info.info.buzonDeQuejasTitulo,
      subtitle: "",
      image: info.buzonQuejas.imagenFondo,
      content: <FormBodyQuejas info={info.buzonQuejas.fomrulario} />,
      hash: "buzon-de-quejas",
    },
    {
      header: info.denunciaEtica.titulo,
      title: info.info.denuncaEticaTitulo,
      subtitle: "",
      image: info.denunciaEtica.imagenFondo,
      content: <FormBodyDenuncia />,
      hash: "denuncia-etica",
    },
  ];

  const getCurrentIndex = () => {
    const hash = window.location.hash;
    var tempIndex = 0;
    switch (hash) {
      case "#contacto":
        tempIndex = 0;
        break;
      case "#bolsa-de-trabajo":
        tempIndex = 1;
        break;
      case "#buzon-de-quejas":
        tempIndex = 2;
        break;
      case "#denuncia-etica":
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

function FormBody({ info }) {
  return (
    <section
      className={allStyles.formWrapper}
      style={{
        marginTop: "20px",
      }}
    >
      <div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className={allStyles.ficha}
      >
        <h1
          style={{
            marginBottom: "20px",
          }}
        >
          {info.titulo}
        </h1>
        <p className={allStyles.text}>{info.telefono}</p>
        <p className={allStyles.text}>{info.correo}</p>
        <p className={allStyles.text}>{info.direccion}</p>
        <div>
          <Image
            src={info.imagen}
            alt="Innovak News"
            width={300}
            height={400}
            style={{
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <div className={allStyles.form}>
        <p>{info.formulario.requerido}</p>
        <form
          action="https://formsubmit.co/redes@innovakglobal.com"
          method="POST"
        >
          <input
            type="text"
            name="Nombre"
            placeholder={info.formulario.nombre}
            required
          />
          <input
            type="text"
            name="Teléfono de contacto"
            placeholder={info.formulario.telefono}
            required
          />
          <input
            type="text"
            name="Correo electrónico"
            placeholder={info.formulario.correo}
            required
          />
          <input
            type="text"
            name="Nombre de la agrícola o institución"
            placeholder={info.formulario.agricola}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <input
              type="text"
              name="País"
              placeholder={info.formulario.pais}
              required
            />
            <input
              type="text"
              name="Estado"
              placeholder={info.formulario.estado}
              required
            />
          </div>
          <input
            type="text"
            name="Tipo_consulta"
            placeholder={info.formulario.consulta}
            required
          />
          <div className={allStyles.checkboxWrapper}>
            <input
              type="radio"
              id="uno"
              name="privacidad"
              value="Información de distribuidores"
            />
            <label htmlFor="uno">{info.formulario.aviso}</label>
          </div>
          <button type="submit">{info.formulario.boton}</button>
        </form>
      </div>
    </section>
  );
}

function FormBodyQuejas({ info }) {
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
            placeholder={info.nombre}
            required
          />
          <input
            type="text"
            name="Correo electronico"
            placeholder={info.correo}
            required
          />
          <input
            type="text"
            name="Producto"
            placeholder={info.producto}
            required
          />
          <input type="text" name="Teléfono" placeholder={info.telefono} />
          <input
            type="text"
            name="¿Cuál fue tu experiencia?"
            placeholder={info.mensaje}
            required
          />
          <button type="submit">{info.boton}</button>
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

function FormBodyBolsaDeTrabajo({ jobs, info }) {
  const [filtredJobs, setFiltredJobs] = useState(jobs);
  return (
    <section
      className={styles.formQuejas}
      style={{
        minHeight: "830px",
      }}
    >
      <div className={styles.form}>
        <h1>{info.proceso}</h1>
        <div className={styles.searchMenu}>
          <input
            placeholder={info.buscar}
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
                  {job.cta}
                </a>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
