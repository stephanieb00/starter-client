import { Link } from "react-router-dom";


const  AllStudentsView = (props) => {
    const {students, deleteStudent} = props;
    if (!students.length) {
        return( 
            <div>
                <div className="pageLinks">
                    <Link to="/"> Home</Link>
                    <Link to="/campuses">Campuses</Link>
                </div>

                <div className= "none"> There are no students.</div>
                <Link to={`student/new`}>
                    <button>Add New Student</button>
                </Link>
            </div>
        );
    }

    return (
        <div>
            <div className="pageLinks">
                <Link to="/"> Home</Link>
                <Link to="/campuses">Campuses</Link>
            </div>

            <Link to={`/newstudent`}>
                <button>Add New Student</button>
            </Link>
            
            {students.map((student) => {
                let name = student.firstname + " " + student.lastname;
                return (
                <div key={student.id} className="container">
                    <Link to={`/student/${student.id}`}>
                        <h1>{name}</h1>
                    </Link>
                    <button onClick={() => deleteStudent(student.id)}>Delete</button>
                </div>
                );
            }
            )}
        </div>
    );
    };

export default AllStudentsView;
