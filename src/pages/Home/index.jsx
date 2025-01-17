import './style.css'
import api from "../../services/api"
import { useEffect, useState, useRef } from 'react';
import CPFMask from "../../components/CPFMask"
import { useNavigate } from "react-router-dom"

function Home() {

  const navigateTo = useNavigate();

  const inputNome = useRef()
  const inputEmail = useRef()
  const inputSenha = useRef()
  const [inputCpfNew, setCpf] = useState("")

  async function cadastrarUsuario() {
    await api.post("/cadastro", {
      nome: inputNome.current.value,
      cpf: inputCpfNew,
      email: inputEmail.current.value,
      senha: inputSenha.current.value,
    });
    navigateTo("/login")
  }

  useEffect(() => {
  }, []);

  return (
    <div className="container">
      <form>
        <h1>
          Cadastrar
        </h1>
        <input type="text" name="nome" placeholder='Digite seu nome' ref={inputNome} />
        <input type="text" name="email" placeholder='Digite seu email' ref={inputEmail} />
        <CPFMask value={inputCpfNew} onChange={(event) => setCpf(event.target.value)} />
        <input type="password" name="senha" placeholder='Digite sua senha' ref={inputSenha} />
        <div className='container-button'>
          <button type='button' onClick={cadastrarUsuario}>Cadastrar</button>
        </div>

      </form>


    </div>
  )
}

export default Home

/*
- colocar máscara no campo de CPF - OK
- fazer validação dos campos
- fazer telas separadas
- mudar o layout                  - OK
- fazer as outras funções de usuário
*/