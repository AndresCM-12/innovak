import { useTranslations } from "next-intl";
import Technologyclient from "./components/Technology";

export default function TechnologyPage() {
  const t = useTranslations("contacto");

  return (
    <section>
      <Technologyclient texts={t("title1")} />
    </section>
  );
}
