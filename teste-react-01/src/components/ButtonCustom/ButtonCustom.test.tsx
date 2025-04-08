import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react'
import ButtonCustom from './index';

describe('Test Button Custom', () => {
    it('Deve renderizar o componente Button Custom', () => {
        render(<ButtonCustom text='Entrar' handle={() => {}}/>)

        const button = screen.getByText("Entrar")

        expect(button).toBeInTheDocument();
    })

    it('Deve renderizar o component sem texto', () => {
        render(<ButtonCustom handle={() => {}}/>)

        const button = screen.getByText("Login");

        expect(button).toBeInTheDocument()
    })

    it('Deve renderizar o componente e testar click no botão', () => {
        const handleMock = jest.fn();
        render(<ButtonCustom text='Entrar' handle={handleMock} />)

        const button = screen.getByText('Entrar');
        expect(button).toBeInTheDocument();

        fireEvent.click(button)

        expect(handleMock).toHaveBeenCalled();
        expect(handleMock).toHaveBeenCalledTimes(1);
    })

})