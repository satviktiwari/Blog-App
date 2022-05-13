import {Link} from "react-router-dom"

const errorPage = () => {
    return ( 
        <div>
            <h1>Error 404 !!!</h1>
            <h3>Page Not Found</h3>
            <Link to='/'>Return to Home Page</Link>
        </div>
     );
}
 
export default errorPage;