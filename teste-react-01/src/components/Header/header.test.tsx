import { render, screen } from "@testing-library/react"
import Header from "."

describe('Componente Header', () => {
    it('Deve redenrizar o componente Header.', () => {
        render(<Header />)

        const element = screen.getByAltText('logo')
        expect(element).toBeInTheDocument();

        const elementH2 = screen.getByText('Feed')
        expect(elementH2).toBeInTheDocument();
    })

})
