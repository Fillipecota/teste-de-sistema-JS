import { render, screen } from "@testing-library/react"
import Avatar from "."

describe('Component Avatar', () => {
    it('deve redenrizar o componente de avatar sem borda.', () => {
        render(<Avatar src="teste" />)

        const avatarElement = screen.getAllByTestId('avatar')

        expect(avatarElement).toBeInTheDocument()
        expect(avatarElement).toHaveClass('avatar-without-border')
    })

    it('deve redenrizar o componente de avatar sem borda.', () => {
        render(<Avatar src="teste" hasBorder={true} />)

        const avatarElement = screen.getAllByTestId('avatar')

        expect(avatarElement).toBeInTheDocument()
        expect(avatarElement).toHaveClass('avatar')
    })
})