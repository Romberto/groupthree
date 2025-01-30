import { Footer } from "./components/pages/Footer/Footer";
import { Header } from "./components/UI/Header/Header";


function App() {
  return (
    <div className="container">
      <Header isAuth={true}/>
      <Footer/>
    </div>
  );
}

export default App;
