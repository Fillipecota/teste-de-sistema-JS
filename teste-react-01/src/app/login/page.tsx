'use client'
import "./styles.css";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function login() {
    const [email, setEmail] = useState<string>('')
    const [Password, setPassword] = useState<string>('')
    const router = useRouter()
    const disabledButton = (!email || !(Password.length >= 8))

    async function handleSubmit() {


        // // EXEMPLO REPQUESIÇÃO
        // const response = await fetch("http://meu-dominio/login", {
        //     method: "post",
        //     body: {
        //         email,
        //         Password
        //     } as any,
        //     headers: {

        //     }
        // })
        router.replace("/")
    }

    return (
        <div className="container">
            <div className="form">
                <h2>login</h2>
                <input type="text"
                    placeholder="E-mail"
                    className="input"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)} />

                <input type="Password"
                    placeholder="Password"
                    className="input"
                    value={Password}
                    onChange={(event) => setPassword(event.target.value)} />

                <button className="button" onClick={handleSubmit}
                    disabled={disabledButton}
                >
                    entrar
                </button>
            </div>
        </div>
    )
}