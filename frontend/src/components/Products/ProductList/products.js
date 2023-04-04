import React from "react";
import ProductItem from "../ProductItem/productItem";

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
                                <ProductItem item={item}/>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default products;