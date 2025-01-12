import React from 'react'
import Cart from './Cart'
import { IoCartOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

const Header = ({
    search,
    handleSearch,
    onClick,
    amount,
    cartIsShown
}) => {
    return (
        <div className={cartIsShown ? 'header sm-header' : 'header'}>
            <h1 className="head-title">Clothing store</h1>
            <div className="input-container">
                <input
                    value={search}
                    onChange={(e) => {
                        handleSearch(e)
                    }}
                    className={cartIsShown ? 'head-input sm-hidden' : "head-input"}
                    placeholder='Search for products'
                />
                <FaSearch className={cartIsShown ? 'search-icon sm-hidden' : 'search-icon'} />
            </div>
            <div className='cart-container'>
                <div className='items-number'>{amount}</div>
                <IoCartOutline
                    className='cart-icon'
                    onClick={onClick}
                />
            </div>
        </div>
    )
}

export default Header
