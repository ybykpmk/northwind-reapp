import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import { Table } from "reactstrap";

class ProductList extends Component {
    componentDidMount() {
        this.props.actions.getProducts();
    }
    render() {
        return (
            <div>
                <h3><Badge color="warning">Products</Badge><Badge color="success">{this.props.currentCategory.categoryName}</Badge></h3>
                <Table striped>
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Product Name
                            </th>
                            <th>
                                Unit Price
                            </th>
                            <th>
                                Quantity Per Unit
                            </th>
                            <th>
                                Units In Stock
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(product => (
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.productName}</td>
                                <td>{product.unitPrice}</td>
                                <td>@{product.quantityPerUnit}</td>
                                <td>{product.unitInStock}</td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(productActions.getProducts, dispatch)
        }
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        products: state.productListReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);