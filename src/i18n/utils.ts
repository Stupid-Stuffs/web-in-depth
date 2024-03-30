import { en } from "./en";
import { config } from "../consts";
import { vi } from "./vi";

const ui = {
  en,
  vi: vi,
};

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    return ui[lang][key] || ui[config.lang][key];
  };
}

export const t = useTranslations(config.lang);
