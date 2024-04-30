import { useState } from 'react'


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = ( event) => {
        event.preventDefault()
        // Prevenir búsquedas menores o iguales a un caracter
        if(inputValue.trim().length <= 1) return

        // setCategories(categories => [inputValue, ...categories ])
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
            type="text"
            placeholder="Buscar GIFs"
            id="input-busqueda"
            value={inputValue}
            onChange={onInputChange} />
        </form>

    )
}
