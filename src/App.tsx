import Button from "./components/UI/Button/Button";
import Input from "./components/UI/Input/Input";
import RegisterForm from "./components/UI/RegisterForm/RegisterForm";
import SearchFilterForm from "./components/UI/SearchFilterForm/SearchFilterForm";

function App() {
  return (
    <div className="container">
      <h3>Здесь будут компоненты</h3>
      <Button  mode="btn-white" >Join us now</Button>
      <Button  mode="btn-violet" >Request demo</Button>
      <Button  mode="btn-round-rigth" >Join us now</Button>
      <Input />
      <RegisterForm  mode="singIn"/>
      <RegisterForm mode="singUp"/>
      <SearchFilterForm />
    </div>
  );
}

export default App;
