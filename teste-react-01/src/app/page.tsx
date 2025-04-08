'use client'
import Person from "@/components/person";
import Link from "next/link";
import "./home.css";
import { useState } from "react";

export default function Home() {
  // let contador = 0;
  const [contador, setContador] = useState<number>(0)

  function incrementar() {
    setContador(contador + 1);
  }

  function resetar() {
    setContador(0);
  }

  return (

    <div className="container">
      <h1>Contador: {contador}</h1>
      <button onClick={() => incrementar()}>INCREMENTAR</button>
      <button onClick={() => resetar()}>RESETAR</button>
    </div>

  );
}

// const lista = [
//   {
//     name: "fellipe",
//     age: 25
//   },
//   {
//     name: "maria",
//     age: 30
//   },
//   {
//     name: "joao",
//     age: 20
//   }

// ]
// <div>
//   <h1>Hello World</h1>
//   <h2>teste</h2>

//   <Link href="/login">
//     <button>Home</button>
//   </Link>


//   <div className="container">
//     {lista.map((item) => (<Person nome={item.name} idade={item.age} key={item.name} />
//     ))}
//   </div>

// </div>