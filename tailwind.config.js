/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["var(--font-ubuntu)"],
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
      },
      colors: {
        primary: {
          light: "#46ECBA",
          DEFAULT: "#46ECBA",
          dark: "#46ECBA",
        },
        secondary: {
          light: "#0CD79A",
          DEFAULT: "#0CD79A",
          dark: "#0CD79A",
        },
        accent: {
          light: "#2094F2",
          DEFAULT: "#2094F2",
          dark: "#2094F2",
        },
        surface: {
          light: "#FFFFFF",
          DEFAULT: "#FFFFFF",
          dark: "#1B1E1F",
        },
        surfaceSection: {
          light: "#D9F2F6",
          DEFAULT: "#D9F2F6",
          dark: "#16373B",
        },
        background: {
          light: "#FAFAFA",
          DEFAULT: "#FAFAFA",
          dark: "#161819",
        },
        text: {
          light: "#374151",
          DEFAULT: "#374151",
          dark: "#f9fafb",
        },
        expansion: {
          light: "#EDF1F6",
          DEFAULT: "#EDF1F6",
          dark: "#494B4D",
        },
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
            // code: {
            //   color: theme("colors.pink.500"),
            //   backgroundColor: theme("colors.gray.100"),
            //   padding: "0.25rem 0.5rem",
            //   borderRadius: theme("borderRadius.md"),
            // },
            // pre: {
            //   backgroundColor: theme("colors.gray.900"),
            //   color: theme("colors.gray.100"),
            //   padding: "1rem",
            //   borderRadius: theme("borderRadius.md"),
            //   overflowX: "auto",
            // },
            // "pre code": {
            //   backgroundColor: "transparent",
            //   padding: 0,
            //   borderRadius: 0,
            //   fontSize: "0.875rem",
            // },
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
            // code: {
            //   color: theme("colors.pink.400"),
            //   backgroundColor: theme("colors.gray.800"),
            // },
            // pre: {
            //   backgroundColor: theme("colors.gray.800"),
            //   color: theme("colors.gray.300"),
            // },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
