import { useTranslations } from "next-intl";
import DynamicProductsClient from "./components/DynamicProducts";
import acondicionadoresDeSueloImg from "../../../../../public/products/acondicionadoresDeSuelo.png";
import bioestimulantesImg from "../../../../../public/products/bioestimulantes.png";
import nutrientesImg from "../../../../../public/products/nutrientes.png";
import proteccionDeCultivosImg from "../../../../../public/products/proteccionDeCultivos.png";

import demoProduct from "../../../../../public/products/demoProduct.png";
import demoProduct2 from "../../../../../public/products/demoProduct2.png";
import demoProduct3 from "../../../../../public/products/demoProduct3.png";
import demoProduct4 from "../../../../../public/products/demoProduct4.png";
import demoProduct5 from "../../../../../public/products/demoProduct5.png";

export default function ContactoPage({ params }) {
  const t = useTranslations("contacto");

  var pagesInfo = [
    {
      title: "PROTECCIÓN A CULTIVOS",
      subtitle: "Ver más",
      image: proteccionDeCultivosImg.src,
      link: `/productos/proteccion-de-cultivos`,
      products: [
        {
          image: demoProduct,
          title: "Producto 1",
          text: "Los productos de Innovak trabajan para el campo de una forma natural en que la planta los asimila, se enfoca a varios segmentos para resolver problemas puntuales de la agricultura tecnifica.",
          link: "/productos/proteccion-de-cultivos/producto-1",
        },
        {
          image: demoProduct,
          title: "Producto 1",
          text: "Los productos de Innovak trabajan para el campo de una forma natural en que la planta los asimila, se enfoca a varios segmentos para resolver problemas puntuales de la agricultura tecnifica.",
          link: "/productos/proteccion-de-cultivos/producto-2",
        },
        {
          image: demoProduct,
          title: "Producto 1",
          text: "Los productos de Innovak trabajan para el campo de una forma natural en que la planta los asimila, se enfoca a varios segmentos para resolver problemas puntuales de la agricultura tecnifica.",
          link: "/productos/proteccion-de-cultivos/producto-3",
        },
        {
          image: demoProduct,
          title: "Producto 1",
          text: "Los productos de Innovak trabajan para el campo de una forma natural en que la planta los asimila, se enfoca a varios segmentos para resolver problemas puntuales de la agricultura tecnifica.",
          link: "/productos/proteccion-de-cultivos/producto-4",
        },
        {
          image: demoProduct,
          title: "Producto 1",
          text: "Los productos de Innovak trabajan para el campo de una forma natural en que la planta los asimila, se enfoca a varios segmentos para resolver problemas puntuales de la agricultura tecnifica.",
          link: "/productos/proteccion-de-cultivos/producto-5",
        },
      ],
    },
    {
      title: "BIOESTIMULANTES",
      subtitle: "Ver más",
      image: bioestimulantesImg.src,
      link: `/productos/bioestimulantes`,
      products: [demoProduct4, demoProduct5],
    },
    {
      title: "NUTRIENTES",
      subtitle: "ver más",
      image: nutrientesImg.src,
      link: `/productos/nutrientes`,
      products: [demoProduct3, demoProduct4],
    },
    {
      title: "ACONDICIONAMIENTO DE SUELOS",
      subtitle: "ver más",
      image: acondicionadoresDeSueloImg.src,
      link: `/productos/acondicionadores-de-suelos`,
      products: [demoProduct, demoProduct2],
    },
  ];

  var index = getIndex(pagesInfo, params["slang"]);

  return (
    <section>
      <DynamicProductsClient
        texts={t("title1")}
        params={params}
        pagesInfo={pagesInfo}
        selectedInfo={index}
      />
    </section>
  );
}

function getIndex(pageInfo, routerPath) {
  var newIndex = pageInfo.findIndex((page) => {
    return page.link.includes(routerPath);
  });

  return newIndex;
}
