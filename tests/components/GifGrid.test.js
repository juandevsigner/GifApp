import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"
jest.mock("../../src/hooks/useFetchGifs")

describe('GifGrid text', () =>{
    useFetchGifs.mockReturnValue({
    images: [],
    isLoading: true,
  });
    const category = 'One Punch'
    it('vs sanpshot', () =>{
       const {container} = render(<GifGrid category={category} />)
        expect(container).toMatchSnapshot()
    })
    it('should show loading text and text category first time', () =>{
         render(<GifGrid category={category} />)
         expect(screen.getByText('One Punch')).toBeTruthy()

    })
    it('should show images', () =>{
        const gifs = [{
            id: '1',
            title: 'One Punch',
            url: "www.imagen.com"
        },{
            id: '2',
            title: 'Goku',
            url: "www.imagen.com"
        }]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });
        render(<GifGrid category={category} />)
        expect(screen.getByText('Goku')).toBeTruthy()
        expect(screen.getAllByRole('img').length).toBe(2)
    })
})