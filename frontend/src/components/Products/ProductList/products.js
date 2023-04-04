import React from "react";
import ProductItem from "../ProductItem/productItem";
import {Link} from "react-router-dom";

const products = (props) => {
    return(
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"row"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Price</th>
                            <th scope={"col"}>Quantity</th>
                            <th scope={"col"}>Category</th>
                            <th scope={"col"}>Manufacturer</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.products.map((item)=> {
                            return(
                                <ProductItem item={item} onDelete={props.onDelete} onEdit={props.onEdit}/>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
                <div className="col mb-3">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <Link className={"btn btn-block btn-dark"} to={"/products/add"}>Add new product</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default products;