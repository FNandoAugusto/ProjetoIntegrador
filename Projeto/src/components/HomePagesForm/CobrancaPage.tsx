import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../context/Contexto";
import { IClient } from "./ModalCadastro";
import { api } from "../../api";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./CobrancaPage.Module.css";

interface ICurrentUser {
  email: string;
  nome: string;
  id: string;
}
interface ICobranca {
  id_cob: string;
  valor: string;
  status: string;
  nome: string;
  id: string;
  descricao: string;
  data_venc: string;
  usuario_id: string;
}

export const CobrancaList = () => {
  const navigate = useNavigate();
  const mainContext = useContext(MainContext);

  const [cobrancaList, setCobrancaList] = useState<ICobranca[]>([]);

  if (!mainContext) {
    return null;
  }

  const { handleGetToken } = useAuth();

  useEffect(() => {
    const loadCharges = async () => {
      try {
        const response = await api.get(`/allCharges`, {
          headers: { Authorization: `Bearer ${handleGetToken()}` },
        });

        console.log(response.data);
        setCobrancaList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadCharges();
  }, []);
  const getNome: ICurrentUser = JSON.parse(
    localStorage.getItem("current-user")!
  );

  const logout = () => {
    localStorage.removeItem("token");
    window.location.replace("/login");
  };
  const handleDelete = async (id: string) => {
    try {
      const response = await api.delete(`/deleteCharge/${id}`, {
        headers: { Authorization: `Bearer ${handleGetToken()}` },
      });

      console.log(response.data);
      window.location.replace("/cobrancas");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    
<body>

    <div className="card">
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div className="check-icon"></div>
            <img src="../../../public/ConfirmedIcon.png" alt="IconConfirmationForm" />
            <h1 className="title">Reserva Confirmada com Sucesso!</h1>
        </div>
        
        
        <div className="details-container">
            
            <div className="detail-item">
                <div className="detail-icon">🧪</div> 
                <div className="detail-label">Ambiente:</div>
                <div className="detail-value">Lab. Logística</div>
            </div>

            <div className="detail-item">
                <div className="detail-icon">📅</div> 
                <div className="detail-label">Data:</div>
                <div className="detail-value">19/11/2025 (Quinta-feira)</div>
            </div>

            <div className="detail-item">
                <div className="detail-icon">🕒</div> 
                <div className="detail-label">Horário:</div>
                <div className="detail-value">18H - 19H</div>
            </div>

            <div className="detail-item">
                <div className="detail-icon">👤</div> 
                <div className="detail-label">Reservado:</div>
                <div className="detail-value">Larissa Aguiar Moreira</div>
            </div>

        </div>

        
        <p className="instructions">
            Sua reserva foi registrada no sistema AgendaSenai. Lembre-se de comparecer pontualmente e liberar o espaço após o uso.
        </p>

        
        <div className="button-group">
            <a href="#" className="btn btn-primary">Ver minhas reservas</a>
            <a href="#" className="btn btn-secondary">Baixar comprovante (.pdf)</a>
        </div>
    </div>

</body>

  );
};
