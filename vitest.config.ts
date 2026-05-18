import { defineConfig, configDefaults } from "vitest/config";
import path from "node:path";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
    globals: true,
    css: true,
    // Local git worktrees (superpowers / browser-pdf-tools) are nested inside
    // this checkout and carry their own copies of the test suite + node_modules.
    // Without excluding them vitest collects stale duplicates and resolves a
    // second react-dom, producing spurious failures.
    exclude: [...configDefaults.exclude, "**/.claude/**", "**/.worktrees/**"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
