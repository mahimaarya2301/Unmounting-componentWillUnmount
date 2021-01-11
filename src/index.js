//Import Area
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Let's create a Class Component
class Child extends Component{
    //1.Property
    
    //2.Constructor

    //3.Method
    componentWillUnmount(){
        alert('This Child Component is going to unmount');
    }
    //Every class component must have render method which always return HTML(JSX)
    render(){
        return <h1>Welcome to A</h1>
    }
}    

//Let's create a Class Component
class A extends Component{
    //1.Property
    state = {};
    //2.Constructor
    constructor(props){
        super(props);
        //The role of constructor is to initialize the members
        this.state = {show:true};
        //alert(this.state.show);
    }
    //3.Method
    //Every class component must have render method which always return HTML(JSX)
    deleteChild = ()=>{
        //alert('Hi');
        this.setState({
            show:false
        });
        //alert(this.state.show);
    }
    render(){
        var header; //Statement 1
        if(this.state.show){   //Statement 2
            //alert('True');
            //console.log('True');
            header = <Child />;
        }
        return(
            <div>
                { header }

                <button onClick={ this.deleteChild}>Delete Child</button>
            </div>
        );
    }
}

ReactDOM.render(<A />,document.getElementById('root'));