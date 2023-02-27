import styled from "@emotion/styled";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [current, setCurrent] = useState("USD");
  const [change, setChange] = useState("KRW");
  const [result, setResult] = useState(0);
  const [rate, setRate] = useState(0);

  useEffect(() => {
    axios
      .get(`https://api.exchangerate.host/latest?base=${current}`)
      .then((res) => {
        setRate(res.data.rates[change]);
      });
  }, [current, change]);

  const OnChangeStart = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrent(e.target.value);
  };

  const OnChangeEnd = (e: ChangeEvent<HTMLSelectElement>) => {
    setChange(e.target.value);
  };

  const OnChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const OnClickChange = () => {
    setResult(amount * rate);
  };

  return (
    <MainWrapper>
      <div>환전 계산기</div>
      <FormWrapper>
        <ChangeWrapper>
          <InputSelectBox>
            <label htmlFor="amount">Amount:</label>
            <input
              id="amount"
              type="number"
              value={amount}
              onChange={OnChangeAmount}
            />
          </InputSelectBox>
          <InputSelectBox>
            <label htmlFor="from">From:</label>
            <select id="from" value={current} onChange={OnChangeStart}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="KRW">KRW</option>
            </select>
          </InputSelectBox>
          <InputSelectBox>
            <label htmlFor="to">To:</label>
            <select id="to" value={change} onChange={OnChangeEnd}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="KRW">KRW</option>
            </select>
          </InputSelectBox>
        </ChangeWrapper>
        <ChangeWrapper>
          {amount} {current}:{result}
          {change}
        </ChangeWrapper>
        <button onClick={OnClickChange}>변환하기</button>
      </FormWrapper>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  max-width: 500px;
  min-width: 400px;
  width: 50%;
  input {
    height: 20px;
  }
`;

const InputSelectBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px 5px;
  input {
    border: none;
  }
`;

const ChangeWrapper = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid gray;
  input {
    width: 80%;
  }
  button {
    width: 20%;
  }
  margin: 10px 0;
`;

export default App;
