import React, { Component } from "react";
import img1 from "../images/Photo.jpg"

// class app form
class Profil extends Component {
    constructor(props) {
        super(props);
    
    // state declaration
    this.state = { 
        Person :{
            FullName:"BEN KHALIFA HASSEN" ,
            Bio:"I ❤️ programming. I am learning the full stack developer JAVASCRIPT course in GO MY CODE hackerspace Gabes."  ,
            ImgSrc:img1  ,
            Profession:"GO MY CODE Student "},
            mountTime: new Date()
     }};
     // setInterval method

    componentDidMount() {
        this.interval = setInterval(() => {
          this.forceUpdate();
        }, 1000);
      }
      
      componentWillUnmount() {
        clearInterval(this.interval);
      }

      // render function
    render() { 
        const { mountTime } = this.state;
        return (
            <>
            <h1 style={{color:"blue",fontSize:"50px"}}> {this.state.Person.FullName}</h1>
            <h2 style={{fontSize:"25px"}}>{this.state.Person.Bio}</h2>
            <img src={this.state.Person.ImgSrc} 
            style={{width:350,height:350,borderRadius:'50px', border:" 2px solid #2980B9",boxShadow: "0px 0px 10px 0px #2980B9"}}
             alt=""/>
            <h3 style={{fontSize:"30px"}}>{this.state.Person.Profession}</h3>
            <p>Component mounted for {Math.floor((new Date() - mountTime) / 1000)} seconds.</p>
            </>
          );
    }
}
 
export default Profil ;