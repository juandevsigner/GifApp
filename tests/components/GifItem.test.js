import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"


describe('Test GitItem', () =>{
    const title ='Saitama'
    const url = 'https://saitama.com/'

    it('Snapshot vs Component', () =>{
        const {container} = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot()
    })

     it('should have class "card', () =>{
       const {container} = render(<GifItem title={title} url={url} />)
       expect(container.querySelector('.card').className).toBeTruthy()

    })

    it('Should be image with correct url', () =>{
        render(<GifItem title={title} url={url} />)
        expect(screen.getByRole('img').src).toBe(url)
        expect(screen.getByRole('img').alt).toBe(title)
    })

    it('should show correct text', () =>{
        render(<GifItem title={title} url={url} />)
        expect(screen.getByText(title).innerHTML).toBe(title)
    })


})