import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return(
      <div>
        <div className="pageLinks">
                <Link to="/"> Home</Link>
                <Link to="/students">Students</Link>
        </div>

        <div className= "none">There are no campuses.</div>
      </div>
      );
  }

  return (
    <div>

      <div className="pageLinks">
            <Link to="/"> Home</Link>
            <Link to="/students">Students</Link>
      </div>

      {props.allCampuses.map((campus) => (
        <div key={campus.id} className="container">
          <Link to={`/campus/${campus.id}`}>
            <h3>{campus.name}</h3>
          </Link>
          <img classname="objectImage"src={campus.imageUrl}  alt={campus.name} />
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;