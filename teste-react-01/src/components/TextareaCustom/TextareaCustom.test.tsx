import { fireEvent, render, screen } from "@testing-library/react"
import TextareaCustom from "."
describe("TextareaCustom componente", () => {
    it("Deve renderizar o componente com placeholder correto", () => {
        const setMessage = jest.fn();
        render(
            <TextareaCustom
                message="Hello World"
                setMessage={setMessage}
                title="Digite aqui..."
            />

        )
        const textarea = screen.getByPlaceholderText('Digite aqui...');
        expect(textarea).toBeInTheDocument();
        expect(textarea).toHaveValue("Hello World")

        fireEvent.change(textarea, { target: { value: 'Novo valor' } })

        expect(setMessage).toHaveBeenCalled();
        expect(setMessage).toHaveBeenCalledTimes(1);
        expect(setMessage).toHaveBeenCalledWith("Novo valor");
    })
})