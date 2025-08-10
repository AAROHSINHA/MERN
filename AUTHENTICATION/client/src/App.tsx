import Buttons from "./components/MainPage/Buttons";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import LocalLogin from "./components/Login/LocalLogin";
import JWTLogin from "./components/Login/JWTLogin";
import OAuth2Login from "./components/Login/OAuthLogin";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Buttons />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/local-login" element={<LocalLogin />} />
        <Route path="/jwt-login" element={<JWTLogin />} />
        <Route path="/oauth2-login" element={<OAuth2Login />} />
      </Routes>
    </div>
  );
}

export default App;
