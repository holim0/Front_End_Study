sameSite=> 서로 다른 사이트 간의 쿠키 전송에 대한 보안을 설정. (cross-site)



Withcredentials? => cross-site 설정을 해주는 것이다. 중요한건 site란 것이다. 



withcredentials을 true 로 설정한다. => 그러면 토큰을 다른 도메인 간 주고 받을 수 있다. But 쿠키는 설정되지 않는다. 

=> 왜? sameSite가 디폴트 값으로 lax 이기 때문에 sameSite 가 아니면 안댐.



=> sameSite를 none으로 해주면? cookie의 secure 설정이 필수이다. => 따라서 https 배포를 한다. 



- secure 설정은 https이 강제된다. (localhost는 제외- )





클라는 aaa.com

서버는 api.aaa.com 으로 만들어준다. 

이는 sameSite이기 때문에 그냥 sameSite default 값을 가지고 가면 된다. (만질 필요 없음.) => 크롬 정책

=> domain이 같다.



결론 : 서버에서 클라 도메인을 access control allow origin 에 넣어준다. 끝. 쿠키는 그냥 samesite 이기 때문에 상관없다. (cors 만 만져주면된다.)



- 사이트는 domain 접두어랑 나머지 domain을 뜻합니다.  (최상위 도메인 + 그 바로 앞에 있는 것)

The site is the combination of the domain suffix and the part of the domain just before it. For example, the `www.web.dev` domain is part of the `web.dev` site.



결론: withcredentials 은 cross-site에 대해서 쿠키를 설정할 수 있도록하는 것이다. 



```js
// `withCredentials`는 자격 증명(credentials)을 사용하여
  // 크로스 사이트 접근 제어(cross-site Access-Control) 요청이 필요한 경우 설정합니다.
  withCredentials: false, // 기본 값
```









-------------------



1. **sameSite의 의미**

 ➡️ **same site**는 `.com` , `.co.kr` 과 같은 최상위 도메인과 그 바로 앞에 있는 suffix domain이 일치하는 것을 의미한다. 

ex) api.aaa.com 과 aaa.com은 **same site** 이다.



2. **Same Origin의 의미**

 ➡️ same origin 은 http 프로토콜에서 scheme, host name, port 번호까지 동일한 것을 의미한다. 



ex) https://www.example.com:443 와 **https://www.example.com:443** 는 same origin 이지만 https://**example.com**:443 과는 cross-origin 관계를 가지고 있다. 



3. **CORS**

 ➡️ Cross Origin Resource Sharing 의 약자로 다른 출처 간 공유를 의미한다. 



브라우저 정책은 SOP 를 따르고 있기 때문에 CORS 를 명시적으로 설정해줘야한다. 

따라서 서버 쪽에서 origin 설정을 해줘서 다른 origin 간에 통신을 할 수 있도록 설정하는 것이다. 



node js 기반 서버에서는 origin을 true로 설정하면 자동으로 프론트의 origin이 설정되는 것입니다. 





4. **cookie secure 설정**

➡️ cookie가 secure 설정을 가지게 된다면 오직 https 프로토콜 상에서만 전송이 가능합니다. 

하지만 `http://localhost` 는 예외입니다. (클라만)

SameSite=none 이 되면 secure가 강제되는데 https 가 아닌 사이트는 cookie의 속성 secure를 설정하지도 못한다. 

![스크린샷 2021-04-06 오후 7.41.39](/Users/heeje/Library/Application Support/typora-user-images/스크린샷 2021-04-06 오후 7.41.39.png)



5. **Cookie httpOnly 설정**

➡️ httpOnly 설정은 cookie를 클라이언트에서 조작하지 못하게 하는 설정입니다. 







6. **도메인과 서브 도메인**

➡️ 도메인과 서브 도메인은 cross-origin 이지만 same-site입니다. 

따라서 CORS 설정을 해줘야 합니다. 





7. **크롬 same site 정책**

➡️ 2020년 2월부터 크롬의 sameSite 정책이 바뀌게 됩니다. 

기존에는 기본값이 sameSite = none 이였지만 현재는 기본값이 sameSite = Lax로 됩니다.

만약 sameSite 설정이 none이 된다면 cookie에 대한 secure 설정이 강제됩니다. 





8. **withcredentials 설정(클라, 백 둘 다)**

 ➡️ withcredentials 설정은 cross-site 간에 cookie 와 같은 토큰을 주고 받을 수 있도록 설정해주는 값이다. 

서버와 클리가 서로 다른 사이트라면 withcredentials 설정을 해줘야 token을 주고 받을 수 있다. 





----

### 상황

#### 1. 클라는 https://aaa.com 이고 서버는 https://api.aaa.com 으로 서버의 저 url 로 클라는 계속해서 요청을 한다. 

✅ Origin 이 다르기 때문에 CORS 설정을 해줘야한다. 

✅ same-site 이기 때문에 그냥 sameSite 설정은 default로 그대로 두면 된다. 

✅ same-site 이기 때문에 withCredentials 설정도 해줄 필요가 없다. 

✅ cookie 는 보안 이슈상 secure 과 httpOnly 설정을 해준다. 



> 🎯 이렇게 하면 cookie 가 잘 발급될 것이다. 







#### 2. 클라는 http://localhost:3000 이고 서버는 아예 다르다면?

✅ 마찬가지로 Origin이 다르기 때문에 CORS 설정을 해줘야 한다. (origin 명시)

✅ cross-site 이기 때문에 sameSite = none 을 해준다. 그러면 cookie는 secure 설정이 강제된다. 

- secure 되기 때문에 https 프로토콜 상에서 요청을 해야 되지만 localhost 는 예외이다. 

✅ cross-site 이기 때문에 클라와 서버 둘 다 withCredentials 설정을 해줘야 한다. 이러면 CORS 설정에서 origin을 명확하게 명시해야 한다. 

✅ 마찬가지로 cookie 의 보안을 강화하기 위해 httpOnly 설정을 해준다.



> 🎯 이렇게 하면 localhost 환경에서도 쿠키가 잘 발급되는 것을 확인할 수 있다. 



























