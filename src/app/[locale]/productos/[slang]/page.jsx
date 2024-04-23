import DynamicProductsClient from "./components/DynamicProducts";
import { WORDPRESS_API_URL } from "../../constants/constants";

export default async function ContactoPage({ params }) {
  const locale = params.locale;
  console.log("locale: ", locale);
  const products = await getProducts(locale);

  // var pagesInfo = [
  //   {
  //     title: "PROTECCIÓN A CULTIVOS",
  //     subtitle: "Ver más",
  //     image: proteccionDeCultivosImg.src,
  //     link: `/productos/proteccion-de-cultivos`,
  //     products: [
  //       {
  //         image: isomatecmflex,
  //         title: "Feromonas ISOMATE CM Flex",
  //         text: "Feromona de confusión sexual para control de palomilla de manzana",
  //         description:
  //           "El dispensador de ISOMATE CM® Flex libera feromona sexual en el área a tratar para afectar la conducta normal del insecto, alterando sus receptores lo que ocasiona el fracaso de los machos en la localización de la hembra. Esto tiene como consecuencia que se evite la reproducción.",
  //         link: "/productos/proteccion-de-cultivos/Feromonas-ISOMATE-CM-Flex",
  //       },
  //       {
  //         image: isomatehswflex,
  //         title: "Feromonas ISOMATE HSW Flex",
  //         text: "Feromona de confusión sexual para control de gusano barrenador del ruezno en nogal",
  //         description:
  //           "El dispensador de  ISOMATE HSW® Flex   libera feromona sexual en el área a tratar para afectar la conducta normal del insecto, alterando sus receptores lo que ocasiona el fracaso de los machos en la localización de la hembra. Esto tiene como consecuencia que se evite la reproducción.",
  //         link: "/productos/proteccion-de-cultivos/Feromonas-ISOMATE-HSW-Flex",
  //       },
  //       {
  //         image: biocinnafol,
  //         title: "Biocinnafol",
  //         text: "Acaricida y fungicida biorracional",
  //         description:
  //           "Biocinnafol® es una formulación para el control de plagas y enfermedades. Es activo frente a un amplio numero de especies de hongos y ácaros. Presenta un excelente efecto de choque y una fuerte actividad erradicante. Su múltiple modo de acción permite el control eficaz de las plagas por el reblandecimiento del exoesqueleto,  deshidratación e interferencia bioquímica; al tiempo frena la propagación de las enfermedades, provocando la disrupción de la membrana celular de los hongos.",
  //         link: "/productos/proteccion-de-cultivos/Biocinnafol",
  //       },
  //       {
  //         image: biocrifol,
  //         title: "Biocrifol",
  //         text: "Insecticida biorracional",
  //         description: `Biocrifol® contiene un efecto de choque: El efecto "knock down" presenta grandes ventajas a la hora de disminuir ataques fuertes de insectos plaga. Se bloquean los canales de sodio y potasio con los que se producen alteraciones en la trasmisión del impulso nervioso y las especies tratadas muestran reacciones de hiperactividad y movimientos anormales.`,
  //         link: "/productos/proteccion-de-cultivos/Biocrifol",
  //       },
  //       {
  //         image: preventup,
  //         title: "Prevent Up",
  //         text: "Fungicida biorracional preventivo",
  //         description:
  //           "Prevent UP® contiene ácidos orgánicos del tipo aromático que inducen la actividad de proteínas relacionadas a la resistencia de ataque por agentes patógenos; aumentando la capacidad de defensa de los cultivos.",
  //         link: "/productos/proteccion-de-cultivos/Prevent-Up",
  //       },
  //       {
  //         image: rhizotx,
  //         title: "Rhizo TX",
  //         text: "Consorcio microbiano y biofungicida preventivo de enfermedades radiculares",
  //         description: `Rhizo TX® es un consorcio microbiano que coloniza eficientemente la rizosfera, protegiéndo la raíz del ataque de hongos fitopatógenos persistentes no fácilmente manejables con agroquímicos. Su formulación contiene ExuRoot®, potencializando la colonización rápida de los microorganismos benéficos, beneficiando en la protección y sanidad radicular.`,
  //         link: "/productos/proteccion-de-cultivos/Rhizo-TX",
  //       },
  //       {
  //         image: undefined,
  //         title: "Best Cure",
  //         text: "Fungicida - Bactericida Orgánico y Activador de las Defensas Naturales de la Planta",
  //         description: `Bestcure® es un fungicida-bactericida orgánico y actividador de las defensas naturales de la planta con una formulación basada en extractos de rutáceas (citrus reticulata y citrus aurantium), rico en ácidos orgánicos y bioflavonoides. Es una herramienta sostenible para el medio ambiente, mantiene la actividad de la dauna auxiliar, libre de residualidad  y sin plazo de seguridad.`,
  //         link: "/productos/proteccion-de-cultivos/Best-Cure",
  //       },
  //       {
  //         image: cuvrekdp,
  //         title: "Cuvrek DP",
  //         text: "Fungicida y bactericida biorracional de amplio espectro",
  //         description: `Los iones de cobre en el hidróxido de cobre detienen la germinación de esporas de hongos y matan bacterias, protegiendo a las plantas de infecciones. Estos iones, disueltos en la película del agua son transportados al sitio de infección de la espora o bacterias, donde pueden ser absorbidos a través de la membrana celular. Una vez dentro de la célula, los iones de cobre destruyen la capacidad de funcionamiento de muchas enzimas. Este efecto de multisitio dificulta a los hongos el desarrollo de resistencia a fungicidas cúpricos. Sin estas enzimas, las esporas no germinan y las bacterias mueren.`,
  //         link: "/productos/proteccion-de-cultivos/Cuvrek-DP",
  //       },
  //       {
  //         image: tkroot,
  //         title: "TkRoot",
  //         text: "Fungicida y bactericida biorracional de amplio espectro",
  //         description: `TK Root® es una formulación que contiene ExuRoot® como ingrediente activo que favorece a la exudación radicular y al establecimiento de los hongos benéficos del género Trichoderma. en la rizosfera. Los hongos contenidos en TK Root® compiten por espacio y alimento, generan una antibiosis contra los hongos fitopatógenos evitando la infección de la raíz; así mismo, ayudan a la generación de raíces sanas que fortalecen al cultivo para tolerar el ataque de hongos fitopatógenos.`,
  //         link: "/productos/proteccion-de-cultivos/TkRoot",
  //       },
  //       {
  //         image: rhizobaccombi,
  //         title: "Rhizobac Combi",
  //         text: "Fungicida biorracional preventivo contra enfermedades radiculares",
  //         description: `Esta formulación contiene ExuRoot® como ingrediente activo que favorece a la exudación radicular y al establecimiento de las bacterias benéficas de Rhizobac Combi en la rizosfera. Las bacterias del género Bacillus (B.cereus var.mycoides, B.megaterium y B. Subtilis) compiten por espacio y alimento, generan una antibiosis contra los hongos fitopatógenos evitando la infección de la raíz; así mismo, generan raíces sanas que fortalecen al cultivo para tolerar el ataque de hongos fitopatógenos.`,
  //         link: "/productos/proteccion-de-cultivos/Rhizobac-Combi",
  //       },
  //       {
  //         image: nemaroot,
  //         title: "NemaRoot",
  //         text: "Nematicida biorracional",
  //         description: `NemaRoot®  es un Nematicida Biorracional formulado a base de conidios del hongo  Paecilomyces lilacinus,  que actua parasitando huevecillos, juveniles, adultos y quistes de nematodos. Nemaroot® contiene Exuroot® que  induce la exudacion de compuestos que favorecen la colonización del hongo paecilomyces lilacinus y de otros microorganismos beneficos nativos que estimulan el desarrollo, actividad y sanidad radicular.`,
  //         link: "/productos/proteccion-de-cultivos/NemaRoot",
  //       },
  //       {
  //         image: medalk,
  //         title: "Medal",
  //         text: "Traslocador y surfactante",
  //         description: `Medal® es una formulación a base de ácidos ECCA Carboxy® que, debido a su acción tensoactiva, humecta una mayor área superficial del tejido de la planta o plaga y la acción traslocadora de los ácidos ECCA Carboxy® de su formulación, favorece el movimiento de los ingredientes activos en los tejidos de conducción. Para mejores resultados, se recomienda incluir en las soluciones de aspersión otros aditivos de diferente acción, como buferizante o adherente según se necesite.`,
  //         link: "/productos/proteccion-de-cultivos/Medal",
  //       },
  //     ],
  //   },
  //   {
  //     title: "BIOESTIMULANTES",
  //     subtitle: "Ver más",
  //     image: bioestimulantesImg.src,
  //     link: `/productos/bioestimulantes`,
  //     products: [
  //       {
  //         image: mycoroot,
  //         title: "MycoRoot",
  //         text: "Bioestimulante inductor de Micorrizas",
  //         description: `Es un inoculante que está formulado a base de hongos formadores de micorrizas, bacterias fijadoras de nitrógeno y compuestos de carbono que favorecen su establecimiento y multiplicación en la rizósfera incrementando el área de exploración de la raíz para mejorar la absorción nutricional.`,
  //         link: "/productos/proteccion-de-cultivos/MycoRoot",
  //       },
  //       {
  //         image: biofitrtu,
  //         title: "Biofit Rtu",
  //         text: "Bioestimulante de la Actividad Rizosférica",
  //         description: `Biofit® RTU es un bioestimulante que potencializa la Actividad Rizosférica, ayudando a la recuperación y preservación de la fertilidad biológica en suelos agotados de manera integral. Dentro de su formulación contiene gran diversidad de microorganismos benéficos  que permiten optimizar la nutrición y desarrollo,  favoreciendo la salud de las plantas desde la raíz.`,
  //         link: "/productos/proteccion-de-cultivos/Biofit-Rtu",
  //       },
  //       {
  //         image: vernum,
  //         title: "Vernum",
  //         text: "Bioestimulante inductor de floración",
  //         description: `Vernum® Induce la floración, lo que permite un desarrollo del frutal mas uniforme facilitando su manejo; así mismo, favorece a un desarrollo vegetativo y fructífero mas equilibrado. Esta formulación aporta los nutrientes clave para el proceso de reactivación de las yemas, así como coadyuvantes que facilitan el ingreso y aumenta la biodisponibilidad de los mismo en los sitios especificos de acción que inducen la floración y fortalecen el desarrollo inicial de los brotes.`,
  //         link: "/productos/proteccion-de-cultivos/Vernum",
  //       },
  //       {
  //         image: brixup,
  //         title: "Brix Up",
  //         text: "Bioestimulante para aumentar grados brix",
  //         description: `Brix Up® Incrementa la presión del flujo en el floema desde las zonas fuente hacia los frutos, ocasionando mayor traslocación de fotosintatos hacia los frutos.`,
  //         link: "/productos/proteccion-de-cultivos/Brix-Up",
  //       },
  //       {
  //         image: packhard,
  //         title: "Packhard",
  //         text: "Bioestimulante para calidad y vida en postcosecha",
  //         description: `Packhard® es una formulación a base de ácidos ECCA Carboxy®,  que colabora a la producción de frutos de alto valor económico por sus características organolépticas (firmeza, color, sabor, brillo), larga vida de anaquel y baja incidencia de enfermedades de poscosecha.`,
  //         link: "/productos/proteccion-de-cultivos/Packhard",
  //       },
  //       {
  //         image: selectoxl,
  //         title: "Selecto XL",
  //         text: "Bioestimulante para el amarre y tamaño de frutos",
  //         description: `Selecto XL® Actúa en el metabolismo de la planta estimulando los procesos de desarrollo y tamaño de frutos, incrementando su valor económico y proporción de fruta cosechable. Además, retrasa la senescencia del cultivo.`,
  //         link: "/productos/proteccion-de-cultivos/Selecto-XL",
  //       },
  //       {
  //         image: carboxyl,
  //         title: "Carboxy L",
  //         text: "Bioestimulante para traslocar azúcares",
  //         description: `Carboxy® L es una formulación a base ácido ECCA Carboxy®, que provoca una mayor eficiencia en la translocación de fotosintatos hacia los frutos y órganos de almacenamiento, logrando incrementar la concentración de grados brix, acumulación de reservas. Además, puede utilizarse como madurante de caña de azúcar.`,
  //         link: "/productos/proteccion-de-cultivos/Carboxy-L",
  //       },
  //       {
  //         image: atpup,
  //         title: "Atp Up",
  //         text: "Antiestresante",
  //         description: `ATP UP® es una formulación a base de ácidos ECCA Carboxy® nitrógeno y fósforo que promueve la recuperación y el restablecimiento del metabolismo en los cultivos sometidos a estrés (calor, sequía, toxicidad, baja luminosidad o baja temperatura) de manera rápida y prolongada.`,
  //         link: "/productos/proteccion-de-cultivos/Atp-Up",
  //       },
  //       {
  //         image: exuroot,
  //         title: "Exu-Root",
  //         text: "Bioestimulante Inductor de Exudados Radiculares",
  //         description: `Asegura la buena respuesta de las formulaciones de microorganismos benéficos, debido a que optimiza el funcionamiento de la raíz, induciendo la exudación de compuestos que actúan como señalizadores en la rizosfera.`,
  //         link: "/productos/proteccion-de-cultivos/Exu-Root",
  //       },
  //       {
  //         image: brotstart,
  //         title: "Brot Start",
  //         text: "Bioestimulante inductor de brotación",
  //         description: `Brot Start® Aporta los nutrientes clave para el proceso de reactivación de las yemas, así como coadyuvantes que facilitan el ingreso y aumentan la biodisponibilidad de los mismos dentro de los sitos específicos de acción que inducen la brotación y fortalecen el desarrollo inicial de los brotes.`,
  //         link: "/productos/proteccion-de-cultivos/Brot-Start",
  //       },
  //       {
  //         image: balox,
  //         title: "Balox",
  //         text: "Bioestimulante contra el estrés salino",
  //         description: `Contiene ingredientes activos que influyen en el metabolismo de la planta, provocando un incremento en la biosíntesis de ciclitoles específicos que actúan como solutos compatibles para regular los potenciales osmóticos dentro de las células de la raíz y de la planta, que confieren tolerancia al estrés salino.`,
  //         link: "/productos/proteccion-de-cultivos/Balox",
  //       },
  //       {
  //         image: nutrisorbg,
  //         title: "Nutrisorb G",
  //         text: "Bioestimulante granulado para la asimilación de nutrientes",
  //         description: ``,
  //         link: "/productos/proteccion-de-cultivos/Nutrisorb-G",
  //       },
  //       {
  //         image: undefined,
  //         title: "Nutrisorb XL",
  //         text: "",
  //         description: ``,
  //         link: "/productos/proteccion-de-cultivos/Nutrisorb-XL",
  //       },
  //       {
  //         image: nutrisorblraiz,
  //         title: "Nutrisorb L",
  //         text: "Bioestimulante para la asimilación de nutrientes",
  //         description: `Es una formulación a base de ácidos ECCA Carboxy® que actúa sobre la actividad y longevidad de la raíz, potencializando el proceso de absorción de nutrientes, obteniendo como resultado la mayor extracción de nutrientes de la solución del suelo y como consecuencia un mejor desarrollo y rendimiento del cultivo.`,
  //         link: "/productos/proteccion-de-cultivos/Nutrisorb-L",
  //       },
  //       {
  //         image: radigrow,
  //         title: "Radigrow",
  //         text: "Enraizador",
  //         description: `Es una formulación a base de ácidos ECCA Carboxy® que estimulan el crecimiento de raíces por periodos prolongados sin restricciones para su desempeño, de manera segura en cualquier etapa fenológica del cultivo.`,
  //         link: "/productos/proteccion-de-cultivos/Radigrow",
  //       },
  //       {
  //         image: undefined,
  //         title: "Algak",
  //         text: `"Extracto de Algas Marinas
  //         (Ascophyllum nodosum)"`,
  //         description: `Algak® es un bioestimulante formulado 100% en base a extractos de algas marinas de aguas frías (Ascophyllum nodosum), que promueve la síntesis natural de hormonas (citoquininas y auxina), osmoprotectores, elicitores  y agentes complejantes/quelatantes.`,
  //         link: "/productos/proteccion-de-cultivos/Algak",
  //       },
  //       {
  //         image: undefined,
  //         title: "Enerboost",
  //         text: `Bioestimulante a base de aminoácidos de origen vegetal`,
  //         description: `ENERBoost® beneficia el desarrollo de los cultivos, a través del aporte de aminoácidos, macro y micro elementos.`,
  //         link: "/productos/proteccion-de-cultivos/Enerboost",
  //       },
  //       {
  //         image: undefined,
  //         title: "Haddak",
  //         text: `Preventivo y corrector de estrés`,
  //         description: ``,
  //         link: "/productos/proteccion-de-cultivos/Haddak",
  //       },
  //       {
  //         image: tseminus,
  //         title: "Tseminus",
  //         text: `Bioestimulante para Tratamiento a Semilla`,
  //         description: `Favorece el establecimiento y vigor en las etapas tempranas de desarrollo de la planta, para lograr un mejor desempeño de la raíz e incrementar la actividad microbiológica y mejorar el ambiente rizosférico.`,
  //         link: "/productos/proteccion-de-cultivos/Tseminus",
  //       },
  //       {
  //         image: radigrow,
  //         title: "Radigrow G",
  //         text: `Enraizador granulado`,
  //         description: ``,
  //         link: "/productos/proteccion-de-cultivos/Radigrow-G",
  //       },
  //     ],
  //   },
  //   {
  //     title: "NUTRIENTES",
  //     subtitle: "ver más",
  //     image: nutrientesImg.src,
  //     link: `/productos/nutrientes`,
  //     products: [
  //       {
  //         image: carboxyca,
  //         title: "Carboxy Ca",
  //         text: "Aportador de Ca de alta asimilación",
  //         description: `Carboxy Ca® Cuenta con ácidos ECCA Carboxy® tipo alifáticos en su formulación, los cuales forman quelatos de estabilidad media con el Calcio; es decir, lo protegen de las barreras de la cutícula y epidermis de la hoja o fruto, permitiendo su fácil flujo a través de los tejidos de conducción y eficaz ingreso a las células demandantes.`,
  //         link: "/productos/proteccion-de-cultivos/Carboxy-Ca",
  //       },
  //       {
  //         image: carboxyk,
  //         title: "Carbooxy K",
  //         text: "Aportador de K de alta asimilación",
  //         description: `Carboxy K® Cuenta con ácidos ECCA Carboxy® tipo alifáticos en su formulación, los cuales favorecen un eficaz flujo de potasio, a nivel translaminar y por tejidos de conducción hacia los sitios de demanda, provocando una respuesta rápida en calibre, color y maduración de los frutos.`,
  //         link: "/productos/proteccion-de-cultivos/Carbooxy-K",
  //       },
  //       {
  //         image: carboxyminl,
  //         title: "Carboxy Min L",
  //         text: "Aportador de micronutrientes de alta asimilación",
  //         description: `Carboxy MIN-L® Los ácidos ECCA Carboxy® de tipo alifáticos contenidos en la 1formulación forman quelatos de estabilidad intermedia con micronutrientes, es decir, los protege de las barreras de la cutícula y epidermis de la hoja o fruto, permitiendo su fácil flujo a través de los tejidos de conducción y eficaz ingreso a las células demandantes.`,
  //         link: "/productos/proteccion-de-cultivos/Carbooxy-Min-L",
  //       },
  //       {
  //         image: proquelatezn,
  //         title: "Proquelate Zn",
  //         text: "Aportador de Zn de alta de asimilación",
  //         description: `Proquelate Zn® cuenta con ácidos ECCA Carboxy® tipo alifáticos en su formulación, los cuales forman quelatos de estabilidad media con el Zn, es decir, lo protege de las barreras de la cutícula y epidermis de la hoja o fruto permitiendo su fácil flujo a través de los tejidos de conducción y eficaz ingreso a las células demandantes.`,
  //         link: "/productos/proteccion-de-cultivos/Proquelate-Zn",
  //       },
  //       {
  //         image: proquelatemn,
  //         title: "Proquelate Mn",
  //         text: "Aportador de Mn de alta de asimilación",
  //         description: `Proquelate Mn® previene y corrige desórdenes nutricionales ocasionados por deficiencias de manganeso. Su formulación protege el Mn de las barreras de la cutícula y epidermis de la hoja o fruto permitiendo su fácil flujo a través de los tejidos de conducción y eficaz ingreso a las células demandantes.`,
  //         link: "/productos/proteccion-de-cultivos/Proquelate-Mn",
  //       },
  //       {
  //         image: proquelatemg,
  //         title: "Proquelate Mg",
  //         text: "Aportador de Mg de alta asimilación",
  //         description: `Proquelate Mg® Los ácidos ECCA Carboxy® de tipo alifáticos contenidos en la formulación, forman quelatos con el Magnesio de estabilidad intermedia, es decir, lo protegen de las barreras de la cutícula y epidermis de la hoja o fruto permitiendo su fácil flujo a través de los tejidos de conducción y eficaz ingreso a las células demandantes.`,
  //         link: "/productos/proteccion-de-cultivos/Proquelate-Mg",
  //       },
  //       {
  //         image: proquelatefe,
  //         title: "Proquelate Fe",
  //         text: "Aportador de Fe de alta asimilación",
  //         description: `Proquelate Fe® Los ácidos ECCA Carboxy® de tipo alifáticos contenidos en la formulación, forman quelatos con el Fierro de estabilidad intermedia, es decir, lo protegen de las barreras de la cutícula y epidermis de la hoja o fruto permitiendo su fácil flujo a través de los tejidos de conducción y eficaz ingreso a las células demandantes.`,
  //         link: "/productos/proteccion-de-cultivos/Proquelate-Fe",
  //       },
  //       {
  //         image: carboxyfe,
  //         title: "Carboxy Fe",
  //         text: "Fierro quelatado para uso de fertirrigación",
  //         description: `Carboxy® Fe contiene extractos ECCA Carboxy® y Fierro quelatado, que le permite permanecer en solución bajo condiciones extremas de pH. Además, pueden ser translocados en forma quelatada por los tejidos de conducción de la planta, aportando eficazmente la máxima cantidad de nutrientes en el tejido que lo demanda.`,
  //         link: "/productos/proteccion-de-cultivos/Carboxy-Fe",
  //       },
  //       {
  //         image: carboxymicro,
  //         title: "Carboxy Micro",
  //         text: "Micronutrientes quelatados para uso en fertigación",
  //         description: `Carboxy® Micro contiene extractos ECCA Carboxy® y micronutrientes quelatados, que le permite permanecer en solución bajo condiciones extremas de pH. Además pueden ser translocados en forma quelatada por los tejidos de conducción de la planta, aportando eficazmente la máxima cantidad de nutrientes en el tejido que lo demanda.`,
  //         link: "/productos/proteccion-de-cultivos/Carboxy-Micro",
  //       },
  //       {
  //         image: carboxyzn,
  //         title: "Carboxy Zn",
  //         text: "Zinc quelatado para uso en fertirrigación",
  //         description: `Carboxy® Zn contiene extractos ECCA Carboxy® y Zinc quelatado, que le permiten permanecer en solución bajo condiciones extremas de pH. Además pueden ser translocados en forma quelatada por los tejidos de conducción de la planta, aportando eficazmente la máxima cantidad de nutrientes en el tejido que lo demanda.`,
  //         link: "/productos/proteccion-de-cultivos/Carboxy-Zn",
  //       },
  //       {
  //         image: undefined,
  //         title: "Nutrimak+ Antisenescencia",
  //         text: "Retarda la Maduración de Frutos",
  //         description: `Es una formulación que previene y corrige desordenes nutricionales ocasionados por deficiencia de Cobalto y Molibdeno y retarda la maduración de los frutos.`,
  //         link: "/productos/proteccion-de-cultivos/Nutrimak-Antisenescencia",
  //       },
  //       {
  //         image: undefined,
  //         title: "Nutrimak+ Corrector",
  //         text: "Mejora la Capacidad Fotosintética",
  //         description: `Es una formulación que previene y corrige desordenes nutricionales ocasionados por deficiencia de Magnesio, Hierro y Zinc favoreciendo la fusión fotosintética.`,
  //         link: "/productos/proteccion-de-cultivos/Nutrimak-Corrector",
  //       },
  //       {
  //         image: undefined,
  //         title: "Nutrimak+ Desarrollo",
  //         text: "Mejora el Metabolismo del Nitrógeno y Desarrollo Vegetativo",
  //         description: `Es una formulación que previene y corrige desordenes nutricionales ocasionados por deficiencia de Boro, Zinc y Molibdeno, favoreciendo un desarrollo vegetativo equilibrado.`,
  //         link: "/productos/proteccion-de-cultivos/Nutrimak-Desarrollo",
  //       },
  //       {
  //         image: undefined,
  //         title: "Nutrimak+ Vigor",
  //         text: "Traslocador de Azucares",
  //         description: `Es una formulación que previene y corrige desordenes nutricionales ocasionados por deficiencia de Boro y Molibdeno. Auxilia en la traslocación de azucares a frutos y órganos de reserva.`,
  //         link: "/productos/proteccion-de-cultivos/Nutrimak-Vigor",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ACONDICIONAMIENTO DE SUELOS",
  //     subtitle: "ver más",
  //     image: acondicionadoresDeSueloImg.src,
  //     link: `/productos/acondicionadores-de-suelos`,
  //     products: [
  //       {
  //         image: promesol5x,
  //         title: "Promesol 5x",
  //         text: "Acondicionador de suelos",
  //         description: `Promesol® 5X es una formulación a base de ácidos ECCA Carboxy® que genera una buena estructura fisica del suelo, mejora las condiciones de humedad y aireacion favoreciendo el crecimiento de la raiz.`,
  //         link: "/productos/proteccion-de-cultivos/Promesol-5x",
  //       },
  //       {
  //         image: promesolca,
  //         title: "Promesol Ca",
  //         text: "Acondicionador de suelos",
  //         description: `Promesol® Ca+ es una formulación a base de extractos concentrados en cascarillas agrícolas ECCA Carboxy ® que auxilia en la protección del cultivo contra el estrés salino, genera una buena estructura física de suelo para favorecer el crecimiento de la raíz y las condiciones de humedad y aireación.`,
  //         link: "/productos/proteccion-de-cultivos/Promesol-Ca",
  //       },
  //     ],
  //   },
  // ];

  var index = getIndex(products, params["slang"]);

  return (
    <section>
      <DynamicProductsClient
        params={params}
        pagesInfo={products}
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

async function getProducts(locale) {
  try {
    const response = await fetch(WORDPRESS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
              query NewQuery {
                categories(where: {name: "productos"}) {
                  edges {
                    node {
                      id
                      posts(where: {tag: "${locale}"}) {
                        nodes {
                          id
                          content
                        }
                      }
                    }
                  }
                }
              }
            `,
      }),
    });

    const rawData = await response.json();
    var rawContent =
      rawData.data.categories.edges[0].node.posts.nodes[0].content;
    if (rawContent.includes("&#91;")) {
      rawContent = rawContent.replaceAll("&#91;", "[");
    }

    const firstIdx = rawContent.indexOf("[");
    const lastIdx = rawContent.lastIndexOf("]");
    rawContent = rawContent.substring(firstIdx, lastIdx + 1);
    var content = JSON.parse(rawContent);
    return content;
  } catch (error) {
    return [];
  }
}
