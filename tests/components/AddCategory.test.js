import { screen, render, fireEvent } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('AddCategory test', () => {
    it('Snapshot vs', () =>{
        const {container} = render(<AddCategory onNewCategory={() => {}} />)
        expect(container).toMatchSnapshot()
    })
    it('should change input value', () =>{
        render(<AddCategory onNewCategory={() => {}} />)
        const input = screen.getByRole('textbox')
        fireEvent.input(input, {target: {value:'Saitama'}})
        expect(input.value).toBe('Saitama')
    })
    it('should call onNewCategory if input has value', ()=>{
        const inputValue = 'Saitama'
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={onNewCategory} />)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input(input, {target: {value:inputValue}})
        fireEvent.submit(form)
        expect(input.value).toBe('')
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    })
    it('should not call onNewCategory if input has no value', ()=>{
        const inputValue = ''
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={onNewCategory} />)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input(input, {target: {value:inputValue}})
        fireEvent.submit(form)
        expect(input.value).toBe('')
        expect(onNewCategory).not.toHaveBeenCalled()
    })
})