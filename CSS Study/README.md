# ✨CSS_Study✨

### 2020-09-11 


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
