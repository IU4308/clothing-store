import { useCallback, useState } from 'react'

import Header from './Header'
import Shop from './Shop'
import Navbar from './Navbar'
import MainPage from './MainPage'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedItems, setSelectedItems] = useState([])

  const handleOpenCart = () => {
    setCartIsShown(!cartIsShown)
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleSelectedCategory = (category) => {
    setSelectedCategory(category)
  }

  // const handleAddItems = useCallback((newItem) => {
  //   setSelectedItems(
  //     [
  //       { ...newItem, count: 1 },
  //       ...selectedItems,
  //     ]
  //   )
  // }, [selectedItems])

  const handleAddItems = useCallback((newItem) => {
    setSelectedItems((prevItems) => [
      ...prevItems,
      { ...newItem, count: 1 }
    ])
  }, [])

  const handleChangeCount = useCallback((id, operation) => {
    setSelectedItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          if (operation === 'increment') {
            return {
              ...item,
              count: item.count + 1
            }
          } else if (operation === 'decrement') {
            return {
              ...item,
              count: item.count - 1
            }
          }
        } else {
          return item
        }
      }))
  }, [])


  const handleRemove = useCallback((id) => {
    setSelectedItems(prevItems =>
      prevItems.filter(selectedItem => selectedItem.id !== id))
  }, [])

  const handleClear = useCallback(() => {
    setSelectedItems([])
  }, [])

  const itemsAmount = selectedItems.reduce((acc, item) => acc + item.count, 0)

  return (
    <>
      <Header
        search={search}
        handleSearch={handleSearch}
        cartIsShown={cartIsShown}
        amount={itemsAmount}
        onClick={handleOpenCart}
      />
      <MainPage>
        <Navbar
          selectedCategory={selectedCategory}
          onSelect={handleSelectedCategory}
        />
        <Shop
          search={search}
          selectedCategory={selectedCategory}
          cartIsShown={cartIsShown}
          selectedItems={selectedItems}
          handleAddItems={handleAddItems}
          onChangeCount={handleChangeCount}
          onRemove={handleRemove}
          onClear={handleClear}
        />
      </MainPage>
    </>
  )
}

export default App
