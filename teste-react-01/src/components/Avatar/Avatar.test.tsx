import { render, screen } from '@testing-library/react'
import Avatar from "."

describe('Componente Avatar', () => {
    it('Deve redenrizar o componente de avatar sem borda.', () => {
        render(<Avatar src="teste" />)

        const avatarElement = screen.getByTestId('avatar');

        expect(avatarElement).toBeInTheDocument();
        expect(avatarElement).toHaveClass("avatar-without-border")
    })

    it('Deve redenrizar o componente de avatar com borda.', () => {
        render(<Avatar src="teste" hasBorder={true} />)

        const avatarElement = screen.getByTestId('avatar');

        expect(avatarElement).toBeInTheDocument();
        expect(avatarElement).toHaveClass("avatar")
    })

})