import { useContext } from "react";
import { ModalClientCadastro } from "../../components/HomePagesForm/ModalCadastro";
import { ModalChargeCadastro } from "../../components/HomePagesForm/ChargeModal";
import { MainContext } from "../../context/Contexto";
import "./ClientPage.module.css";
import { ModalEditClient } from "../../components/HomePagesForm/EditModal";

export default function Charge() {
  const mainContext = useContext(MainContext);

  if (!mainContext) {
    return null;
  }

  const { isModalClientOpen, isModalChargeOpen, isEditModalClientOpen } =
    mainContext;

  return (
    <div className="background">
      {isModalClientOpen && <ModalClientCadastro />}
      {isModalChargeOpen && <ModalChargeCadastro />}
      {isEditModalClientOpen && <ModalEditClient />}
    </div>
  );
}
