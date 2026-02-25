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
        border: "#D6E4F0",
        background: "#F4F9FD",

        brand: {
          white: "#FFFFFF",

          primary: {
            light: "#EAF3FF",
            DEFAULT: "#2F80ED",
            hover: "#1E6FD8",
            dark: "#1557B0",
          },
          accent: {
            light: "#EEF2FF",
            DEFAULT: "#4F46E5",
            hover: "#4338CA",
            dark: "#3730A3",
          },

          black: {
            DEFAULT: "#111827",
            25: "rgba(17, 24, 39, 0.25)",
          },

          red: "#E5484D",
        },

        info: {
          info: "#EAF6FF",
          warning: "#FFF8CC",
        },

        sidebar: {
          divider: "#E3EEF7",
          background: "#F7FBFF",
        },

        header: {
          text: "#5F6B7A",
        },

        form: {
          border: "#D8E6F3",
          placeholder: "#9BB3C9",
          social: {
            background: "#EEF6FC",
          },
          footer: {
            title: "#1F2937",
          },
          gray: {
            light: "#C7D7E6",
          },
        },
      },
    },
  },
};
