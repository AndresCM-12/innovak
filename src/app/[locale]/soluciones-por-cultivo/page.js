import { useTranslations } from "next-intl";
import ContactoPageClient from "./components/Contact";

export default function ContactoPage() {
  const t = useTranslations("contacto");

  return (
    <section>
      <ContactoPageClient texts={t("title1")} />
    </section>
  );
}
