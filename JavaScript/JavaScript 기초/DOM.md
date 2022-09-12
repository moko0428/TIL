> XML 이란? EXtensible Markup Language의 약자로, 텍스트 기반 컴퓨터 자료 구조인 SGML을 HTML처럼 간략화, 표준화하면서 HTML과 호환될 수 있도록 만들어진 마크업 언어이다.

> DOM이란? 마크업 언어를 구조화해 웹페이지를 프로그래밍 언어를 통해 변경할 수 있게 하는 API인 셈이다.

# DOM 소개

이 문서는 DOM에 대한 개념을 간략하게 소개하는 문서로, DOM이 무엇이며, 그것이 어떻게 HTML, XML문서들을 위한 구조를 제공하는지, 어떻게 DOM에 접근하는지, API가 어떻게 사용되는지에 대한 참조 정보와 예제들을 제공한다.

---

## DOM 이란?

문서 객체 모델(The Document Object Model, DOM)은 HTML, XML 문서의 프로그래밍 "**interface**" 이다.

DOM은 문서의 구조화된 표현(structured representation)을 제공하며 프로그래밍 언어가 DOM 구조에 접근할 수 있는 방법을 제공하여 그들이 문서 구조, 스타일, 내용 등을 변경할 수 있게 돕는다.

DOM은 nodes와 objects로 문서를 표현한다. 이들은 웹 페이지를 스크립트 또는 프로그래밍 언어들에서 사용될 수 있게 연결시켜주는 역할을 담당한다.

웹 페이지는 일종의 문서(document)다. 이 문서는 웹 브라우저를 통해 그 내용이 해석되어 웹 브라우저 화면에 나타나거나 HTML 소스 자체로 나타나기도 한다.

동일한 문서를 사용하여 이처럼 다른 형태로 나타날 수 있다는 점에 주목할 필요가 있다.
DOM은 동일한 문서를 표현하고, 저장하고, 조작하는 방법을 제공한다.
DOM은 웹 페이지의 객체 지향 표현이며, 자바스크립트와 같은 스크립팅 언어를 이용해 DOM을 수정할 수 있다.

표준 대부분의 브라우저에서 DOM을 구현하는 기준이다.

많은 브라우저들이 표준 규약에서 제공하는 기능 외에도 추가적인 기능을 제공하기 때문에 사용자가 작성한 문서들이 각기 다른 DOM이 적용된 다양한 브라우저 환경에서 동작할 수 있다는 사실을 항상 인지하고 있어야 한다.

---

## DOM의 핵심 Interfaces

Document와 window objects는 DOM 프로그래밍에서 가장 자주 사용하는 objects이다. 간단하게 설명하자면, window object는 브라우저와 같고, document object는 root document 자체라고 할 수 있다.

generic Node interface로부터 상속받은 Element와 Node, Element interfaces가 협력하여 각각의 elements에서 사용할 수 있는 수많은 methods와 properties를 제공한다. 이러한 elements는 이전 섹션에서 설명한 table object 예제에서도 살펴봤듯이, elements가 보유한 데이터를 처리할 수 있는 특정한 interfaces도 가지고 있다.

- document.getElementById(id)
- document.getElementsByTagName(name)
- document.createElement(name)
- parentNode.appendChild(node)
- element.innerHTML
- element.style.left
- element.setAttribute
- element.getAttribute
- element.addEventListener
