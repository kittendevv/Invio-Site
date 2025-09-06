import { Options } from "$fresh/plugins/twind.ts";

// Color palette based on provided image names
// Cloud Dancer #F0EEE9
// Nordic Breeze #D3DDE7
// Duranta Yellow #D8E63C
// Light Violet #D6B4FC
// Intergalactic Highway #273287
// Tetsu-Kon Blue #17184B

export const colors = {
  cloud: "#F0EEE9",
  nordic: "#D3DDE7",
  duranta: "#D8E63C",
  violet: "#D6B4FC",
  highway: "#273287",
  tetsu: "#17184B",
};

const config: Options = {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        ...colors,
        bg: {
          gradientTop: colors.tetsu,
          gradientMid: colors.highway,
          gradientBottom: colors.cloud,
        },
      },
      fontFamily: {
        sans: ["'InterVariable'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  preflight: (preflight: string) => `@layer base {html {background: linear-gradient(180deg, ${colors.tetsu} 0%, ${colors.highway} 40%, ${colors.cloud} 100%); color: ${colors.cloud};}}
  ${preflight}`,
  // Plugins or variants can be added here if needed later
};

export default config;
