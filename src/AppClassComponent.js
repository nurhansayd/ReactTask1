import React from "react";
import Button from "./Button";
import Progressbar from "./progress";
import Portfolio from "./portfolio";

class AppClassComponent extends React.Component{
    constructor(){
        super();
       this.state={
            name:"Nurhan Sayed",
            job:"Web developer and designer",
            email:"nurhansaydd@gmail.com",
            phone:"01154717876"

        }
        
    }

    render(){
        console.log("render");
        return(
            <>
           <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"/>
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
        <link rel="stylesheet" href="BS1.css"/>
            
            <div class="container pt-1 mb-3">
   
            <figure class="figure position-relative" >
                   
                   <img  className="card-img" src={process.env.PUBLIC_URL + '/photo.jpg'} class="figure-img img-fluid" alt=""/>
                  
                  <div className=" position-absolute top-50 bottom-50 text-center p-5">
                   <h1 className="card-title">{this.state.name}</h1>
                   <p >{this.state.job}</p>
                   
                   <Button name= "CONTACT ME" />
                   </div>

               </figure>

               <div class="container pt-1 mb-3">
                   <div class="row">
                    <div class="col-sm-4">
                        <h1>About me</h1>
                    </div>
                    <div class="col-sm-8 ">
                           <p>Our apartment is really clean and we like to keep it that way.
                                Enjoy the lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat.</p>
                                <Button name="Download Resume"/>
                    </div>


                   </div>

               </div>

                <div class="row text-white bg-dark">
               <div class=" mx-auto  text-center p-5"   >
                   <h2 >Skills</h2>
                   <p>Our apartment is really clean and we like to keep it that way.
                                Enjoy the lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat.</p>
               </div>

               <div class="col-sm-5 text-center">
                   <h6>MY FOCUS</h6>
                  
                   <p>UI/UX Design</p>
                   <p>Responsive Design</p>
                   <p>Web Design</p>
                   <p>Mobile App Design</p>
                   </div>
               <div class="col-sm-3 text-center">
                
              <Progressbar percent="progress-bar w-25" course="HTML" ></Progressbar>                        
              <Progressbar percent="progress-bar w-50" course="CSS"></Progressbar>          
              <Progressbar percent="progress-bar w-25" course="JavaScript"></Progressbar>             
              <Progressbar percent="progress-bar w-25" course="React"></Progressbar>            
              <Progressbar percent="progress-bar w-75" course="Photoshop"></Progressbar>            
              <Progressbar percent="progress-bar w-50" course="AdobeXD"></Progressbar>
              <Progressbar percent="progress-bar w-25" course="Nodejs"></Progressbar>
              <Progressbar percent="progress-bar w-25" course="WordPress"></Progressbar>
               </div>
                                    
               </div>
            <div class="container pt-1 mt-5">
            <h1>Portfolio</h1>


            <div class="row ms-5 p-5">

          <Portfolio title="WEB DESIGN">
          </Portfolio>
          <Portfolio title="MOBILE DESIGN"></Portfolio>
          <Portfolio title="LOGO DESIGN"></Portfolio>
          <Portfolio title="WEB APPLICATION DEVELOPMENT" ></Portfolio>
          <Portfolio title="MOBILE APPLICATION DEVELOPMENT"></Portfolio>
          <Portfolio title="PWA DEVELOPMENT"></Portfolio>

          
          

           
            
  </div>

    

            </div>
                
            <div class="row text-white bg-dark">
               <div class=" mx-auto text-center p-3"   >
                   
                  
               </div>

               <div class="col-sm-5 mb-3 ">
                   <h6>GET IN TOUCH</h6>
                  
                   <li><span><i class="bi bi-envelope-check-fill ms-1"></i></span> {this.state.email}</li>
                    <li><span><i class="bi bi-telephone-fill ms-1"></i></span>{this.state.phone}</li>
                   
                   </div>
               <div class="col-sm-3 text-center mt-3">
                <Button name="CONTACT ME"></Button>
              
               </div>

               <div class="col-sm-4 text-center mt-3">
               <i class="bi bi-linkedin" > &nbsp; </i>
               <i class="bi bi-facebook"> &nbsp;</i>
               <i class="bi bi-twitter"></i>
               <p>
               Copyright©2019 KR
               </p>
 
               </div>
                                    
               </div>
                </div>

            </>
        )
    }
}
export default AppClassComponent;