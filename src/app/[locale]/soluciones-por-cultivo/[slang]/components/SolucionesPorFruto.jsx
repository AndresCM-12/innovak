"use client";
import React, { useEffect, useState } from "react";
import styles from "./solucionesFruto.module.css";
import Image from "next/image";
import background from "../../../../../../public/soluciones-fruto/background.png";

import itemBg from "../../../../../../public/soluciones-fruto/itembg.png";

import AGUACATE from "../../../../../../public/soluciones-fruto/cultivos/AGUACATE.jpg";
import ALGODON from "../../../../../../public/soluciones-fruto/cultivos/ALGODON.jpg";
import BERRIES from "../../../../../../public/soluciones-fruto/cultivos/BERRIES.jpg";
import CAFE from "../../../../../../public/soluciones-fruto/cultivos/CAFE.jpg";
import CEBOLLA from "../../../../../../public/soluciones-fruto/cultivos/CEBOLLA.jpg";
import CHILE from "../../../../../../public/soluciones-fruto/cultivos/CHILE.jpg";
import ESPARRAGO from "../../../../../../public/soluciones-fruto/cultivos/ESPARRAGO.jpg";
import MAIZ from "../../../../../../public/soluciones-fruto/cultivos/MAIZ.jpg";
import MANGO from "../../../../../../public/soluciones-fruto/cultivos/MANGO.jpg";
import MANZANA from "../../../../../../public/soluciones-fruto/cultivos/MANZANA.jpg";
import NOGAL from "../../../../../../public/soluciones-fruto/cultivos/NOGAL.jpg";
import PAPAYA from "../../../../../../public/soluciones-fruto/cultivos/PAPAYA.jpg";
import PINA from "../../../../../../public/soluciones-fruto/cultivos/PINA.jpg";
import PLATANO from "../../../../../../public/soluciones-fruto/cultivos/PLATANO.jpg";
import TOMATE from "../../../../../../public/soluciones-fruto/cultivos/TOMATE.jpg";
import TRIGO from "../../../../../../public/soluciones-fruto/cultivos/TRIGO.jpg";
import UVA from "../../../../../../public/soluciones-fruto/cultivos/UVA.jpg";

import localFont from "next/font/local";
const futura = localFont({
  src: "../../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

export default function SolucionesPorFruto({ info }) {
  console.log(info);
  const [activeSolutionIndex, setActiveSolutionIndex] = useState();
  var solutions = [
    {
      title: "AMARRE DE FRUTO",
      description:
        "Incrementa productividad de tu cultivo. Nuestra propuesta mejora la proporción de frutos amarrados o cuajados a través de tecnologías sustentables y seguras que ayudan en los procesos de división celular, obteniendo un mayor número de frutos amarrados y un mejor desarrollo de fruto en etapas tempranas. Asimismo, durante estas etapas prevenimos las situaciones de estrés que pueden ocasionar la caída de los frutos, asegurando el desarrollo y la productividad del cultivo.",
      id: "amarre-de-fruto",
      bg: background,
      items: [
        {
          title: "AGUACATE",
          bg: AGUACATE,
          products: [
            {
              title: "SelectoXL",
              img: itemBg,
            },
            {
              title: "Pachhard",
              img: itemBg,
            },
            {
              title: "Atp up",
              img: itemBg,
            },
          ],
        },
        {
          title: "CHILE",
          bg: CHILE,
          products: [
            {
              title: "SelectoXL",
              img: itemBg,
            },
            {
              title: "Atp up",
              img: itemBg,
            },
          ],
        },
        {
          title: "NOGAL",
          bg: NOGAL,
          products: [
            {
              title: "SelectoXL",
              img: itemBg,
            },
          ],
        },
        {
          title: "MANZANA",
          bg: MANZANA,
          products: [
            {
              title: "SelectoXL",
              img: itemBg,
            },
          ],
        },
        {
          title: "MANGO",
          bg: MANGO,
          products: [
            {
              title: "SelectoXL",
              img: itemBg,
            },
          ],
        },

        {
          title: "UVA",
          bg: UVA,
          products: [
            {
              title: "SelectoXL",
              img: itemBg,
            },
          ],
        },
        {
          title: "ALGODÓN",
          bg: ALGODON,
          products: [
            {
              title: "SelectoXL",
              img: itemBg,
            },
          ],
        },
      ],
    },
    {
      title: "TAMAÑO DE FRUTO",
      description:
        "Incrementa el tamaño de tu cosecha. Nuestra propuesta promueve un desarrollo adecuado y balanceado de los frutos de forma segura. Bioestimulamos los procesos de división celular y prevenimos las situaciones de estrés en los cultivos garantizando el desarrollo óptimo de los frutos, obteniendo como resultado un mayor tamaño y homogeneidad, mejorando la calidad de la cosecha, la rentabilidad y productividad del cultivo.",
      id: "tamano-de-fruto",
      items: [
        {
          title: "AGUACATE",
          bg: AGUACATE,
          products: [
            {
              title: "SelectoXL",
              img: itemBg,
            },
            {
              title: "Pachhard",
              img: itemBg,
            },
            {
              title: "Carboxy K",
              img: itemBg,
            },
          ],
        },
        {
          title: "BERRIES",
          bg: BERRIES,
          products: [
            {
              title: "Promesol Ca",
              img: itemBg,
            },
            {
              title: "Radigrow",
              img: itemBg,
            },
            {
              title: "Nutrisorb",
              img: itemBg,
            },
            {
              title: "Selecto",
              img: itemBg,
            },
            {
              title: "Atp up",
              img: itemBg,
            },
          ],
        },
        {
          title: "CHILE",
          bg: CHILE,
          products: [
            {
              title: "SelectoXL",
              img: itemBg,
            },
            {
              title: "Atp up",
              img: itemBg,
            },
          ],
        },
        {
          title: "NOGAL",
          bg: NOGAL,
          products: [
            {
              title: "SelectoXL",
              img: itemBg,
            },
          ],
        },
        {
          title: "MANZANA",
          bg: MANZANA,
          products: [
            {
              title: "SelectoXL",
              img: itemBg,
            },
          ],
        },
        {
          title: "MANGO",
          bg: MANGO,
          products: [
            {
              title: "SelectoXL",
              img: itemBg,
            },
          ],
        },
        {
          title: "MAÍZ",
          bg: MAIZ,
          products: [
            {
              title: "Selecto",
              img: itemBg,
            },
          ],
        },
        {
          title: "TRIGO",
          bg: TRIGO,
          products: [
            {
              title: "Selecto",
              img: itemBg,
            },
          ],
        },
        {
          title: "UVA",
          bg: UVA,
          products: [
            {
              title: "SelectoXL",
              img: itemBg,
            },
          ],
        },
        {
          title: "PIÑA",
          bg: PINA,
          products: [
            {
              title: "Selecto",
              img: itemBg,
            },
            {
              title: "Packhard",
              img: itemBg,
            },
            {
              title: "Atp up",
              img: itemBg,
            },
            {
              title: "Carboxy K",
              img: itemBg,
            },
          ],
        },
        {
          title: "ALGODÓN",
          bg: ALGODON,
          products: [
            {
              title: "SelectoXL",
              img: itemBg,
            },
          ],
        },
        {
          title: "PAPAYA",
          bg: PAPAYA,
          products: [
            {
              title: "Selecto",
              img: itemBg,
            },
            {
              title: "Atp up",
              img: itemBg,
            },
          ],
        },
      ],
    },
    {
      title: "Actividad radicular",
      description:
        "Obtén el máximo potencial de tu cultivo bioestimulando desde la raíz. Nuestra propuesta comienza con el mejoramiento del suelo, abordando problemas de compactación, mejorando infiltración de agua y oxigenación. creando un medio óptimo para el desarrollo de las raíces del cultivo, favoreciendo su crecimiento, facilitando el establecimiento del cultivo. Generadas las condiciones idóneas, buscamos aumentar la cantidad de raíces incrementando la superficie de contacto, facilitando la toma de nutrientes y agua. Así mismo para obtener la máxima absorción de nutrientes de la solución del suelo, incrementamos la actividad radicular por periodos prolongados, impactando en el desarrollo y la productividad del cultivo.",
      id: "actividad-radicular",
      items: [
        {
          title: "AGUACATE",
          bg: AGUACATE,
          products: [
            {
              title: "Promesol 5X",
              img: itemBg,
            },
            {
              title: "Radigrow",
              img: itemBg,
            },
            {
              title: "Nutrisorb",
              img: itemBg,
            },
          ],
        },
        {
          title: "BERRIES",
          bg: BERRIES,
          products: [
            {
              title: "Promesol Ca",
              img: itemBg,
            },
            {
              title: "Radigrow",
              img: itemBg,
            },
            {
              title: "Nutrisorb",
              img: itemBg,
            },
          ],
        },
        {
          title: "CEBOLLA",
          bg: CEBOLLA,
          products: [
            {
              title: "Radigrow",
              img: itemBg,
            },
            {
              title: "Nutrisorb",
              img: itemBg,
            },
          ],
        },
        {
          title: "ESPARRAGO",
          bg: ESPARRAGO,
          products: [
            {
              title: "Radigrow",
              img: itemBg,
            },
            {
              title: "Nutrisorb",
              img: itemBg,
            },
          ],
        },
        {
          title: "TOMATE",
          bg: TOMATE,
          products: [
            {
              title: "Promesol 5X",
              img: itemBg,
            },
            {
              title: "Radigrow",
              img: itemBg,
            },
            {
              title: "Nutrisorb",
              img: itemBg,
            },
          ],
        },
        {
          title: "BANANO",
          bg: PLATANO,
          products: [
            {
              title: "Promesol 5X",
              img: itemBg,
            },
            {
              title: "Radigrow",
              img: itemBg,
            },
            {
              title: "Nutrisorb",
              img: itemBg,
            },
          ],
        },
        {
          title: "CHILE",
          bg: CHILE,
          products: [
            {
              title: "Radigrow",
              img: itemBg,
            },
            {
              title: "Nutrisorb",
              img: itemBg,
            },
          ],
        },
        {
          title: "MANZANA",
          bg: MANZANA,
          products: [
            {
              title: "Radigrow",
              img: itemBg,
            },
            {
              title: "nutrisorb",
              img: itemBg,
            },
          ],
        },
        {
          title: "MAÍZ",
          bg: MAIZ,
          products: [
            {
              title: "Nutrisorb G",
              img: itemBg,
            },
          ],
        },
        {
          title: "TRIGO",
          bg: TRIGO,
          products: [
            {
              title: "Nutrisorb G",
              img: itemBg,
            },
          ],
        },
        {
          title: "UVA",
          bg: UVA,
          products: [
            {
              title: "Radigrow",
              img: itemBg,
            },
            {
              title: "Nutrisorb",
              img: itemBg,
            },
            {
              title: "Promesol 5X",
              img: itemBg,
            },
          ],
        },
        {
          title: "PIÑA",
          bg: PINA,
          products: [
            {
              title: "Radigrow",
              img: itemBg,
            },
            {
              title: "Nutrisorb",
              img: itemBg,
            },
          ],
        },
        {
          title: "PAPAYA",
          bg: PAPAYA,
          products: [
            {
              title: "Radigrow",
              img: itemBg,
            },
            {
              title: "Nutrisorb",
              img: itemBg,
            },
          ],
        },
      ],
    },
    {
      title: "Sanidad radicular",
      description:
        "Protege tu productividad del estrés salino. Proporcionamos una solución vanguardista a una problemática creciente en los últimos años y que afecta fuertemente la productividad. Bioestimulamos las raíces de tu cultivo, incrementando la síntesis de osmolitos compatibles que ayuden a sobre llevar el estrés ocasionado por la salinidad. Esta solución permite que el cultivo se desarrolle y tenga una mejor productividad en estas condiciones de estrés.",
      id: "sanidad-radicular",
      items: [
        {
          title: "BERRIES",
          bg: BERRIES,
          products: [
            {
              title: "Biofit",
              img: itemBg,
            },
            {
              title: "Rhizo TX",
              img: itemBg,
            },
          ],
        },
        {
          title: "CEBOLLA",
          bg: CEBOLLA,
          products: [
            {
              title: "Biofit",
              img: itemBg,
            },
            {
              title: "Rhizo TX",
              img: itemBg,
            },
          ],
        },
        {
          title: "TOMATE",
          bg: TOMATE,
          products: [
            {
              title: "Biofit",
              img: itemBg,
            },
            {
              title: "Rhizo TX",
              img: itemBg,
            },
          ],
        },
        {
          title: "CHILE",
          bg: CHILE,
          products: [
            {
              title: "Biofit",
              img: itemBg,
            },
            {
              title: "Rhizo TX",
              img: itemBg,
            },
          ],
        },
        {
          title: "NOGAL",
          bg: NOGAL,
          products: [
            {
              title: "Rhizo TX",
              img: itemBg,
            },
          ],
        },
        {
          title: "MANZANA",
          bg: MANZANA,
          products: [
            {
              title: "Biofit",
              img: itemBg,
            },
            {
              title: "Rhizo TX",
              img: itemBg,
            },
          ],
        },
        {
          title: "UVA",
          bg: UVA,
          products: [
            {
              title: "Biofit",
              img: itemBg,
            },
            {
              title: "Rhizo TX",
              img: itemBg,
            },
          ],
        },
        {
          title: "PIÑA",
          bg: PINA,
          products: [
            {
              title: "Biofit",
              img: itemBg,
            },
            {
              title: "Rhizo TX",
              img: itemBg,
            },
          ],
        },
        {
          title: "ALGODÓN",
          bg: ALGODON,
          products: [
            {
              title: "Rhizo TX",
              img: itemBg,
            },
          ],
        },
        {
          title: "PAPAYA",
          bg: PAPAYA,
          products: [
            {
              title: "Biofit",
              img: itemBg,
            },
            {
              title: "Rhizo TX",
              img: itemBg,
            },
          ],
        },
      ],
    },
    {
      title: "Calidad y vida post cosecha",
      description:
        "Mejora la calidad y vida de anaquel de tus frutos e incrementa tu rentabilidad. Con nuestra propuesta abordamos problemáticas que afectan la calidad de los frutos. A través de nuestra tecnología bioestimulamos la síntesis de pectinas, mejorando las paredes celulares de los frutos, obteniendo como resultado una mayor vida de anaquel, una menor deformación y mayor calidad. Estos cambios mejoran características como el color, textura y reducen la incidencia de hongos post cosecha. Nuestra tecnología es una herramienta para aquellos frutos o mercados de exportación de gran exigencia garantizando la calidad de los frutos. ",
      id: "calidad-y-vida-post-cosecha",
      items: [
        {
          title: "BERRIES",
          bg: BERRIES,
          products: [
            {
              title: "Packhard",
              img: itemBg,
            },
          ],
        },
        {
          title: "TOMATE",
          bg: TOMATE,
          products: [
            {
              title: "Packhard",
              img: itemBg,
            },
            {
              title: "Nutrisorb",
              img: itemBg,
            },
          ],
        },
        {
          title: "MANZANA",
          bg: MANZANA,
          products: [
            {
              title: "Packhard",
              img: itemBg,
            },
          ],
        },
        {
          title: "UVA",
          bg: UVA,
          products: [
            {
              title: "Packhard",
              img: itemBg,
            },
          ],
        },
        {
          title: "PAPAYA",
          bg: PAPAYA,
          products: [
            {
              title: "Packhard",
              img: itemBg,
            },
            {
              title: "Atp up",
              img: itemBg,
            },
          ],
        },
      ],
    },
    {
      title: "Aumento de calibres",
      description: "",
      id: "aumento-de-calibres",
      items: [
        {
          title: "CEBOLLA",
          bg: CEBOLLA,
          products: [
            {
              title: "Carboxy L",
              img: itemBg,
            },
            {
              title: "Carboxy K",
              img: itemBg,
            },
          ],
        },
        {
          title: "ESPARRAGO",
          bg: ESPARRAGO,
          products: [
            {
              title: "Carboxy L",
              img: itemBg,
            },
            {
              title: "Carboxy K",
              img: itemBg,
            },
          ],
        },
        {
          title: "NOGAL",
          bg: NOGAL,
          products: [
            {
              title: "Carboxy L",
              img: itemBg,
            },
            {
              title: "Carboxy K",
              img: itemBg,
            },
          ],
        },
      ],
    },
    {
      title: "Control bioracional de Nematodos",
      description:
        "Protege tu productividad de manera biorracional. Nuestras propuestas proporcionan alternativas sustentablaes e innovadoras para el control de nematodos de manera segura. Estas herramientas son de facil aplicación e integración con otras estrategias de manejo. El uso de estas tecnologías reduce las perdidas por la incidencia de nematados y favorece a un desarrollo sostenible del cultivo.",
      id: "control-bioracional-de-nematodos",
      items: [
        {
          title: "TOMATE",
          bg: TOMATE,
          products: [
            {
              title: "Nemaroot",
              img: itemBg,
            },
            {
              title: "Radigrow",
              img: itemBg,
            },
            {
              title: "Nutrisorb",
              img: itemBg,
            },
          ],
        },
        {
          title: "CHILE",
          bg: CHILE,
          products: [
            {
              title: "Nemaroot",
              img: itemBg,
            },
            {
              title: "Radigrow",
              img: itemBg,
            },
            {
              title: "Nutrisorb",
              img: itemBg,
            },
          ],
        },
        {
          title: "UVA",
          bg: UVA,
          products: [
            {
              title: "Nemaroot",
              img: itemBg,
            },
            {
              title: "Radigrow",
              img: itemBg,
            },
            {
              title: "Nutrisorb",
              img: itemBg,
            },
          ],
        },
        {
          title: "PIÑA",
          bg: PINA,
          products: [
            {
              title: "Biofit",
              img: itemBg,
            },
            {
              title: "Rhizo TX",
              img: itemBg,
            },
          ],
        },
        {
          title: "ALGODÓN",
          bg: ALGODON,
          products: [
            {
              title: "Rhizo TX",
              img: itemBg,
            },
          ],
        },
        {
          title: "PAPAYA",
          bg: PAPAYA,
          products: [
            {
              title: "Biofit",
              img: itemBg,
            },
            {
              title: "Rhizo TX",
              img: itemBg,
            },
          ],
        },
      ],
    },
    {
      title: "Fertildiad biologica",
      description:
        "Incrementa tu productividad de manera sustentable. Nuestra propuesta proporciona una alternativa revolucionaría que incrementa la actividad en la rizosfera aumentando la productividad de los cultivos por medio de la actividad y colonización de microorganismos beneficos. Proponemos una alternativa para una agricultura sostenible que conserve la fertilidad de los suelos por mucho mayor tiempo, logrando mejorar la productividad y conservación de los suelos cultivables.",
      id: "fertilidad-biologica",
      items: [
        {
          title: "AGUACATE",
          bg: AGUACATE,
          products: [
            {
              title: "Biofit",
              img: itemBg,
            },
            {
              title: "Biofit G",
              img: itemBg,
            },
          ],
        },
        {
          title: "BERRIES",
          bg: BERRIES,
          products: [
            {
              title: "Biofit",
              img: itemBg,
            },
            {
              title: "Biofit G",
              img: itemBg,
            },
          ],
        },
        {
          title: "CEBOLLA",
          bg: CEBOLLA,
          products: [
            {
              title: "Biofit",
              img: itemBg,
            },
            {
              title: "Biofit G",
              img: itemBg,
            },
          ],
        },
        {
          title: "ESPARRAGO",
          bg: ESPARRAGO,
          products: [
            {
              title: "Biofit",
              img: itemBg,
            },
            {
              title: "Biofit G",
              img: itemBg,
            },
          ],
        },
        {
          title: "TOMATE",
          bg: TOMATE,
          products: [
            {
              title: "Biofit",
              img: itemBg,
            },
            {
              title: "Biofit G",
              img: itemBg,
            },
          ],
        },
        {
          title: "BANANO",
          bg: PLATANO,
          products: [
            {
              title: "Biofit",
              img: itemBg,
            },
            {
              title: "Biofit G",
              img: itemBg,
            },
          ],
        },
        {
          title: "CHILE",
          bg: CHILE,
          products: [
            {
              title: "Biofit",
              img: itemBg,
            },
          ],
        },
        {
          title: "NOGAL",
          bg: NOGAL,
          products: [
            {
              title: "Biofit",
              img: itemBg,
            },
          ],
        },
        {
          title: "MANZANA",
          bg: MANZANA,
          products: [
            {
              title: "Biofit",
              img: itemBg,
            },
          ],
        },
        {
          title: "UVA",
          bg: UVA,
          products: [
            {
              title: "Biofit",
              img: itemBg,
            },
          ],
        },
        {
          title: "PIÑA",
          bg: PINA,
          products: [
            {
              title: "Biofit",
              img: itemBg,
            },
          ],
        },
        {
          title: "PAPAYA",
          bg: PAPAYA,
          products: [
            {
              title: "Biofit",
              img: itemBg,
            },
          ],
        },
      ],
    },
    {
      title: "Estrés radicular",
      description: "",
      id: "estres-radicular",
      items: [
        {
          title: "BERRIES",
          bg: BERRIES,
          products: [
            {
              title: "Balox",
              img: itemBg,
            },
          ],
        },
        {
          title: "CEBOLLA",
          bg: CEBOLLA,
          products: [
            {
              title: "Balox",
              img: itemBg,
            },
          ],
        },
        {
          title: "ESPARRAGO",
          bg: ESPARRAGO,
          products: [
            {
              title: "Balox",
              img: itemBg,
            },
          ],
        },
        {
          title: "TOMATE",
          bg: TOMATE,
          products: [
            {
              title: "Balox",
              img: itemBg,
            },
          ],
        },
        {
          title: "BANANO",
          bg: PLATANO,
          products: [
            {
              title: "Balox",
              img: itemBg,
            },
          ],
        },
        {
          title: "CHILE",
          bg: CHILE,
          products: [
            {
              title: "Balox",
              img: itemBg,
            },
          ],
        },
        {
          title: "NOGAL",
          bg: NOGAL,
          products: [
            {
              title: "Balox",
              img: itemBg,
            },
          ],
        },
        {
          title: "MANZANA",
          bg: MANZANA,
          products: [
            {
              title: "Balox",
              img: itemBg,
            },
          ],
        },
        {
          title: "MANGO",
          bg: MANGO,
          products: [
            {
              title: "Balox",
              img: itemBg,
            },
          ],
        },
        {
          title: "CAFÉ",
          bg: CAFE,
          products: [
            {
              title: "Balox",
              img: itemBg,
            },
          ],
        },
        {
          title: "UVA",
          bg: UVA,
          products: [
            {
              title: "Balox",
              img: itemBg,
            },
          ],
        },
        {
          title: "PIÑA",
          bg: PINA,
          products: [
            {
              title: "Balox",
              img: itemBg,
            },
          ],
        },
        {
          title: "ALGODÓN",
          bg: ALGODON,
          products: [
            {
              title: "Balox",
              img: itemBg,
            },
          ],
        },
        {
          title: "PAPAYA",
          bg: PAPAYA,
          products: [
            {
              title: "Balox",
              img: itemBg,
            },
          ],
        },
      ],
    },
    {
      title: "Compactación de suelos",
      description:
        "Acondiciona tu suelo, facilita el desarrollo de tu cultivo. Nuestra propuesta con 50 años proporcionando una solución en cultivos con problemáticas de compactación. Abordamos esta problemática, promoviendo la formación de agregados, mejorando el balance de macro y microporos, obteniendo una mejor estructura del suelo. Esta solución facilita el desarrollo y exploración de las raíces, mejorando el establecimiento del cultivo. Una mejor estructura del suelo facilita la infiltración del agua, logrando un aprovechamiento eficiente del recurso hídrico.",
      id: "compactacion-de-suelos",
      items: [
        {
          title: "CEBOLLA",
          bg: CEBOLLA,
          products: [
            {
              title: "Promesol 5X",
              img: itemBg,
            },
          ],
        },

        {
          title: "BANANO",
          bg: PLATANO,
          products: [
            {
              title: "Promesol 5X",
              img: itemBg,
            },
          ],
        },
        {
          title: "MAIZ",
          bg: MAIZ,
          products: [
            {
              title: "Promesol G",
              img: itemBg,
            },
          ],
        },
        {
          title: "TRIGO",
          bg: TRIGO,
          products: [
            {
              title: "Promesol G",
              img: itemBg,
            },
          ],
        },
      ],
    },
    {
      title: "Brotación",
      description:
        "Potencializa el despertar de tu cultivo. Nuestra propuesta ofrece una solución sustentable en frutales de clima templado, incrementando el porcentaje de brotación de manera segura y sin riegos a la salud o residualidad. Su aplicación estimula un desarrollo uniforme y vigoroso, beneficiando la productividad del cultivo, y facilitando las practicas agrícolas.",
      id: "brotacion",
      items: [
        {
          title: "NOGAL",
          bg: NOGAL,
          products: [
            {
              title: "BrotStart",
              img: itemBg,
            },
          ],
        },
        {
          title: "MANZANA",
          bg: MANZANA,
          products: [
            {
              title: "BrotStart",
              img: itemBg,
            },
          ],
        },
      ],
    },
    {
      title: "Floración",
      description:
        "Despierta la productividad de tu cultivo. Nuestra propuesta induce la floración en yemas maduras en cultivos tropicales. Con la aplicación de esta solución logramos un desarrollo más uniforme, una concentración de la floración, que influyen en la rentabilidad y productividad, obteniendo una mejor cosecha, un aprovechamiento de las ventadas de mercado, además de facilitar las labores agrícolas.",
      id: "floracion",
      items: [
        {
          title: "AGUACATE",
          bg: AGUACATE,
          products: [
            {
              title: "Vernum",
              img: itemBg,
            },
          ],
        },
        {
          title: "BERRIES",
          bg: BERRIES,
          products: [
            {
              title: "Vernum",
              img: itemBg,
            },
            {
              title: "Selecto",
              img: itemBg,
            },
          ],
        },
        {
          title: "MANGO",
          bg: MANGO,
          products: [
            {
              title: "Vernum",
              img: itemBg,
            },
          ],
        },
        {
          title: "CAFÉ",
          bg: CAFE,
          products: [
            {
              title: "Vernum",
              img: itemBg,
            },
          ],
        },
      ],
    },
    {
      title: "Control bioracional de plagas y enfermedades",
      description:
        "Protección biorracional para tu cultivo. Nuestra propuesta cuenta con soluciones sustentables e innovadoras para el manejo, control de plagas y enfermedades. Logramos cuidar la productividad y calidad de tu cosecha con un manejo integrado, obteniendo frutos sin residualidad. Proporcionamos una ventaja competitiva minimizando los tiempos de reentrada, facilitando las diferentes practicas agrícolas.",
      id: "control-bioracional-de-plagas-y-enfermedades",
      items: [
        {
          title: "BERRIES",
          bg: BERRIES,
          products: [
            {
              title: "BestCure",
              img: itemBg,
            },
          ],
        },
        {
          title: "TOMATE",
          bg: TOMATE,
          products: [
            {
              title: "Biocrifoil",
              img: itemBg,
            },
            {
              title: "Medal",
              img: itemBg,
            },
          ],
        },
        {
          title: "BANANO",
          bg: PLATANO,
          products: [
            {
              title: "BestCure",
              img: itemBg,
            },
          ],
        },
        {
          title: "NOGAL",
          bg: NOGAL,
          products: [
            {
              title: "Isomate HSW",
              img: itemBg,
            },
          ],
        },
        {
          title: "MANZANA",
          bg: MANZANA,
          products: [
            {
              title: "Isomate CMFLex",
              img: itemBg,
            },
          ],
        },
      ],
    },
    {
      title: "Corrección de deficiencias nutricionales",
      description: "",
      id: "correccion-de-deficiencias-nutricionales",
      items: [
        {
          title: "PIÑA",
          bg: PINA,
          products: [
            {
              title: "Radigrow",
              img: itemBg,
            },
            {
              title: "Nutrisorb",
              img: itemBg,
            },
            {
              title: "Carbozy Zn",
              img: itemBg,
            },
            {
              title: "Selecto",
              img: itemBg,
            },
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    const href = window.location.href;
    const length = href.split("/").length;
    const solution = href.split("/")[length - 1];
    setActiveSolutionIndex(solutions.findIndex((item) => item.id == solution));
  }, []);

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
      {/* Header */}
      <article
        className={styles.header}
        style={{
          backgroundImage: `url(${background.src})`,
          zIndex: 0,
        }}
      >
        {activeSolutionIndex != undefined && activeSolutionIndex != null ? (
          <h1>{solutions[activeSolutionIndex].title}</h1>
        ) : (
          <></>
        )}
      </article>
      {/* Header */}

      {/* Form */}
      {activeSolutionIndex != undefined && activeSolutionIndex != null ? (
        <SolucionesPorCultivo
          solutions={solutions}
          activeSolutionIndex={activeSolutionIndex}
        />
      ) : (
        <div></div>
      )}

      {/* Form */}
    </section>
  );
}

function SolucionesPorCultivo({ solutions, activeSolutionIndex }) {
  return (
    <section className={styles.revistaInnovak}>
      <article className={styles.title}>
        <h5>{solutions[activeSolutionIndex].title}</h5>
        <p>{solutions[activeSolutionIndex].description}</p>
      </article>
      <div className={styles.revistasWrapper}>
        {solutions[activeSolutionIndex].items.map((item, i) => (
          <div key={i} className={styles.itemsWrapper}>
            <div className={styles.floating}>
              <h6>{item.title}</h6>
            </div>
            <Image
              className={styles.itemBg}
              style={{
                filter: "brightness(40%)",
                zIndex: -1,
                borderRadius: "20px",
              }}
              src={item.bg}
              alt="Imagen de fondo"
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
