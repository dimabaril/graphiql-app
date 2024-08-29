"use client";

import { FC, FormEvent } from "react";
import Button from "src/components/Button/Button";
import FormField from "src/components/FormField/FormField";
import { routes } from "src/constants";
import { resetPassword } from "src/firebase/auth/auth";
import { Link } from "src/i18n.config";

import { useTranslations } from "next-intl";

// @todo: add validation
const ResetPassword: FC = () => {
  const t = useTranslations("ResetPassword");

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;

    if (email) {
      await resetPassword(email);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6 text-center">{t("title")}</h1>
      <form
        data-testid="sign-in-main"
        className="space-y-4"
        onSubmit={handleSubmit}
      >
        <FormField label={t("email")} name="email" type="email" />
        <Button>{t("submit")}</Button>
      </form>
      <div className="pt-8 text-center">
        <Link href={routes.signIn}>{t("signIn")}</Link>
      </div>
    </>
  );
};

export default ResetPassword;
