"use client";
import React from "react";
import styles from "./inovakNews.module.css";
import Image from "next/image";
import background from "../../../../../public/innovak-news/background.png";

import comunik1 from "../../../../../public/innovak-news/comunik1.png";
import comunik2 from "../../../../../public/innovak-news/comunik2.png";
import comunik3 from "../../../../../public/innovak-news/comunik3.png";
import comunik4 from "../../../../../public/innovak-news/comunik4.png";
import comunik5 from "../../../../../public/innovak-news/comunik5.png";

import imgInnovakNews1 from "../../../../../public/inicio/innovakNews1.png";
import imgInnovakNews2 from "../../../../../public/inicio/innovakNews2.png";
import imgInnovakNews3 from "../../../../../public/inicio/innovakNews3.png";

import headerImg from "../../../../../public/innovak-news/header.svg";
import Link from "next/link";

import localFont from "next/font/local";
const futura = localFont({
  src: "../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

export default function ContactPageClient({ texts }) {
  const [index, setIndex] = React.useState(0);

  var comunikImages = [
    {
      link: "https://www.innovakglobal.com/revistacomunik/#flipbook-df_19699/1/",
      img: comunik1,
    },
    {
      link: "https://www.innovakglobal.com/revistacomunik/#flipbook-df_10173/1/",
      img: comunik2,
    },
    {
      link: "https://www.innovakglobal.com/revistacomunik/#flipbook-df_10178/1/",
      img: comunik3,
    },
    {
      link: "https://www.innovakglobal.com/revistacomunik/#flipbook-df_10181/1/",
      img: comunik4,
    },
    {
      link: "https://www.innovakglobal.com/revistacomunik/#flipbook-df_16790/1/",
      img: comunik5,
    },
  ];

  var content = [
    {
      title: "Sistema radicular de la vid",
      text: `El optimo de desarrollo del sistema radicular de la vid es primordial para el logro del potencial de producción, tanto en rendimiento como en calidad. Desde la formación de la parra, después de ser plantada en el suelo, la actividad radicular determina, en gran medida, la capacidad para su formación.

      Una vez que el viñedo entra en producción la raíz influye en la calidad y rendimiento por tres razones (Ruiz, 2005): La primera es que la raíces son el principal factor en el balance de carbohidratos en la vid. La segunda que proveen de agua y nutrientes para el crecimiento aéreo y producción de frutos. Y la tercera que recogen señales positivas o negativas provenientes de suelo que se trasmiten bioquímicamente a la parte aérea, con repercusión en la fruta.`,
      link: "https://www.innovakglobal.com/sistema-radicular-de-la-vid/#tab-9cfd2d5e3b53d325c13",
      image:
        "https://www.innovakglobal.com/wp-content/uploads/2020/02/WhatsApp-Image-2018-10-01-at-2.22.21-PM-1.jpg",
    },
    {
      title: "Resistencia Sistémica",
      text: "El ataque de insectos y patógenos en plantas ha sido causante de preocupación en las últimas décadas. Es por esto, que se han realizado diversos estudios con el fin de conocer el mecanismo de las plantas que le permiten defenderse de éstos mediante un complejo sistema que incluye múltiples niveles de protección. Los mecanismos de protección que han desarrollado para defenderse de factores bióticos y abióticos son físicos o químicos y constitutiva o inducida. Las barreras físicas consisten en la composición y estructura de la cutícula, tricomas, estomas, pared celular entre otras.  Las barreras químicas constan en producción de taninos, terpenos, resinas alcaloides (antes del ataque de un patógeno). La desventaja de esta forma de defenderse radica en el tiempo de respuesta, es decir, requiere de años de modificaciones evolutivas, generación de genes estructurales para que se dé el cambio en una barrera física o química (5).",
      link: "https://www.innovakglobal.com/resistencia-sistemica/",
      image:
        "https://www.innovakglobal.com/wp-content/uploads/2020/02/2DO-LUGAR-PLAGAS-Y-ENFERMEDADES.jpg",
    },
    {
      title: "Costo de un amarre deficiente y tamaños pequeños de fruto.",
      text: `Dentro de los principales problemas que se presentan en los cultivares de manzana se encuentran la caída de los frutos y el calibre reducido de los mismos al inicio de su desarrollo. Estos problemas son en parte asociados a las variaciones en las condiciones climáticas de las regiones de producción y en parte a problemas que derivan de los diferentes sistemas de manejo de la producción.

      El estado de Chihuahua aporta el 55% de la producción de manzana mexicana, as pérdidas en rendimiento por caída de frutos, ocasionadas por condiciones ambientales adversas, en dicha entidad van de 14% a un 32%. Tomando en cuenta que en 2014 el estado tenía en producción 26,666 hectáreas (SAGARPA).`,
      link: "https://www.innovakglobal.com/costo-de-un-amarre-deficiente-y-tamanos-pequenos-de-fruto/",
      image:
        "https://www.innovakglobal.com/wp-content/uploads/2020/03/Arte-Incas1.jpg",
    },
    {
      title: "Tritagonistas",
      text: `En la primitiva tragedia griega, el personaje único, que dialogaba con el coro y con el corifeo, se llamó protagonista. Esquilo añadió un segundo personaje (deuteragonista o antagonista) y Sófocles un tercero (tritagonista). En el teatro moderno se ha conservado solo la primera denominación con el significado extenso de personaje principal de cualquier obra literaria. Desde el punto de vista literario, se puede hacer una analogía entre una novela y las diferentes interacciones que se pueden llevar a cabo en diferentes sistemas biológicos; por ejemplo, la infección de un patógeno de plantas es considerado el protagonista, ya que dictamina el desarrollo de la planta y en dicho contexto se puede referir a la entrada de un antagónico cuyo papel será el de controlar la acción de patógeno sin  que tenga un impacto     significativo en la planta. Sin embargo, aún no se menciona cual sería el papel de un tercero, el llamado tritagonista.`,
      link: "https://www.innovakglobal.com/tritagonistas/",
      image: `https://www.innovakglobal.com/wp-content/uploads/2020/03/60.png`,
    },
    {
      title: "Sistema Radicular del Esparrágo",
      text: `El espárago presenta un sistema radicular que se va incrementando constantemente siendo este muy desarrollado y el mismo que se va encargando de la fijación, absorción de agua y nutrientes, almacenamiento y circulación (Sánchez y Sánchez, 2009).`,
      link: "https://www.innovakglobal.com/sistema-radicular-del-esparrago/",
      image: `https://www.innovakglobal.com/wp-content/uploads/2020/02/esparragos.png`,
    },
    {
      title: "Dinamica de Floración",
      text: `Causas de deficiente floracion en Mango y Otros Tropicales, Impacto económico (costos) 
      Perú cuenta con 27 mil hectáreas de mango, de las cuales el 80% se encuentran en Piura, mientras que el resto están distribuidas en Lambayeque y Ancash.

      Asimismo el Departamento de Piura cuenta con condiciones de temperaturas durante todo el año generalmente altas. Además está expuesta a Fenómenos Naturales como el fenómeno “El Niño”, el cual causa  un calentamiento anómalo provocando temperaturas ambientales altas, de 3° o más por encima de lo normal y si se prolonga, se produce lluvias en los meses de Verano causando enfermedades y proliferación de plagas en los cultivos.`,
      link: "https://www.innovakglobal.com/dinamica-de-floracion/",
      image: `https://www.innovakglobal.com/wp-content/uploads/2020/03/61-800x680.png`,
    },
    {
      title: "Bioestimulantes l",
      text: `La poblacional a nivel mundial continúa en crecimiento, se espera que la población del mundo en el 2030 supere los 8 mil millones de personas y más de 9 mil millones de personas en 2050. Una población más grande requiere más alimento, y más alimento significa más agricultura.

      La agricultura es un sector de primario global que seguirá siendo crítica para la economía mundial en general. La superficie cultivada crecerá muy modestamente en los próximos años, por lo cual la demanda será que los productores sean más eficientes en la misma superficie de suelo. Al mismo tiempo, los cultivos seguirán siendo objeto de climas impredecibles,`,
      link: "https://www.innovakglobal.com/bioestimulantes-l/",
      image: `https://www.innovakglobal.com/wp-content/uploads/2020/03/62.1.png`,
    },
    {
      title: "Estrés",
      text: `¿Cuánto pesa este vaso con agua?”

      En la fábula de “¿Cuánto pesa este  vaso con agua?”, se concluye como moraleja que no importa el peso del vaso, sino cuánto tiempo puedo sostenerlo con mi brazo. Trasladando esta fábula al entorno que nos atañe supongamos lo siguiente;  el vaso con agua es el estrés y las plantas del cultivo es el brazo. De este último, la condición fisiológica y su manejo determinaran el tiempo y la forma en que puede resistir y afrontar la tensión estresante y en consecuencia el efecto de la tensión sobre el rendimiento.`,
      link: "https://www.innovakglobal.com/estres/",
      image: `https://www.innovakglobal.com/wp-content/uploads/2020/03/INTRODUCCION-2.jpg`,
    },
  ];

  var pagesInfo = [
    {
      header: "INNOVAK NEWS",
      title: "POSTERS E INFOGRAFÍAS",
      subtitle: "",
      image: background.src,
      content: <RevistaInnovak images={comunikImages} />,
    },
    {
      header: "ARTÍCULOS",
      title: "ARTÍCULOS",
      subtitle: "",
      image: background.src,
      content: <Ensayos content={content} />,
    },
    // {
    //   header: "ENSAYOS",
    //   title: "ENSAYOS",
    //   subtitle: "",
    //   image: background.src,
    //   content: <RevistaInnovak images={comunikImages} />,
    // },
    // {
    //   header: "REVISTA COMUNIK",
    //   title: "REVISTA COMUNIK",
    //   subtitle: "",
    //   image: background.src,
    //   content: <RevistaInnovak images={comunikImages} />,
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
        <Image
          src={headerImg}
          style={{
            maxWidth: "600px",
            width: "100%",
            maxHeight: "125px",
            height: "auto",
            paddingInline: "20px",
          }}
          width={600}
          height={125}
          alt="Innovak news título"
        />
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

function RevistaInnovak({ images }) {
  return (
    <section className={styles.revistaInnovak}>
      <article className={styles.title}>
        <h5>INNOVAK COMUNIK</h5>
        <p>
          Esta revista bimestral es un lugar para compartir muchos de los éxitos
          del equipo de Innovak Global y nace con el objetivo de brindar a los
          lectores una noción y entendimiento de lo que cada área realiza y como
          contribuyen a cumplir nuestro compromiso de alimentar sanamente al
          planeta a través de las propuestas de valor con las que contamos
        </p>
      </article>
      <div className={styles.revistasWrapper}>
        {images.map((object, i) => (
          <Image
            style={{ cursor: "pointer" }}
            onClick={() => window.open(object.link, "_blank")}
            key={i}
            src={object.img}
            alt="comunik"
            width={320}
            height={480}
          />
        ))}
      </div>
    </section>
  );
}

function Ensayos({ content }) {
  return (
    <section className={styles.ensayosWrapper}>
      {content.map((item, index) => (
        <div key={index} className={styles.newsItem}>
          <Image src={item.image} alt="Innovak News" width={150} height={150} />
          <div className={styles.newsItemFloating}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <Link href={item.link} style={{ width: "100%" }}>
              <div className={styles.newsButtonOutlined}>Ver más</div>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
