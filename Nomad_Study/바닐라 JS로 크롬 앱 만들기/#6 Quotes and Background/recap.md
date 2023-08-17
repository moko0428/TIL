# 6.0 Quotes

- 자바스크립트가 제공하는 Math module이 있다.
  - random() : 무작위 수를 반환
  - round : 반올림
  - ceil : 올림
  - floor : 버림
- length : 길이

```js
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
```

# 6.1 Background

```js
const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenIamge = images[Math.floor(Math.random() * images.length)];

const bgIamge = document.createElement("img");

bgIamge.src = `img/${chosenIamge}`;

document.body.appendChild(bgIamge);
```
