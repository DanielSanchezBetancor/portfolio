import nextJest from "next/jest";

const customJestConfig = {
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  moduleNameMapper: {
    "^@src/(.*)": "<rootDir>/src/$1",
    "^@public/(.*)": "<rootDir>/public/$1",
  },
  testEnvironment: "jsdom",
  roots: ["<rootDir>"],
  setupFilesAfterEnv: ["./src/test/mocks/i18n-mock.ts"],
};

const createJestConfig = nextJest({ dir: "./" });

export default createJestConfig(customJestConfig);
