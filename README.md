<h1 align="center">Welcome to youngstargram ✨</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://localhost:3000" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

[![image](https://user-images.githubusercontent.com/40619551/70964172-369f9000-20ce-11ea-98a3-a2ae1b21e849.png)](https://youngstargram.com)

👆 클릭해서 페이지로 이동 👆

> 청춘, 젊음, 낭만을 공유하는 sns 서비스
> OAuth의 Resource server와 Authorization server를 구현하여 Youngstargram API 기능 제공

## :books: [Wiki](https://github.com/connect-foundation/2019-03/wiki)

## 🛠️ [설정 및 실행](https://github.com/connect-foundation/2019-03/wiki/설정-및-실행)

## 🎲 개발 환경

![기술 스택 모음](https://user-images.githubusercontent.com/40619551/71317591-f0c83a80-24c6-11ea-9d7f-82db5caeb4a2.png)

## 👨‍💻 주요 기능

### 무한 스크롤

![무한 스크롤](https://user-images.githubusercontent.com/40619551/71316620-c28e2f00-24b5-11ea-8d5e-7d27b03ee727.gif)

### 게시글 작성

![게시글 작성](https://user-images.githubusercontent.com/40619551/71317776-e5c2d980-24c9-11ea-8187-a5fbc088dc5d.gif)

### 수정

![수정](https://user-images.githubusercontent.com/40619551/71316614-c15d0200-24b5-11ea-9784-a10d15666591.gif)

### 삭제

![삭제](https://user-images.githubusercontent.com/40619551/71316613-c15d0200-24b5-11ea-9d12-33fdc82b093b.gif)

### 좋아요 및 댓글

![좋아요 및 댓글](https://user-images.githubusercontent.com/40619551/71316616-c15d0200-24b5-11ea-8ea8-5bd4cb0dba5b.gif)

### 해시 태그

![해시 태그](https://user-images.githubusercontent.com/40619551/71316617-c1f59880-24b5-11ea-935a-5867c8803949.gif)

### 검색

![검색](https://user-images.githubusercontent.com/40619551/71316618-c1f59880-24b5-11ea-83ba-a11b479ee55f.gif)

### 알림

![알림](https://user-images.githubusercontent.com/40619551/71316615-c15d0200-24b5-11ea-86b1-5ed4439d15e7.gif)

## OAuth 2.0

### [Document](https://github.com/connect-foundation/2019-03/blob/master/oauth-server/README.md)

### 구조

![image](https://user-images.githubusercontent.com/40619551/71317695-a3e56380-24c8-11ea-9e76-cfdbdb1451f4.png)

## [passport](https://github.com/Logqwerty/passport-youngstargram)

![oauth_login](https://user-images.githubusercontent.com/14218168/71324854-8c899300-2527-11ea-9d70-9e5a4c78609d.gif)

## 🗃️ 디렉토리 구조

```shell
📁api-server
├── 📁api
│   ├── 📁graphql
│   │   ├── 📁input-types
│   │   ├── 📁mutations
│   │   ├── 📁queries
│   │   └── 📁tyepes
│   │
│   ├── 📁middlewares
│   ├── 📁models
│   ├── 📁routes
│   ├── 📁services
│   ├── 📄app.js
│   └── 🐋Dockerfile
│
├── 📁bin
├── 📁config
├── 📁db
├── 📁test
├── 📁utils
│
📁web
├── 📁config
├── 📁public
└── 📁src
    ├── 📁components
    ├── 📁containers
    │       └── 📁App
    ├── 📁images
    ├── 📁queries
    └── 📁utils
    └── 📄index.js

```

## 🤜 메인테이너

<table>
  <tr>
    <td align="center">
    <a href="https://github.com/JaeHyeonKim19"><img src="https://avatars1.githubusercontent.com/u/47874101?s=460&v=4" width="75px;" alt="JaeHyeonKim"/><br /><sub><b>김재현</b></sub></a><br />
    </td>
    <td>
    <a href="https://github.com/connect-foundation/2019-03/wiki/%5BMaintainer%5D-김재현" title="what did I do">💻what did I do</a>
    <br/>
        <a href="https://github.com/connect-foundation/2019-03/commits/develop?author=JaeHyeonKim19" title="Code">📜 Commit Log</a>
        <br/>
    </td>
    <tr>
    <td align="center"><a href="https://github.com/soyoungjeong"><img src="https://avatars0.githubusercontent.com/u/26589909?s=460&v=4" width="75px;" alt="soyoungjeong"/><br /><sub><b>정소영</b></sub></a><br /></td>
    <td>
    <a href="https://github.com/connect-foundation/2019-03/wiki/%5BMaintainer%5D-정소영" title="what did I do">💻what did I do</a>
    <br/>
    <a href="https://github.com/connect-foundation/2019-03/commits/develop?author=soyoungjeong" title="Code">📜 Commit Log</a>
    </td>
    <tr>
    <td align="center"><a href="https://github.com/Logqwerty"><img src="https://avatars0.githubusercontent.com/u/14218168?s=460&v=4" width="75px;" alt="HyeonJin Jeong"/><br /><sub><b>전형진</b></sub></a><br /> </td>
    <td>
    <a href="https://github.com/connect-foundation/2019-03/wiki/%5BMaintainer%5D-전형진" title="what did I do">💻what did I do</a>
    <br/>
    <a href="https://github.com/connect-foundation/2019-03/commits/develop?author=Logqwerty" title="Code">📜 Commit Log</a>
    </td>
    <tr>
    <td align="center"><a href="https://github.com/njh7799"><img src="https://avatars2.githubusercontent.com/u/40619551?s=460&v=4" width="75px;" alt="JeongHo Nam"/><br /><sub><b>남정호</b></sub></a><br /></td>
    <td>
    <a href="https://github.com/connect-foundation/2019-03/wiki/%5BMaintainer%5D-남정호" title="what did I do">💻what did I do</a>
    <br/>
     <a href="https://github.com/connect-foundation/2019-03/commits/develop?author=njh7799" title="Code">📜 Commit Log</a>       
    </td>
  </tr>
</table>

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/connect-foundation/2019-03/issues).

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
