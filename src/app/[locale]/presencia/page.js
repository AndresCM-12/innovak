import { useTranslations } from "next-intl";
import PresenciaClient from "./components/Presencia";

export default function ContactoPage() {
  const t = useTranslations("contacto");

  return (
    <section>
      <PresenciaClient texts={t("title1")} />
    </section>
  );
}
