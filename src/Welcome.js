import { render } from "@testing-library/react";
import React, { Component } from "react";

class Welcome extends Component {
    constructor(props) {
        super(props)
        console.log("Constructor Start");//1
        this.state = {
            name:"Steve"
        }
    }

    static getDerivedStateFromProps() {
        console.log("getDerivedStareFromProps Started");//2
        return null;
    }

    render() {
        console.log("Render Start");//3
        return(
            <div> 
                {this.state.name}
                <button onClick={()=>this.setState({name:"Rogers"})}>Click Me</button>
            </div>
        )
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate Started");
        return true;
    }

    componentDidMount() {
        console.log("componentDidMount Started");//4
    }

    getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate Started");
        return null;
    }

    componentDidUpdate() { 
        console.log("componentDidUpdate Started");
    }
}
//MOUNTING PHASE will work during the first load of the page
// the sequence of these function of MOUNTING phase of react will always remain the same
    //1 Constructor
    //2 getDerivedStateFromProps
    //3 Render
    //4 componentDidMount(side effect will not occur in this method)

//UPDATING PHASE will work for updation i.e after the load of page any changes(button click) made will trigger these function
//the sequence of these function of UPDATING phase of react will always remain the same
    //1 getDerivedStateFromProps
    //2 shouldComponentUpdate
    //3 render
    //4 getSnapshotBeforeUpdate
    //5 componentDidUpdate
export default Welcome