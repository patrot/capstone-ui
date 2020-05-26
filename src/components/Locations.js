import React, {Component} from 'react';
import axios from '../axios-orchestration';
import Department from './Location/Location';
import './Locations.css';

class Locations extends Component {
    state = {
        locations: [],
        selectedLocation: 0
    };

    componentDidMount() {
        axios.get('/locations')
            .then(res => {
                const fetchedLocations = [];
                let selectedSet = false;
                for (let key in res.data) {
                    if (res.data[key].id === this.state.selected) {
                        selectedSet = true;
                    }
                    fetchedLocations.push({
                        ...res.data[key]
                    });
                }
                this.setState({locations: fetchedLocations});
                if (!selectedSet) {
                    let selected = fetchedLocations[0].id;
                    this.setState({selectedLocation: selected});
                }
                this.props.updateLocation(this.state.selectedLocation);
            })
            .catch(err => console.log(err));
    }

    departmentSelectedHander = (id) => {
        this.setState({selectedLocation: id});
        this.props.updateLocation(id);
    }

    render () {
        let locations = <p style={{textAlign: 'center'}}>Something went wrong!!</p>;
        locations = this.state.locations.map(location => {
            return (
                <Department 
                    key={location.id} 
                    name={location.name}
                    selected={this.state.selectedLocation === location.id}
                    clicked={() => this.departmentSelectedHander(location.id)} />
            );
        });
        return (
            <div>
                <h2 style ={{marginLeft: '20px'}}>Locations</h2>
                <section className="Locations">
                    {locations}
                </section>
            </div>
        );
    }
}

export default Locations;