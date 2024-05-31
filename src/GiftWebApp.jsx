import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftWebApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (value) => {

        if (categories.includes(value)) return;

        setCategories([value, ...categories]);
    }

    return (
        <>
            <h1>GiftWebApp</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />

            {
                categories.map( category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}

