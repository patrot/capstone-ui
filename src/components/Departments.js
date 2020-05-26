import React, {Component} from 'react';
import axios from '../axios-orchestration';
import Department from './Department/Department';
import './Departments.css';

class Departments extends Component {
    state = {
        departments: [],
        selectedDepartment: 0,
        departmentSelected: false
    };

    componentDidMount() {
        axios.get('/departments')
            .then(res => {
                const fetchedDeparments = [];
                let selectedSet = false;
                for (let key in res.data) {
                    if (res.data[key].id === this.state.selected) {
                        selectedSet = true;
                    }
                    fetchedDeparments.push({
                        ...res.data[key]
                    });
                }
                this.setState({departments: fetchedDeparments});
                if (!selectedSet) {
                    let selected = fetchedDeparments[0].id;
                    this.setState({selectedDepartment: selected});
                }
                this.props.updateDepartment(this.state.selectedDepartment);
            })
            .catch(err => console.log(err));
    }

    departmentSelectedHander = (id) => {
        this.setState({selectedDepartment: id});
        this.props.updateDepartment(id);
    }

    render () {
        let departments = <p style={{textAlign: 'center'}}>Something went wrong!!</p>;
        departments = this.state.departments.map(department => {
            return (
                <Department 
                    key={department.id} 
                    name={department.name}
                    selected={this.state.selectedDepartment === department.id}
                    clicked={() => this.departmentSelectedHander(department.id)} />
            );
        });
        return (
            <div>
                <h2 style ={{marginLeft: '20px'}}>Departments</h2>
                <section className="Departments">
                    {departments}
                </section>
            </div>
        );
    }
}

export default Departments;