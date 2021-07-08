import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StudentView = (props) => {
    const {student} = props;
    let campus = student.campus

    return(
        <div>
            <div className="pageLinks">
                <Link to="/"> Home</Link>
                <Link to="/students">Students</Link>
                <Link to="/campuses">Campuses</Link>
            </div>
            <div className="container">
                <h1>{student.firstname} {student.lastname}</h1>
                <img classname="objectImage" src={student.imageUrl} />
                <p>GPA: {student.gpa}</p>
                <p>{student.email}</p>
                <Link to={`/campus/${student.campus.id}`}>{student.campus.name}</Link>
            </div>
        </div>
    );
}

StudentView.propTypes = {
    student: PropTypes.array.isRequired,
    allCampuses: PropTypes.array.isRequired,
};

export default StudentView;