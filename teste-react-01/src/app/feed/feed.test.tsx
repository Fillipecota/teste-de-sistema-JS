import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import Feed from "./page";
jest.mock('axios');
const mockAxios = axios as jest.Mocked<typeof axios>;
const mockposts = [
    {
        id: '1',
        content: 'post 1',
        publishedAt: new Date('2024-04-10').toISOString(),
        author: {
            nome: 'Joe Doe',
            role: 'Dev',
            avatarUrl: 'url-fake'
        },
        comments: []
    },
    {
        id: '2',
        content: 'post 2',
        publishedAt: new Date('2024-04-10').toISOString(),
        author: {
            nome: 'Joe Doe',
            role: 'Dev',
            avatarUrl: 'url-fake'
        },
        comments: []
    }

]

describe("pagina do Feed", () => {
    beforeEach(() => {
        mockAxios.get.mockResolvedValue({ data: mockposts });
        mockAxios.post.mockResolvedValue({});
    })
    it("Deve renderizar a página do Feeh", async () => {
        render(<Feed />)
        expect(screen.getByText('Carregando...')).toBeInTheDocument
        await waitFor(() => {
            expect(screen.queryByText('Carregando...')).not.toBeInTheDocument()
        })
        const post = screen.getAllByTestId("post-test")
        expect(post.length).toBe(2);
        expect(post[0]).toHaveTextContent('post 1')
        expect(post[1]).toHaveTextContent('post 2')

        const textarea = screen.getByPlaceholderText('O que voce esta pensando?')
        expect(textarea).toBeInTheDocument();
        fireEvent.change(textarea, { target: { value: 'meu novo post' } })
        expect(textarea).toHaveValue('meu novo post')

        const button = screen.getByText('publicar')
        expect(button).toBeInTheDocument();
        fireEvent.click(button)

        await waitFor(() => {
            expect(mockAxios.post).toHaveBeenCalledWith("http://localhost:3001/posts",
                expect.objectContaining({
                    content: 'meu novo post'
                }))
        })
        // expect(textarea).toHaveValue("")
    })
})