import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import pvlogo from "../../assets/pvlogo.jpg";
import { LayoutComponents } from "../../components/LayoutComponents";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate =useNavigate()
  
  function handleLogin (){
    navigate('/home')

  }

  function handleGoToHome (){
    navigate('/home')

  }
  return (
    <LayoutComponents>
      <form className="login-form">
        <span className="login-form-title"> Bem vindo </span>

        <span className="login-form-title">
          <img src={pvlogo} alt="logo" />
        </span>

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Crm"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>

        <div className="container-login-form-btn">
          <button onClick={handleLogin} className="login-form-btn">Login</button>
        </div>

        <div className="gohome">
        <button onClick={handleGoToHome}>Enviar</button>
        </div>

        <div className="text-center">
          <span className="txt1">Não possui conta? </span>
          <Link className="txt2" to="/register">
            Criar conta.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};
