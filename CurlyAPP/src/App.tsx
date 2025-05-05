import { useEffect, useState } from 'react'
import './App.css'
import Buscador from './components/Buscador'
import Cards from './components/Cards'
import Modal from './components/Modal'
import Select from './components/Select'
import SuggestionsList from './components/SuggestionsList'
import { getTiendaOptions, tiendaPlaceholder } from './logic/selectTienda'
import { getCategoriaOptions, categoriaPlaceholder } from './logic/selectCategoria'
import { filterProducts } from './logic/filterProducts'
import { Product } from './types/Product'

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [store, setStore] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [suggestions, setSuggestions] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(setProducts)
      .catch(console.error)
  }, [])

  useEffect(() => {
    if (search.length > 0) {
      const filtered = filterProducts(products, search, category, store)
      setSuggestions(filtered.slice(0, 5))
    } else {
      setSuggestions([])
    }
  }, [search, products, category, store])

  useEffect(() => {
    if (selectedProduct) setModalOpen(true)
    else setModalOpen(false)
  }, [selectedProduct])

  const filtered = filterProducts(products, '', category, store)

  return (
    <div className="App">
      <div className="form-container">
        <Select
          value={store}
          options={getTiendaOptions(products)}
          placeholder={tiendaPlaceholder}
          onChange={setStore}
        />
        <Select
          value={category}
          options={getCategoriaOptions(products)}
          placeholder={categoriaPlaceholder}
          onChange={setCategory}
        />
        <div style={{ position: "relative" }}>
          <Buscador value={search} onChange={setSearch} />
          {search.length > 0 && suggestions.length > 0 && (
            <SuggestionsList
              suggestions={suggestions}
              onSelect={product => {
                setSelectedProduct(product)
                setSearch('')
                setSuggestions([])
              }}
            />
          )}
        </div>
        <button className="button-buscar" onClick={() => setModalOpen(true)}>
          Buscar Producto
        </button>
      </div>
      <Modal open={modalOpen} onClose={() => { setModalOpen(false); setSelectedProduct(null); }}>
        {selectedProduct
          ? <Cards products={[selectedProduct]} />
          : <Cards products={filtered} />
        }
      </Modal>
    </div>
  )
}

export default App
