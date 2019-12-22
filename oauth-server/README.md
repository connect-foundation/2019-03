# Youngstargram OAuth2.0 로그인 가이드

## 개발가이드

### 1. 개요

#### OAuth 2.0이란?

```
The OAuth 2.0 authorization framework enables a third-party
application to obtain limited access to an HTTP service, either on
behalf of a resource owner by orchestrating an approval interaction
between the resource owner and the HTTP service, or by allowing the
third-party application to obtain access on its own behalf

출처: https://tools.ietf.org/html/rfc6749
```

OAuth 2.0은 제 3자 서비스(Client)가 제한된 리소스(Resource owner's protected resource)에 접근하는 것을 인증 및 인가하는 것을 관리하는 범용 프레임워크입니다. OAuth 2.0 기반의 서비스(Resource server)는 HTTP 헤더에 access token을 포함하여 API를 호출하도록 합니다. 서비스는 access token을 검사하여 이 요청이 유효한 지 판단하고, 유효하다면 요청에 맞는 응답을 보냅니다.

#### OAuth 2.0의 주요 역할(Roles)

- Client
  - 여러분들이 등록할 application을 의미합니다. resource owner의 제한된 자원에 대한 접근을 요청하는 대상입니다.
- Resource Owner
  - 제 3자 서비스, 즉 Cilent가 제한된 자원에 접근할 수 있는 권한을 허가합니다.
- Resource Server
  - Client가 요청한 resource owner의 제한된 자원에 대한 접근을 처리하는 대상입니다. Access Token을 이용해 제한된 자원에 대한 권한을 판단하여 요청을 처리합니다.
- Authorization Server
  - Client가 access token에 대한 발급을 요청하는 대상입니다. Resouce Owner의 인증과 제한된 자원에 대한 인가가 허용되면 authorization server는 client에게 적절한 방식으로 제한된 자원에 대한 access token을 발급합니다.

#### OAuth 2.0 Flow

![OAuth Flow](https://user-images.githubusercontent.com/14218168/71317943-ab0e7080-24cc-11ea-8ef3-cc7057c0d9d7.png)

### 2. 애플리케이션 등록

1. 유저페이지의 `개인정보 설정` 버튼을 누르고 `새 애플리케이션 등록` 탭을 누릅니다.
2. 아래와 같이 애플리케이션 정보를 입력합니다.

![register](https://user-images.githubusercontent.com/14218168/71317922-684c9880-24cc-11ea-88c3-5acfcaba9fa6.PNG)

3. `내 어플리케이션` 탭을 누르면 `Client ID`와 `Client Secret`을 볼 수 있습니다.

   - 절대로 `Client Secret`이 노출되지 않도록 하세요!

   ![client_secret](https://user-images.githubusercontent.com/14218168/71317928-82867680-24cc-11ea-99e8-c8cd5dbb2ea1.PNG)

### 3. Youngstargram 로그인 API

- #### API 기본 정보

  | 메서드 |   인증    |                     요청 URL                     |     출력     |                  설명                   |
  | :----: | :-------: | :----------------------------------------------: | :----------: | :-------------------------------------: |
  |  GET   | OAuth 2.0 | https://oauth.youngstargram.com/oauth2/authorize | URL redirect | Youngstargram 아이디로 로그인 인증 요청 |
  |  POST  | OAuth 2.0 |   https://oauth.youngstargram.com/oauth2/token   |     JSON     |         Access Token 발급/갱신          |

- #### 요청 변수

  - Youngstargram 아이디로 로그인 인증 요청

    |  요청 변수명  |  타입  | 필수 여부 | 기본값 |                                      설명                                       |
    | :-----------: | :----: | :-------: | :----: | :-----------------------------------------------------------------------------: |
    | response_type | string |     Y     |  code  |                           인증과정을 구분하기 위한 값                           |
    |   client_id   | string |     Y     |   -    |                     애플리케이션 등록 시 발급받은 Client ID                     |
    | redirect_uri  | string |     Y     |   -    |                  애플리케이션 등록 시 입력했던 Redirection URL                  |
    |     state     | string | Recommend |   -    | CSRF 공격을 방지하기 위해 사용하는 Client 측에서 생성한 상태값(URL 인코딩 필수) |
    |     scope     | string |     N     |   -    |                        접근 허용 범위를 처리하기 위한 값                        |

  - Access Token 발급

    |  요청 변수명  |  타입  | 필수 여부 |       기본값       |                                      설명                                       |
    | :-----------: | :----: | :-------: | :----------------: | :-----------------------------------------------------------------------------: |
    |  grant_type   | string |     Y     | authorization_code |            인증과정을 구분하기 위한 값으로authorization_code를 명시             |
    |   client_id   | string |     Y     |         -          |                     애플리케이션 등록 시 발급받은 Client ID                     |
    | client_secret | string |     Y     |         -          |                   애플리케이션 등록 시 발급받은 Client Secret                   |
    |     code      | string |     Y     |         -          |             로그인 인증 요청의 응답으로 받은 authorization code 값              |
    |     state     | string |  Y or N   |         -          | 만약 로그인 인증 요청 시 state 요청변수를 포함했을 경우, 필수로 같은 값을 지정. |

  - Access Token 갱신

    |  요청 변수명  |  타입  | 필수 여부 |       기본값       |                           설명                           |
    | :-----------: | :----: | :-------: | :----------------: | :------------------------------------------------------: |
    |  grant_type   | string |     Y     | authorization_code | 인증과정을 구분하기 위한 값으로authorization_code를 명시 |
    |   client_id   | string |     Y     |         -          |         애플리케이션 등록 시 발급받은 Client ID          |
    | client_secret | string |     Y     |         -          |       애플리케이션 등록 시 발급받은 Client Secret        |
    | refresh_token | string |     Y     |         -          |     Access Token 발급 시 같이 발급받은 Refresh Token     |

- #### 응답 결과

  1. Youngstargram 아이디로 로그인 요청

     | 필드  |  타입  |                                                         설명                                                         |
     | :---: | :----: | :------------------------------------------------------------------------------------------------------------------: |
     | code  | string | 로그인 인증 성공시 발급받는 Authorization Code 값, 이 값을 이용해 Access Token 발급에 사용 (Authorization Code 방식) |
     | state | string |              로그인 인증 요청 시 state 요청 변수를 보냈을 경우에 한해서만 이 값을 필드에 추가하여 응답.              |

  2. Access Token 발급 요청

     |     필드      |  타입   |    기본값    |                                          설명                                           |
     | :-----------: | :-----: | :----------: | :-------------------------------------------------------------------------------------: |
     | access_token  | string  |      -       | 사용자 프로필 접근에 필요한 Access Token. expires_in에 설정된 시간(초)가 지나면 만료됨. |
     | refresh_token | string  |      -       |                       Access Token 갱신에 사용되는 Refresh Token                        |
     |  token_type   | string  |    Bearer    |                                현재는 Bearer 타입만 지원                                |
     |  expires_in   | integer | 86400(1 Day) |                    Access Token의 유효시간 (초 단위, 기본 값은 하루)                    |
     |  error_name   | string  |      -       |                       Access Token 발급 실패 시 반환받는 에러이름                       |
     | error_message | string  |      -       |                      Access Token 발급 실패 시 반환받는 에러메시지                      |

  3. Refresh Token을 통한 Access Token 갱신 요청

     |     필드      |  타입   |    기본값    |                                          설명                                           |
     | :-----------: | :-----: | :----------: | :-------------------------------------------------------------------------------------: |
     | access_token  | string  |      -       | 사용자 프로필 접근에 필요한 Access Token. expires_in에 설정된 시간(초)가 지나면 만료됨. |
     |  token_type   | string  |    Bearer    |                                현재는 Bearer 타입만 지원                                |
     |  expires_in   | integer | 86400(1 Day) |                    Access Token의 유효시간 (초 단위, 기본 값은 하루)                    |
     |  error_name   | string  |      -       |                       Access Token 발급 실패 시 반환받는 에러이름                       |
     | error_message | string  |      -       |                      Access Token 발급 실패 시 반환받는 에러메시지                      |

- #### 요청/응답예시

  - Youngstargram 로그인 요청 (GET)

  ```
  https://oauth.youngstargram.com/oauth2/authorize?resopnse_type=code&client_id=0a67cf7b-5c2a-4784-9a2c-889a55057617&redirect_uri=http://test.com/callback&state=ssDsi2uhPokd
  ```

  - 응답

  ```
  http://test.com/callback?code=2b42d227091be3e69c3afd755b3cce6cae89900c10e0d8a9ed052cc036eb43ea&state=ssDsi2uhPokd
  ```

  - Access Token 발급 요청 (POST)

  ```
  POST /oauth2/token HTTP/1.1
  ...
  Content-Type: application/x-www-form-urlencoded

  grant_type=authorization_code&code=2b42d227091be3e69c3afd755b3cce6cae89900c10e0d8a9ed052cc036eb43ea&client_id=0a67cf7b-5c2a-4784-9a2c-889a55057617&client_secret=34cf86e06322cd304099ae6219e2455468d746df445fde5d1969f7d6dcba028c&redirect_uri=http://test.com/callback&state=ssDsi2uhPokd
  ```

  - 응답

  ```json
  {
    "access_token": "2b42d227091be3e69c3afd755b3cce6cae89900c10e0d8a9ed052cc036eb43ea",
    "refresh_token": "be24aeae1e1a7eabb3d2e51621270424a5a47e5c77e9d0fc6fa954b30df0f07c",
    "token_type": "Bearer",
    "expires_in": 86400
  }
  ```

  - Refresh Token을 통한 Access Token 갱신 요청 (POST)

  ```
  POST /token HTTP/1.1
  ...
  Content-Type: application/x-www-form-urlencoded

  grant_type=refresh_token&refresh_token=be24aeae1e1a7eabb3d2e51621270424a5a47e5c77e9d0fc6fa954b30df0f07c&client_id=0a67cf7b-5c2a-4784-9a2c-889a55057617&client_secret=34cf86e06322cd304099ae6219e2455468d746df445fde5d1969f7d6dcba028c
  ```

  - 응답

  ```json
  {
    "access_token": "a42e38927eaa7b637dd6d12b3b324c4d3f71ad4cb11939f73e22d8b06c273ab0",
    "token_type": "Bearer",
    "expires_in": 86400
  }
  ```
