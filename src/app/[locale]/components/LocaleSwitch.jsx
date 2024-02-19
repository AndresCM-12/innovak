"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LocaleSwitch() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const locales = ["mxn", "bra", "col", "chl", "pe", "usa", "tur", "intl"];

  const onSelectChange = (event) => {
    const nextLocale = event.target.value;
    startTransition(() => {
      const currentPath = window.location.pathname;
      const currentLocale = currentPath.split("/")[1];
      const newPath = currentPath.replace(
        `/${currentLocale}`,
        `/${nextLocale}`
      );
      router.push(newPath);
    });
  };

  return (
    <label>
      <select
        style={{
          padding: "0.5rem",
          fontSize: "1rem",
          borderRadius: "0.25rem",
          border: "1px solid #ccc",
        }}
        defaultValue={localActive}
        onChange={onSelectChange}
        disabled={isPending}
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {[locale]}
          </option>
        ))}
      </select>
    </label>
  );
}
