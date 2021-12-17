import "./Home.css"
import {Link} from "react-router-dom"
const Home = () => {
    return ( <div className="header">
        <img src="./img/home1.png" alt="" />
        <div className="beerButtons">

            <Link to="./all" style={{ textDecoration: 'none',color:"white",fontSize:"25px" }}>All Beers</Link>
        </div>
        <div className="pTags">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
            </div>
        
        <img src="./img/home2.png" alt="" />
        <div className="beerButtons">
            <Link to="./random" style={{ textDecoration: 'none',color:"white",fontSize:"25px" }}>Random Beers</Link>
        </div>  
        <div className="pTags">        
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
            </div>
            
    </div> );
}
 
export default Home;