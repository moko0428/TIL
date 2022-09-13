import { useState, useEffect } from "react";
/*챌린지 1. USD를 BTC로 변환하는 input 만들기*/
/*챌린지 1-1. 입력한 USD를 BTC로 변환하고 얼만큼의 비트코인인지 알려주는 input*/
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <hr />
      {loading ? (
        ""
      ) : (
        <form>
          <input type="text" placeholder="달러를 입력해주세요" />
          <button>변환</button>
          <input type="text" />
        </form>
      )}
      {loading ? (
        <strong>loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
