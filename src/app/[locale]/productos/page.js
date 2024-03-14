import { useTranslations } from "next-intl";
import ProductsClient from "./components/Products";

export default function ContactoPage() {
  const t = useTranslations("contacto");

  return (
    <section>
      <ProductsClient texts={t("title1")} />
    </section>
  );
}
