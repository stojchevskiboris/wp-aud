import React from "react";
import {Link} from "react-router-dom";

const header = (props) => {
    return(
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/products">E-Shop Application</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarsExampleDefault"
                            aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapsed navbar-collapse justify-content-end" id="navbarsExampleDefault">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item m-auto">
                                <Link className="nav-link" to={"/products"}>Products</Link>                            </li>
                            <li className="nav-item m-auto">
                                <Link className="nav-link" to={"/categories"}>Categories</Link>
                            </li>
                            <li className="nav-item m-auto">
                                <Link className="nav-link" to={"/manufacturers"}>Manufacturers</Link>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right float-sm-end float-md-end float-end">
                            <li className="nav-item">
                                <form className="form-inline mt-2 mt-md-0 ml-3">
                                    <Link className="btn btn-outline-info my-2 my-sm-0" to={"/login"}>Login</Link>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default header;