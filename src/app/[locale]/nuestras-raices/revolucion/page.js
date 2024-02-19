import styles from "./revolucion.module.css";
import bgImage from "../../../../../public/nuestrasraices/revolucionBackground.svg";

export default function Page() {
  return (
    <section
      className={styles.backgroundWrapper}
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <div className={styles.floatingText}>
        <p>
          La demanda de alimentos, el impacto del cambio climático y la
          necesidad de una agricultura sustentable juegan un papel crucial en la
          innovación tecnológica. Innovak Global enfoca sus objetivos y
          tecnología hacia una la filosofía compartida con el agricultor;
          PRODUCIR CON EXCELENCIA cultivos saludables, cuidando la salud de la
          tierra y RESPETANDO EL MEDIO AMBIENTE en diversos aspectos:
        </p>
      </div>
    </section>
  );
}
