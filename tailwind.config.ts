import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        default: {
          light: {
            red: "#FF3B30",
            orange: "#FF9500",
            yellow: "#FFCC00",
            green: "#34C759",
            cyan: "#5AC8FA",
            blue: "#007AFF",
            indigo: "#5856D6",
            purple: "#AF52DE",
            pink: "#FF2D55",
          },
          dark: {
            red: "#FF453A",
            orange: "#FF9F0A",
            yellow: "#FFD60A",
            green: "#32D74B",
            cyan: "#64D2FF",
            blue: "#0A84FF",
            indigo: "#5E5CE6",
            purple: "#BF5AF2",
            pink: "#F33A5D",
          },
        },
        bg: {
          light: {
            pri: "#ffffff",
            sec: "#F2F2F7",
            ter: "#E6E6E7",
          },
          darkElevated: {
            pri: "#1C1C1E",
            sec: "#2C2C2E",
            ter: "#3A3A3C",
          },
          darkBase: {
            pri: "#000000",
            sec: "#1C1C1E",
            ter: "#2C2C2E",
          },
        },
        label: {
          light: {
            pri: "#000000",
            sec: "rgba(60, 60, 67, 0.6)",
            ter: "rgba(60, 60, 67, 0.3)",
            qua: "rgba(60, 60, 67, 0.18)",
          },
          dark: {
            pri: "#ffffff",
            sec: "rgba(235, 235, 245, 0.6)",
            ter: "rgba(235, 235, 245, 0.3)",
            qua: "rgba(235, 235, 245, 0.18)",
          },
        },
        seperator: {
          light: {
            noTran: "#C6C6C8",
            withTran: "rgba(60, 60, 67, 0.36)",
          },
          dark: {
            noTran: "#38383A",
            withTran: "rgba(84, 84, 88, 0.65)",
          },
        },
        fill: {
          light: {
            Pri: "rgba(120, 120, 128, 0.2)",
            sec: "rgba(120, 120, 128, 0.16)",
            ter: "rgba(118, 118, 128, 0.12)",
            qua: "rgba(116, 116, 128, 0.08)",
          },
          dark: {
            Pri: "rgba(120, 120, 128, 0.36)",
            sec: "rgba(120, 120, 128, 0.32)",
            ter: "rgba(118, 118, 128, 0.24)",
            qua: "rgba(116, 116, 128, 0.18)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
