import type { Config } from "tailwindcss";

import tailwindcss_animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    padding: {
      xxxs: "2px",
      xxs: "4px",
      xs: "8px",
      sm: "10px",
      md: "12px",
      lg: "16px",
      xl: "20px",
      xxl: "24px",
      xxxl: "32px",
    },
    margin: {
      xxxs: "2px",
      xxs: "4px",
      xs: "8px",
      sm: "10px",
      md: "12px",
      lg: "16px",
      xl: "20px",
      xxl: "24px",
      xxxl: "32px",
    },
    gap: {
      xxxs: "4px",
      xxs: "6px",
      xs: "8px",
      sm: "12px",
      md: "16px",
      lg: "20px",
      xl: "24px",
      xxl: "28px",
      xxxl: "32px",
    },

    borderRadius: {
      xxxs: "1px",
      xxs: "2px",
      xs: "3px",
      sm: "4px",
      md: "6px",
      lg: "8px",
      xl: "10px",
      xxl: "12px",
      xxxl: "14px",
    },

    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcss_animate],
};
export default config;
