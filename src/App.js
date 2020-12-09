import './App.css';
import Auth from './components/Auth/Auth';

function App() {
  let imgUrl = './images/logo.svg',
    login = "Вход",
    register = "Регистрация";

  return(
    <>
    <Auth src={imgUrl} login={login} register={register} />
    </>
  );
};

export default App;