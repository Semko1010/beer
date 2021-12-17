import "./AllBeers.css"
import {Link} from "react-router-dom"
const AllBeers = (props) => {
    return ( 
    <div className="flex">
        <img src={props.image_url} alt="" />
        <div>
            <h3>{props.name}</h3>
            <p>{props.tagline}</p>
            <p>{props.contributed_by}</p>
            <div className="buttonLink">
                <Link to={`/details/${props.id}`} style={{color:"white",fontSize:"18px",textDecoration:"none"}}>Details</Link>
            </div>
        </div>
    </div> );
}
 
export default AllBeers;