import './App.css';
import React, {Component} from "react";
import Manufacturers from "./Manufacturers/manufacturers";
import EshopService from "../../repository/eshopRepository";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            manufacturers: []
        }
    }
    render() {
        return(
            <div>
                <Manufacturers manufacturers={this.state.manufacturers}/>
            </div>
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

    componentDidMount() {
        this.loadManufacturers();
    }
}

export default App;
