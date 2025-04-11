import { fireEvent, render, screen } from "@testing-library/react"
import Comment from "."


const mockComment = {
    id: "1",
    like: 3,
    comment: "hello world",
    publishedAt: new Date(),
    author: {
        name: "Joe Doe",
        role: "Dev",
        avatarUrl: 'joedoe.png'
    }
}


describe("Comment component", () => {
    it("Deve renderizar um comentário", () => {
        render(
            <Comment
                comment={mockComment}
                handleDelete={jest.fn()}
                handleLike={jest.fn()}
            />
        )

        expect(screen.getByText("Joe Doe")).toBeInTheDocument();
        expect(screen.getByText("há menos de um minuto")).toBeInTheDocument();
        expect(screen.getByText("hello world")).toBeInTheDocument();
        expect(screen.getByText("curti")).toBeInTheDocument();
        expect(screen.getByText(3)).toBeInTheDocument();
    })

    it("Deve verificar se a função handleLike foi chamada com ID correto", () => {
        const handleDelete = jest.fn();
        render(<Comment comment={mockComment} handleDelete={jest.fn()} handleLike={handleDelete} />)

        const likeButton = screen.getByTestId("button-like");
        fireEvent.click(likeButton);

        expect(handleDelete).toHaveBeenCalled()
        expect(handleDelete).toHaveBeenCalledTimes(1);
        expect(handleDelete).toHaveBeenCalledWith(expect.any(Object), "1")
    })

    it("Deve verificar se a função handleDelete foi chamada com o ID correto", () => {
        const handleDelete = jest.fn();
        render(<Comment comment={mockComment} handleDelete={handleDelete} handleLike={jest.fn()} />)

        const deleteButton = screen.getByTestId("button-delete")
        fireEvent.click(deleteButton)

        expect(handleDelete).toHaveBeenCalled()
        expect(handleDelete).toHaveBeenCalledTimes(1)
        expect(handleDelete).toHaveBeenCalledWith(expect.any(Object), "1")

    })
})