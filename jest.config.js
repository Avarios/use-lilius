module.exports = {
  preset: "ts-jest",
  testMatch: ["**/*.tests.(ts|tsx)"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  verbose: true,
};
