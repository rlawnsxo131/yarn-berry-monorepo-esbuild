## dlx 는 임시환경

- vite(첫번째 시도)
- dlx sb init --builder @storybook/builder-vite
- vite -> package
- react, react-dom -> package 에만 있거나, root 에만 있어도 잘 됨
- https://github.com/storybookjs/builder-vite/issues/141 -> 결국엔 거지같은거 그냥은 아직 안된다

- vite(두번째 시도)
- dlx sb init --builder @storybook/builder-vite
- react 선택
- vite (패키지에만 dev 설치)
- @storybook/preview-web(패키지에만 dev 설치)
- @storybook/addon-backgrounds(패키지에만 dev 설치)
- @storybook/addon-measure(패키지에만 dev 설치)
- @storybook/channel-postmessag(패키지에만 dev 설치)
- @storybook/channel-websocket(패키지에만 dev 설치)
- @storybook/addons(패키지에만 dev 설치)
- react react-dom 은(패키지에만 dev 설치)
  - 나는 근데 어차피 전체 리액트 버전을 맞추는게 나을것 같아서 그냥 root 랑 prod 버전 맞추기로 함
  - 현재는 peer, dev 로 명시된 상태
- 참고: https://storybook.js.org/docs/react/builders/vite

- webpack(webpack react)
- yarn coreui dlx sb@next init --builder webpack5
- @storybook/react-webpack5 -- root 에 있을때만 됨(root 만있어도 됨)
- react, react-dom -> root 랑 package 둘다 잇어야 잘됨
- @babel/core -> root 에 있을때만 잘됨(root 만있어도 됨)
- @mdx-js/react -> package 에만 있어도 잘됨
- 프로젝트내 prop-types 지워버림(안지울경우 따로 prop-types 설치해야함)
- "resolutions": {
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "@storybook/{app}/webpack": "^5"
  }

- react vs react_product 차이
  https://stackoverflow.com/questions/71074658/whats-the-difference-react-vs-react-project-vs-webpack-react-for-storybook

참고
https://techblog.woowahan.com/7976/
https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#wrong-webpack-version

next.js 사전 트랜스 파일링 https://minemanemo.tistory.com/168
