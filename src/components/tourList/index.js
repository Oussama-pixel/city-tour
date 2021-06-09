import React,{Component} from "react";
import "./tourlist.scss"
import Tour from "../tour/tour";
import {tourData} from "../tourData";
export default class TourList extends Component {
    state={
        tours:tourData
    };
    remove = (id) =>{
      let {tours} = this.state;
      const sorted = tours.filter(tour=>tour.id!==id);
      this.setState({
          tours:sorted
      })
    }
    render(){
        const {tours} = this.state;
        return(
            <section className="tour-list">
                {tours.map(tour=> {
                  return(
                        <Tour key={tour.id} tour={tour} remove={this.remove}/>
                        )  
                })}
              
            </section>
        );
        }
}