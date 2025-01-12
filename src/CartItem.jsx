import React, { memo } from 'react'

const CartItem = ({
    item,
    onClick,
    onChangeCount,
}) => {
    const { title, price, image, alt, id, count } = { ...item }

    return (
        <>
            <div className='cart-item'>
                <img
                    className='item-image'
                    src={image}
                    alt={alt}
                />
                <div className="details-container">
                    <p className='card-title'>{title}</p>
                    <p className='card-price'>
                        ${(price * count).toFixed(2)}
                    </p>
                    <div className='number-container'>
                        <button
                            disabled={count === 1}
                            className={count === 1 ? 'change-number-btn-disabled' : 'change-number-btn'}
                            onClick={() => {
                                if (count > 1) {
                                    onChangeCount(id, 'decrement')
                                }
                            }}
                        >-</button>
                        {count}
                        <button
                            className='change-number-btn'
                            onClick={() => {
                                onChangeCount(id, 'increment')
                            }}
                        >+</button>
                    </div>
                    <button
                        className='remove-btn'
                        onClick={() => {
                            onClick(id)
                        }}
                    >Remove</button>
                </div>
            </div>
            <div className="line-break"></div>
        </>
    )
}

export default memo(CartItem)
