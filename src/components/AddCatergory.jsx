
import { React, useState } from 'react'
import PropTypes from 'prop-types'

export const AddCatergory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if (newInputValue.length <= 1) return;
        onNewCategory(newInputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit} aria-label='form'>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

AddCatergory.propType = {
    onNewCategory: PropTypes.func.isRequired,
}