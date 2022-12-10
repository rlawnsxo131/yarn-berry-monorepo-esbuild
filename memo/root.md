```shell
$ yarn init
```

```shell
// 패키지를 만들었어도, 각 디렉터리(core, server) 아래 package.json 이 없으면 프로젝트로 인식 못한다.
$ yarn workspaces list
```

```json
// package.json 에 명시하여 어떤 파일을 사용할지 명시 가능타
{
  "exports": {
    ".": {
      "require": "./dist/index.js",
      "import": "./dist/index.mjs"
    }
  }
}
```

- 참고
<!-- "packages/*"
"@packages/coreui": "workspace:*" -->

```
tsconfig 에 "moduleResolution": "node" 좀 알아보자
https://it-eldorado.tistory.com/124
```

```
루트에 "references": {} 와
각 패키지에"composite": true, 를 알아두자
https://blog.shik.kr/typescript-project-reference/
```

```
공통 스크립트 사용하기
https://yarnpkg.com/getting-started/qa#how-to-share-scripts-between-workspaces
```

target을 ES5로 할수 없다. 이는 공식 문서 https://esbuild.github.io/content-types/ 에도 나와있고, 찾아보니 제작자도 지원할 생각이 없는 것 같다. https://github.com/evanw/esbuild/issues/182#issuecomment-646297130 따라서 별도로 transpile 후에, 다시 esbuild를 해줘야 한다.
타입스크립트를 지원하지만, d.ts를 emit 해주지 않는다. 이를 위해서는 별도로 tsc를 실행해서 타입을 만들어야 한다. 그래서 빌드시 별도로 tsc를 실행했다.

code-workspace 알아보자

참고링크
https://yceffort.kr/2021/07/npm-workspaces-esbuild
https://github.com/daangn/stackflow
https://techblog.woowahan.com/7976/
https://elvanov.com/2664

next.js 사전 트랜스 파일링 https://minemanemo.tistory.com/168
