import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onChange = ({ target }) => {
        setInputValue(target?.value ?? '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            onNewCategory(inputValue);
            setInputValue('');
        }
    }

    return (
        <form
            onSubmit={onSubmit}>
            <input type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onChange}
            />
        </form>

    )
}
