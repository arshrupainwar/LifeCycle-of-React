import { render } from "@testing-library/react";
import React, { Component } from "react";

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
        console.log("Life Cycle B Constructor Start");//1
        this.state = {
            name:"Steve"
        }
    }

    static getDerivedStateFromProps() {
        console.log("Life Cycle B getDerivedStareFromProps Started");//2
        return null;
    }

    render() {
        console.log("Life Cycle B Render Start");//3
        return(
            <div> 
                <h1>Life Cycle B</h1>
            </div>
        )
    }
    shouldComponentUpdate() {
        console.log("Life Cycle B shouldComponentUpdate Started");
        return true;
    }

    componentDidMount() {
        console.log("Life Cycle B componentDidMount Started");//4
    }

    getSnapshotBeforeUpdate() {
        console.log("Life Cycle B getSnapshotBeforeUpdate Started");
        return null;
    }

    componentDidUpdate() { 
        console.log("Life Cycle B componentDidUpdate Started");
    }
}

export default LifeCycleB