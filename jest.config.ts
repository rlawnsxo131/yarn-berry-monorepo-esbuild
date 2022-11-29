/**
 * 이 경우는 berry 에서 권장하는 방법과는 거리가 먼듯하다.
 */
import type { Config } from 'jest';

const config: Config = {
  projects: [
    '<rootDir>/packages/webapp/jest.config.js',
    '<rootDir>/packages/coreui/jest.config.js',
  ],
};

export default config;
