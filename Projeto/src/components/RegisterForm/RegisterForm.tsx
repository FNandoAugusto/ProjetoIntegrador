import React, { useState, useMemo } from 'react';

type SlotStatus = 'available' | 'reserved';

interface TimeSlot {
  time: string;
  status: SlotStatus;
  label: string;
  shift: 'Manhã' | 'Tarde' | 'Noite';
}

const ALL_SLOTS: TimeSlot[] = [
  { time: '08H', status: 'available', label: 'Disponível', shift: 'Manhã' },
  { time: '09H', status: 'reserved', label: 'Prof. João Silva', shift: 'Manhã' },
  { time: '10H', status: 'available', label: 'Disponível', shift: 'Manhã' },
  { time: '11H', status: 'reserved', label: 'Turma de Eletrotécnica', shift: 'Manhã' },
  { time: '12H', status: 'available', label: 'Disponível', shift: 'Manhã' },

  { time: '13H', status: 'available', label: 'Disponível', shift: 'Tarde' },
  { time: '14H', status: 'reserved', label: 'Gestão de Projetos', shift: 'Tarde' },
  { time: '15H', status: 'available', label: 'Disponível', shift: 'Tarde' },
  { time: '16H', status: 'available', label: 'Disponível', shift: 'Tarde' },
  { time: '17H', status: 'reserved', label: 'Monitoria de TI', shift: 'Tarde' },

  
  { time: '18H', status: 'available', label: 'Disponível', shift: 'Noite' },
  { time: '19H', status: 'available', label: 'Disponível', shift: 'Noite' },
  { time: '20H', status: 'reserved', label: 'Prof. Ana Oliveira', shift: 'Noite' },
  { time: '21H', status: 'available', label: 'Disponível', shift: 'Noite' },
  { time: '22H', status: 'available', label: 'Disponível', shift: 'Noite' },
];

export const SelecaoData = () => {
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');

  const ENV_NAME = 'Laboratório 03';
  const DATE_SELECTED = '19/11/25';

  const handleSlotClick = (slot: TimeSlot) => {
    if (slot.status === 'reserved') return; 

    setSelectedTimes(prevTimes => {
      if (prevTimes.includes(slot.time)) {
        
        return prevTimes.filter(time => time !== slot.time);
      } else {
        return [...prevTimes, slot.time];
      }
    });
  };

  const handleReserveClick = () => {
    if (selectedTimes.length === 0) {
      showModal("Atenção", "Selecione pelo menos um horário para reservar.");
      return;
    }

    const times = selectedTimes.slice().sort(); 
    const timeList = times.join(', ');
    
    showModal(
      "Confirmação de Reserva (Visual)", 
      `Você "reservou" os horários ${timeList} para o ambiente ${ENV_NAME} no dia ${DATE_SELECTED}. Esta é uma simulação visual sem backend.`
    );

    setSelectedTimes([]);
  };

  const showModal = (title: string, content: string) => {
    setModalTitle(title);
    setModalContent(content);
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
  };

  const slotsByShift = useMemo(() => {
    const shifts: { [key: string]: TimeSlot[] } = {
      Manhã: [],
      Tarde: [],
      Noite: [],
    };
    ALL_SLOTS.forEach(slot => {
      shifts[slot.shift].push(slot);
    });
    return shifts;
  }, []);

  const renderSlot = (slot: TimeSlot) => {
    const isSelected = selectedTimes.includes(slot.time);
    
    let slotClass = "slot"; 
    let statusClass = "statusIndicator";

    if (slot.status === 'reserved') {
      slotClass += ` reserved`;
    } else if (isSelected) {
      slotClass += ` selected`;
    } else {
      slotClass += ` available`;
    }

    if (slot.status === 'reserved') statusClass += ` reserved`;
    else if (isSelected) statusClass += ` selected`;
    else statusClass += ` available`;
    
    return (
      <div 
        key={slot.time}
        className={slotClass}
        onClick={() => handleSlotClick(slot)}
      >
        <span><span className="highlight">{slot.time}:</span> {slot.label}</span>
        <div className={statusClass}></div>
      </div>
    );
  };
  
  return (
    <div className="container">
        
     


        <div className="mainCard">

            <div className="browserBar">
                <div className="browserControls">
                    <div className="controlDot" style={{backgroundColor: '#f87171'}}></div>
                    <div className="controlDot" style={{backgroundColor: '#fbbf24'}}></div>
                    <div className="controlDot" style={{backgroundColor: '#34d399'}}></div>
                </div>
                <div className="urlBar">
                    <div className="urlInput">
                        <span style={{marginRight: '0.5rem'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        </span>
                        hptts://www.agendasenai.br
                    </div>
                </div>
                <div className="browserControls">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                </div>
            </div>

            <div className="headerSection">
                <div className="logoSection">
                    <span className="logoFirjan">Firjan</span>
                    <span className="logoSenai">SENAI</span>
                </div>

                <div className="detailsHeader">
                    <h1 >Seleção de Horários</h1>
                    <p>
                        • Ambiente: <span className="highlight">{ENV_NAME}</span>
                        • Data Selecionada: <span className="highlight">{DATE_SELECTED}</span>
                    </p>
                    <p>
                        • Horários Selecionados: <span className="count">{selectedTimes.length}</span>
                    </p>
                </div>

                <div className="timeSlotContainer">
                    
                    <div className="dashedDivider" id="divider-tarde"></div>
                    <div className="dashedDivider" id="divider-noite"></div>

                    <div className="shiftColumn">
                        <h2>Manhã</h2>
                        {slotsByShift.Manhã.map(renderSlot)}
                    </div>

                    <div className="shiftColumn">
                        <h2>Tarde</h2>
                        {slotsByShift.Tarde.map(renderSlot)}
                    </div>

                    <div className="shiftColumn">
                        <h2>Noite</h2>
                        {slotsByShift.Noite.map(renderSlot)}
                    </div>
                </div>

                <div className="reserveButtonContainer">
                    <button 
                        className={`reserveButton ${selectedTimes.length === 0 ? 'reserveButtonDisabled' : ''}`}
                        onClick={handleReserveClick}
                        disabled={selectedTimes.length === 0}
                    >
                        Reservar Horários
                    </button>
                </div>

                {modalOpen && (
                    <div className="modal">
                        <div className="modalContentBox">
                            <h3 className="modalTitle">{modalTitle}</h3>
                            <p className="modalContent">{modalContent}</p>
                            <button onClick={closeModal} className="modalCloseButton">
                                Entendido
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};

export default SelecaoData;