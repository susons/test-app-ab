import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      maxWidth: {
        container: "1120px",
      },
      colors: {
        border: "#C0C8D8",
        background: "#4C5367",

        brand: {
          white: "#FFFFFF",

          green: {
            DEFAULT: "#CDDA32",
            hover: "#ACB90C",
          },

          blue: {
            dark: "#152649",
            dark64: "rgba(21, 38, 73, 0.64)",
            ui: "#313892",
            light: "#95CEEB",
          },

          black: {
            DEFAULT: "#000000",
            25: "rgba(0, 0, 0, 0.25)",
          },

          red: "#BC3C3C",
        },

        info: {
          info: "#E5F6FF",
          warning: "#FFFFCC",
        },

        sidebar: {
          divider: "#E2E4E9",
          background: "#F9F9F9",
        },

        header: {
          text: "#7E7E7E",
        },

        form: {
          border: "#CED2D7",
          placeholder: "#B4B9C4",
          social: {
            background: "#E9E9E9",
          },
          footer: {
            title: "#333333",
          },
          gray: {
            light: "#BDC1CD",
          },
        },
      },
    },
  },
};
