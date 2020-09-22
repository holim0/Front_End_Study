# ✨CSS_Study✨

- div : block
- span : inline(크기 조절이 불가능)
- Inline-block ( 두 가지 속성을 다 가지고 있다)
- box-sizing : border-box(border, padding이 width 에 포함된다)  → 많이 쓰인다.
- rem ⇒ root em (단위) 약 16px 이다.
- vertical-align : 수직으로 정렬해주는 것.
- max-width : 최대 폭을 지정해준다.

margin-left: auto;

margin-right: auto;    →  마진을 왼쪽, 오른쪽을 auto로 주면 가운데 정렬이 된다.

→ 축약해서 margin : 0 auto; 로 사용가능함.

- 자식들이 float가 적용이 되면 부모가 자식을 인식을 하지 못한다.

```jsx
.container:after{
    content: '';
    display: block;
    clear: both;
    height: 0;
    visibility: hidden;
}

//가상의 엘리먼트를 추가해준다.
```

---

## [2020/09/18]

- `font - family` :  font | initial | inherit

ex) `font-family: Georgia, "Times New Roman", serif;` :  제일 먼저 Georgia 글꼴을 찾는다. 해당 글꼴이 있다면 사용하고, 없다면 Times New Roman 글꼴을 사용. 그 글꼴도 없다면 웹 브라우저에서 설정한 명조 계열의 글꼴을 사용.

`text-align` :  

- left : 왼쪽 정렬입니다.
- right : 오른쪽 정렬입니다.
- center : 가운데 정렬입니다.
- justify : 양쪽 정렬입니다.
- initial : 기본값으로 설정합니다.
- inherit : 부모 요소의 속성값을 상속받습니다.

---

- rgba 를 통해서 색상을 조절할 수 있다.

- box-sizing : 박스의 크기를 화면에 표시하는 방식을 변경하는 속성

→ 일반적으로 content-box(기본값)이다.

→ content-box 로 설정하게 되면  너비와 높이는 content 영역 만을 의미한다. (border , padding, margin 제외)

→ 하지만 border-box로 하게되면 너비와 높이에 content, border, padding이 포함된다. (margin 제외)

- margin : top right bottom left → 이런 식으로 한꺼번에 쓸 수도 있다.(시계 방향으로 생각하면 된다.)

### <Margin and Padding>

→ margin 은 박스 외부, padding 은 박스 내부에 대한 것을 조절

![KakaoTalk_Photo_2020-09-21-00-22-03](https://user-images.githubusercontent.com/48006103/93715824-a7686100-fba6-11ea-9b14-ee5302ec3abc.png)
<br/>

### <Position 속성>

1. static : 모든 요소에 주어지는 기본값이다. (실질적으로 많이 사용되지 않는다, 그냥 기본 위치이다.)
2. relative : static 의 원래 위치로부터 위치를 계산 및 이동시킨다. 
3. absolute :  `position: static` 속성을 가지고 있지 않은 부모를 기준으로 움직인다. 만약 부모 중에 포지션이 relative, absolute, fixed인 태그가 없다면 가장 위의 태그(body)가 기준이 된다. 
4. fixed : 스크롤에 영향을 받지 않는 고정된 위치 설정 방식이다.

- ------

  ## [2020/09/21]

  - `<ol></ol`> : order list
  - `<li></li>` :
  - div: 블록 레벨의 엘리트
  - 대상 : hover : 마우스가 올라갔을 때의 모습을 설정해줄 수 있다.

  </br>

  **< 속성 세분화 스타일 적용>**

  ```css
  a[href]{
  			// a 태그 중 href를 가진 것만 스타일을 적용한다.
  }
  
  a[hrer="naver.com"] {
       // a 태그 중 href=="naver.com" 인 것만 스타일을 적용한다.
  }
  
  a[href^="naver"] {
  			// a 태그 중 href의 시작이 "naver" 인 것만 스타일을 적용한다.
  }
  
  a[href$=".com"] {
       // a 태그 중 href의 끝이 ".com" 인 것만 스타일을 적용한다.
  }
  ```

  - `border : 2px dashed red;` → 한 줄에 쓸 수 있다.
  - div : block
  - span : inline  → 내용물이 있어야 표기된다.

  → display를 통해서 inline, block을 설정할 수 있다.

  </br>

  **<Inline vs Block>**

  1. Inline  : 콘텐츠에 따라서 달라진다.  → 콘텐츠의 크기에 맞춰서 변경된다.
  2. Block : 콘텐츠에 상관없이 블록 단위로 설정된다. (한 줄당 하나씩 들어간다.)

  </br>

  </br>

  **<FlexBox> - css 의 꽃**

  </br>

  → 크게 2가지만 이해하면 된다!

  1. container 에 적용 되는 속성 값과 item 속성 값을 설정할 수 있다.

  → container 에 적용되는 속성 값:

  - display
  - flex-direction : 중심축을 정해준다. (row, column, row-reverse, column-reverse)
  - flex-wrap

  → **nowrap(기본값)일 때** : 요소가 많아도 한 줄에 나타내준다.

  <img width="972" alt="스크린샷 2020-09-21 오후 9 51 09" src="https://user-images.githubusercontent.com/48006103/93772760-2ff40980-fc5a-11ea-98e1-22995b6aa9ab.png">

  </br>

  → **wrap일 때** : 한 줄에 공간이 없으면 다음 줄로 넘겨준다.

  <img width="861" height="500" alt="스크린샷 2020-09-21 오후 9 51 24" src="https://user-images.githubusercontent.com/48006103/93772837-469a6080-fc5a-11ea-8292-91fd3132f53a.png">

  </br>

  

  - flex-flow : flow-direction, flow-wrap 을 합쳐서 쓸 수 있는 것.
  - justify-content : main 축을 기준으로 content 가 어디서부터 시작될지 설정해 줄 수 있다. ( 종류 적기 )
  - align-item
  - align-content : 서브 축을 기준으로 content 정렬.

  </br>

  → item 에 적용되는 속성 값:

  - order : item의 순서를 설정 해줄 수 있다. (거의 안 쓰임, 알아만 두자)
  - flex-grow : item 이 화면을 자동으로 채우도록 한다. (화면이 커질 때 어떻게 채울지)
  - flex-shrink : 화면이 줄어들 때 item이 어떻게 줄어들지 설정.
  - flex-basis : item이 공간을 얼마나 차지할지에 대한 것을 세부적으로 설정. (기본값은 auto)
  - flex : flex-grow , flex-shrink, flex-basis 의 형식으로 합쳐서 쓸 수 있다.
  - align-self : item 별로 item을 정렬할 수 있다.

</br>

------

## [2020/09/22]

- 반응형 헤더 만들기 실습.

→ media 쿼리 예시

```css
@media screen and (max-width : 768px){  // 너비가 일정 수준일 때 바꿔 줄 수 있다. 
    .navbar{
        flex-direction: column;
        align-items: flex-start;
        padding: 8px 24px;
    }

    .navbar_menu{
        display: none;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .navbar_menu li {
        width: 100%; 
        text-align: center;
    }

    .navbar_icons {
        display: none;
        justify-content: center;
        width: 100%;
    }

    .navbar_toggle{
        display: block;
    }

    .navbar_menu.active, 
    .navbar_icons.active{
        display: flex;
    }
}
```

- max-width: 특정 너비 이하일 때 변경
- min-width:  특정 너비 이상일 때 변경