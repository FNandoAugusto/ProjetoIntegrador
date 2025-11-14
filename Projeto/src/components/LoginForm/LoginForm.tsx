import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import "./LoginForm.module.css"
import { api } from "../../api"
import useAuth from "../../Hooks/useAuth"
import useUser from "../../Hooks/useUser"

type input = {
    email: string
    senha: string
}

export const Login = () => {

    const { register, reset, handleSubmit } = useForm<input>()

    const navigate = useNavigate()
    const { handleAddToken } = useAuth()
    const { handleInsertUser } = useUser()

    const onSubmit = async (userData: input) => {

        try {

            const { data } = await api.post("/login", { ...userData })
            const { token, user } = data
            handleAddToken(token)
            handleInsertUser({ id: user.id, nome: user.nome, email: user.email })
            navigate("/clients")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="ContainerRegister">
           
            <div className="main">
                <div className="FormC">
                <img className="logo" src="../../../public/AgendaSenai.png" alt="" />
                    <h2>Adicione seus dados</h2>
                    <div className="form">
                        <form className='for.container' onSubmit={handleSubmit(onSubmit)}>
                            <div className="inputs">
                                <div>
                                    <input {...register("email", { required: true })} className="input1" placeholder="E-mail" />
                                </div>
                                <div>
                                    <input {...register("senha", { required: true })} className="input2" placeholder="Senha" />
                                </div>
                            </div>
                            <button className="submitbutton"type="submit" onClick={() =>{navigate("/ambientes")}}>Continuar</button>




                        </form>

                    </div>
                    <h3>ainda não posui uma conta? <a className="linkRlogin"href="/">cadastre-se</a></h3>
                </div>

            </div>
        </div>
    )

}