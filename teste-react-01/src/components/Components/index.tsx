import "./styles.css";
import { FaRegThumbsUp } from "react-icons/fa";
import Avatar from "../Avatar";
import { MdOutlineDeleteForever } from "react-icons/md";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";


type Author = {
    name: string;
    role: string;
    avatarUrl: string;
}

type CommentProps = {
    handleLike: (event: any, id: string) => void;
    handleDelete: (event: any, id: string) => void;
    comment: {
        id: string;
        like: number;
        author: Author;
        comment: string;
        publishedAt: Date
    }
}


export default function Comment({ comment, handleDelete, handleLike }: CommentProps) {
    const dateFormat = formatDistanceToNow(comment.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
    return (
        <div className="comment-">
            <Avatar src={comment.author.avatarUrl} hasBorder={false} />
            <div className="comment-box">
                <div className="comment-content">
                    <header>
                        <div className="author-and-time">
                            <strong> {comment.author.name}</strong>
                            <time>{dateFormat}</time>
                        </div>

                        <button title="Deletar Comentário" onClick={(event) => handleDelete(event, comment.id)}>
                            <MdOutlineDeleteForever size={24} />
                        </button>

                    </header>
                    <p> {comment.comment}</p>
                </div>
                <footer>
                    <button onClick={(event) => handleLike(event, comment.id)}>
                        <FaRegThumbsUp />
                        curti <span>{comment.like}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}