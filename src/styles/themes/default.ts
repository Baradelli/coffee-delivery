export const defaultTheme = {
  product: {
    "yellow-100": "#F1E9C9",
    "yellow-500": "#DBAC2C",
    "yellow-900": "#C47F17",

    "purple-100": "#EBE5F9",
    "purple-500": "#8047F8",
    "purple-900": "#4B2995",
  },

  base: {
    title: "#272221",
    subtitle: "#403937",
    text: "#574F4D",
    label: "#8D8686",
    hover: "#D7D5D5",
    button: "#E6E5E5",
    input: "#EDEDED",
    card: "#F3F2F2",
    background: "#FAFAFA",
    white: "#FFFFFF",
  },

  weight: {
    regular: 400,
    bold: 700,
    extraBold: 800,
  },

  size: {
    title: {
      xl: "3rem",
      l: "2rem",
      m: "1.5rem",
      s: "1.25rem",
      xs: "1.125rem",
    },
    text: {
      l: "1.25rem",
      m: "1rem",
      s: "0.875rem",
      xs: "0.75rem",
    },
    tag: "0.625rem",
    button: {
      g: "0.875rem",
      m: "0.75rem",
    },
  },
} as const;
