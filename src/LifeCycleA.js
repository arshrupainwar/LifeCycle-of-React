import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB.js";

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
        console.log("Life Cycle A Constructor Start");//1
        this.state = {
            name:"Steve"
        }
    }

    static getDerivedStateFromProps() {
        console.log("Life Cycle A getDerivedStareFromProps Started");//2
        return null;
    }

    render() {
        console.log("Life Cycle A Render Start");//3
        return(
            <div> 
                {this.state.name}
                <button onClick={()=>this.setState({name:"Rogers"})}>Click Me</button>
                <LifeCycleB/>
            </div>
        )
    }
    shouldComponentUpdate() {
        console.log("Life Cycle A shouldComponentUpdate Started");
        return true;
    }

    componentDidMount() {
        console.log("Life Cycle A componentDidMount Started");//4
    }

    getSnapshotBeforeUpdate() {
        console.log("Life Cycle A getSnapshotBeforeUpdate Started");
        return null;
    }

    componentDidUpdate() { 
        console.log("Life Cycle A componentDidUpdate Started");
    }
}

export default LifeCycleA