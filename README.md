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

[![image](https://user-images.githubusercontent.com/40619551/70964172-369f9000-20ce-11ea-98a3-a2ae1b21e849.png)](https://www.youngstargram.com/)

👆 클릭해서 페이지로 이동 👆
> 청춘, 젊음, 낭만을 공유하는 sns 서비스
> OAuth의 Resource server와 Authorization server를 구현하여 Youngstargram API 기능 제공

### :books: [Wiki](https://github.com/connect-foundation/2019-03/wiki) 

## 개발 환경

![기술 스택 모음](https://user-images.githubusercontent.com/40619551/70969112-740c1980-20de-11ea-92d3-6824578a063f.png)



## 설정 및 실행

### 설정

**Database**

```sh
cd api-server
npx sequelize-cli db:migrate
npx sequelize-cli db:sedd:all
cd ..
```

**환경 변수**

```sh
# web/.env
REACT_APP_API_URL=http://127.0.0.1:4000
REACT_APP_WEB_URL=http://127.0.0.1:3000
```

```sh
# api-server/.env
SESSION_KEY=

DB_USER_DEV=
DB_PASSWORD_DEV=
DB_NAME_DEV=youngstargram
DB_HOST_DEV=127.0.0.1
DB_DIALECT_DEV=mysql
WEB_URL=http://127.0.0.1:3000
```





**Client**

```sh
cd web
npm install
npm start
cd ..
```
**API Server**

```sh
cd api-server
npm install
npm start
cd ..
```



## 디렉토리 구조
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




## 메인테이너

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
