import type { Config } from "tailwindcss";
import tailwindTypography from "@tailwindcss/typography";

export default <Partial<Config>>{
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
  },
  plugins: [tailwindTypography],
};
