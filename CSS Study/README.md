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

![%E2%9C%A8CSS_Study%E2%9C%A8%2011f3e4ae8b894b68b4a549a2fc57960b/KakaoTalk_Photo_2020-09-21-00-22-03.png](%E2%9C%A8CSS_Study%E2%9C%A8%2011f3e4ae8b894b68b4a549a2fc57960b/KakaoTalk_Photo_2020-09-21-00-22-03.png)

### <Position 속성>

1. static : 모든 요소에 주어지는 기본값이다. (실질적으로 많이 사용되지 않는다, 그냥 기본 위치이다.)
2. relative : static 의 원래 위치로부터 위치를 계산 및 이동시킨다. 
3. absolute :  `position: static` 속성을 가지고 있지 않은 부모를 기준으로 움직인다. 만약 부모 중에 포지션이 relative, absolute, fixed인 태그가 없다면 가장 위의 태그(body)가 기준이 된다. 
4. fixed : 스크롤에 영향을 받지 않는 고정된 위치 설정 방식이다.