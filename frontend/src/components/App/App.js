import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Manufacturers from "../Manufacturers/manufacturers";
import Categories from "../Categories/categories";
import Products from "../Products/ProductList/products";
import Header from "../Header/header";
import ProductAdd from "../Products/ProductAdd/productAdd";
import ProductEdit from "../Products/ProductEdit/productEdit";
import Login from "../Login/login";
import EShopService from "../../repository/eshopRepository";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            manufacturers: [],
            products: [],
            categories: [],
            selectedProduct: {}
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className="container">

                        <Routes>
                            <Route path={"/manufacturers"} element={<Manufacturers manufacturers={this.state.manufacturers}/>}/>
                            <Route path={"/categories"} element={<Categories categories={this.state.categories}/>}/>
                            <Route path={"/products/add"} element={<ProductAdd categories={this.state.categories} manufacturers={this.state.manufacturers} onAddProduct={this.addProduct}/>}/>
                            <Route path={"/products/edit/:id"} element={<ProductEdit categories={this.state.categories} manufacturers={this.state.manufacturers} onEditProduct={this.editProduct} product={this.state.selectedProduct}/>}/>
                            <Route path={"/products"} element={<Products products={this.state.products} onDelete={this.deleteProduct} onEdit={this.getProduct}/>}/>
                            <Route path={"/login"} element={<Login onLogin={this.fetchData}/>}/>
                        </Routes>

                    </div>
                </main>
            </Router>


        )
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        this.loadManufacturers();
        this.loadCategories();
        this.loadProducts();
    }

    loadManufacturers = () => {
        EShopService.fetchManufacturers()
            .then((data) => {
                this.setState({
                    manufacturers: data.data
                })
            });
    }

    loadProducts = () => {
        EShopService.fetchProducts()
            .then((data) => {
                this.setState({
                    products: data.data
                })
            });
    }

    loadCategories = () => {
        EShopService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            });
    }

    deleteProduct = (id) => {
        EShopService.deleteProduct(id)
            .then(() => {
                this.loadProducts();
            });
    }

    addProduct = (name, price, quantity, category, manufacturer) => {
        EShopService.addProduct(name, price, quantity, category, manufacturer)
            .then(() => {
                this.loadProducts();
            });
    }

    getProduct = (id) => {
        EShopService.getProduct(id)
            .then((data) => {
                this.setState({
                    selectedProduct: data.data
                })
            })
    }

    editProduct = (id, name, price, quantity, category, manufacturer) => {
        EShopService.editProduct(id, name, price, quantity, category, manufacturer)
            .then(() => {
                this.loadProducts();
            });
    }
}

export default App;
