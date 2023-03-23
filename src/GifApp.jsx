import {React, useState} from 'react'
import { AddCatergory } from './components/AddCatergory';

export const GifApp = () => {

    const [categories, setCategories] = useState(['Dragon ball', 'Death note']);
    const onAddCategory = (newCategory) => {
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>Gif App</h1>

            <AddCatergory onNewCategory = {onAddCategory} />
            
            <ol>
                {categories.map( (category) => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
        </>
    )
}
