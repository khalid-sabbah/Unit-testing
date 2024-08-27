// module.exports = {
//   transform: {
//     '^.+\\.jsx?$': 'babel-jest',  
//     '^.+\\.tsx?$': 'ts-jest'  
//   },
//   preset: 'ts-jest',
//   testEnvironment: 'node',
//   // testMatch: ['**/*.test.ts'],
//   testMatch: ["**/?(*.)+(test).[jt]s?(x)"],
//   moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
//   // testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",


// };

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',  // For JS/JSX files
    '^.+\\.tsx?$': 'ts-jest'      // For TS/TSX files
  },
  testMatch: ["**/?(*.)+(test).[jt]s?(x)"], // Matches test files with .js, .jsx, .ts, .tsx extensions
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"], // Supported file extensions
};
