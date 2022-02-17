import React from "react";
class Button extends React.Component{
    constructor(props){
        super()
    }


    render(){
        return(
            <button type="button" class="btn btn-dark btn-sm  btn-outline-light">{this.props.name}</button>
        
            
        )
    }
}

export default Button;