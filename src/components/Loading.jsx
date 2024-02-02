import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Spinner from 'react-bootstrap/Spinner';

function Loader() {

  return <div className="spinner-container"
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}>
 <Spinner animation="border" size="xl"  style={{
    display: "flex",
    alignItems: "center",
    height:"50px",
    width:"50px",
    justifyContent: "center",
  }} />;
  </div>
}

export default Loader;