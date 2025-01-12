import React, { useState, memo } from 'react'

const ItemCard = memo(function ItemCard({
    product,
    onClick,
    isAdded
}) {
    const { title, image, alt, price, id } = { ...product }

    // console.log(id, title)
    return (
        <>
            <img
                className='card-image'
                src={image}
                alt={alt}
            />
            <p className='card-title'>{title.slice(0, 20)}</p>
            <p className='card-price'>Price: ${price.toFixed(2)}</p>
            <button
                disabled={isAdded}
                onClick={() => {
                    onClick(product)
                }}
                className={isAdded ? 'card-button-added' : 'card-button'}
            >
                {isAdded ? 'Added' : 'Add to shopping cart'}
            </button>
        </>
    )
})


export default ItemCard
