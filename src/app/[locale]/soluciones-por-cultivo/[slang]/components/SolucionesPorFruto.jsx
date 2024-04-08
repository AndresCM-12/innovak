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

export default function SolucionesPorFruto({ texts }) {
  const [activeSolutionIndex, setActiveSolutionIndex] = useState();
  var solutions = [
    {
      title: "AMARRE DE FRUTO",
      description:
        "Es una línea de formulaciones dirigida a resolver problemas de compactación o salinidad de suelos, de uso en la mayoría de los cultivos.",
      id: "amarre-de-fruto",
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
        "Es una línea de formulaciones dirigida a resolver problemas de compactación o salinidad de suelos, de uso en la mayoría de los cultivos.",
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
        "Es una línea de formulaciones dirigida a resolver problemas de compactación o salinidad de suelos, de uso en la mayoría de los cultivos.",
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
        "Es una línea de formulaciones dirigida a resolver problemas de compactación o salinidad de suelos, de uso en la mayoría de los cultivos.",
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
        "Es una línea de formulaciones dirigida a resolver problemas de compactación o salinidad de suelos, de uso en la mayoría de los cultivos.",
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
      description:
        "Es una línea de formulaciones dirigida a resolver problemas de compactación o salinidad de suelos, de uso en la mayoría de los cultivos.",
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
        "Es una línea de formulaciones dirigida a resolver problemas de compactación o salinidad de suelos, de uso en la mayoría de los cultivos.",
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
        "Es una línea de formulaciones dirigida a resolver problemas de compactación o salinidad de suelos, de uso en la mayoría de los cultivos.",
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
      description:
        "Es una línea de formulaciones dirigida a resolver problemas de compactación o salinidad de suelos, de uso en la mayoría de los cultivos.",
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
        "Es una línea de formulaciones dirigida a resolver problemas de compactación o salinidad de suelos, de uso en la mayoría de los cultivos.",
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
        "Es una línea de formulaciones dirigida a resolver problemas de compactación o salinidad de suelos, de uso en la mayoría de los cultivos.",
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
        "Es una línea de formulaciones dirigida a resolver problemas de compactación o salinidad de suelos, de uso en la mayoría de los cultivos.",
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
        "Es una línea de formulaciones dirigida a resolver problemas de compactación o salinidad de suelos, de uso en la mayoría de los cultivos.",
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
      description:
        "Es una línea de formulaciones dirigida a resolver problemas de compactación o salinidad de suelos, de uso en la mayoría de los cultivos.",
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

  var items = [
    {
      title: "FRAMBUESA",
      bg: itemBg,
    },
    {
      title: "FRAMBUESA",
      bg: itemBg,
    },
    {
      title: "FRAMBUESA",
      bg: itemBg,
    },
    {
      title: "FRAMBUESA",
      bg: itemBg,
    },
    {
      title: "FRAMBUESA",
      bg: itemBg,
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
          items={items}
        />
      ) : (
        <div></div>
      )}

      {/* Form */}
    </section>
  );
}

function SolucionesPorCultivo({ solutions, activeSolutionIndex, items }) {
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
