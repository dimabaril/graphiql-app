import { Locale } from "i18n.config";
import { useLocale } from "next-intl";
import Image from "next/image";
// import Link from "next/link";
import { FC } from "react";
import AuthButton from "src/components/Header/AuthButton/AuthButton";
import LanguageToggle from "src/components/LanguageToggle/LanguageToggle";
import { routes } from "src/constants";

import { Link } from "../../../i18n.config";

const Header: FC = () => {
  const locale = useLocale() as Locale;

  return (
    <header data-testid="header" className="sticky top-0 bg-neutral-800">
      <ul className="flex items-center px-2 py-4 text-white">
        <li className="mr-auto">
          <Link href={routes.home}>
            <Image src="/rss-logo.svg" width={48} height={48} alt="RSS Logo" />
          </Link>
        </li>
        <LanguageToggle locale={locale} />
        <li className="min-w-24 text-right">
          <AuthButton />
        </li>
      </ul>
    </header>
  );
};

export default Header;
