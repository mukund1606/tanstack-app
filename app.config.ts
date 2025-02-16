import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "@tanstack/start/config";
import tsConfigPaths from "vite-tsconfig-paths";

// import "./src/env/client";
// import "./src/env/server";

export default defineConfig({
  tsr: {
    appDirectory: "src",
    routesDirectory: "src/app",
  },
  vite: {
    envPrefix: "VITE_PUBLIC_",
    plugins: [
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      tailwindcss(),
    ],
  },
});
