# display

## block

block은 옆에 다른 content가 올 수 없다.
높이와 너비를 가져야 한다.
특징 margin padding border가 있다.
margin은 box의 border(경계)의 `바깥`에 있는 공간
브라우저의 기본값으로 8px로 설정되있고 margin:0px를 줘야 경계가 없어진다.
margin : (all)
margin : 상하 좌우
margin : 상 우 하 좌
collapsing margins
위 아래 쪽에서만 발생하는 현상
두 box의 위 margin이 같은 때 발생하는 현상이고 두 box의 margin은 하나가 된다.
경계가 닿아서 margin이 같아 졌구나라고 생각하고 넘기면 된다.

padding
box의 경계로부터 `안쪽`에 있는 공간

border
경계선

```js
border: size style color;
border: 1px solid red;
```

## Inline(in the same line) 같은 줄에 위치할 수 있다.

Inline은 옆에 다른 content가 올 수 있다.
span a img
높이와 너비를 가질 수 없다.

## Inline Block

block으로 인식하며 높이 너비를 가질 수 있고, margin을 가질 수 있으며 옆에 다른 요소가 올 수 있다.

## flexbox

자식 엘리먼트에는 어떤 것도 적지 말아야한다.(부모 엘리먼트에만 명시)

- 부모 엘리먼트에 flex를 설정하게 되면 많은 속성들을 수정할 수 있다.
  자식 엘리먼트가 있어야지만 부모 엘리먼트의 flex가 적용이 된다.
- 주축(main axis)과 교차축(cross axis)
  justify-content는 주축(수평)
  align-items는 교차축(수직)

### justify-content

주축(수평)에 적용이 되며
알아서 공간을 계산하여 반응형으로 box들을 위치해준다.

### align-items

교차축(수직)에 적용이 되며
알아서 공간을 계산하여 반응형으로 box들을 위치해준다.
높이를 지정해주어야 적용이 되는 것을 확인할 수 있다.

## flex-direction

두 가지 속성이 있는데 row와 column이다.
기본값은 row이며
column이면 주축은 수직이 되고 교차축은 수평이 된다.

## flex-wrap

화면 크기에 따라 자식 엘리먼트의 위치를 변경해준다.

# position

위치를 아주 조금 위로, 아주 조금 오른쪽으로 옮기고 싶을 때 사용한다.

## fixed

화면에 contents가 고정된다.
top, bottom, left, right 속성을 부여할 수 있고 부여하면 다른 contents의 레이어의 위에 위치하게 된다.

## absolute

부모 엘리먼트에 position:relative를 부여하고 컨트롤을 할려는 자식 엘리먼트에 absulte를 부여하면 relative가 부여된 부모 엘리먼트를 기준으로 자식 엘리먼트의 위치를 컨트롤 할 수 있게 된다.
