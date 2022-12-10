**Root**

- config
- jest @types/jest --dev 설치(resolution)

```javascript
module.exports = {
  projects: [
    '<rootDir>/packages/webapp/jest.config.js',
    '<rootDir>/packages/coreui/jest.config.js',
  ],
};
```

- yarn workspaces 내용 넣자
- root 에 jest 없으면 coreui 에서 작동 안함.

**nextjs**

- 아래 설치뒤 tsconfig 에 jest types: 추가
- @types/jest 있어야 describe 를 안다

```shell
yarn add --dev jest-environment-jsdom @testing-library/react @testing-library/jest-dom @types/jest
```

- 실행엔 상관없지만 toBeInTheDocument 사용위해 아래 추가

```
yarn webapp add --dev @types/testing-library__jest-dom
```

**storybook**
참고 https://ui.toast.com/posts/ko_20220111

- add testing library

- 실행엔 상관없지만 toBeInTheDocument 사용위해 아래 추가

```
yarn coreui add --dev @types/testing-library__jest-dom
```

- 아래 설치하고

```
 yarn coreui add --dev @storybook/test-runner
```
