import type { Config } from 'jest';

const config: Config = {
  projects: [
    '<rootDir>/packages/webapp/jest.config.js',
    '<rootDir>/packages/coreui/jest.config.js',
  ],
};

export default config;
