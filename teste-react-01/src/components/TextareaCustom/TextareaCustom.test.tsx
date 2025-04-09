import { fireEvent, render, screen } from "@testing-library/react"
import TextareaCustom from "."

describe('Componente TextareaCustom', () => {
    it('Deve renderizar o componete com placeholder correto', () => {
        render(<TextareaCustom
            message="Hello World"
            setMessage={jest.fn()}
            title="digite aqui .."
        />)

        const Textarea = screen.getByPlaceholderText("digite aqui..")
        expect(Textarea).toBeInTheDocument()
        expect(Textarea).toHaveValue("Hello World")
    })
    it("Deve renderizar o componente e chama a funcão quando o valor for alterado", () => {
        const setMessage=jest.fn
        render(<TextareaCustom
            message="Hello World"
            setMessage={setMessage}
            title="digite aqui .."
        />)
        const Textarea = screen.getByPlaceholderText("digite aqui..")
        fireEvent.change(Textarea,{target:{value:'Novo valor'}})

        expect(setMessage).toHaveBeenCalled()
        expect(setMessage).toHaveBeenCalledTimes(1)
        expect(setMessage).toHaveBeenCalledWith("Novo valor")
    })

})
