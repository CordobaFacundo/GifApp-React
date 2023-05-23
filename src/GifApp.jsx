import { React, useState } from 'react'
import { AddCatergory, GifGrid } from './components';

export const GifApp = () => {

    const [categories, setCategories] = useState(['Messi']);
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    const resetButton = () => {
        setCategories([]);
    }


    return (
        <>
            <h1>Gif App</h1>

            <AddCatergory onNewCategory={onAddCategory} />
            <button className='button-reset' onClick={resetButton}> Reset </button><hr/>
            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }

        </>
    )
}
