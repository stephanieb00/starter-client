import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const  AllStudentsView = (props) => {
  if (!props.allStudents.length) {
    return( 
        <div>
            <div className="pageLinks">
                <Link to="/"> Home</Link>
                <Link to="/campuses">Campuses</Link>
            </div>

            <div className= "none"> There are no students.</div>
        </div>
    );
  }

  return (
    <div>
        <div className="pageLinks">
            <Link to="/"> Home</Link>
            <Link to="/campuses">Campuses</Link>
        </div>

        {props.allStudents.map((student) => (
        <div key={student.id} className="container">
          <Link to={`/student/${student.id}`}>
            <h3>{student.firstname} {student.lastname}</h3>
          </Link>
          <button onClick={() => props.handleDelete(student.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

AllStudentsView.propTypes = {
    allStudents: PropTypes.array.isRequired,
};
  
export default AllStudentsView;