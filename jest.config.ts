import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "app/**/*.{ts,tsx}",
    "!app/layout.tsx",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": [
      "babel-jest",
      { configFile: "./jest-config/babel.config.js" },
    ],
  },
};

export default config;
