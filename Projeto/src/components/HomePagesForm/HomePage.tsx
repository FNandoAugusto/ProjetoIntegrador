import { useContext, useEffect, useRef, useState } from "react";
import { MainContext } from "../../context/Contexto";
import { IClient } from "./ModalCadastro";
import { api } from "../../api";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ICobranca } from "./ChargeModal";

export interface ICurrentUser {
  email: string;
  nome: string;
  id: string;
}
interface ICobrancaStatus {
  charges: ICobranca[];
  quantidade: number;
  total: number;
}
interface Itypes {
  data: {
    Paga: ICobrancaStatus;
    Pendente: ICobrancaStatus;
    Vencida: ICobrancaStatus;
  };
}
interface IClientStatus {
  clientes: IClient[];
  quantidade: string;
}
interface IClientType {
  data: {
    clientesEmdia: IClientStatus;
    clientesInadimplentes: IClientStatus;
  };
}

export const HomePage = () => {
  const navigate = useNavigate();
  const mainContext = useContext(MainContext);

  const menuRef = useRef(null);

  const [cobrancaList, setCobrancaList] = useState<ICobranca[]>([]);

  const [cobrancasPagasList, setCobrancasPagasList] = useState<ICobrancaStatus>(
    {
      charges: [],
      quantidade: 0,
      total: 0,
    }
  );

  const [cobrancasVencidasList, setCobrancasVencidasList] =
    useState<ICobrancaStatus>({
      charges: [],
      quantidade: 0,
      total: 0,
    });

  const [cobrancasPrevistasList, setCobrancasPrevistasList] =
    useState<ICobrancaStatus>({
      charges: [],
      quantidade: 0,
      total: 0,
    });

  const [clientList, setClientList] = useState<IClient[]>([]);

  const [clientesEmdiaList, setClientesEmdiaList] = useState<IClientStatus>({
    clientes: [],
    quantidade: "",
  });

  const [clientesInadimplentesList, setClientesInadimplentesList] =
    useState<IClientStatus>({
      clientes: [],
      quantidade: "",
    });

  if (!mainContext) {
    return null;
  }

  const { handleGetToken } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const { data }: Itypes = await api.get(`/dashboardCharges`, {
          headers: { Authorization: `Bearer ${handleGetToken()}` },
        });
        const response: IClientType = await api.get(`/dashboardClients`, {
          headers: { Authorization: `Bearer ${handleGetToken()}` },
        });
        setCobrancasPagasList(data.Paga);
        setCobrancasVencidasList(data.Vencida);
        setCobrancasPrevistasList(data.Pendente);
        setClientesEmdiaList(response.data.clientesEmdia);
        setClientesInadimplentesList(response.data.clientesInadimplentes);
        console.log(response);
        console.log(
          response.data.clientesEmdia,
          response.data.clientesInadimplentes
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const getNome: ICurrentUser = JSON.parse(
    localStorage.getItem("current-user")!
  );

  // const handleCloseMenu = () => {
  //     if (menuRef.current) {
  //         menuRef.current.classNameName = menuRef.current.classNameName = "modalUserMenu" ? "" : "modalUserMenu"
  //     }
  // }

  return (
    <div>
     <div className="browser-container">
        
        <div className="main-content">
            <div className="logo-container">
                <span className="logo-firjan">Firjan</span>
                <span className="logo-senai">SENAI</span>
            </div>

            <div className="content-header">
                <h1>Ambientes</h1>

                <div className="search-bar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{color: '#9ca3af'}}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    <input type="text" placeholder="Procurar Sala Desejada..." />
                </div>
            </div>

            <div className="environments-grid">
                
                <a href="#lab-planta-4-0" className="environment-card">
                    <div>
                        <h3 className="card-title">Lab. Planta 4.0</h3>
                        <p className="card-details">Capacidade 10 / 5 computadores</p>
                    </div>
                    <span className="card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                    </span>
                </a>
                
                <a href="#lab-automacao" className="environment-card">
                    <div>
                        <h3 className="card-title">Lab. Automação</h3>
                        <p className="card-details">Capacidade 20 / 10 computadores</p>
                    </div>
                    <span className="card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                    </span>
                </a>
                
                <a href="#sala-05" className="environment-card">
                    <div>
                        <h3 className="card-title">Sala 05</h3>
                        <p className="card-details">Capacidade 40</p>
                    </div>
                    <span className="card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                    </span>
                </a>

                <a onClick={() => {navigate("/calendario")}} href="#lab-logistica" className="environment-card">
                    <div>
                        <h3 className="card-title">Lab. Logística</h3>
                        <p className="card-details">Capacidade 35 / 10 computadores</p>
                    </div>
                    <span className="card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                    </span>
                </a>

                <a href="#lab-ti-01" className="environment-card">
                    <div>
                        <h3 className="card-title">Lab. TI 01</h3>
                        <p className="card-details">Capacidade 25 / 25 computadores</p>
                    </div>
                    <span className="card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                    </span>
                </a>

                <a href="#sala-11" className="environment-card">
                    <div>
                        <h3 className="card-title">Sala 11</h3>
                        <p className="card-details">Capacidade 43</p>
                    </div>
                    <span className="card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                    </span>
                </a>

                <a href="#biblioteca" className="environment-card">
                    <div>
                        <h3 className="card-title">Biblioteca</h3>
                        <p className="card-details">Capacidade 20 / 09 computadores</p>
                    </div>
                    <span className="card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                    </span>
                </a>

                <a href="#lab-ti-02" className="environment-card">
                    <div>
                        <h3 className="card-title">Lab. TI 02</h3>
                        <p className="card-details">Capacidade 20 / 20 computadores</p>
                    </div>
                    <span className="card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                    </span>
                </a>
                
                <a href="#sala-17" className="environment-card">
                    <div>
                        <h3 className="card-title">Sala 17</h3>
                        <p className="card-details">Capacidade 22</p>
                    </div>
                    <span className="card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                    </span>
                </a>

                <a href="#fablab" className="environment-card">
                    <div>
                        <h3 className="card-title">FabLab</h3>
                        <p className="card-details">Capacidade 20 / 11 computadores</p>
                    </div>
                    <span className="card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                    </span>
                </a>

                <a href="#lab-ti-03" className="environment-card">
                    <div>
                        <h3 className="card-title">Lab. TI 03</h3>
                        <p className="card-details">Capacidade 20 / 20 computadores</p>
                    </div>
                    <span className="card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                    </span>
                </a>

                <a href="#sala-20" className="environment-card">
                    <div>
                        <h3 className="card-title">Sala 20</h3>
                        <p className="card-details">Capacidade 35</p>
                    </div>
                    <span className="card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                    </span>
                </a>
            </div>

            <div className="footer-instruction">
                <p>
                    Clique em um ambiente para ver o calendário de reservas.
                </p>
            </div>

        </div>
    </div>
    </div>
  );
};
