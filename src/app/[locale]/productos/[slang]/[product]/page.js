"use client";
import "swiper/css";
import "swiper/css/navigation";

import styles from "../../../page.module.css";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ClipLoader from "react-spinners/ClipLoader";

import imgDesarrolloRadicular from "../../../../../../public/images/beneficios/desarrollo_radicular.png";
import imgInfiltracion from "../../../../../../public/images/beneficios/infiltración.png";
import imgMalformacion from "../../../../../../public/images/beneficios/malformaciones.png";
import imgLaboreos from "../../../../../../public/images/beneficios/laboreo.png";
import imgGoteo from "../../../../../../public/images/specs/goteo.png";
import imgDrench from "../../../../../../public/images/specs/drench.png";
import imgRodado from "../../../../../../public/images/specs/rodado.png";
import imgProductGalon from "../../../../../../public/images/rootSection/galon.png";
import imgEcca from "../../../../../../public/images/rootSection/tecnologiaEcca.png";
import imgRoot from "../../../../../../public/images/rootSection/tecnologiaRaiz.png";
import darkLogo from "../../../../../../public/images/logo_dark.png";
import infoImportanciaSuelo from "../../../../../../public/images/infografias/importanciaSuelos.jpg";
import infoSalinidadSuelos from "../../../../../../public/images/infografias/salinidadSuelos.jpg";
import infoSueloCompacto from "../../../../../../public/images/infografias/sueloCompacto.jpg";

import atpup from "../../../../../../public/products/productos/atpup.png";
import balox from "../../../../../../public/products/productos/balox.png";
import biocinnafol from "../../../../../../public/products/productos/biocinnafol.png";
import biocrifol from "../../../../../../public/products/productos/biocrifol.png";
import biofitrtu from "../../../../../../public/products/productos/biofitrtu.png";
import brixup from "../../../../../../public/products/productos/brixup.png";
import brotstart from "../../../../../../public/products/productos/brotstart.png";
import carboxyca from "../../../../../../public/products/productos/carboxyca.png";
import carboxyfe from "../../../../../../public/products/productos/carboxyfe.png";
import carboxyk from "../../../../../../public/products/productos/carboxyk.png";
import carboxyl from "../../../../../../public/products/productos/carboxyl.png";
import carboxymicro from "../../../../../../public/products/productos/carboxymicro.png";
import carboxyminl from "../../../../../../public/products/productos/carboxyminl.png";
import carboxyzn from "../../../../../../public/products/productos/carboxyzn.png";
import cuvrekdp from "../../../../../../public/products/productos/cuvrekdp.png";
import exuroot from "../../../../../../public/products/productos/exuroot.png";
import isomatecmflex from "../../../../../../public/products/productos/isomatecmflex.png";
import isomatehswflex from "../../../../../../public/products/productos/isomatehswflex.png";
import medalk from "../../../../../../public/products/productos/medalk.png";
import mycoroot from "../../../../../../public/products/productos/mycoroot.png";
import nemaroot from "../../../../../../public/products/productos/nemaroot.png";
import nutrisorbg from "../../../../../../public/products/productos/nutrisorbg.png";
import nutrisorblraiz from "../../../../../../public/products/productos/nutrisorblraiz.png";
import packhard from "../../../../../../public/products/productos/packhard.png";
import preventup from "../../../../../../public/products/productos/preventup.png";
import promesol5x from "../../../../../../public/products/productos/promesol5x.png";
import promesolca from "../../../../../../public/products/productos/promesolca.png";
import proquelatefe from "../../../../../../public/products/productos/proquelatefe.png";
import proquelatemg from "../../../../../../public/products/productos/proquelatemg.png";
import proquelatemn from "../../../../../../public/products/productos/proquelatemn.png";
import proquelatezn from "../../../../../../public/products/productos/proquelatezn.png";
import radigrow from "../../../../../../public/products/productos/radigrow.png";
import rhizobaccombi from "../../../../../../public/products/productos/rhizobaccombi.png";
import rhizotx from "../../../../../../public/products/productos/rhizotx.png";
import selectoxl from "../../../../../../public/products/productos/selectoxl.png";
import tkroot from "../../../../../../public/products/productos/tkroot.png";
import tseminus from "../../../../../../public/products/productos/tseminus.png";
import vernum from "../../../../../../public/products/productos/vernum.png";

import localFont from "next/font/local";
const futura = localFont({
  src: "../../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

export default function Promesol() {
  const [currentProductIndex, setCurrentProductIndex] = useState();

  const [isLoading, setLoading] = useState(true);

  //Sections
  const [firstSection, setFirstSection] = useState(null);
  const [thirdSection, setThirdSection] = useState(null);
  const [fourthSection, setFourthSection] = useState(null);

  var allProducts = [
    {
      image: isomatecmflex,
      title: "Feromonas ISOMATE CM Flex",
      text: "Feromona de confusión sexual para control de palomilla de manzana",
      description:
        "El dispensador de ISOMATE CM® Flex libera feromona sexual en el área a tratar para afectar la conducta normal del insecto, alterando sus receptores lo que ocasiona el fracaso de los machos en la localización de la hembra. Esto tiene como consecuencia que se evite la reproducción.",
      id: "Feromonas-ISOMATE-CM-Flex",
    },
    {
      image: isomatehswflex,
      title: "Feromonas ISOMATE HSW Flex",
      text: "Feromona de confusión sexual para control de gusano barrenador del ruezno en nogal",
      description:
        "El dispensador de  ISOMATE HSW® Flex   libera feromona sexual en el área a tratar para afectar la conducta normal del insecto, alterando sus receptores lo que ocasiona el fracaso de los machos en la localización de la hembra. Esto tiene como consecuencia que se evite la reproducción.",
      id: "Feromonas-ISOMATE-HSW-Flex",
    },
    {
      image: biocinnafol,
      title: "Biocinnafol",
      text: "Acaricida y fungicida biorracional",
      description:
        "Biocinnafol® es una formulación para el control de plagas y enfermedades. Es activo frente a un amplio numero de especies de hongos y ácaros. Presenta un excelente efecto de choque y una fuerte actividad erradicante. Su múltiple modo de acción permite el control eficaz de las plagas por el reblandecimiento del exoesqueleto,  deshidratación e interferencia bioquímica; al tiempo frena la propagación de las enfermedades, provocando la disrupción de la membrana celular de los hongos.",
      id: "Biocinnafol",
    },
    {
      image: biocrifol,
      title: "Biocrifol",
      text: "Insecticida biorracional",
      description: `Biocrifol® contiene un efecto de choque: El efecto "knock down" presenta grandes ventajas a la hora de disminuir ataques fuertes de insectos plaga. Se bloquean los canales de sodio y potasio con los que se producen alteraciones en la trasmisión del impulso nervioso y las especies tratadas muestran reacciones de hiperactividad y movimientos anormales.`,
      id: "Biocrifol",
    },
    {
      image: preventup,
      title: "Prevent Up",
      text: "Fungicida biorracional preventivo",
      description:
        "Prevent UP® contiene ácidos orgánicos del tipo aromático que inducen la actividad de proteínas relacionadas a la resistencia de ataque por agentes patógenos; aumentando la capacidad de defensa de los cultivos.",
      id: "Prevent-Up",
    },
    {
      image: rhizotx,
      title: "Rhizo TX",
      text: "Consorcio microbiano y biofungicida preventivo de enfermedades radiculares",
      description: `Rhizo TX® es un consorcio microbiano que coloniza eficientemente la rizosfera, protegiéndo la raíz del ataque de hongos fitopatógenos persistentes no fácilmente manejables con agroquímicos. Su formulación contiene ExuRoot®, potencializando la colonización rápida de los microorganismos benéficos, beneficiando en la protección y sanidad radicular.`,
      id: "Rhizo-TX",
    },
    {
      image: undefined,
      title: "Best Cure",
      text: "Fungicida - Bactericida Orgánico y Activador de las Defensas Naturales de la Planta",
      description: `Bestcure® es un fungicida-bactericida orgánico y actividador de las defensas naturales de la planta con una formulación basada en extractos de rutáceas (citrus reticulata y citrus aurantium), rico en ácidos orgánicos y bioflavonoides. Es una herramienta sostenible para el medio ambiente, mantiene la actividad de la dauna auxiliar, libre de residualidad  y sin plazo de seguridad.`,
      id: "Best-Cure",
    },
    {
      image: cuvrekdp,
      title: "Cuvrek DP",
      text: "Fungicida y bactericida biorracional de amplio espectro",
      description: `Los iones de cobre en el hidróxido de cobre detienen la germinación de esporas de hongos y matan bacterias, protegiendo a las plantas de infecciones. Estos iones, disueltos en la película del agua son transportados al sitio de infección de la espora o bacterias, donde pueden ser absorbidos a través de la membrana celular. Una vez dentro de la célula, los iones de cobre destruyen la capacidad de funcionamiento de muchas enzimas. Este efecto de multisitio dificulta a los hongos el desarrollo de resistencia a fungicidas cúpricos. Sin estas enzimas, las esporas no germinan y las bacterias mueren.`,
      id: "Cuvrek-DP",
    },
    {
      image: tkroot,
      title: "TkRoot",
      text: "Fungicida y bactericida biorracional de amplio espectro",
      description: `TK Root® es una formulación que contiene ExuRoot® como ingrediente activo que favorece a la exudación radicular y al establecimiento de los hongos benéficos del género Trichoderma. en la rizosfera. Los hongos contenidos en TK Root® compiten por espacio y alimento, generan una antibiosis contra los hongos fitopatógenos evitando la infección de la raíz; así mismo, ayudan a la generación de raíces sanas que fortalecen al cultivo para tolerar el ataque de hongos fitopatógenos.`,
      id: "TkRoot",
    },
    {
      image: rhizobaccombi,
      title: "Rhizobac Combi",
      text: "Fungicida biorracional preventivo contra enfermedades radiculares",
      description: `Esta formulación contiene ExuRoot® como ingrediente activo que favorece a la exudación radicular y al establecimiento de las bacterias benéficas de Rhizobac Combi en la rizosfera. Las bacterias del género Bacillus (B.cereus var.mycoides, B.megaterium y B. Subtilis) compiten por espacio y alimento, generan una antibiosis contra los hongos fitopatógenos evitando la infección de la raíz; así mismo, generan raíces sanas que fortalecen al cultivo para tolerar el ataque de hongos fitopatógenos.`,
      id: "Rhizobac-Combi",
    },
    {
      image: nemaroot,
      title: "NemaRoot",
      text: "Nematicida biorracional",
      description: `NemaRoot®  es un Nematicida Biorracional formulado a base de conidios del hongo  Paecilomyces lilacinus,  que actua parasitando huevecillos, juveniles, adultos y quistes de nematodos. Nemaroot® contiene Exuroot® que  induce la exudacion de compuestos que favorecen la colonización del hongo paecilomyces lilacinus y de otros microorganismos beneficos nativos que estimulan el desarrollo, actividad y sanidad radicular.`,
      id: "NemaRoot",
    },
    {
      image: medalk,
      title: "Medal",
      text: "Traslocador y surfactante",
      description: `Medal® es una formulación a base de ácidos ECCA Carboxy® que, debido a su acción tensoactiva, humecta una mayor área superficial del tejido de la planta o plaga y la acción traslocadora de los ácidos ECCA Carboxy® de su formulación, favorece el movimiento de los ingredientes activos en los tejidos de conducción. Para mejores resultados, se recomienda incluir en las soluciones de aspersión otros aditivos de diferente acción, como buferizante o adherente según se necesite.`,
      id: "Medal",
    },

    {
      image: mycoroot,
      title: "MycoRoot",
      text: "Bioestimulante inductor de Micorrizas",
      description: `Es un inoculante que está formulado a base de hongos formadores de micorrizas, bacterias fijadoras de nitrógeno y compuestos de carbono que favorecen su establecimiento y multiplicación en la rizósfera incrementando el área de exploración de la raíz para mejorar la absorción nutricional.`,
      id: "MycoRoot",
    },
    {
      image: biofitrtu,
      title: "Biofit Rtu",
      text: "Bioestimulante de la Actividad Rizosférica",
      description: `Biofit® RTU es un bioestimulante que potencializa la Actividad Rizosférica, ayudando a la recuperación y preservación de la fertilidad biológica en suelos agotados de manera integral. Dentro de su formulación contiene gran diversidad de microorganismos benéficos  que permiten optimizar la nutrición y desarrollo,  favoreciendo la salud de las plantas desde la raíz.`,
      id: "Biofit-Rtu",
    },
    {
      image: vernum,
      title: "Vernum",
      text: "Bioestimulante inductor de floración",
      description: `Vernum® Induce la floración, lo que permite un desarrollo del frutal mas uniforme facilitando su manejo; así mismo, favorece a un desarrollo vegetativo y fructífero mas equilibrado. Esta formulación aporta los nutrientes clave para el proceso de reactivación de las yemas, así como coadyuvantes que facilitan el ingreso y aumenta la biodisponibilidad de los mismo en los sitios especificos de acción que inducen la floración y fortalecen el desarrollo inicial de los brotes.`,
      id: "Vernum",
    },
    {
      image: brixup,
      title: "Brix Up",
      text: "Bioestimulante para aumentar grados brix",
      description: `Brix Up® Incrementa la presión del flujo en el floema desde las zonas fuente hacia los frutos, ocasionando mayor traslocación de fotosintatos hacia los frutos.`,
      id: "Brix-Up",
    },
    {
      image: packhard,
      title: "Packhard",
      text: "Bioestimulante para calidad y vida en postcosecha",
      description: `Packhard® es una formulación a base de ácidos ECCA Carboxy®,  que colabora a la producción de frutos de alto valor económico por sus características organolépticas (firmeza, color, sabor, brillo), larga vida de anaquel y baja incidencia de enfermedades de poscosecha.`,
      id: "Packhard",
    },
    {
      image: selectoxl,
      title: "Selecto XL",
      text: "Bioestimulante para el amarre y tamaño de frutos",
      description: `Selecto XL® Actúa en el metabolismo de la planta estimulando los procesos de desarrollo y tamaño de frutos, incrementando su valor económico y proporción de fruta cosechable. Además, retrasa la senescencia del cultivo.`,
      id: "Selecto-XL",
    },
    {
      image: carboxyl,
      title: "Carboxy L",
      text: "Bioestimulante para traslocar azúcares",
      description: `Carboxy® L es una formulación a base ácido ECCA Carboxy®, que provoca una mayor eficiencia en la translocación de fotosintatos hacia los frutos y órganos de almacenamiento, logrando incrementar la concentración de grados brix, acumulación de reservas. Además, puede utilizarse como madurante de caña de azúcar.`,
      id: "Carboxy-L",
    },
    {
      image: atpup,
      title: "Atp Up",
      text: "Antiestresante",
      description: `ATP UP® es una formulación a base de ácidos ECCA Carboxy® nitrógeno y fósforo que promueve la recuperación y el restablecimiento del metabolismo en los cultivos sometidos a estrés (calor, sequía, toxicidad, baja luminosidad o baja temperatura) de manera rápida y prolongada.`,
      id: "Atp-Up",
    },
    {
      image: exuroot,
      title: "Exu-Root",
      text: "Bioestimulante Inductor de Exudados Radiculares",
      description: `Asegura la buena respuesta de las formulaciones de microorganismos benéficos, debido a que optimiza el funcionamiento de la raíz, induciendo la exudación de compuestos que actúan como señalizadores en la rizosfera.`,
      id: "Exu-Root",
    },
    {
      image: brotstart,
      title: "Brot Start",
      text: "Bioestimulante inductor de brotación",
      description: `Brot Start® Aporta los nutrientes clave para el proceso de reactivación de las yemas, así como coadyuvantes que facilitan el ingreso y aumentan la biodisponibilidad de los mismos dentro de los sitos específicos de acción que inducen la brotación y fortalecen el desarrollo inicial de los brotes.`,
      id: "Brot-Start",
    },
    {
      image: balox,
      title: "Balox",
      text: "Bioestimulante contra el estrés salino",
      description: `Contiene ingredientes activos que influyen en el metabolismo de la planta, provocando un incremento en la biosíntesis de ciclitoles específicos que actúan como solutos compatibles para regular los potenciales osmóticos dentro de las células de la raíz y de la planta, que confieren tolerancia al estrés salino.`,
      id: "Balox",
    },
    {
      image: nutrisorbg,
      title: "Nutrisorb G",
      text: "Bioestimulante granulado para la asimilación de nutrientes",
      description: ``,
      id: "Nutrisorb-G",
    },
    {
      image: undefined,
      title: "Nutrisorb XL",
      text: "",
      description: ``,
      id: "Nutrisorb-XL",
    },
    {
      image: nutrisorblraiz,
      title: "Nutrisorb L",
      text: "Bioestimulante para la asimilación de nutrientes",
      description: `Es una formulación a base de ácidos ECCA Carboxy® que actúa sobre la actividad y longevidad de la raíz, potencializando el proceso de absorción de nutrientes, obteniendo como resultado la mayor extracción de nutrientes de la solución del suelo y como consecuencia un mejor desarrollo y rendimiento del cultivo.`,
      id: "Nutrisorb-L",
    },
    {
      image: radigrow,
      title: "Radigrow",
      text: "Enraizador",
      description: `Es una formulación a base de ácidos ECCA Carboxy® que estimulan el crecimiento de raíces por periodos prolongados sin restricciones para su desempeño, de manera segura en cualquier etapa fenológica del cultivo.`,
      id: "Radigrow",
    },
    {
      image: undefined,
      title: "Algak",
      text: `"Extracto de Algas Marinas 
          (Ascophyllum nodosum)"`,
      description: `Algak® es un bioestimulante formulado 100% en base a extractos de algas marinas de aguas frías (Ascophyllum nodosum), que promueve la síntesis natural de hormonas (citoquininas y auxina), osmoprotectores, elicitores  y agentes complejantes/quelatantes.`,
      id: "Algak",
    },
    {
      image: undefined,
      title: "Enerboost",
      text: `Bioestimulante a base de aminoácidos de origen vegetal`,
      description: `ENERBoost® beneficia el desarrollo de los cultivos, a través del aporte de aminoácidos, macro y micro elementos.`,
      id: "Enerboost",
    },
    {
      image: undefined,
      title: "Haddak",
      text: `Preventivo y corrector de estrés`,
      description: ``,
      id: "Haddak",
    },
    {
      image: tseminus,
      title: "Tseminus",
      text: `Bioestimulante para Tratamiento a Semilla`,
      description: `Favorece el establecimiento y vigor en las etapas tempranas de desarrollo de la planta, para lograr un mejor desempeño de la raíz e incrementar la actividad microbiológica y mejorar el ambiente rizosférico.`,
      id: "Tseminus",
    },
    {
      image: radigrow,
      title: "Radigrow G",
      text: `Enraizador granulado`,
      description: ``,
      id: "Radigrow-G",
    },

    {
      image: carboxyca,
      title: "Carboxy Ca",
      text: "Aportador de Ca de alta asimilación",
      description: `Carboxy Ca® Cuenta con ácidos ECCA Carboxy® tipo alifáticos en su formulación, los cuales forman quelatos de estabilidad media con el Calcio; es decir, lo protegen de las barreras de la cutícula y epidermis de la hoja o fruto, permitiendo su fácil flujo a través de los tejidos de conducción y eficaz ingreso a las células demandantes.`,
      id: "Carboxy-Ca",
    },
    {
      image: carboxyk,
      title: "Carbooxy K",
      text: "Aportador de K de alta asimilación",
      description: `Carboxy K® Cuenta con ácidos ECCA Carboxy® tipo alifáticos en su formulación, los cuales favorecen un eficaz flujo de potasio, a nivel translaminar y por tejidos de conducción hacia los sitios de demanda, provocando una respuesta rápida en calibre, color y maduración de los frutos.`,
      id: "Carbooxy-K",
    },
    {
      image: carboxyminl,
      title: "Carboxy Min L",
      text: "Aportador de micronutrientes de alta asimilación",
      description: `Carboxy MIN-L® Los ácidos ECCA Carboxy® de tipo alifáticos contenidos en la 1formulación forman quelatos de estabilidad intermedia con micronutrientes, es decir, los protege de las barreras de la cutícula y epidermis de la hoja o fruto, permitiendo su fácil flujo a través de los tejidos de conducción y eficaz ingreso a las células demandantes.`,
      id: "Carbooxy-Min-L",
    },
    {
      image: proquelatezn,
      title: "Proquelate Zn",
      text: "Aportador de Zn de alta de asimilación",
      description: `Proquelate Zn® cuenta con ácidos ECCA Carboxy® tipo alifáticos en su formulación, los cuales forman quelatos de estabilidad media con el Zn, es decir, lo protege de las barreras de la cutícula y epidermis de la hoja o fruto permitiendo su fácil flujo a través de los tejidos de conducción y eficaz ingreso a las células demandantes.`,
      id: "Proquelate-Zn",
    },
    {
      image: proquelatemn,
      title: "Proquelate Mn",
      text: "Aportador de Mn de alta de asimilación",
      description: `Proquelate Mn® previene y corrige desórdenes nutricionales ocasionados por deficiencias de manganeso. Su formulación protege el Mn de las barreras de la cutícula y epidermis de la hoja o fruto permitiendo su fácil flujo a través de los tejidos de conducción y eficaz ingreso a las células demandantes.`,
      id: "Proquelate-Mn",
    },
    {
      image: proquelatemg,
      title: "Proquelate Mg",
      text: "Aportador de Mg de alta asimilación",
      description: `Proquelate Mg® Los ácidos ECCA Carboxy® de tipo alifáticos contenidos en la formulación, forman quelatos con el Magnesio de estabilidad intermedia, es decir, lo protegen de las barreras de la cutícula y epidermis de la hoja o fruto permitiendo su fácil flujo a través de los tejidos de conducción y eficaz ingreso a las células demandantes.`,
      id: "Proquelate-Mg",
    },
    {
      image: proquelatefe,
      title: "Proquelate Fe",
      text: "Aportador de Fe de alta asimilación",
      description: `Proquelate Fe® Los ácidos ECCA Carboxy® de tipo alifáticos contenidos en la formulación, forman quelatos con el Fierro de estabilidad intermedia, es decir, lo protegen de las barreras de la cutícula y epidermis de la hoja o fruto permitiendo su fácil flujo a través de los tejidos de conducción y eficaz ingreso a las células demandantes.`,
      id: "Proquelate-Fe",
    },
    {
      image: carboxyfe,
      title: "Carboxy Fe",
      text: "Fierro quelatado para uso de fertirrigación",
      description: `Carboxy® Fe contiene extractos ECCA Carboxy® y Fierro quelatado, que le permite permanecer en solución bajo condiciones extremas de pH. Además, pueden ser translocados en forma quelatada por los tejidos de conducción de la planta, aportando eficazmente la máxima cantidad de nutrientes en el tejido que lo demanda.`,
      id: "Carboxy-Fe",
    },
    {
      image: carboxymicro,
      title: "Carboxy Micro",
      text: "Micronutrientes quelatados para uso en fertigación",
      description: `Carboxy® Micro contiene extractos ECCA Carboxy® y micronutrientes quelatados, que le permite permanecer en solución bajo condiciones extremas de pH. Además pueden ser translocados en forma quelatada por los tejidos de conducción de la planta, aportando eficazmente la máxima cantidad de nutrientes en el tejido que lo demanda.`,
      id: "Carboxy-Micro",
    },
    {
      image: carboxyzn,
      title: "Carboxy Zn",
      text: "Zinc quelatado para uso en fertirrigación",
      description: `Carboxy® Zn contiene extractos ECCA Carboxy® y Zinc quelatado, que le permiten permanecer en solución bajo condiciones extremas de pH. Además pueden ser translocados en forma quelatada por los tejidos de conducción de la planta, aportando eficazmente la máxima cantidad de nutrientes en el tejido que lo demanda.`,
      id: "Carboxy-Zn",
    },
    {
      image: undefined,
      title: "Nutrimak+ Antisenescencia",
      text: "Retarda la Maduración de Frutos",
      description: `Es una formulación que previene y corrige desordenes nutricionales ocasionados por deficiencia de Cobalto y Molibdeno y retarda la maduración de los frutos.`,
      id: "Nutrimak-Antisenescencia",
    },
    {
      image: undefined,
      title: "Nutrimak+ Corrector",
      text: "Mejora la Capacidad Fotosintética",
      description: `Es una formulación que previene y corrige desordenes nutricionales ocasionados por deficiencia de Magnesio, Hierro y Zinc favoreciendo la fusión fotosintética.`,
      id: "Nutrimak-Corrector",
    },
    {
      image: undefined,
      title: "Nutrimak+ Desarrollo",
      text: "Mejora el Metabolismo del Nitrógeno y Desarrollo Vegetativo",
      description: `Es una formulación que previene y corrige desordenes nutricionales ocasionados por deficiencia de Boro, Zinc y Molibdeno, favoreciendo un desarrollo vegetativo equilibrado.`,
      id: "Nutrimak-Desarrollo",
    },
    {
      image: undefined,
      title: "Nutrimak+ Vigor",
      text: "Traslocador de Azucares",
      description: `Es una formulación que previene y corrige desordenes nutricionales ocasionados por deficiencia de Boro y Molibdeno. Auxilia en la traslocación de azucares a frutos y órganos de reserva.`,
      id: "Nutrimak-Vigor",
    },

    {
      image: promesol5x,
      title: "Promesol 5x",
      text: "Acondicionador de suelos",
      description: `Promesol® 5X es una formulación a base de ácidos ECCA Carboxy® que genera una buena estructura fisica del suelo, mejora las condiciones de humedad y aireacion favoreciendo el crecimiento de la raiz.`,
      id: "Promesol-5x",
    },
    {
      image: promesolca,
      title: "Promesol Ca",
      text: "Acondicionador de suelos",
      description: `Promesol® Ca+ es una formulación a base de extractos concentrados en cascarillas agrícolas ECCA Carboxy ® que auxilia en la protección del cultivo contra el estrés salino, genera una buena estructura física de suelo para favorecer el crecimiento de la raíz y las condiciones de humedad y aireación.`,
      id: "Promesol-Ca",
    },
  ];

  useEffect(() => {
    const id = window.location.href.split("/").pop();
    setCurrentProductIndex(
      allProducts.findIndex((product) => product.id === id)
    );

    Promise.all([
      getFirstSection(),
      getThirdSection(),
      getFourthSection(),
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

  return <>{isLoading ? <MainLoading /> : <MainBody />}</>;

  function MainBody() {
    return (
      <div className={styles.mainWrapper}>
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
        <main className={styles.main}>
          <div className={styles.whiteGradient}>
            <section id="raices" className={styles.rootContainer}>
              <RootBody firstSection={firstSection} />
            </section>

            <section
              className={styles.presenceContainer}
              id="presencia"
            ></section>
          </div>

          <div className={styles.blueGradient}>
            <section className={styles.beneficiosContainer} id="oferta">
              <BenefitsBody thirdSection={thirdSection} />
            </section>
            <section className={styles.specsWrapper} id="productos">
              <SpecsBody fourthSection={fourthSection} />
            </section>
          </div>
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
