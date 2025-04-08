import '@testing-library/jest-dom';
import {render,screen} from "@testing-library/react"
import ButtonCustom from '.';

describe('Test Button Custo,', () => {
    it('Deve renderizar o componente Button Custom', () => {
       render(<ButtonCustom/>)

        const button = screen.getByText("comentar")

        expect(button).toBeInTheDocument();
    })

})