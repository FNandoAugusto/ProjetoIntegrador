import React, { useState, useEffect } from 'react';
// IMPORTANTE: Para usar 'navigate', você PRECISA estar dentro de um <BrowserRouter>
import { useNavigate } from 'react-router-dom'; 

// --- DADOS PARA GERAÇÃO DE NOME ALEATÓRIO ---
const FIRST_NAMES: string[] = ['João', 'Maria', 'Pedro', 'Ana', 'Carlos', 'Juliana', 'Lucas', 'Mariana', 'Ricardo', 'Camila'];
const LAST_NAMES: string[] = ['Silva', 'Santos', 'Oliveira', 'Souza', 'Pereira', 'Almeida', 'Rodrigues', 'Ferreira'];

const getRandomName = (): string => {
    const first = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
    const last = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
    return `${first} ${last}`;
};

// --- DEFINIÇÕES DE TIPOS ATUALIZADAS ---
type StatusType = 'livre' | 'ocupado';

// Novo tipo para armazenar o status e o nome do usuário
interface TimeSlot {
    status: StatusType;
    user: string | null; 
}

// O estado HorariosStatus será um mapa de string (hora) para TimeSlot
interface HorariosStatus {
    [key: string]: TimeSlot;
}

// --- CONSTANTES ---
const ALL_TIMES: string[] = [
    '08h', '09h', '10h', '11h', '12h', // Manhã
    '13h', '14h', '15h', '16h', '17h', // Tarde
    '18h', '19h', '20h', '21h', '22h'  // Noite
];

function SelecaoHorarios() {
    const navigate = useNavigate(); 
    
    // O estado agora usa a interface HorariosStatus (TimeSlot)
    const [horariosStatus, setHorariosStatus] = useState<HorariosStatus>({}); 
    const [horariosSelecionados, setHorariosSelecionados] = useState(new Set<string>()); 

    // Lógica de Inicialização Aleatória (Executa apenas uma vez)
    useEffect(() => {
        const initialStatus: HorariosStatus = {};
        ALL_TIMES.forEach(time => {
            const isAvailable = Math.random() > 0.3;
            
            if (isAvailable) {
                // Se livre, o usuário é null
                initialStatus[time] = { status: 'livre', user: null };
            } else {
                // Se ocupado, atribui um nome aleatório
                initialStatus[time] = { status: 'ocupado', user: getRandomName() }; 
            }
        });
        setHorariosStatus(initialStatus);
    }, []);

    // Lógica de Seleção do Horário
    const handleTimeClick = (time: string) => {
        const currentSlot = horariosStatus[time];

        // Verifica se existe o slot e se ele está livre
        if (currentSlot && currentSlot.status === 'livre') {
            setHorariosSelecionados(prevSelected => {
                const newSelected = new Set(prevSelected);
                if (newSelected.has(time)) {
                    newSelected.delete(time);
                } else {
                    newSelected.add(time);
                }
                return newSelected;
            });
        }
    };
    
    // Função de Reserva e Navegação com useNavigate
    const handleReservationClick = () => {
        if (horariosSelecionados.size === 0) {
            window.alert("Por favor, selecione pelo menos um horário antes de tentar reservar.");
            return;
        }
        
        // Chama a navegação externa para a rota "/Reservado"
        navigate('/Reservado');
    };
    
    // Função Auxiliar para renderizar uma lista de horários
    const renderTimeList = (times: string[]) => (
        <ul>
            {times.map((time) => {
                // Obtém o slot ou usa um default para segurança
                const slot = horariosStatus[time] || { status: 'livre', user: null }; 
                const { status, user } = slot;
                
                const isSelected = horariosSelecionados.has(time);

                const className = `horario-item ${status} ${isSelected ? 'selecionado' : ''}`;
                
                // Exibe o nome se ocupado, ou "[reservar]" se livre
                const displayUser = status === 'ocupado' ? user : '[reservar]';

                return (
                    <li
                        key={time}
                        className={className}
                        // O click agora só precisa do tempo, pois a lógica de status está em handleTimeClick
                        onClick={() => handleTimeClick(time)} 
                    >
                        {time}: {displayUser}
                    </li>
                );
            })}
        </ul>
    );

    // Divisão dos horários para renderização
    const manha = ALL_TIMES.slice(0, 5);
    const tarde = ALL_TIMES.slice(5, 10);
    const noite = ALL_TIMES.slice(10, 15);

    return (
        <div className="main-container">
            <h1>Seleção de Horários</h1>
            <p>
                &bull; Ambiente: Laboratório 03
                &bull; Data Selecionada: 19/11/25
            </p>

            <hr />

            <div className="horarios-container">
                <div className="coluna-manha">
                    <h2>Manhã</h2>
                    {renderTimeList(manha)}
                </div>

                <div className="coluna-tarde">
                    <h2>Tarde</h2>
                    {renderTimeList(tarde)}
                </div>

                <div className="coluna-noite">
                    <h2>Noite</h2>
                    {renderTimeList(noite)}
                </div>
            </div>

            <hr />

            <button 
                type="submit"
                onClick={handleReservationClick} 
            >
                Reservar Horários ({horariosSelecionados.size} selecionado(s))
            </button>
        </div>
    );
}

// 2. CSS embutido no React/JSX usando `<style>`
const GlobalStyles = () => (
    <style>{` 
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

        body {
            font-family: 'Roboto', sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .main-container {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            width: 90%;
            max-width: 800px;
        }

        h1 {
            color: #1a237e;
            font-size: 1.8em;
            margin-bottom: 10px;
        }

        p {
            color: #333;
            font-size: 0.9em;
            margin-top: 0;
            margin-bottom: 25px;
        }

        hr {
            border: none;
            border-top: 1px solid #ddd;
            margin: 20px 0;
        }

        .horarios-container {
            display: flex;
            justify-content: space-around; 
            align-items: flex-start;
            margin-bottom: 30px;
        }
        
        /* Layout responsivo */
        @media (max-width: 600px) {
            .horarios-container {
                flex-direction: column;
                align-items: stretch;
            }
            .coluna-manha, .coluna-tarde, .coluna-noite {
                border-right: none;
                border-bottom: 2px dashed #ccc;
                margin-bottom: 20px;
                padding-bottom: 20px;
            }
            .coluna-noite {
                border-bottom: none;
            }
        }

        .coluna-manha, .coluna-tarde, .coluna-noite {
            flex: 1; 
            padding: 0 15px;
            border-right: 2px dashed #ccc;
        }

        .coluna-noite {
            border-right: none;
        }

        h2 {
            color: #1a237e;
            font-size: 1.2em;
            font-style: italic;
            font-weight: bold;
            margin-bottom: 15px;
            text-align: center;
        }

        ul {
            list-style: none;
            padding: 0;
        }

        /* --- Estilos Dinâmicos (li.horario-item) --- */

        li.horario-item {
            font-weight: bold;
            padding: 8px 10px;
            margin-bottom: 8px;
            border-radius: 5px;
            text-align: center;
            transition: background-color 0.2s, color 0.2s, border-color 0.2s;
            border: 1px solid transparent;
        }

        /* VERDE: Horário Livre */
        li.horario-item.livre {
            background-color: #e8f5e9; 
            color: #2e7d32; 
            cursor: pointer; 
            border-color: #c8e6c9;
        }
        li.horario-item.livre:hover {
            background-color: #c8e6c9; 
        }

        /* VERMELHO: Horário Ocupado */
        li.horario-item.ocupado {
            background-color: #ffebee; 
            color: #c62828; 
            cursor: not-allowed; 
            opacity: 0.7; 
            border-color: #ffcdd2;
        }
        li.horario-item.ocupado:hover {
            background-color: #ffebee; 
        }

        /* AZUL: Horário Selecionado */
        li.horario-item.livre.selecionado {
            background-color: #1e88e5;
            color: white; 
            box-shadow: 0 2px 5px rgba(30, 136, 229, 0.4); 
            border-color: #1565c0;
        }
        li.horario-item.livre.selecionado:hover {
            background-color: #1565c0; 
        }

        /* --- Estilo do Botão --- */
        button {
            background-color: #1e88e5;
            color: white;
            border: none;
            border-radius: 8px;
            padding: 12px 30px;
            font-size: 1.1em;
            font-weight: bold;
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            transition: background-color 0.2s, transform 0.1s;
            display: block; 
            margin: 20px auto 0 auto; 
        }

        button:hover {
            background-color: #1565c0;
            transform: translateY(-1px);
        }
    `}</style>
);

const PreviewComponent = () => (
    <>
        <GlobalStyles />
        <SelecaoHorarios />
    </>
);

export default PreviewComponent;