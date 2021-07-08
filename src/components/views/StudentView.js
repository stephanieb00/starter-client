import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StudentView = (props) => {
    const {student} = props;

    return(
        <div>
            <div className="pageLinks">
                <Link to="/"> Home</Link>
                <Link to="/students">Students</Link>
            </div>
            <div className="container">
                <h3>{student.firstname} {student.lastname}</h3>
                <img classname="objectImage" src={student.imageUrl} />
                <p>GPA: {student.gpa}</p>
                <p>{student.email}</p>

            </div>
        </div>
    );
}

StudentView.propTypes = {
    student: PropTypes.array.isRequired,
    allCampuses: PropTypes.array.isRequired,
};

export default StudentView;