import { title } from "process";
import "./styles.css"


type TextareaProps = {
    message: string,
    setMessage: (Value: string) => void;
    title: string
}

export default function TextareaCustom({ message, setMessage, title }: TextareaProps) {
    return (
        <textarea
            placeholder={title}
            value={message}
            onChange={(e) => setMessage(e.target.value)}

        />
    )
}

// placeholder="Deixe um comentário"
// value={newComment}
// onChange={(e) => setNewComment(e.target.value)}