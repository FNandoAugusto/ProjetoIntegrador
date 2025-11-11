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
      <div className="container">
  
<div className="row" style={{
  textAlign: 'center',
  color: '#ea5255',
  paddingTop: '87px', 
  paddingBottom: '87px', 
  fontSize: '64px' 
}}></div>
<div className="rva-container row">
  <div className="Mes">
    <h1>NOVEMBRO</h1>
 {/* Dia 1: Segunda-Feira */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Segunda-Feira</div>
    <div className="rva-week-day-date">01</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve1">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve2">17:45 - 20:00</button>
    </div>
  </div>

  {/* Dia 2: Terça-Feira */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Terça-Feira</div>
    <div className="rva-week-day-date">02</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="2" className="rva-btn-reserve3">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="2" className="rva-btn-reserve4">17:45 - 20:00</button>
    </div>
  </div>

  {/* Dia 3: Quarta-Feira */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Quarta-Feira</div>
    <div className="rva-week-day-date">03</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="3" className="rva-btn-reserve5">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="3" className="rva-btn-reserve6">17:45 - 20:00</button>
    </div>
  </div>

  {/* Dia 4: Quinta-Feira */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Quinta-Feira</div>
    <div className="rva-week-day-date">04</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="4" className="rva-btn-reserve7">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="4" className="rva-btn-reserve8">17:45 - 20:00</button>
    </div>
  </div>

  {/* Dia 5: Sexta-Feira */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Sexta-Feira</div>
    <div className="rva-week-day-date">05</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="5" className="rva-btn-reserve9">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="5" className="rva-btn-reserve10">17:45 - 20:00</button>
    </div>
  </div>

  {/* Dia 6: SÁBADO (Reinicia o ciclo da semana, mas continua a contagem dos dias) */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Sábado</div>
    <div className="rva-week-day-date">06</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="6" className="rva-btn-reserve11">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="6" className="rva-btn-reserve12">17:45 - 20:00</button>
    </div>
  </div>
  
  {/* Dia 7: DOMINGO (Reinicia o ciclo da semana, mas continua a contagem dos dias) */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Domingo</div>
    <div className="rva-week-day-date">07</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="7" className="rva-btn-reserve13">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="7" className="rva-btn-reserve14">17:45 - 20:00</button>
    </div>
  </div>

  {/* Dia 8: Segunda-Feira (Reinício do ciclo de dias úteis) */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Segunda-Feira</div>
    <div className="rva-week-day-date">08</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="8" className="rva-btn-reserve15">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="8" className="rva-btn-reserve16">17:45 - 20:00</button>
    </div>
  </div>

  {/* Dia 9: Terça-Feira */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Terça-Feira</div>
    <div className="rva-week-day-date">09</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="9" className="rva-btn-reserve17">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="9" className="rva-btn-reserve18">17:45 - 20:00</button>
    </div>
  </div>

  {/* Dia 10: Quarta-Feira */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Quarta-Feira</div>
    <div className="rva-week-day-date">10</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="10" className="rva-btn-reserve19">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="10" className="rva-btn-reserve20">17:45 - 20:00</button>
    </div>
  </div>

  {/* Dia 11: Quinta-Feira */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Quinta-Feira</div>
    <div className="rva-week-day-date">11</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="11" className="rva-btn-reserve21">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="11" className="rva-btn-reserve22">17:45 - 20:00</button>
    </div>
  </div>

  {/* Dia 12: Sexta-Feira */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Sexta-Feira</div>
    <div className="rva-week-day-date">12</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="12" className="rva-btn-reserve23">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="12" className="rva-btn-reserve24">17:45 - 20:00</button>
    </div>
  </div>

  {/* Dia 13: Sábado */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Sábado</div>
    <div className="rva-week-day-date">13</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="13" className="rva-btn-reserve25">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="13" className="rva-btn-reserve26">17:45 - 20:00</button>
    </div>
  </div>

  {/* Dia 14: Domingo */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Domingo</div>
    <div className="rva-week-day-date">14</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="14" className="rva-btn-reserve27">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="14" className="rva-btn-reserve28">17:45 - 20:00</button>
    </div>
  </div>

  {/* Dia 15: Segunda-Feira */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Segunda-Feira</div>
    <div className="rva-week-day-date">15</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="15" className="rva-btn-reserve29">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="15" className="rva-btn-reserve30">17:45 - 20:00</button>
    </div>
  </div>

  {/* Dia 16: Terça-Feira */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Terça-Feira</div>
    <div className="rva-week-day-date">16</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="16" className="rva-btn-reserve1">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="16" className="rva-btn-reserve2">17:45 - 20:00</button>
    </div>
  </div>

  {/* Dia 17: Quarta-Feira */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Quarta-Feira</div>
    <div className="rva-week-day-date">17</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="17" className="rva-btn-reserve3">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="17" className="rva-btn-reserve4">17:45 - 20:00</button>
    </div>
  </div>

  {/* Dia 18: Quinta-Feira */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Quinta-Feira</div>
    <div className="rva-week-day-date">18</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="18" className="rva-btn-reserve5">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="18" className="rva-btn-reserve6">17:45 - 20:00</button>
    </div>
  </div>

  {/* Dia 19: Sexta-Feira */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Sexta-Feira</div>
    <div className="rva-week-day-date">19</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="19" className="rva-btn-reserve7">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="19" className="rva-btn-reserve8">17:45 - 20:00</button>
    </div>
  </div>

  {/* Dia 20: Sábado */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Sábado</div>
    <div className="rva-week-day-date">20</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="20" className="rva-btn-reserve9">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="20" className="rva-btn-reserve10">17:45 - 20:00</button>
    </div>
  </div>

  {/* Dia 21: Domingo */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Domingo</div>
    <div className="rva-week-day-date">21</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="21" className="rva-btn-reserve11">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="21" className="rva-btn-reserve12">17:45 - 20:00</button>
    </div>
  </div>

  {/* Dia 22: Segunda-Feira */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Segunda-Feira</div>
    <div className="rva-week-day-date">22</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="22" className="rva-btn-reserve13">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="22" className="rva-btn-reserve14">17:45 - 20:00</button>
    </div>
  </div>

  {/* Dia 23: Terça-Feira */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Terça-Feira</div>
    <div className="rva-week-day-date">23</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="23" className="rva-btn-reserve15">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="23" className="rva-btn-reserve16">17:45 - 20:00</button>
    </div>
  </div>

  {/* Dia 24: Quarta-Feira */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Quarta-Feira</div>
    <div className="rva-week-day-date">24</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="24" className="rva-btn-reserve17">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="24" className="rva-btn-reserve18">17:45 - 20:00</button>
    </div>
  </div>

  {/* Dia 25: Quinta-Feira */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Quinta-Feira</div>
    <div className="rva-week-day-date">25</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="25" className="rva-btn-reserve19">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="25" className="rva-btn-reserve20">17:45 - 20:00</button>
    </div>
  </div>

  {/* Dia 26: Sexta-Feira */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Sexta-Feira</div>
    <div className="rva-week-day-date">26</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="26" className="rva-btn-reserve21">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="26" className="rva-btn-reserve22">17:45 - 20:00</button>
    </div>
  </div>

  {/* Dia 27: Sábado */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Sábado</div>
    <div className="rva-week-day-date">27</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="27" className="rva-btn-reserve23">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="27" className="rva-btn-reserve24">17:45 - 20:00</button>
    </div>
  </div>

  {/* Dia 28: Domingo */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Domingo</div>
    <div className="rva-week-day-date">28</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="28" className="rva-btn-reserve25">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="28" className="rva-btn-reserve26">17:45 - 20:00</button>
    </div>
  </div>

  {/* Dia 29: Segunda-Feira */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Segunda-Feira</div>
    <div className="rva-week-day-date">29</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="29" className="rva-btn-reserve27">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="29" className="rva-btn-reserve28">17:45 - 20:00</button>
    </div>
  </div>

  {/* Dia 30: Terça-Feira */}
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Terça-Feira</div>
    <div className="rva-week-day-date">30</div>
    <div className="rva-week-day-date-divider"></div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="30" className="rva-btn-reserve29">17:45 - 20:00</button>
    </div>
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="30" className="rva-btn-reserve30">17:45 - 20:00</button>
    </div>
  </div>
  </div>
</div>
</div>
        </>
    )
}
