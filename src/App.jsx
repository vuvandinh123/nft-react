import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './page/Frontend/Home/Home'
import ProductDetail from './page/Frontend/ProductDetail'
import Login from './page/Frontend/Login'
import Cart from './page/Frontend/Cart'
import Categorys from './page/Frontend/Categorys/Categorys'
import Products from './page/Frontend/Products'
import LayoutSite from './layout/LayoutSite'
import Dashboard from './page/Backend/Dashboard'
import ProductsAdmin from './page/Backend/Products'
import CategorysAdmin from './page/Backend/Categorys'
import LayoutAdmin from './layout/LayoutAdmin'
import ShowProduct from './page/Backend/Products/Show'
import CreateProduct from './page/Backend/Products/Create'
import CreateCategory from './page/Backend/Categorys/Create'
import Singup from './page/Frontend/Singup'
import UpdateProduct from './page/Backend/Products/UpdateProduct'
import UpdateCategory from './page/Backend/Categorys/UpdateCategory'
import Order from './page/Frontend/Order/Order'
const App = () => {
  return (
      <Routes>
         <Route path="/" element={<LayoutSite />}>
            <Route index element={<Home />} />
            <Route path="/Product/:id" element={<ProductDetail />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/singup" element={<Singup />} />
            <Route path="/category" element={<Categorys />} />
            <Route path="/category/:id" element={<Categorys />} />
            <Route path="/products" element={<Products />} />
            <Route path="/order" element={<Order />} />
            {/* <Route path="/products/page/:page" element={<Products />} /> */}
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
            <Route index element={<Dashboard />} />
            <Route path="product" element={<ProductsAdmin />} />
            <Route path="product/page/:pageNum" element={<ProductsAdmin />} />
            <Route path="product/:id" element={<ShowProduct />} />
            <Route path="product/create" element={<CreateProduct />} />
            <Route path="product/edit/:id" element={<UpdateProduct />} />

            <Route path="category" element={<CategorysAdmin />} />
            <Route path="category/page/:pageNum" element={<CategorysAdmin />} />
            <Route path="category/create" element={<CreateCategory />} />
            <Route path="category/edit/:id" element={<UpdateCategory />} />

        </Route>
      </Routes>
  )
}

export default App

