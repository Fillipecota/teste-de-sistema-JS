import { render, screen } from "@testing-library/react"
import Person from "."


describe('Componente Person', () => {
    it('Deve redenrizar o componente Person cin dados informados', () => {
        render(<Person nome="joe doe" idade={20} />);

        const name = screen.queryByText("joe doe",{exact:false})
        expect(name).toBeInTheDocument();

        const idade = screen.queryByText("20",{exact:false})
        expect(name).toBeInTheDocument();

    })

})







