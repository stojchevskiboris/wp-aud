import React from "react";

const productItem = (props) => {
    return (
        <tr>
            <td scope={"col"}>{props.item.name}</td>
            <td scope={"col"}>{props.item.price}</td>
            <td scope={"col"}>{props.item.quantity}</td>
            <td scope={"col"}>{props.item.category.name}</td>
            <td scope={"col"}>{props.item.manufacturer.name}</td>
        </tr>
    )
}

export default productItem;