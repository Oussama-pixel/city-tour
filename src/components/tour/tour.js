import React,{Component} from "react";
import "./tour.scss"
export default class Tour extends Component {
   state={
       showInfo:false
   };
    handleClick=() =>{
       this.setState({
           showInfo:!this.state.showInfo
       });
   }
    render(){
        const  {city,img,name,info,id} = this.props.tour;
        const {remove} = this.props;
        return(
            <article className="tour">
                <div className="image-container">
                <img src={img} alt="" />
                <span onClick={()=>{remove(id)}} className="close-btn">
                    <i className="fas fa-window-close"></i>
                </span>
                 </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>
                    info
                    <span onClick={this.handleClick}>
                        <i className="fas fa-caret-square-down"/>
                    </span>
                    </h5>
                    {this.state.showInfo && <p>{info}</p>}
                </div>
            </article>
        );
        }
}