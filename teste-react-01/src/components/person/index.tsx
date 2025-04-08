import "./styles.css";

type personProps = {
    nome: string;
    idade: number;
}

export default function Person({ nome, idade }: personProps) {
    return (
        <div className="item">
            <strong>Nome: {nome}</strong>
            <span>idade: {idade}</span>
        </div>
    )
}