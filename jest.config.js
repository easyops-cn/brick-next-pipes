module.exports = {
  transform: { "^.+\\.[t|j]sx?$": "babel-jest" },
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  collectCoverage: true,
  coverageDirectory: "<rootDir>/.coverage",
};
