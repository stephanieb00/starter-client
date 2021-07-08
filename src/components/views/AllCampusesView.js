import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return(
      <div>
        <div className="pageLinks">
                <Link to="/"> Home</Link>
                <Link to="/campuses">Campuses</Link>
        </div>

        <div className= "none">There are no campuses.</div>
      </div>
      );
  }

  return (
    <div>

      <div className="pageLinks">
            <Link to="/"> Home</Link>
            <Link to="/campuses">Campuses</Link>
      </div>

      {props.allCampuses.map((campus) => (
        <div key={campus.id} className="container">
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <img classname="objectImage"src={campus.imageUrl}  alt={campus.name} />
          <p>{campus.description}</p>
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;