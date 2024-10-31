import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        header: '#6669FE', 
        announcement: '#F8F8F8',
        announcementText: "#5354B8",
        classToday: "#E66DFF",
        otherStatus: "#FDF5FF",
        input: "#F6F6FB",
        buttonText: "#808080",
        contactLink: "#6669FE",
        recordingsMathHover: "#A3A4D9",
        recordingScienceHover: "#F2B6FF",
        noLiveClass: "#6F6F6F",
      },
    },
  },
  plugins: [],
};
export default config;
