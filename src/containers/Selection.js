import React, { Component } from 'react';
import Departments from '../components/Departments';
import Locations from '../components/Locations';
import Products from '../components/Products';
import Balance from '../components/Balance';

class Selection extends Component {
    state = {
        selectedDepartment: -1,
        selectedProduct: -1,
        selectedLocation: -1
    };

    updateSelectedDepartment = (newSelectedDepartment) => {
        this.setState({selectedDepartment: newSelectedDepartment });
    }

    updateSelectedProduct = (newSelectedProduct) => {
        this.setState({selectedProduct: newSelectedProduct});
    }

    updateSelectedLocation = (newSelectedLocation) => {
        this.setState({selectedLocation: newSelectedLocation});
    }

    render() {
        let products = <p style={{textAlign: 'center'}}>No department selected!!</p>
        if (this.state.selectedDepartment > -1) {
            products = <Products selectedDepartment={this.state.selectedDepartment} updateProduct={this.updateSelectedProduct} />
        }

        return (
            <div>
                <Departments updateDepartment={this.updateSelectedDepartment} />
                {products}
                <Locations updateLocation={this.updateSelectedLocation} />
                <Balance selectedProduct={this.state.selectedProduct} selectedLocation={this.state.selectedLocation} />
            </div>
        );
    }
}

export default Selection;