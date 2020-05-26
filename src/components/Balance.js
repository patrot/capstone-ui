import React, { Component } from "react";
import axios from '../axios-orchestration';

class Balance extends Component {
    state = {
        balance: 0,
        selectedProduct: -1,
        selectedLocation: -1
    };

    componentDidMount() {
        this.fetchBalance();
    }

    componentDidUpdate() {
        this.fetchBalance();
    }

    fetchBalance() {
        let selectedProduct = this.props.selectedProduct;
        let selectedLocation = this.props.selectedLocation;
        if (this.state.selectedProduct === selectedProduct && this.state.selectedLocation === selectedLocation) {
            return;
        }
        this.setState({selectedProduct: selectedProduct});
        this.setState({selectedLocation: selectedLocation});

        axios.get('/balance?productId=' + selectedProduct + '&locationId=' + selectedLocation)
            .then(res => {
                const fetchedBalance = res.data.quantity;

                this.setState({balance: fetchedBalance});
            })
            .catch(err => {
                console.log(err)
            });

    }

    render() {
        return(
            <div>
                <h2 style ={{marginLeft: '20px'}}>Available items: {this.state.balance}</h2>
            </div>
        );
    }

}

export default Balance;