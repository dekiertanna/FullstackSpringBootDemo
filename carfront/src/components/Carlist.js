import React, { Component } from 'react';
import {SERVER_URL} from '../constants.js'
import ReactTable from "react-table";
import 'react-table/react-table.css';

class Carlist extends Component {
  constructor(props) {
    super(props);
    this.state = { cars: []};
  }

  componentDidMount() {
    this.fechCars();
  }

  fechCars = () =>{
    fetch(SERVER_URL + 'api/cars')
    .then((response) => response.json()) 
    .then((responseData) => {
      console.log("Response data" + responseData); 
      this.setState({ 
        cars: responseData._embedded.cars,
      }); 
    })
    .catch(err => console.error(err)); 
  }

  onDelClick = (link) =>{
    fetch(link,{method:'DELETE'})
    .then(res => this.fechCars())
    .catch(err => console.error(err))
  }
  
  
  render() {
    const columns = [{
      Header: 'Brand',
      accessor: 'brand'
    }, {
      Header: 'Model',
      accessor: 'model',
    }, {
      Header: 'Color',
      accessor: 'color',
    }, {
      Header: 'Year',
      accessor: 'year',
    }, {
      Header: 'Price €',
      accessor: 'price',
    },{
      id: 'delbutton',
      sortable: false,
      filterable: false,
      width:100,
      accessor: '_links.self.href',
      Cell: ({value}) => (<button onClick={()=>{this.onDelClick(value)}}>Delete</button>)
    }]
   

    return (
      <div className="App">
        <ReactTable data={this.state.cars} columns={columns} 
          filterable={true}/>
      </div>
    );
  }
}

export default Carlist;