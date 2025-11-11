import { useContext, useEffect, useState } from "react"
import { MainContext } from "../../context/Contexto"
import { IClient } from "./ModalCadastro"
import { api } from "../../api"
import useAuth from "../../Hooks/useAuth"
import { useNavigate } from "react-router-dom"
import "./ClientPageForm.module.scss"
import React from 'react';
export interface ICurrentUser {
    email: string
    nome: string
    id: string
}


export const ClientPage = () => {

    const navigate = useNavigate()
    const mainContext = useContext(MainContext)

    const [clientList, setClientList] = useState<IClient[]>([])

    if (!mainContext) {
        return null
    }

    const { handleGetToken } = useAuth()

    useEffect(() => {
        (async () => {
            try {
                const response = await api.get(`/consultClient`, { headers: { "Authorization": `Bearer ${handleGetToken()}` } })

                setClientList(response.data)

            } catch (error) {
                console.log(error)
            }
        })()
    }, [])
    const getNome: ICurrentUser = JSON.parse(localStorage.getItem("current-user")!)

    const logout = () => {
        localStorage.removeItem("token")
        window.location.replace("/login")

    }
   return (
      <>
      <main className="calendar-container">
        
        <h2 className="current-view-title">Disponibilidade Semanal do Lab. TI 01</h2>

        <div className="navigation-bar">
            <button>&lt; Anterior</button>
            <span>Semana de 10 a 14 de Novembro</span>
            <button>Próxima &gt;</button>
        </div>

        <table className="schedule-table">
            <thead>
                <tr>
                    <th>Hora</th>
                    <th>Seg - 10/11</th>
                    <th>Ter - 11/11</th>
                    <th>Qua - 12/11</th>
                    <th>Qui - 13/11</th>
                    <th>Sex - 14/11</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>08:00 - 09:00</td>
                    <td className="status-free">Livre</td>
                    <td className="status-reserved">Reunião (Equipe A)</td>
                    <td className="status-free">Livre</td>
                    <td className="status-reserved">Aula X</td>
                    <td className="status-free">Livre</td>
                </tr>
                <tr>
                    <td>09:00 - 10:00</td>
                    <td className="status-reserved">Treinamento</td>
                    <td className="status-reserved">Reunião (Equipe A)</td>
                    <td className="status-free">Livre</td>
                    <td className="status-reserved">Aula X</td>
                    <td className="status-reserved">Reunião (Equipe B)</td>
                </tr>
                <tr>
                    <td>10:00 - 11:00</td>
                    <td className="status-reserved">Treinamento</td>
                    <td className="status-free">Livre</td>
                    <td className="status-blocked">Manutenção</td>
                    <td className="status-free">Livre</td>
                    <td className="status-reserved">Reunião (Equipe B)</td>
                </tr>
                 <tr>
                    <td>11:00 - 12:00</td>
                    <td className="status-free">Livre</td>
                    <td className="status-free">Livre</td>
                    <td className="status-blocked">Manutenção</td>
                    <td className="status-reserved">Projeto Final</td>
                    <td className="status-free">Livre</td>
                </tr>
                </tbody>
        </table>

        <div className="legend">
            <h4>Legenda:</h4>
            <span className="status-legend status-free">Disponível</span>
            <span className="status-legend status-reserved">Reservado</span>
            <span className="status-legend status-blocked">Bloqueado</span>
        </div>
      
    </main>
    <main className="calendar-container">
        
        <h2 className="current-view-title">Disponibilidade Semanal do **Lab. Automação** (Capacidade 20)</h2>

        <div className="navigation-bar">
            <button>&lt; Anterior</button>
            <span>Semana de 10 a 14 de Novembro</span>
            <button>Próxima &gt;</button>
        </div>

        <table className="schedule-table">
            <thead>
                <tr>
                    <th>Hora</th>
                    <th>Seg - 10/11</th>
                    <th>Ter - 11/11</th>
                    <th>Qua - 12/11</th>
                    <th>Qui - 13/11</th>
                    <th>Sex - 14/11</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>08:00 - 09:00</td>
                    <td className="status-reserved">Teste de Hardware</td>
                    <td className="status-free">Livre</td>
                    <td className="status-reserved">Aula de Robótica</td>
                    <td className="status-free">Livre</td>
                    <td className="status-reserved">Reunião Prof.</td>
                </tr>
                <tr>
                    <td>09:00 - 10:00</td>
                    <td className="status-reserved">Teste de Hardware</td>
                    <td className="status-reserved">Projeto de IoT</td>
                    <td className="status-reserved">Aula de Robótica</td>
                    <td className="status-free">Livre</td>
                    <td className="status-reserved">Reunião Prof.</td>
                </tr>
                <tr>
                    <td>10:00 - 11:00</td>
                    <td className="status-free">Livre</td>
                    <td className="status-reserved">Projeto de IoT</td>
                    <td className="status-free">Livre</td>
                    <td className="status-blocked">Calibração</td>
                    <td className="status-free">Livre</td>
                </tr>
                 <tr>
                    <td>11:00 - 12:00</td>
                    <td className="status-free">Livre</td>
                    <td className="status-free">Livre</td>
                    <td className="status-free">Livre</td>
                    <td className="status-blocked">Calibração</td>
                    <td className="status-reserved">Demonstração</td>
                </tr>
            </tbody>
        </table>

        <div className="legend">
            <h4>Legenda:</h4>
            <span className="status-legend status-free">Disponível</span>
            <span className="status-legend status-reserved">Reservado</span>
            <span className="status-legend status-blocked">Bloqueado</span>
        </div>
    </main>
    <main className="calendar-container">
        
        <h2 className="current-view-title">Disponibilidade Semanal do Lab. Logistica (Capacidade 20)</h2>

        <div className="navigation-bar">
            <button>&lt; Anterior</button>
            <span>Semana de 10 a 14 de Novembro</span>
            <button>Próxima &gt;</button>
        </div>

        <table className="schedule-table">
            <thead>
                <tr>
                    <th>Hora</th>
                    <th>Seg - 10/11</th>
                    <th>Ter - 11/11</th>
                    <th>Qua - 12/11</th>
                    <th>Qui - 13/11</th>
                    <th>Sex - 14/11</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>08:00 - 09:00</td>
                    <td className="status-reserved">Teste de Hardware</td>
                    <td className="status-free">Livre</td>
                    <td className="status-reserved">Aula de Robótica</td>
                    <td className="status-free">Livre</td>
                    <td className="status-reserved">Reunião Prof.</td>
                </tr>
                <tr>
                    <td>09:00 - 10:00</td>
                    <td className="status-reserved">Teste de Hardware</td>
                    <td className="status-reserved">Projeto de IoT</td>
                    <td className="status-reserved">Aula de Robótica</td>
                    <td className="status-free">Livre</td>
                    <td className="status-reserved">Reunião Prof.</td>
                </tr>
                <tr>
                    <td>10:00 - 11:00</td>
                    <td className="status-free">Livre</td>
                    <td className="status-reserved">Projeto de IoT</td>
                    <td className="status-free">Livre</td>
                    <td className="status-blocked">Calibração</td>
                    <td className="status-free">Livre</td>
                </tr>
                 <tr>
                    <td>11:00 - 12:00</td>
                    <td className="status-free">Livre</td>
                    <td className="status-free">Livre</td>
                    <td className="status-free">Livre</td>
                    <td className="status-blocked">Calibração</td>
                    <td className="status-reserved">Demonstração</td>
                </tr>
            </tbody>
        </table>

        <div className="legend">
            <h4>Legenda:</h4>
            <span className="status-legend status-free">Disponível</span>
            <span className="status-legend status-reserved">Reservado</span>
            <span className="status-legend status-blocked">Bloqueado</span>
        </div>
    </main>
        </>
    )
}
