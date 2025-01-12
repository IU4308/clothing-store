import React, { useState, memo } from 'react'
import CartItem from './CartItem'

const Cart = ({
    selectedItems,
    onRemove,
    onClear,
    onChangeCount
}) => {

    const totalAmount = selectedItems.reduce((acc, item) => acc + item.price * item.count, 0)
    return (
        <div className='cart'>
            <div className="cart-header">
                <h1 className='cart-title'>Your cart</h1>
                <button onClick={onClear} className='cart-clear'>Clear</button>
            </div>

            {selectedItems.length === 0 && <h2 className='empty'>Empty</h2>}

            <ul>
                {selectedItems.map(item => (
                    <li key={item.id}>
                        <CartItem
                            key={item.id}
                            item={item}
                            onClick={onRemove}
                            onChangeCount={onChangeCount}
                        />
                    </li>
                ))}

            </ul>
            <div className="cart-footer">
                <p className='total-amount'>Total Amount: <b>${totalAmount.toFixed(2)}</b></p>
                {selectedItems.length > 0 &&
                    <button className='card-button'>Proceed to Payment</button>
                }
            </div>
        </div>
    )
}

export default memo(Cart)
