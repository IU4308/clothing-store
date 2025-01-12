import React, { useState } from 'react'
import { categories } from './assets/data'

const Category = ({ category, selectedCategory, onSelect }) => {
    const isSelected = selectedCategory === category.title

    return (
        <div
            className={isSelected ? 'category selected' : 'category'}
            onClick={() => {
                isSelected ? onSelect('') : onSelect(category.title)
            }}
        >
            {category.title}
        </div>
    )
}

const Navbar = ({ selectedCategory, onSelect }) => {

    return (
        <nav className='navbar'>
            <ul className='categories'>
                {categories.map(category =>
                    <li key={category.id}>
                        <Category selectedCategory={selectedCategory} onSelect={onSelect} category={category} />
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar
