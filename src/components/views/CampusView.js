import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const CampusView = (props) => {
  const {campus} = props;
  return (
    <div>   
      <div className="pageLinks">
          <Link to="/"> Home</Link>
          <Link to="/students">Students</Link>
          <Link to="/campuses">Campuses</Link>
      </div>  

      <div className="container">
        <h1>{campus.name}</h1>
        <img classname="objectImage" src={campus.imageUrl} />
        <p>{campus.description}</p>
        <p>{campus.address}</p>

        <ul>
        {campus.students.map( student => {
          let name = student.firstname + " " + student.lastname;
          return (
            <div className="studentLink" key={student.id}>
               <Link to={`/student/${student.id}`}>
                <li>{name}</li>
              </Link>
            </div>
            
          );
        })}
        </ul>
      </div>
    </div>
  );

};

CampusView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default CampusView;