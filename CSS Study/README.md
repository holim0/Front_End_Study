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

- rgba 를 통해서 색상을 조절할 수 있다.
- box-sizing
- margin : top right bottom left (시계 방향으로 생각하면 된다.)

margin 은 박스 외부, padding 은 박스 내부에 대한 것을 조절

### Position 속성

1. static
2. relative : static 의 원래 위치로 부터 계산한다. 
3. absolute : 부모요소를 기준으로 위치를 계산한다.