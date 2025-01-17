import './style.css'
import CircumIcon from "@klarr-agency/circum-icons-react"; // React
import api from "../../services/api"
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal';

function Home() {


  const navigateTo = useNavigate();

  const [usuarios, setUsuarios] = useState([]);

  async function getUsuarios() {
    const result = await api.get("/listarUsuarios");
    setUsuarios(result.data);
  }

  async function redirecionarEdicao(usuario) {
    console.log(usuario)
    navigateTo("/usuario/" + usuario.id)
  }

  useEffect(() => {
    getUsuarios()
  }, []);

  return (
    <div className="container">
      {usuarios.map((user) => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.nome}</span> </p>
            <p>Email: <span>{user.email}</span> </p>
            <p>CPF: <span>{user.cpf}</span> </p>
          </div>
          <div className='icon'>
            <button name='up' onClick={() => redirecionarEdicao(user)}><CircumIcon name="edit" color="#FFF" size="20px" /></button>
            <Modal />
            <CircumIcon name="trash" color="#FFF" size="20px" />
          </div>

        </div>
      ))}


    </div>
  )
}

export default Home

/*
- colocar máscara no campo de CPF - OK
- fazer validação dos campos
- fazer telas separadas           - OK
- mudar o layout                  - OK
- fazer as outras funções de usuário
*/