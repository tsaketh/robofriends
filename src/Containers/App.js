import React, { Component } from 'react';
import CardArray from '../Components/CardArray';
import './App.css';
import Scroll from '../Components/Scroll';
import Header from '../Components/Header';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(users => this.setState({robots: users}))
    }
    onSearch=(event)=>{
        this.setState(
            {searchfield: event.target.value}
        )
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className = 'tc'>
                <Header searchChange = {this.onSearch}/>
                <Scroll>
                    <CardArray loader = {this.state.robots} robots = {filteredRobots}/>
                </Scroll>
            </div>
        )
    }
}

export default App;