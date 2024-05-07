"use client";
import React from "react";
import styles from "./AvisoDePrivacidad.module.css";

export default function AvisoDePrivacidadPageClient({ info, html }) {
  var pagesInfo = [
    {
      title: info.avisoPrivacidad,
      content: <AvisoDePrivacidad html={html[0]} />,
      hash: "aviso-de-privacidad",
    },
    {
      title: info.clientesYusuarios,
      content: <AvisoDePrivacidad html={html[1]} />,
      hash: "clientes-y-usuarios",
    },
    {
      title: info.empleadosYreclutantes,
      content: <AvisoDePrivacidad html={html[2]} />,
      hash: "empleados-y-reclutantes",
    },
    {
      title: info.avisoParaCámaras,
      content: <AvisoDePrivacidad html={html[3]} />,
      hash: "camaras-de-seguridad",
    },
    {
      title: info.eventosTalleresConferencias,
      content: <AvisoDePrivacidad html={html[4]} />,
      hash: "eventos-talleres-conferencias",
    },
  ];

  const getCurrentIndex = () => {
    const hash = window.location.hash;
    var tempIndex = 0;
    switch (hash) {
      case "#general":
        tempIndex = 0;
        break;
      case "#clientes-y-usuarios":
        tempIndex = 1;
        break;
      case "#empleados-y-reclutantes":
        tempIndex = 2;
        break;
      case "#camaras-de-seguridad":
        tempIndex = 3;
        break;
      case "#eventos-talleres-conferencias":
        tempIndex = 4;
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
      {/* Dynamic Header */}
      <article
        className={styles.header}
        style={{
          backgroundColor: "#002169",
          zIndex: 0,
        }}
      >
        <div>
          <h1>{info.titulo}</h1>
        </div>
        <div className={styles.menu}>
          {pagesInfo.map((page, i) => (
            <div
              key={i + "div"}
              onClick={() => handleNextStep(i)}
              style={{
                cursor: "pointer",
                fontWeight: i === index ? "bold" : "normal",
              }}
            >
              <p
                style={{
                  cursor: "pointer",
                  fontWeight: i === index ? "bold" : "normal",
                }}
              >
                - {page.title}
              </p>
            </div>
          ))}
        </div>
      </article>
      {/* Dynamic Header */}

      {/* Form */}
      {pagesInfo[index].content}
      {/* Form */}
    </>
  );

  function AvisoDePrivacidad({ html }) {
    return (
      <article className={styles.textWrapper}>
        {
          <div
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          ></div>
        }
      </article>
    );
  }
}
