import { useTranslations } from "next-intl";
import AvisoDePrivacidadPageClient from "./components/AvisoDePrivacidad";

export default function AvisoDePrivacidadPage() {
  const t = useTranslations("aviso-de-privacidad");

  return (
    <section>
      <AvisoDePrivacidadPageClient texts={t("title")} />
    </section>
  );
}
