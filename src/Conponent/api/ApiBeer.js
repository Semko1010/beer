import AllBeers from "../Allbeers/AllBeers";
import React from 'react';
import { Component} from "react"
class ApiBeer extends Component {
    constructor(props) {
        super(props);
        this.state = { data:[] }
    }


componentDidMount() {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
    .then(response => response.json())
    .then (json => {
        this.setState({ data:json})
        console.log(json);
    })

}





    render() { 
        return ( 
        <section>
            {this.state.data.map((e,i) => 
            <AllBeers
            id={i}
            key={e._id}
            image_url={e.image_url}
            name={e.name}
            tagline={e.tagline}
            contributed_by={e.contributed_by}

              
              />  )}
        </section> );
    }
}
 
export default ApiBeer;