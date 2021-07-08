import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const  AllStudentsView = (props) => {
  if (!props.allStudents.length) {
    return <div>There are no students.</div>;
  }

  return (
    <div>
      {props.allStudents.map((student) => (
        <div className="object" key={student.id}>
          <Link to={`/student/${student.id}`}>
            <h1>{student.firstname} {student.lastname}</h1>
          </Link>
          <img classname="objectImage"src={student.imageUrl}  alt={student.firstname} />
          <p>{student.description}</p>
          <p>GPA: {student.gpa}</p>

          <button variant="contained" color="primary" onClick={() => props.handleDelete(student.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

AllStudentsView.propTypes = {
    allStudents: PropTypes.array.isRequired,
};
  
export default AllStudentsView;