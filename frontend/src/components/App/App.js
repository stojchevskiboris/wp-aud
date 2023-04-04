import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Manufacturers from "../Manufacturers/manufacturers";
import Categories from "../Categories/categories";
import Products from "../Products/ProductList/products";
import EshopService from "../../repository/eshopRepository";
import Header from "../Header/header";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            manufacturers: [],
            products: [],
            categories: []
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
                            <Route path={"/products"} element={<Products products={this.state.products}/>}/>
                        </Routes>

                    </div>
                </main>
            </Router>


        )
    }

    loadManufacturers = () => {
        EshopService.fetchManufacturers()
            .then((data) => {
                this.setState({
                    manufacturers: data.data
                })
            });
    }

    loadProducts = () => {
        EshopService.fetchProducts()
            .then((data) => {
                this.setState({
                    products: data.data
                })
            });
    }

    loadCategories = () => {
        EshopService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            });
    }

    componentDidMount() {
        this.loadManufacturers();
        this.loadProducts();
        this.loadCategories();
    }
}

export default App;
