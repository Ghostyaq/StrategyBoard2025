import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

export default defineConfig({
    plugins: [
        VitePWA({
            injectRegister: "auto",
            registerType: "autoUpdate",
            workbox: {
                globPatterns: ["**/*.{js,html,png}"],
                cleanupOutdatedCaches: true,
            },
            manifest: {
                name: "StrategyBoard2025",
                short_name: "Strategy2025",
                description: "FRC2025 Strategy Board",
                theme_color: "#ffffff",
                icons: [
                    {
                        src: "favicon/android-chrome-192x192.png",
                        sizes: "192x192",
                        type: "image/png"
                    },
                    {
                        src: "favicon/android-chrome-512x512.png",
                        sizes: "512x512",
                        type: "image/png"
                    }
                ]
            }
        })
    ],
    build: {
        target: "es2022"
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
                }
    },
    base: "/StrategyBoard2025/"
});
