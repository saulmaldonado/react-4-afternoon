import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class ClassList extends Component {
  constructor() {
    super()

    this.state = {
      students: []
    }
    
  }
  componentDidMount(){
      axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(res =>{
      this.setState({students: res.data})
    })
  }
 
 
  render() {
    const {students} = this.state
    return (
      <div className="box">
        <h1>{this.props.match.params.class}:</h1>
        <h2>Class List:</h2>
        {students.map( (ele, i) => {
          return (
            <Link to={`/student/${ele.id}`} key={i}>
              <h3>
                {ele.first_name +" "+ ele.last_name}
              </h3>
            </Link>
          )
          })
        }
        <Link to={`/`}>
          <h1>
            &#60; Back 
          </h1>
        </Link>

      </div>
    )
  }
}