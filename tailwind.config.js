/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"),
            a: {
              color: theme("colors.blue.600"),
              "&:hover": {
                color: theme("colors.blue.800"),
              },
            },
            h1: {
              color: theme("colors.gray.900"),
            },
            h2: {
              color: theme("colors.gray.900"),
            },
            h3: {
              color: theme("colors.gray.900"),
            },
            blockquote: {
              borderLeftColor: theme("colors.gray.300"),
              color: theme("colors.gray.600"),
            },
            code: {
              color: theme("colors.pink.500"),
              backgroundColor: theme("colors.gray.100"),
              padding: "0.25rem 0.5rem",
              borderRadius: theme("borderRadius.md"),
            },
            pre: {
              backgroundColor: theme("colors.gray.900"),
              color: theme("colors.gray.100"),
              padding: "1rem",
              borderRadius: theme("borderRadius.md"),
              overflowX: "auto",
            },
            "pre code": {
              backgroundColor: "transparent",
              padding: 0,
              borderRadius: 0,
              fontSize: "0.875rem",
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.blue.400"),
              "&:hover": {
                color: theme("colors.blue.600"),
              },
            },
            h1: {
              color: theme("colors.gray.100"),
            },
            h2: {
              color: theme("colors.gray.100"),
            },
            h3: {
              color: theme("colors.gray.100"),
            },
            blockquote: {
              borderLeftColor: theme("colors.gray.700"),
              color: theme("colors.gray.400"),
            },
            code: {
              color: theme("colors.pink.400"),
              backgroundColor: theme("colors.gray.800"),
            },
            pre: {
              backgroundColor: theme("colors.gray.800"),
              color: theme("colors.gray.300"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
