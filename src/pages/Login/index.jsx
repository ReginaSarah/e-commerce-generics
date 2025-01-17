import './style.css'
import api from "../../services/api"
import { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom"

function Login() {

  const navigateTo = useNavigate();

  const inputEmail = useRef()
  const inputSenha = useRef()

  async function logar() {
    const token = await api.post("/login", {
      email: inputEmail.current.value,
      senha: inputSenha.current.value,
    });
    navigateTo("/usuarios", token)
  }

  useEffect(() => {
  }, []);

  return (
    <div className="container">
      <form>
        <h1>
          Login
        </h1>
        <input type="text" name="email" placeholder='Digite seu email' ref={inputEmail} />
        <input type="password" name="senha" placeholder='Digite sua senha' ref={inputSenha} />
        <div className='container-button'>
          <button type='button' onClick={logar}>Entrar</button>
        </div>

      </form>

    </div>
  )
}

export default Login

/*
- colocar máscara no campo de CPF - OK
- fazer validação dos campos
- fazer telas separadas
- mudar o layout                  - OK
- fazer as outras funções de usuário
*/