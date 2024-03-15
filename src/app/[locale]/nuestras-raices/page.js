import { useTranslations } from "next-intl";
import NuestrasRaicesClient from "./components/NuestrasRaices";

export default function ContactoPage() {
  const t = useTranslations("contacto");

  return (
    <section>
      <NuestrasRaicesClient texts={t("title1")} />
    </section>
  );
}
