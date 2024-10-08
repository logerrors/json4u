import React from "react";
import Background from "@/components/Background";
import LinkButton from "@/components/LinkButton";
import Section from "@/components/Section";
import Typography from "@/components/ui/typography";
import { useTranslations } from "next-intl";

export default function Title() {
  const t = useTranslations("Home");

  return (
    <Section className="gap-6 py-36">
      <Typography variant="h1" className="max-w-3xl text-center mb-6">
        {t("landing_title")}
      </Typography>
      <Typography variant="h5">{t("landing_subtitle")}</Typography>
      <div className="flex gap-4">
        <LinkButton className="h-[54px]" size="lg" variant="default" href="/editor">
          {/* TODO: 改为 start free */}
          <Typography variant="h5">{t("try_now")}</Typography>
        </LinkButton>
      </div>
      <Background size={40} />
    </Section>
  );
}
