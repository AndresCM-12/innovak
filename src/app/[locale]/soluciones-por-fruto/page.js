import { useTranslations } from "next-intl";
import SolucionesPorFruto from "./components/SolucionesPorFruto";

export default function ContactoPage() {
  const t = useTranslations("contacto");

  return (
    <section>
      <SolucionesPorFruto texts={t("title1")} />
    </section>
  );
}
