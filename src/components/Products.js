import React, { Component } from 'react';
import axios from '../axios-orchestration';
import Product from './Product/Product';
import './Products.css';

class Products extends Component {
    state = {
        products: [],
        selectedProduct: 0,
        selectedDepartment: -1
    };

    componentDidMount() {
        this.fetchProducts();
    }

    componentDidUpdate() {
        this.fetchProducts();
    }

    fetchProducts() {
        let selectedDepartment = this.props.selectedDepartment;
        if (this.state.selectedDepartment === selectedDepartment) {
            return;
        }
        this.setState({selectedDepartment: selectedDepartment});

        axios.get('/products?departmentId=' + selectedDepartment)
            .then(res => {
                const fetchedProducts = [];
                let selectedSet = false;
                for (let key in res.data) {
                    if (res.data[key].id === this.state.selected) {
                        selectedSet = true;
                    }
                    fetchedProducts.push({
                        ...res.data[key]
                    });
                }
                this.setState({products: fetchedProducts});
                if (!selectedSet) {
                    let selected = fetchedProducts[0].id;
                    this.setState({selectedProduct: selected});
                }
                this.props.updateProduct(this.state.selectedProduct);
            })
            .catch(err => {
                console.log(err)
            });

    }

    productSelectedHander = (id) => {
        this.setState({selectedProduct: id});
        this.props.updateProduct(id);
    }

    render () {
        let products = <p style={{textAlign: 'center'}}>Something went wrong!!</p>;
        products = this.state.products.map(product => {
            return (
                <Product 
                    key={product.id} 
                    name={product.name}
                    selected={this.state.selectedProduct === product.id}
                    clicked={() => this.productSelectedHander(product.id)} />
            );
        });
        return (
            <div>
                <h2 style ={{marginLeft: '20px'}}>Products</h2>
                <section className="Products">
                    {products}
                </section>
            </div>
        );
    }

}

export default Products;
