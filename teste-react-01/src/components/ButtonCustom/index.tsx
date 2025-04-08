import "./styles.css"

type ButtonCustomProps = {
    text?: string;
    handle: () => void;
}

export default function ButtonCustom({ text, handle }: ButtonCustomProps) {
    return (
        <button type="submit" className="ButtonGlobal" onClick={handle}>
              {text ? text : (
                'Login'
            )}
        </button>
    )
}