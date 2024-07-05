// // 5-0
// // Setup

// import Router from './routes/Router';

// function App() {
//   return <Router />;
// }

// export default App;

// 5-1
// ✅ Styles
// ✅ 전체 도큐먼트에 적용하기 위한 CSS 스타일 - 기본 값
// createGlobalStyle :
// 이건 한 컴포넌트를 만들 수 있게 해주는데
// 렌더링 될 때, 그 컴포넌트는 전역 스코프에 스타일들을 올려줌
// 그래서 고립되지 않고 global이 되는 것이다

// tsconfig.json 파일에 다음과 같은 필드를 명시해야 vsc에서 type inference가 가능
// 수정함
// "include": ["src/**/*.tsx", "src/**/*.ts", "src/**/*.d.ts"]

import { createGlobalStyle } from 'styled-components';
import Router from './routes/Router';

// 이 red는 body로부터 온다
// body {
//   color:red;
// }
// 🔶 reset
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-family: "Source Sans 3", sans-serif;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor}
}
a {
  text-decoration:none;
  color:inherit;
}
`;

// 두 컴포넌트를 반환하려면?
// <div></div> 쓰는 대신
// Fragment라고 부르는 이것은 일종의 유령 컴포넌트이다
// 이것은 부모 없이 서로 붙어 있는 많은 것들을 리턴할 수 있게 해줌

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
