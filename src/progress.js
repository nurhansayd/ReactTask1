import React from "react";
class Progressbar extends React.Component{
    constructor(props){
        super()
    }


    render(){
        return(
            <div class="progress m-2">
                <p class="text-dark w-25 ">{this.props.course}</p>
            <div class={this.props.percent} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
             </div>
            
        )
    }
}

export default Progressbar;