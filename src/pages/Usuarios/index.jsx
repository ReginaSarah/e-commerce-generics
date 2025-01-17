import './style.css'
import CircumIcon from "@klarr-agency/circum-icons-react"; // React
import api from "../../services/api"
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal';

function Home() {


  const navigateTo = useNavigate();

  const [usuarios, setUsuarios] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState(null);

  async function getUsuarios() {
    const result = await api.get("/listarUsuarios");
    setUsuarios(result.data);
    setOpenModal
  }

  async function redirecionarEdicao(usuario) {
    console.log(usuario)
    navigateTo("/usuario/" + usuario.id)
  }

  async function deletarUsuario() {
    console.log(itemSelecionado)
    await api.delete("/excluirPorCpf/" + itemSelecionado.cpf)
    fecharModal()
    getUsuarios()
  }

  const abrirModal = (item) => {
    console.log(item);
    setItemSelecionado(item);
    setOpenModal(true);
  };

  const fecharModal = () => {
    setOpenModal(false);
    setItemSelecionado(null);
  };

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

            <button onClick={() => abrirModal(user)} ><CircumIcon name="trash" color="#FFF" size="20px" /></button>
            <Modal isOpen={openModal} >
              <h5>Deseja realmente excluir este usuário?</h5>
              <button id="fechar-modal" onClick={() => fecharModal(false)}>Não</button>
              <button id="fechar-modal" onClick={deletarUsuario}>Sim</button>
            </Modal>
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