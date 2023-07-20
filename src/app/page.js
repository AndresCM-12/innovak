import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoImageContainer}></div>
        <NavsLink />
        <div className={styles.emptyContainer}></div>
      </header>
      <main className={styles.main}>
        <p>Main</p>
      </main>
      <footer className={styles.footer}></footer>
    </>
  );

  function NavsLink() {
    return (
      <nav>
        <ul className={styles.navUl}>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Nuestras Raíces</a>
          </li>
          <li>
            <a href="#">Presencia</a>
          </li>
          <li>
            <a href="#">Oferta de valor</a>
          </li>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Innovak news</a>
          </li>
          <li>
            <a href="#">I&D</a>
          </li>
          <li>
            <a href="#">Network</a>
          </li>
        </ul>
      </nav>
    );
  }
}
