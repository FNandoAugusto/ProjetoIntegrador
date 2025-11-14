import React from 'react';
import { useNavigate } from 'react-router-dom';

// --- 1. Tipos e Dados ---

/** Tipos de status de reserva definidos como constantes para uso seguro */
const ReservationStatus = {
  Livre: 'Livre',
  ParcialmenteReservado: 'Parcialmente reservado',
  TotalmenteReservado: 'Totalmente reservado',
} as const; 

type ReservationStatusType = typeof ReservationStatus[keyof typeof ReservationStatus];

interface CalendarDay {
  day: number;
  status: ReservationStatusType | null;
}

/** Mapeamento de status para classes CSS puras (baseadas no index.html) */
const statusClassesMap: Record<ReservationStatusType, string> = {
  [ReservationStatus.Livre]: 'livre',
  [ReservationStatus.ParcialmenteReservado]: 'parcialmente-reservado',
  [ReservationStatus.TotalmenteReservado]: 'totalmente-reservado',
};

// Dados mockados para Novembro de 2025 (30 dias)
const mockReservations: CalendarDay[] = [
  // 1ª Semana (Seg a Dom)
  { day: 1, status: ReservationStatus.Livre }, { day: 2, status: ReservationStatus.Livre }, { day: 3, status: ReservationStatus.Livre },
  { day: 4, status: ReservationStatus.Livre }, { day: 5, status: ReservationStatus.Livre }, { day: 6, status: ReservationStatus.TotalmenteReservado },
  { day: 7, status: null }, // Domingo, sem cor
  // 2ª Semana
  { day: 8, status: ReservationStatus.ParcialmenteReservado }, { day: 9, status: ReservationStatus.Livre }, { day: 10, status: ReservationStatus.Livre },
  { day: 11, status: ReservationStatus.Livre }, { day: 12, status: ReservationStatus.Livre }, { day: 13, status: ReservationStatus.TotalmenteReservado },
  { day: 14, status: null }, // Domingo, sem cor
  // 3ª Semana
  { day: 15, status: ReservationStatus.Livre }, { day: 16, status: ReservationStatus.Livre }, { day: 17, status: ReservationStatus.Livre },
  { day: 18, status: ReservationStatus.ParcialmenteReservado }, { day: 19, status: ReservationStatus.Livre }, { day: 20, status: ReservationStatus.TotalmenteReservado },
  { day: 21, status: null }, // Domingo, sem cor
  // 4ª Semana
  { day: 22, status: ReservationStatus.Livre }, { day: 23, status: ReservationStatus.Livre }, { day: 24, status: ReservationStatus.Livre },
  { day: 25, status: ReservationStatus.TotalmenteReservado }, { day: 26, status: ReservationStatus.TotalmenteReservado }, { day: 27, status: ReservationStatus.TotalmenteReservado },
  { day: 28, status: null }, // Domingo, sem cor
  // 5ª Semana
  { day: 29, status: ReservationStatus.Livre }, { day: 30, status: ReservationStatus.ParcialmenteReservado },
];

const dayNames = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];

// --- 2. Componente Principal ---

const App: React.FC = () => {
  const navigate = useNavigate();
  const totalCells = 5 * 7;
  const calendarDays: JSX.Element[] = [];

  // Função de exemplo para o clique nos dias normais
  const handleDayClick = (day: number | null) => {
    if (day !== null) {
      console.log(`Dia ${day} clicado! Aqui você navegaria ou abriria um modal de reserva.`);
    }
  };

  // Função específica para o dia 19 que navega para "Reservado"
  const handleDay19Click = () => {
    console.log('Navegando para a tela Reservado...');
    navigate("/Reservado");
  };

  for (let i = 0; i < totalCells; i++) {
    const dayData = mockReservations[i];
    
    let dayNumber: number | null = null;
    let statusClass = '';
    
    if (dayData) {
        dayNumber = dayData.day;
        const isSunday = (dayNumber % 7 === 0);

        if (isSunday) {
            statusClass = 'sunday';
        } else if (dayData.status) {
            statusClass = statusClassesMap[dayData.status];
        }
    } else if (i >= mockReservations.length) {
        // Células vazias que fecham a última semana
        statusClass = 'empty';
    }

    // Verifica se é o dia 19 para aplicar a navegação específica
    const isDay19 = dayNumber === 19;

    calendarDays.push(
      <button 
          key={i} 
          className={`day ${statusClass}`}
          onClick={isDay19 ? handleDay19Click : () => handleDayClick(dayNumber)}
          disabled={dayNumber === null}
      >
          {dayNumber}
      </button>
    );
  }

  return (
    // O bloco <style> deve vir primeiro no return
    <>
        <style>
            {/* Estilos Globais e Reset Simples */}
            {`
            .page-container {
                font-family: 'Inter', sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f3f4f6; /* Cor de fundo light gray */
                display: flex;
                justify-content: center;
                padding-top: 40px;
                min-height: 100vh; /* Garante que o fundo cubra toda a tela */
            }

            /* Container Principal do Cartão */
            .calendar-card {
                max-width: 480px; 
                width: 95%;
                background-color: #ffffff;
                border-radius: 12px;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                border: 1px solid #e5e7eb;
                overflow: hidden;
            }

            /* Cabeçalho */
            .header {
                display: flex;
                align-items: center;
                background-color: #1a73e8; /* Azul */
                color: white;
                padding: 16px;
            }

            .header h2 {
                font-size: 1.25rem;
                font-weight: bold;
                margin: 0;
            }

            .header svg {
                margin-right: 12px;
            }

            /* Conteúdo do Calendário */
            .content {
                padding: 24px;
            }

            .month-title {
                text-align: center;
                margin-bottom: 24px;
            }

            .month-title h3 {
                font-size: 2rem;
                font-weight: 800; /* Extra bold */
                color: #1f2937; /* Gray-800 */
                margin: 0;
            }

            /* Grid dos Dias da Semana */
            .weekdays {
                display: grid;
                grid-template-columns: repeat(7, 1fr);
                text-align: center;
                font-weight: 600;
                color: #4b5563; /* Gray-600 */
                margin-bottom: 8px;
            }

            .weekday-item {
                padding: 8px 0;
                font-size: 0.875rem;
            }

            /* Grid dos Dias do Mês */
            .calendar-grid {
                display: grid;
                grid-template-columns: repeat(7, 1fr);
                text-align: center;
                gap: 12px 0;
            }

            /* Estilo base para o botão do dia */
            .day {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                font-weight: bold;
                margin: auto;
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s;
                color: #1f2937;
                border: none;
                cursor: pointer;
                background: transparent;
            }

            .day:not(:disabled):hover {
                transform: scale(1.1);
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            }

            .day:disabled {
                cursor: not-allowed;
                opacity: 0.6;
            }

            /* Cores de Status */
            .day.livre {
                background-color: #81c784; /* Verde claro */
                color: white;
            }
            .day.parcialmente-reservado {
                background-color: #ffb74d; /* Laranja claro */
                color: white;
            }
            .day.totalmente-reservado {
                background-color: #e57373; /* Vermelho claro */
                color: white;
            }

            /* Estilo para Domingos e Dias Vazios */
            .day.sunday {
                background-color: transparent;
                color: #6b7280; /* Gray-500 */
            }

            .day:not(.sunday):not(.livre):not(.parcialmente-reservado):not(.totalmente-reservado) {
                 /* Aplica a cor padrão de texto se não tiver status especial */
                 color: #1f2937;
            }

            .day.empty {
                background-color: transparent;
                color: #9ca3af; /* Gray-400 */
            }

            /* Separador */
            .divider {
                margin: 0 24px;
                border-top: 1px solid #e5e7eb;
            }

            /* Legenda */
            .legend {
                padding: 24px;
                padding-top: 16px;
            }

            .legend h4 {
                font-size: 1.125rem;
                font-weight: bold;
                color: #374151; /* Gray-700 */
                margin-top: 0;
                margin-bottom: 12px;
            }

            .legend-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                gap: 8px;
                font-size: 0.875rem;
                color: #374151;
            }

            .legend-item {
                display: flex;
                align-items: center;
            }

            .legend-color {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                margin-right: 8px;
            }

            /* Responsividade para telas menores */
            @media (max-width: 600px) {
                .page-container {
                    padding-top: 20px;
                }
                .content, .legend {
                    padding: 16px;
                }
                .month-title h3 {
                    font-size: 1.75rem;
                }
                .day {
                    width: 36px;
                    height: 36px;
                }
                .legend-grid {
                    grid-template-columns: 1fr;
                }
            }
            `}
        </style>
        
        <div className="page-container">
            <div className="calendar-card">
                
                {/* Cabeçalho */}
                <div className="header">
                    {/* Icone de Calendário (SVG inline) */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <h2>Laboratório 03</h2>
                </div>

                <div className="content">
                    {/* Nome do Mês */}
                    <div className="month-title">
                        <h3>Novembro 2025</h3>
                    </div>
                    
                    {/* Dias da Semana */}
                    <div className="weekdays">
                        {dayNames.map(name => (
                            <div key={name} className="weekday-item">
                                {name}
                            </div>
                        ))}
                    </div>

                    {/* Grid de Dias do Mês */}
                    <div className="calendar-grid">
                        {calendarDays}
                    </div>
                </div>

                <div className="divider"></div>

                {/* Legenda de Status */}
                <div className="legend">
                    <h4>Legenda:</h4>
                    <div className="legend-grid">
                        {Object.keys(ReservationStatus).map(key => {
                            const statusKey = ReservationStatus[key as keyof typeof ReservationStatus];
                            const className = statusClassesMap[statusKey];

                            return (
                                <div key={statusKey} className="legend-item">
                                    <span className={`legend-color ${className}`}></span>
                                    {statusKey}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default App;