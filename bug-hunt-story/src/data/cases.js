import { CASES_GLOBAL } from "./casesGlobal.js";
import { CASES_PAGES } from "./casesPages.js";
import { CASES_RUNTIME } from "./casesRuntime.js";
import { CASES_MOBILE } from "./casesMobile.js";

export const ALL_CASES = [
  ...CASES_GLOBAL,
  ...CASES_PAGES,
  ...CASES_RUNTIME,
  ...CASES_MOBILE,
];

export const TOTAL_CASES = ALL_CASES.length;

export const SCORING = [
  { min: 180, label: "🏆 Pixel-Perfect Avcı Efsanesi" },
  { min: 130, label: "🎯 Senior Frontender" },
  { min: 80,  label: "🔍 İyi Gözlemci" },
  { min: 40,  label: "📚 Bug Listesi'ni tekrar oku" },
  { min: 0,   label: "🤔 Mentor masasına gel" },
];

export const STATUS_STYLES = {
  "Açık":         "bg-rose-100 text-rose-800 border-rose-200",
  "Yeni":         "bg-amber-100 text-amber-800 border-amber-200",
  "İncelemede":   "bg-blue-100 text-blue-800 border-blue-200",
};
