import type { IStaticMethods } from "preline/dist";

declare global {
  interface Window {
    // Optional third-party libraries
    _: typeof import("lodash");
    $: typeof import("jquery");
    jQuery: typeof import("jquery");
    DataTable: Record<string, unknown>;
    Dropzone: Record<string, unknown>;
    VanillaCalendarPro: Record<string, unknown>;
    noUiSlider: Record<string, unknown>;
    // Preline UI
    HSStaticMethods: IStaticMethods;
    HSThemeSwitch: typeof import("preline/dist/types/theme-switch");
  }
}

export {};