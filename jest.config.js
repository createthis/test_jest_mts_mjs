// jest.config.js
export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.mts'],
  transform: {
    '^.+\\.mts$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: 'tsconfig.json',
      },
    ],
  },
  moduleFileExtensions: ['mts', 'mjs', 'js', 'json', 'node'],
  testMatch: ['**/?(*.)+(spec|test).mts'],
  roots: ['<rootDir>/tests'],
};
