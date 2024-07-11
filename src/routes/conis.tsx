// // 5-0
// // Setup
// // Coins 컴포넌트 만들기
// function Coins() {
//   return <h1>Coins</h1>;
// }
// export default Coins;

////////////////////////////////////////////////
// // 5-1
// // ✅ Styles
// import styled from 'styled-components';

// const Title = styled.h1`
//   color: ${(props) => props.theme.accentColor};
// `;

// function Coins() {
//   return <Title>코인</Title>;
// }
// export default Coins;

////////////////////////////////////////////////
// // 5-2
// // ✅ Home part One
// // ✅ front pape 만들기
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// // 화면 가운데 오기
// // max-width: 480px;
// // margin: 0 auto;
// const Container = styled.div`
//   padding: 0px 20px;
//   max-width: 480px;
//   margin: 0 auto;
// `;

// const Header = styled.header`
//   height: 15vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const CoinsList = styled.ul``;

// // anchor 안 쓰고 Link를 썼는데, css에서는 anchor 선택
// // 이건 모든 react router link들이 결국에는 anchor로 바뀔것이고
// // react router dom 이 우리 대신에 설정을 도와 줄 특별한 event listener들이 있다
// const Coin = styled.li`
//   background-color: white;
//   color: ${(props) => props.theme.bgColor};
//   border-radius: 15px;
//   margin-bottom: 10px;
//   a {
//     padding: 20px;
//     transition: color 0.2s ease-in;
//     display: block;
//   }
//   &:hover {
//     a {
//       color: ${(props) => props.theme.accentColor};
//     }
//   }
// `;

// const Title = styled.h1`
//   font-size: 48px;
//   color: ${(props) => props.theme.accentColor};
// `;

// // coinpaprika API에서 온 response를 기반으로 데이터 가져옴
// const coins = [
//   {
//     id: 'btc-bitcoin',
//     name: 'Bitcoin',
//     symbol: 'BTC',
//     rank: 1,
//     is_new: false,
//     is_active: true,
//     type: 'coin',
//   },
//   {
//     id: 'eth-ethereum',
//     name: 'Ethereum',
//     symbol: 'ETH',
//     rank: 2,
//     is_new: false,
//     is_active: true,
//     type: 'coin',
//   },
//   {
//     id: 'hex-hex',
//     name: 'HEX',
//     symbol: 'HEX',
//     rank: 3,
//     is_new: false,
//     is_active: true,
//     type: 'token',
//   },
// ];

// function Coins() {
//   return (
//     <Container>
//       <Header>
//         <Title>코인</Title>
//       </Header>
//       <CoinsList>
//         {coins.map((coin) => (
//           <Coin key={coin.id}>
//             {/* Bitcoin 등을 누르면 페이지로 이동 */}
//             {/* Link 사용 */}
//             {/* to ={}에 link가 필요한 property 넣어줘야 함 */}
//             {/* 가려고 하는 URL엔 '/' 슬래시 다음에 코인의 id가 필요 */}
//             {/* /:coinId */}
//             {/* 위에 데이터가 있음 /${coin.id} */}
//             <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
//           </Coin>
//         ))}
//       </CoinsList>
//     </Container>
//   );
// }
// export default Coins;

// // react.js의 router를 사용하기 때문에 <a href="" 이렇게 사용하지 않는다
// // 이걸 사용하면 페이지가 새로고침되어버리기 때문이다
// // 대신에 react router dom을 통해 link component를 사용한다

///////////////////////////////////////////////
// // 5-3
// // Home part Two
// // API로부터 데이터를 fetch(가져오기) 하기

// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// // 화면 가운데 오기
// // max-width: 480px;
// // margin: 0 auto;
// const Container = styled.div`
//   padding: 0px 20px;
//   max-width: 480px;
//   margin: 0 auto;
// `;

// const Header = styled.header`
//   height: 15vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const CoinsList = styled.ul``;

// // anchor 안 쓰고 Link를 썼는데, css에서는 anchor 선택
// // 이건 모든 react router link들이 결국에는 anchor로 바뀔것이고
// // react router dom 이 우리 대신에 설정을 도와 줄 특별한 event listener들이 있다
// const Coin = styled.li`
//   background-color: white;
//   color: ${(props) => props.theme.bgColor};
//   border-radius: 15px;
//   margin-bottom: 10px;
//   a {
//     padding: 20px;
//     transition: color 0.2s ease-in;
//     display: block;
//   }
//   &:hover {
//     a {
//       color: ${(props) => props.theme.accentColor};
//     }
//   }
// `;

// const Title = styled.h1`
//   font-size: 48px;
//   color: ${(props) => props.theme.accentColor};
// `;

// const Loader = styled.span`
//   text-align: center;
//   display: block;
// `;

// // ✨ 만든 데이터이든, API 데이터로 가져오는 것일 때도
// // 똑같이 typescript에게 무엇이 오는지 알려줘야 함
// // 코인이 어떻게 생겼는지 typescript에게 말해줌
// interface CoinInterface {
//   id: string;
//   name: string;
//   symbol: string;
//   rank: number;
//   is_new: boolean;
//   is_active: boolean;
//   type: string;
// }

// // 에러가 날 수 있으니 위에 있던 conins는 지움
// // state안에다가 그 coin을 다시 만들어 줄 것임
// function Coins() {
//   // typescript에게 우리의 coins State는 coins로 이루어진 array라고 알려줌
//   // state가 coin으로 된 arry라고 말해줌
//   const [coins, setCoins] = useState<CoinInterface[]>([]); // 기본 값: 빈 배열
//   // load 함수
//   const [loading, setLoading] = useState(true);

//   // 컴포넌트가 처음으로 시작할 때 한 번만 실행
//   // 새로운 function 만들지 않고 모두 useEffect 안에서 함
//   useEffect(() => {
//     // 즉시 실행 함수 : 이 자리에서 바로 function을 실행할 수 있는 함수
//     (async () => {
//       const response = await fetch('https://api.coinpaprika.com/v1/coins');
//       const json = await response.json();
//       setCoins(json.slice(0, 100)); // 100개 정도만 가져옴
//       // state 안에 코인이 다 세팅되면 loading 함수 false로 바꿈
//       setLoading(false);
//     })();
//   }, []);
//   return (
//     <Container>
//       <Header>
//         <Title>코인</Title>
//       </Header>
//       {/* loading 참이면 Loading... 보여주고 */}
//       {/* 거짓이면 CoinsList만 보여줌 */}
//       {loading ? (
//         <Loader>Loading...</Loader>
//       ) : (
//         <CoinsList>
//           {coins.map((coin) => (
//             <Coin key={coin.id}>
//               <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
//             </Coin>
//           ))}
//         </CoinsList>
//       )}
//     </Container>
//   );
// }
// export default Coins;

// // async...await, setLoading 이렇게 안하고 React Query로 할 수 있다
// // 또한, 페이지로 돌아오면 다시 load가 된다. API를 request하는 것이다
// // 이러한 일이 일어나는 이유는
// // screen이 바뀔 때, state가 사라지고
// // Coins screen에서 coin 개별 화면으로 갈 때도 갖고 있던 모든 state가 사라진다
// // 그러니까 user가 다시 돌아왔을 때마다 API를 다시 fetch해야 하는 것이다

///////////////////////////////////////////////
// // 5-4
// // Route States
// // 개별 coin 화면 만들기

// // ✅ Crypto Icon API
// // 암호화폐를 위한 코인의 아이콘(로고)를 가져와 줄 수 있다
// // 사용 방법 : API URL 뒤에다가 원하는 코인의 symbol을 써주면 됨

// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const Container = styled.div`
//   padding: 0px 20px;
//   max-width: 480px;
//   margin: 0 auto;
// `;

// const Header = styled.header`
//   height: 15vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const CoinsList = styled.ul``;

// const Coin = styled.li`
//   background-color: white;
//   color: ${(props) => props.theme.bgColor};
//   border-radius: 15px;
//   margin-bottom: 10px;
//   a {
//     display: flex;
//     align-items: center;
//     padding: 20px;
//     transition: color 0.2s ease-in;
//   }
//   &:hover {
//     a {
//       color: ${(props) => props.theme.accentColor};
//     }
//   }
// `;

// const Title = styled.h1`
//   font-size: 48px;
//   color: ${(props) => props.theme.accentColor};
// `;

// const Loader = styled.span`
//   text-align: center;
//   display: block;
// `;

// const Img = styled.img`
//   width: 35px;
//   height: 35px;
//   margin-right: 10px;
// `;

// interface CoinInterface {
//   id: string;
//   name: string;
//   symbol: string;
//   rank: number;
//   is_new: boolean;
//   is_active: boolean;
//   type: string;
// }

// function Coins() {
//   const [coins, setCoins] = useState<CoinInterface[]>([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     (async () => {
//       const response = await fetch('https://api.coinpaprika.com/v1/coins');
//       const json = await response.json();
//       setCoins(json.slice(0, 100));
//       setLoading(false);
//     })();
//   }, []);
//   return (
//     <Container>
//       <Header>
//         <Title>코인</Title>
//       </Header>
//       {loading ? (
//         <Loader>Loading...</Loader>
//       ) : (
//         <CoinsList>
//           {coins.map((coin) => (
//             <Coin key={coin.id}>
//               {/* state는 우리가 Coins화면을 열 때와, Coin화면으로 넘어갈 때 생성 됨 */}
//               <Link
//                 to={{
//                   // 새로운 object를 열어 준 다음, pathname 씀
//                   // 그 다음에 State를 보내줄 것임
//                   // state가 가질 이름으로 코인의 이름, 즉 coin.name 써줌
//                   // 이렇게 하면 유저는 화면 전환 시에 아무것도 볼 필요가 없게 됨
//                   pathname: `/${coin.id}`,
//                   state: { name: coin.name },
//                 }}
//               >
//                 <Img
//                   src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`}
//                 />
//                 {coin.name} &rarr;
//               </Link>
//             </Coin>
//           ))}
//         </CoinsList>
//       )}
//     </Container>
//   );
// }
// export default Coins;

///////////////////////////////////////////////
// 5-4
// Route States
// 개별 coin 화면 만들기

// 보이지 않는 방식으로(비하인드더씬) 데이터를 어떻게 보내는지 알아보기
// 우리는 코인의 name을 알고 있는데, 이것으로도 충분
// 여기에서 우리가 가진 name이 'Bitcoin'이고, 이걸 누르면 loading을 볼 수 있다
// 로딩이 끝나면, 코인의 name을 다시 한번 받아오게 될 것이다
// 이것은 그렇게 좋은 UI가 아니다
// 이미 우리가 어떤 name을 누르는지 알고 있는데, 왜 loading을 또 봐야 할까?
// 데이터는 이미 브라우저가 갖고 있음. 이미 필요한 데이터를 받았음

// React Router DOM에서 Link Component를 사용할 때 두 가지 옵션이 있음
// 첫 번째 지금 하던 것 처럼 어딘가 이동하기 위해 string을 이용
// <Link to='/about'>About<Link/>
// query argument 도 사용할 수 있고
// <Link to='/courses?sort=name'></Link>

// 두 번째 object도 사용할 수 있다
// 이 object를 통해서 말그대로 데이터 그 자체를 보낼수도 있다
// 데이터를 다른 화면으로 보낼 수 있다
// 한 화면에서 다른 화면으로 string 또는 state같은 정보들을 보낼 수 있다
// <Link
// to={{
// pathname: '/courses',
// search: '?sort=name',
// hash: '#the-hash, state: {fromDashboard: true}',
// }}
// ></Link>;

// state는 우리가 Coins 화면을 열 때와, Coin 화면으로 넘어갈 때 생성 됨
// Coins 화면, 즉 Home 에 있을 때와, 뭔가를 클릭해서 이동할 때
// state가 home 에서 다른 화면으로 보내지는 거지

// 만약 누군가가 Coin 페이지로 바로 접속하려고 하면 에러가 남
// 왜냐면, state가 생성되려면 Home 화면을 먼저 열어야 하기 때문이다
// 우리가 클릭할 때 state가 만들어지니까
// 그 다음에야 우리 Coin 화면이 state를 가져서 title도 보여줄 수 있는 것이다
// 만약 coinID가 들어간 URL을 이용해 페이지로 바로 접속한다면,
// 우리 app상에 state가 만들어지지 못하는 것
// 이걸 해결하려면
// state가 존재하면? name을 가져오고,
// state가 존재하지 않을 때는 Loading을 보여줘
// 정리하자면
// 시크릿모드에서 상세화면 URL을 바로 치고 들어오면 Loading 화면만 보게 될 것이고
// Home 화면을 통해서 들어온다면, 클릭을 통해 생성 된 state를 볼 수 있을 것이다
// bnb binance coin으로 바로 접속하면 Loading을 볼 것이고,
// 홈 화면을 통해서 bnb binance coin으로 올 때만 coin의 name을 볼 수 있는 것이다

///////////////////////////////////////////////
// 5-9
// React Query part One
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchCoins } from '../api';

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  // 이 블록을 통채로 주석 처리
  //   const [coins, setCoins] = useState<CoinInterface[]>([]);
  //   const [loading, setLoading] = useState(true);
  //   useEffect(() => {
  //     (async () => {
  //       const response = await fetch('https://api.coinpaprika.com/v1/coins');
  //       const json = await response.json();
  //       setCoins(json.slice(0, 100));
  //       setLoading(false);
  //     })();
  //   }, []);
  const { isLoading, data } = useQuery<ICoin[]>(['allCoins'], fetchCoins);
  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: { name: coin.name },
                }}
              >
                <Img
                  src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}
export default Coins;
