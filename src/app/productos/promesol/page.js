"use client";
import "swiper/css";
import "swiper/css/navigation";

import styles from "../../page.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Hind_Vadodara } from "next/font/google";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ClipLoader from "react-spinners/ClipLoader";

import imgDesarrolloRadicular from "../../../../public/images/beneficios/desarrollo_radicular.png";
import imgInfiltracion from "../../../../public/images/beneficios/infiltración.png";
import imgMalformacion from "../../../../public/images/beneficios/malformaciones.png";
import imgLaboreos from "../../../../public/images/beneficios/laboreo.png";
import imgGoteo from "../../../../public/images/specs/goteo.png";
import imgDrench from "../../../../public/images/specs/drench.png";
import imgRodado from "../../../../public/images/specs/rodado.png";
import imgProductGalon from "../../../../public/images/rootSection/galon.png";
import imgEcca from "../../../../public/images/rootSection/tecnologiaEcca.png";
import imgRoot from "../../../../public/images/rootSection/tecnologiaRaiz.png";
import darkLogo from "../../../../public/images/logo_dark.png";
import infoImportanciaSuelo from "../../../../public/images/infografias/importanciaSuelos.jpg";
import infoSalinidadSuelos from "../../../../public/images/infografias/salinidadSuelos.jpg";
import infoSueloCompacto from "../../../../public/images/infografias/sueloCompacto.jpg";

const Hind_Vadodaraf = Hind_Vadodara({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Promesol() {
  const [dataTestimonials, setDataTestimonials] = useState(null);
  const [dataWorks, setDataWorks] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  //Sections
  const [firstSection, setFirstSection] = useState(null);
  const [secondSection, setSecondSection] = useState(null);
  const [thirdSection, setThirdSection] = useState(null);
  const [fourthSection, setFourthSection] = useState(null);

  useEffect(() => {
    Promise.all([
      getFirstSection(),
      getSecondSection(),
      getThirdSection(),
      getFourthSection(),
      getTestimonials(),
      getWorks(),
    ]).finally(() => {
      setLoading(false);
    });
  }, []);

  const getFirstSection = async () => {
    const data = await fetch("https://www.innovakglobal.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query NewQuery {
          categories(where: {name: "promesol5x_page"}) {
            nodes {
              posts(where: {title: "First_section"}) {
                edges {
                  node {
                    id
                    title
                    content
                  }
                }
              }
            }
          }
        }`,
      }),
    });

    const post = await data.json();
    const rawSection =
      post.data.categories.nodes[0].posts.edges[0].node.content.replace(
        /\n+/g,
        ""
      );
    var titulo = rawSection.split("<titulo>")[1].split("<titulo>")[0];
    var texto = rawSection.split("<texto>")[1].split("<texto>")[0];
    var cta = rawSection.split("<cta>")[1].split("<cta>")[0];

    var firstSection = {
      titulo: titulo,
      texto: texto,
      cta: cta,
    };
    setFirstSection(firstSection);
  };

  const getSecondSection = async () => {
    const data = await fetch("https://www.innovakglobal.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query NewQuery {
          categories(where: {name: "promesol5x_page"}) {
            nodes {
              posts(where: {title: "Second_section"}) {
                edges {
                  node {
                    id
                    title
                    content
                  }
                }
              }
            }
          }
        }`,
      }),
    });

    const post = await data.json();
    const rawSection =
      post.data.categories.nodes[0].posts.edges[0].node.content.replace(
        /\n+/g,
        ""
      );
    var titulo = rawSection.split("<titulo>")[1].split("<titulo>")[0];
    var texto = rawSection.split("<texto>")[1].split("<texto>")[0];
    var video = rawSection.split("<video>")[1].split("<video>")[0];

    var SecondSection = {
      titulo: titulo,
      texto: texto,
      video: video,
    };
    setSecondSection(SecondSection);
  };

  const getThirdSection = async () => {
    const data = await fetch("https://www.innovakglobal.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query NewQuery {
          categories(where: {name: "promesol5x_page"}) {
            nodes {
              posts(where: {title: "Third_section"}) {
                edges {
                  node {
                    id
                    title
                    content
                  }
                }
              }
            }
          }
        }`,
      }),
    });

    const post = await data.json();
    const rawSection =
      post.data.categories.nodes[0].posts.edges[0].node.content.replace(
        /\n+/g,
        ""
      );
    var titulo = rawSection.split("<titulo>")[1].split("<titulo>")[0];
    var texto = rawSection.split("<texto>")[1].split("<texto>")[0];
    var beneficio1 = rawSection
      .split("<beneficio1>")[1]
      .split("<beneficio1>")[0];
    var beneficio2 = rawSection
      .split("<beneficio2>")[1]
      .split("<beneficio2>")[0];
    var beneficio3 = rawSection
      .split("<beneficio3>")[1]
      .split("<beneficio3>")[0];
    var beneficio4 = rawSection
      .split("<beneficio4>")[1]
      .split("<beneficio4>")[0];

    var ThirdSection = {
      titulo: titulo,
      texto: texto,
      beneficio1: beneficio1,
      beneficio2: beneficio2,
      beneficio3: beneficio3,
      beneficio4: beneficio4,
    };
    setThirdSection(ThirdSection);
  };

  const getFourthSection = async () => {
    const data = await fetch("https://www.innovakglobal.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query NewQuery {
          categories(where: {name: "promesol5x_page"}) {
            nodes {
              posts(where: {title: "Fourth_section"}) {
                edges {
                  node {
                    id
                    title
                    content
                  }
                }
              }
            }
          }
        }`,
      }),
    });

    const post = await data.json();
    const rawSection =
      post.data.categories.nodes[0].posts.edges[0].node.content.replace(
        /\n+/g,
        ""
      );
    var titulo = rawSection.split("<titulo>")[1].split("<titulo>")[0];
    var beneficio = rawSection.split("<beneficio>")[1].split("<beneficio>")[0];
    var beneficio2 = rawSection
      .split("<beneficio2>")[1]
      .split("<beneficio2>")[0];
    var beneficio3 = rawSection
      .split("<beneficio3>")[1]
      .split("<beneficio3>")[0];
    var texto = rawSection.split("<texto>")[1].split("<texto>")[0];
    var titulo2 = rawSection.split("<titulo2>")[1].split("<titulo2>")[0];
    var texto2 = rawSection.split("<texto2>")[1].split("<texto2>")[0];

    var FourthSection = {
      titulo: titulo,
      texto: texto,
      beneficio: beneficio,
      beneficio2: beneficio2,
      beneficio3: beneficio3,
      texto: texto,
      titulo2: titulo2,
      texto2: texto2,
    };
    setFourthSection(FourthSection);
  };

  const getTestimonials = async () => {
    const data = await fetch("https://www.innovakglobal.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query NewQuery {
          categories(where: {name: "promesol5x_page"}) {
            nodes {
              posts(where: {title: "Testimonios_carrousel"}) {
                edges {
                  node {
                    id
                    title
                    content
                  }
                }
              }
            }
          }
        }`,
      }),
    });
    const post = await data.json();
    const rawTestimonials =
      post.data.categories.nodes[0].posts.edges[0].node.content.replace(
        /\n+/g,
        ""
      );
    const testimonials = rawTestimonials.split("<p>separator</p>");
    const carrouselItems = [];
    testimonials.forEach((testimonial) => {
      var img = testimonial.split("<img>")[1].split("<img>")[0];
      var lugar = testimonial.split("<lugar>")[1].split("<lugar>")[0];
      var texto = testimonial.split("<texto>")[1].split("<texto>")[0];
      var nombre = testimonial.split("<nombre>")[1].split("<nombre>")[0];
      var link = testimonial.split("<link>")[1].split("<link>")[0];
      videos.push(link);
      carrouselItems.push({
        img: img,
        lugar: lugar,
        texto: texto,
        nombre: nombre,
        link: link,
      });
    });
    setDataTestimonials(carrouselItems);
    setVideos(videos);
  };

  const getWorks = async () => {
    const data = await fetch("https://www.innovakglobal.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query NewQuery {
          categories(where: {name: "promesol5x_page"}) {
            nodes {
              posts(where: {title: "Works_carrousel"}) {
                edges {
                  node {
                    id
                    title
                    content
                  }
                }
              }
            }
          }
        }`,
      }),
    });

    const post = await data.json();
    const rawWorks =
      post.data.categories.nodes[0].posts.edges[0].node.content.replace(
        /\n+/g,
        ""
      );
    const testimonials = rawWorks.split("<p>separator</p>");
    const carrouselItems = [];
    testimonials.forEach((testimonial) => {
      var img = testimonial.split("<img>")[1].split("<img>")[0];
      var titulo = testimonial.split("<titulo>")[1].split("<titulo>")[0];
      var texto = testimonial.split("<texto>")[1].split("<texto>")[0];
      var link = testimonial.split("<link>")[1].split("<link>")[0];
      carrouselItems.push({
        img: img,
        titulo: titulo,
        texto: texto,
        link: link,
      });
    });
    setDataWorks(carrouselItems);
  };

  return <>{isLoading ? <MainLoading /> : <MainBody />}</>;

  function MainBody() {
    return (
      <div className={styles.mainWrapper}>
        <style jsx global>
          {`
            html {
              font-family: ${Hind_Vadodaraf.style.fontFamily};
            }
          `}
        </style>
        <main className={styles.main}>
          <section id="inicio" className={styles.imageBannerContainer}>
            <video autoPlay muted loop controls className={styles.imageBanner}>
              <source src="/videos/portada.mp4" />
            </video>
          </section>

          <div className={styles.whiteGradient}>
            <section id="raices" className={styles.rootContainer}>
              <RootBody firstSection={firstSection} />
            </section>

            <section className={styles.presenceContainer} id="presencia">
              <PresentsBody secondSection={secondSection} />
            </section>
          </div>

          <div className={styles.blueGradient}>
            <section className={styles.beneficiosContainer} id="oferta">
              <BenefitsBody thirdSection={thirdSection} />
            </section>
            <section className={styles.specsWrapper} id="productos">
              <SpecsBody fourthSection={fourthSection} />
            </section>
            <section id="news" className={styles.reviewsWrapper}>
              <NewsCarrousel videos={videos} />
            </section>
          </div>
          <section id="iandd" className={styles.technicWorks}>
            <h1>Trabajos técnicos</h1>
            <WorksCarrousel />
          </section>
          <section id="network" className={styles.formWrapper}>
            <FormBody />
          </section>
        </main>
      </div>
    );
  }

  function MainLoading() {
    return (
      <div className={styles.mainLoadingWrapper}>
        <div>
          <Image src={darkLogo} alt="logo" />
          <ClipLoader color="#FFFFFF" size={12} />
        </div>
      </div>
    );
  }

  function RootBody({ firstSection }) {
    return (
      <>
        <div className={styles.rootInfo}>
          <div className={styles.rootText}>
            <h1>{firstSection.titulo}</h1>
            <hr></hr>
            <p>{firstSection.texto}</p>
          </div>
          <div className={styles.rootTechnology}>
            <h4>Tecnologías</h4>
            <a href="#network">{firstSection.cta}</a>
          </div>

          <div className={styles.rootLogo}>
            <Image
              src={imgRoot}
              alt="Logo root"
              style={{
                width: "52%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            <Image
              src={imgEcca}
              alt="Logo ecca"
              style={{
                width: "40%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        <div className={styles.rootImage}>
          <Image
            priority={false}
            src={imgProductGalon}
            alt="Imagen de presentacion de producto"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </>
    );
  }

  function PresentsBody({ secondSection }) {
    return (
      <>
        <div>
          <h1>{secondSection.titulo}</h1>
          <p>{secondSection.texto}</p>
        </div>
        <div className={styles.presenceVideo}>
          <video autoPlay loop controls muted>
            <source src="/videos/PromesolAniversario.mp4" />
          </video>
        </div>
      </>
    );
  }

  function BenefitsBody({ thirdSection }) {
    return (
      <>
        <div className={styles.textContainer}>
          <h1>{thirdSection.titulo}</h1>
          <p>{thirdSection.texto}</p>
        </div>
        <div className={styles.imagesContainer}>
          <div className={styles.divider}> </div>
          <Benefit
            image={imgDesarrolloRadicular}
            text={thirdSection.beneficio1}
          />
          <div className={styles.divider}> </div>
          <Benefit image={imgInfiltracion} text={thirdSection.beneficio2} />
          <div className={styles.divider}> </div>
          <Benefit image={imgMalformacion} text={thirdSection.beneficio3} />
          <div className={styles.divider}> </div>
          <Benefit image={imgLaboreos} text={thirdSection.beneficio4} />
          <div className={styles.divider}> </div>
        </div>
      </>
    );
  }

  function Benefit({ image, text }) {
    return (
      <div className={styles.imageWrapper}>
        <div className={styles.background}>
          <Image src={image} alt="Beneficio" />
        </div>
        <p>{text}</p>
      </div>
    );
  }

  function SpecsBody({ fourthSection }) {
    const [showInfographics, setShowInfographics] = useState(false);
    const [infoIndex, setInfoIndex] = useState(0);
    const images = [
      { obj: infoSueloCompacto, name: "sueloCompacto.jpg" },
      { obj: infoSalinidadSuelos, name: "salinidadSuelos.jpg" },
      { obj: infoImportanciaSuelo, name: "importanciaSuelos.jpg" },
    ];
    const handleDownloadClick = (index) => {
      const imageUrl = `/images/infografias/${images[index].name}`;
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = images[index].name;
      link.click();
    };
    const handleLinkClick = (index) => {
      setInfoIndex(index);
      setShowInfographics(true);
    };
    return (
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className={styles.mainContainer}
      >
        <h1>{fourthSection.titulo}</h1>
        <div className={styles.specsImagesRow}>
          <div className={styles.imageRow}>
            <Image src={imgGoteo} alt="especificaciones del producto" />
            <h6>{fourthSection.beneficio}</h6>
          </div>
          <div className={styles.imageRow}>
            <Image src={imgDrench} alt="especificaciones del producto" />
            <h6>{fourthSection.beneficio2}</h6>
          </div>
          <div className={styles.imageRow}>
            <Image src={imgRodado} alt="especificaciones del producto" />
            <h6>{fourthSection.beneficio3}</h6>
          </div>
        </div>
        <p>
          Promesol®5X se puede aplicar en todos los cultivos a través de
          sistemas de riego por goteo, aspersión, drench o por gravedad dirigido
          a la zona radicular. Se recomienda agitar el envase, medir la cantidad
          a aplicar en un recipiente graduado, verter en el tanque y agitar
          antes de inyectar en el segundo tercio del tiempo de riego. También se
          puede aplicar por gravedad, directamente en la toma de agua o diluido
          para una distribución uniforme en el terreno.
        </p>
        <h2>{fourthSection.titulo2}</h2>
        <p>{fourthSection.texto2}</p>
        <h5>Infografias</h5>
        <div className={styles.infografiasRowWrapper}>
          <div className={styles.infografiasRow}>
            <p
              onClick={() => {
                handleLinkClick(0);
              }}
            >
              ¿Qué es un suelo compactado?
            </p>
            <p>
              Puede ser que la problemática en tu cultivo, sea la compactación
              de los suelos. ¡Conoce mas!
            </p>
          </div>
          <div className={styles.infografiasRow}>
            <p
              onClick={() => {
                handleLinkClick(1);
              }}
            >
              ¿Salinidad en tu suelo?
            </p>
            <p>
              Sabias que puedes corregir problemáticas acondicionando tu suelo,
              aprende como.
            </p>
          </div>
          <div className={styles.infografiasRow}>
            <p
              onClick={() => {
                handleLinkClick(2);
              }}
            >
              ¿Cuál es la importancia del suelo en los cultivos?
            </p>
            <p>
              Aprende sobre la importancia del suelo en el establecimiento y
              desarrollo de tus cultivos
            </p>
          </div>
        </div>
        <p style={{ textAlign: "center", marginTop: 30 }}>
          Da click en los links para descargar
        </p>
        <div
          onClick={() => {
            setShowInfographics(false);
          }}
          className={styles.infographicsContainer}
          style={{ display: showInfographics ? "grid" : "none" }}
        >
          <div className={styles.infoWrapper}>
            <Image alt="infografia" src={images[infoIndex].obj} />
            <p onClick={() => handleDownloadClick(infoIndex)}>Descargar</p>
          </div>
        </div>
      </motion.div>
    );
  }

  function NewsCarrousel({ videos }) {
    const [showVideos, setShowVideos] = useState(false);
    const [videoIndex, setVideoIndex] = useState(0);
    // const videos = [
    //   `<iframe style={{height: '100%', width: '100%'}} src="https://www.youtube.com/embed/DHsCqyxqwZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    //   `<iframe style={{height: '100%', width: '100%'}} src="https://www.youtube.com/embed/ni78a3IFzwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    //   `<iframe style={{height: '100%', width: '100%'}} src="https://www.youtube.com/embed/ZkRGuKr0acM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    //   `<iframe style={{height: '100%', width: '100%'}} src="https://www.youtube.com/embed/M3vX4dqk_L4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    // ];
    const handleLinkClick = (index) => {
      setVideoIndex(index);
      setShowVideos(true);
    };
    return (
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          onClick={() => {
            setShowVideos(false);
          }}
          className={styles.videosContainer}
          style={{ display: showVideos ? "grid" : "none" }}
        >
          <div className={styles.videoWrapper}>
            <div>
              <iframe
                style={{ height: "100%", width: "100%" }}
                src={videos[videoIndex]}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div
          className={styles.arrows}
          id="arrowLeft"
          style={{
            padding: 20,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="36"
            viewBox="0 0 16 36"
            fill="none"
          >
            <path d="M15 1L1 18L15 35" stroke="#00318D" />
          </svg>
        </div>
        <Swiper
          loop={true}
          autoplay={{
            delay: 5,
            disableOnInteraction: false,
          }}
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{ nextEl: "#arrowRight", prevEl: "#arrowLeft" }}
        >
          {dataTestimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index + testimonial.img}
              className={styles.reviewContainer}
            >
              <Image
                width={150}
                height={150}
                src={testimonial.img}
                alt="review"
              />
              <p>{testimonial.lugar}</p>
              <p>{testimonial.texto}</p>
              <h6>{testimonial.nombre}</h6>
              <a
                onClick={() => {
                  handleLinkClick(index);
                }}
              >
                Conoce su testimonio
              </a>
            </SwiperSlide>
          ))}
          {/* 
          <SwiperSlide className={styles.reviewContainer}>
            <Image src={imgReviewIvanQuiñonez} alt="review" />
            <p>Navolato, Sinaloa</p>
            <p>
              El Ing. Iván Quiñonez, nos habla de las dificultades de trabajar
              con suelos compactados y comparte su experiencia utilizando el
              Promesol 5X. Comenta como lo ha ayudado a mantener su cultivo en
              óptimo desarrollo y la importancia de tener un suelo manejable.
            </p>
            <h6>Ing. Iván Quiñónez Medrano</h6>
            <a
              onClick={() => {
                handleLinkClick(1);
              }}
            >
              Conoce su testimonio
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.reviewContainer}>
            <Image src={imgReviewJorgeAdrian} alt="review" />
            <p>Culiacán, Sinaloa</p>
            <p>
              El Ing. Jorge Adrian, nos platica cómo ha afrontado diferentes
              problemáticas y cómo es que ha conocido a innovak global y la
              aplicación promesol que le ayuda en el mejoramiento de la
              estructura del suelo además de las condiciones de aireación
              beneficiando en su cultivo y productividad.
            </p>
            <h6>Ing. Jorge Adrian Ibarra Avila</h6>
            <a
              onClick={() => {
                handleLinkClick(2);
              }}
            >
              Conoce su testimonio
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.reviewContainer}>
            <Image src={imgReviewReynaldoCabrera} alt="review" />
            <p>Michoacán México</p>
            <p>
              Conoce la historia de éxito de promesol en el campo al cual de
              llamaban “las piedras” en michoacán México. El Agricultor Reynaldo
              Cabrera nos platica cómo fue que utilizó Promesol, observó su
              efecto y continuar utilizándolo hasta la fecha.
            </p>
            <h6>Agricultor. Reynaldo Cabrera Oropreza </h6>
            <a
              onClick={() => {
                handleLinkClick(3);
              }}
            >
              Conoce su testimonio
            </a>
          </SwiperSlide> */}
        </Swiper>
        <div
          className={styles.arrows}
          id="arrowRight"
          style={{
            padding: 20,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="36"
            viewBox="0 0 16 36"
            fill="none"
          >
            <path d="M1 35L15 18L1 1" stroke="#00318D" />
          </svg>
        </div>
      </motion.div>
    );
  }

  function WorksCarrousel() {
    const handleDownloadClick = (source) => {
      const imageUrl = source;
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "document.pdf";
      link.click();
    };

    return (
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className={styles.arrows}
          id="arrowLeftWorks"
          style={{
            padding: 20,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="36"
            viewBox="0 0 16 36"
            fill="none"
          >
            <path d="M15 1L1 18L15 35" stroke="#00318D" />
          </svg>
        </div>
        <Swiper
          autoplay={true}
          loop={true}
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{ nextEl: "#arrowRightWorks", prevEl: "#arrowLeftWorks" }}
        >
          {dataWorks.map((work, index) => (
            <SwiperSlide
              key={index + work.titulo}
              className={styles.workContainer}
            >
              <div>
                <h1>{work.titulo}</h1>
                <span></span>
                <p>{work.texto}</p>
                <h6
                  onClick={() => {
                    handleDownloadClick(work.link);
                  }}
                >
                  Conocer más
                </h6>
              </div>
              <Image width={10} height={10} src={work.img} alt="review" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={styles.arrows}
          id="arrowRightWorks"
          style={{
            padding: 20,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="36"
            viewBox="0 0 16 36"
            fill="none"
          >
            <path d="M1 35L15 18L1 1" stroke="#00318D" />
          </svg>
        </div>
      </motion.div>
    );
  }

  function FormBody() {
    const handleDownloadClick = () => {
      const doc = `/fichaTecnica.pdf`;
      const link = document.createElement("a");
      link.href = doc;
      link.download = "promesol5x_FichaTecnica.pdf";
      link.click();
    };
    return (
      <>
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className={styles.ficha}
        >
          <h1>Obtén la ficha técnica</h1>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path d="M16.0695 5.35645V24.997" stroke="black" />
              <path
                d="M7.14197 16.0693L16.0695 24.9968L24.997 16.0693"
                stroke="black"
              />
              <circle cx="16.0695" cy="16.0695" r="15.5695" stroke="black" />
            </svg>
            <button
              onClick={() => {
                handleDownloadClick();
              }}
            >
              Descargar ficha técnica
            </button>
          </div>
        </motion.div>
        <div className={styles.form}>
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
            <input type="text" name="Cultivo" placeholder="Cultivo" />
            <input type="text" name="País" placeholder="País*" required />
            <input type="text" name="Estado" placeholder="Estado*" required />
            <input
              type="text"
              name="Localidad"
              placeholder="Localidad*"
              required
            />
            <h5>¿Cómo podemos ayudarte?</h5>
            <div className={styles.checkboxWrapper}>
              <input
                type="radio"
                id="uno"
                name="Servicio"
                value="Información de distribuidores"
              />
              <label htmlFor="uno">Información de distribuidores</label>
            </div>
            <div className={styles.checkboxWrapper}>
              <input
                type="radio"
                id="dos"
                name="Servicio"
                value="Asesoría técnica"
              />
              <label htmlFor="dos">Asesoría técnica</label>
            </div>
            <div className={styles.checkboxWrapper}>
              <input
                type="radio"
                id="tres"
                name="Servicio"
                value="Información de producto"
              />
              <label htmlFor="tres">Información de producto</label>
            </div>
            <input
              type="text"
              name="Producto/Problemática"
              placeholder="Producto/Problemática*"
              required
            />
            <textarea name="Mensaje" placeholder="Tu mensaje"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </>
    );
  }
}
