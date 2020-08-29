import React, { Component } from 'react';
import CardArray from '../Components/CardArray';
import './App.css';
import Scroll from '../Components/Scroll';
import Header from '../Components/Header';
import Loader from '../Components/Loader';

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
        if (this.state.robots.length>10){
            return (
                <div className = 'tc'>
                    <Header searchChange = {this.onSearch}/>
                    <Scroll>
                        <CardArray robots = {filteredRobots}/>
                    </Scroll>
                </div>
            )
        }
        else{
            return (
                <div className = 'tc'>
                    <Header searchChange = {this.onSearch}/>
                    <Scroll>
                        <Loader />
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;