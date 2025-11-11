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
  <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Terça-Feira</div>
    <div className="rva-week-day-date">02</div>
    <div className="rva-week-day-date-divider3"></div>
    
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve4">17:45 - 20:00</button>
    </div>
    
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve5">17:45 - 20:00</button>
    </div>
    
  </div>
   <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Terça-Feira</div>
    <div className="rva-week-day-date">03</div>
    <div className="rva-week-day-date-divider"></div>
    
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve6">17:45 - 20:00</button>
    </div>
    
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve7">17:45 - 20:00</button>
    </div>
    
  </div> 
   <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Terça-Feira</div>
    <div className="rva-week-day-date">03</div>
    <div className="rva-week-day-date-divider8"></div>
    
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve8">17:45 - 20:00</button>
    </div>
    
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve9">17:45 - 20:00</button>
    </div>
    
  </div>
   <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Terça-Feira</div>
    <div className="rva-week-day-date">05</div>
    <div className="rva-week-day-date-divider"></div>
    
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve10">17:45 - 20:00</button>
    </div>
    
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve11">17:45 - 20:00</button>
    </div>
    
  </div>
   <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Terça-Feira</div>
    <div className="rva-week-day-date">06</div>
    <div className="rva-week-day-date-divider"></div>
    
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve12">17:45 - 20:00</button>
    </div>
    
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve13">17:45 - 20:00</button>
    </div>
    
  </div>
   <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Terça-Feira</div>
    <div className="rva-week-day-date">07</div>
    <div className="rva-week-day-date-divider"></div>
    
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve14">17:45 - 20:00</button>
    </div>
    
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve15">17:45 - 20:00</button>
    </div>
    
  </div>
   <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Terça-Feira</div>
    <div className="rva-week-day-date">08</div>
    <div className="rva-week-day-date-divider"></div>
    
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve16">17:45 - 20:00</button>
    </div>
    
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve17">17:45 - 20:00</button>
    </div>
    
  </div>
   <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Terça-Feira</div>
    <div className="rva-week-day-date">09</div>
    <div className="rva-week-day-date-divider"></div>
    
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve18">17:45 - 20:00</button>
    </div>
    
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve19">17:45 - 20:00</button>
    </div>
    
  </div>
   <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Terça-Feira</div>
    <div className="rva-week-day-date">10</div>
    <div className="rva-week-day-date-divider"></div>
    
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve20">17:45 - 20:00</button>
    </div>
    
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve21">17:45 - 20:00</button>
    </div>
    
  </div>
   <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Terça-Feira</div>
    <div className="rva-week-day-date">11</div>
    <div className="rva-week-day-date-divider"></div>
    
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve22">17:45 - 20:00</button>
    </div>
    
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve23">17:45 - 20:00</button>
    </div>
    
  </div>
   <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Terça-Feira</div>
    <div className="rva-week-day-date">12</div>
    <div className="rva-week-day-date-divider"></div>
    
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve24">17:45 - 20:00</button>
    </div>
    
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve25">17:45 - 20:00</button>
    </div>
    
  </div>
   <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Terça-Feira</div>
    <div className="rva-week-day-date">13</div>
    <div className="rva-week-day-date-divider"></div>
    
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve26">17:45 - 20:00</button>
    </div>
    
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve27">17:45 - 20:00</button>
    </div>
    
  </div>
   <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Terça-Feira</div>
    <div className="rva-week-day-date">14</div>
    <div className="rva-week-day-date-divider"></div>
    
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve28">17:45 - 20:00</button>
    </div>
    
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve29">17:45 - 20:00</button>
    </div>
    
  </div>
   <div className="rva-week-row col-sm">
    <div className="rva-week-day-name">Terça-Feira</div>
    <div className="rva-week-day-date">15</div>
    <div className="rva-week-day-date-divider"></div>
    
    <div className="rva-week-day-info">
      <div className="rva-week-day-name">5 course</div>
      <div className="rva-week-day-price">1200,-/person</div>
      <button id="1" className="rva-btn-reserve30">17:45 - 20:00</button>
    </div>
    
      
  </div>
  </div>
</div>
</div>
        </>
    )
}
