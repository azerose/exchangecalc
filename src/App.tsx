import styled from "@emotion/styled";

function App() {
  return (
    <MainWrapper>
      <div>환전 계산기</div>
      <FormWrapper>
        <ChangeWrapper>
          <div>
            <input />
            <select></select>
          </div>
          <button>변환하기</button>
        </ChangeWrapper>
        <input readOnly />
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

const FormWrapper = styled.form`
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

const ChangeWrapper = styled.div`
  display: flex;
  width: 100%;
  input {
    width: 80%;
  }
  button {
    width: 20%;
  }
  margin-bottom: 10px;
`;

export default App;
