import React, { useState } from 'react'
import ItemCard from './ItemCard'
import Cart from './Cart'
import { products } from './assets/data'
import { useMemo } from 'react'

const filterProducts = (search, selectedCategory) => {
    return products.filter(product => {
        return product.title.toLowerCase().startsWith(search.toLowerCase())
    }).filter(product => product.category.includes(selectedCategory.toLowerCase()))
}

const Shop = ({
    search,
    selectedCategory,
    cartIsShown,
    selectedItems,
    handleAddItems,
    onRemove,
    onClear,
    onChangeCount
}) => {
    const filteredProducts = useMemo(() => filterProducts(search, selectedCategory), [search, selectedCategory])

    return (
        <div className='shop'>
            {cartIsShown &&
                <Cart
                    selectedItems={selectedItems}
                    onRemove={onRemove}
                    onClear={onClear}
                    onChangeCount={onChangeCount}
                />}

            {search.length > 0 && <h2 className='search-results'>Search results for {`"${search}"`}:</h2>}
            {
                (!cartIsShown || window.innerWidth > 600) &&
                <ul className='cards'>
                    {filteredProducts.map(product => {
                        const isAdded = selectedItems.map(selectedItems => selectedItems.id).includes(product.id)
                        return (
                            <li className='card' key={product.id}>
                                <ItemCard
                                    key={product.id}
                                    product={product}
                                    onClick={handleAddItems}
                                    isAdded={isAdded}
                                />
                            </li>
                        )
                    }
                    )}
                </ul>}
        </div>
    )
}

export default Shop
