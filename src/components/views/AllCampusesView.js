import { Link } from "react-router-dom";


const AllCampusesView = (props) => {
  const {campuses, deleteCampus} = props;
  if (!props.campuses.length) {
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

      <Link to={`/newcampus`}>
        <button>Add New Campus</button>
      </Link>

      {props.campuses.map((campus) => (
        <div key={campus.id} className="container">
          <Link to={`/campus/${campus.id}`}>
            <h3>{campus.name}</h3>
          </Link>
          <img classname="objectImage"src={campus.imageUrl}  alt={campus.name} />
          <button onClick={() => deleteCampus(campus.id)}>Delete</button>
        </div>

      ))}
    </div>
  );
};


export default AllCampusesView;