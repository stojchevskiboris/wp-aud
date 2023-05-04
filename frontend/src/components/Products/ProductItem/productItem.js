import React from "react";
import {Link} from "react-router-dom";

const productItem = (props) => {
    return (
        <tr>
            <td scope={"col"}>{props.item.name}</td>
            <td scope={"col"}>{props.item.price}</td>
            <td scope={"col"}>{props.item.quantity}</td>
            <td scope={"col"}>{props.item.category.name}</td>
            <td scope={"col"}>{props.item.manufacturer.name}</td>
            <td scope={"col"} className={"text-right"}>
                <Link title={"Edit"}
                      className={"btn btn-info m-1"}
                      onClick={() => props.onEdit(props.item.id)}
                      to={`/products/edit/${props.item.id}`}>
                    Edit
                </Link>
                <Link title={"Delete"}
                    className={"btn btn-danger m-1"}
                    onClick={() => props.onDelete(props.item.id)}>
                        Delete
                </Link>

            </td>
        </tr>
    )
}

export default productItem;