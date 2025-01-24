import Button from "./components/UI/Button/Button";
import Input from "./components/UI/Input/Input";

function App() {
  return (
    <div className="container">
      <h3>Здесь будут компоненты</h3>
      <Button text="Join us now" mode="btn-white"/>
      <Button text="Request demo" mode="btn-violet"/>
      <Button text="Join us now" mode="btn-round-rigth"/>
      <br/>
      <Input/>
    </div>
  );
}

export default App;
