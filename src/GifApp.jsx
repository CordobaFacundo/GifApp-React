import { React, useState } from 'react'
import { AddCatergory } from './components/AddCatergory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {

    const [categories, setCategories] = useState(['Dragon ball']);
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>Gif App</h1>

            <AddCatergory onNewCategory={onAddCategory} />

            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }

        </>
    )
}
