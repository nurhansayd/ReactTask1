import React from "react";
class Portfolio extends React.Component{
    constructor(props){
        super()
    }


    render(){
        return(
            <>
            <div class="col-sm-2 bg-dark text-center text-white w-25 p-5 pt-5 m-4">
            {this.props.title}
              </div>
              </>
        )
    }
}

export default Portfolio;