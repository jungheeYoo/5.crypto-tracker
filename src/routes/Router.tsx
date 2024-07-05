// 5-0
// Setup

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Coin from './coin';
import Coins from './conis';

// switch 는 한 번에 하나의 Router를 렌더릴할 수 있는 방법
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Coin ID를 갖는 Router */}
        <Route path="/:coinId">
          <Coin />
        </Route>
        {/* path(경로)를 가지고, 그건 home(/)이 됨 */}
        <Route path="/">
          {/* Coins 스크린을 렌더링 */}
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;

// ❓ gpt 궁금증 질문
// http://localhost:3000/btc 라고 했을 때 btc 지정한 적 없는데 Coin 페이지가 나오는 이유

// http://localhost:3000/btc URL에서 btc 부분은
// Router 컴포넌트에 정의된 동적 경로 :coinId에 해당한다
// 이는 경로가 해당 패턴과 일치할 때 Coin 컴포넌트를 렌더링하도록 하는 동적 라우팅의 일환이다

// 1. 동적 경로 /:coinId
// 2. 정적 경로 /

// 1. 동적 경로 /:coinId
// 이 경로는 /:coinId 패턴과 일치하는 모든 URL에 대해 Coin 컴포넌트를 렌더링합니다.
// 여기서 :coinId는 동적 세그먼트로, URL의 일부분을 변수로 취급합니다.
// 예를 들어, http://localhost:3000/btc로 접속하면 coinId는 btc가 됩니다.

// 2. 정적 경로 /
// 이 경로는 루트 경로 /에 대해 Coins 컴포넌트를 렌더링합니다.

// Coin 컴포넌트에서 동적 세그먼트 사용
// Coin 컴포넌트에서 이 동적 세그먼트 (coinId)를 사용하려면, useParams 훅을 사용할 수 있습니다. 예를 들면:

// import React from 'react';
// import { useParams } from 'react-router-dom';

// function Coin() {
//   const { coinId } = useParams();
//   return <h1>Coin: {coinId}</h1>;
// }

// export default Coin;

// 위 코드에서 useParams 훅을 사용하여 coinId를 가져오고, 이를 화면에 표시합니다.
// 따라서 http://localhost:3000/btc로 접근하면, Coin: btc가 화면에 표시됩니다.

// 📍 요약
// Router 컴포넌트의 동적 경로 /:coinId는 URL의 일부분을 변수로 취급하여 Coin 컴포넌트에 전달합니다.
// Coin 컴포넌트는 useParams 훅을 사용하여 이 변수 (coinId)를 받아 사용할 수 있습니다.
// 따라서, http://localhost:3000/btc와 같은 URL에 접근하면 btc가 coinId로 전달되어 Coin 컴포넌트에서 이를 사용할 수 있게 됩니다.

// 이로 인해 btc라는 단어를 직접 작성하지 않았어도 URL에서 동적으로 받아와 사용할 수 있게 되는 것입니다.
