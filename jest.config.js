// jest.config.js
export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.mts'],
  globals: {
    'ts-jest': {
      useESM: true,
      tsconfig: 'tsconfig.json',
    },
  },
  transform: {
    '^.+\\.mts$': 'ts-jest',
    '^.+\\.mjs$': 'ts-jest',
  },
  moduleFileExtensions: ['mts', 'mjs', 'js', 'json', 'node'],
  testMatch: ['**/?(*.)+(spec|test).mts'],
  roots: ['<rootDir>/tests'],
};
