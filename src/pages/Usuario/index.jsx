import './style.css'
import api from "../../services/api"
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CPFMask from "../../components/CPFMask"
import Input from "../../components/Input"

function Usuario() {


  const navigateTo = useNavigate();

  const [usuario, setUsuario] = useState([]);

  const { id } = useParams()

  let [inputNome, setNome] = useState("")

  let [inputEmail, setEmail] = useState("")

  const [inputCpf, setCpf] = useState("")

  async function buscarUsuarioPorId(id) {
    const result = await api.get("/buscarPorId/" + id);
    console.log(result);
    setNome(result.data.nome);
    setEmail(result.data.email);
    setCpf(result.data.cpf);
     
  }

  async function editarUsuario() {
    await api.put("/editar", {
      id: id,
      nome: inputNome,
      cpf: inputCpf,
      email: inputEmail,
    });
    navigateTo("/usuarios")
  }

  useEffect(() => {
    buscarUsuarioPorId(id)
  },[]);

  return (
    <div className="container">
        <form>
          <h1>
            Editar Usuário
          </h1>
          <Input type="text" name="nome" label='Digite seu nome' value={inputNome} onChange={(event) => setNome(event.target.value)}/>
          <input type="text" name="email" label='Digite seu email' value={inputEmail} onChange={(event) => setEmail(event.target.value)}/>
          <CPFMask value={inputCpf} onChange={(event) => setCpf(event.target.value)} />
          <div className='container-button'>
            <button type='button' onClick={editarUsuario}>Salvar</button>
          </div>

        </form>
    </div>
  )
}

export default Usuario

/*
- colocar máscara no campo de CPF - OK
- fazer validação dos campos
- fazer telas separadas           - OK
- mudar o layout                  - OK
- fazer as outras funções de usuário
*/