/**
 * 이 경우는 berry 에서 권장하는 방법은 아니란 생각이 들기도 한다.
 * 다만, root 만 jest 를 갖고, yarn workspace 로 test 를 실행할순 있는데...
 * 일단 이건 나중에 조금더 고민해 보기로 하자.
 * 예제용으로 작성한 프로젝트이므로 예시용도로 남겨둔다(dependency 포함).
 */
import type { Config } from 'jest';

const config: Config = {
  projects: [
    '<rootDir>/packages/webapp/jest.config.js',
    '<rootDir>/packages/coreui/jest.config.js',
  ],
};

export default config;
