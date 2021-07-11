import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontType: 'bold',
    fontFamily: 'Courier, sans-serif', 
    fontSize: '35px', 
    color: '#CDDC39',
  },
  appBar:{
    backgroundColor:'#2B7D6B',
    shadows: ['none'],
  },
  greeting:{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor:'#2B7D6B',
    width: "50%",
    margin: "auto",
  },
  button:{
    backgroundColor:'#87ACA3',
    marginRight: '10px',
    color:'#0C1446',
    textDecorationThickness:'4px',
  },

  elements:{
    textAlign: 'left',
    fontType: 'bold',
    fontSize: '24px', 
    color:'#0C1446',

  },

  lists:{
    textAlign: 'left',
    fontSize: '20px', 
    marginBottom: '15px',
    color:'#0C1446',
  },

  images:{
    width:'900px',
    height:'50%',
    display: 'block',
    margin: 'auto',
    marginTop:' 10px',
  }


}));


const CampusView = (props) => {

  const classes = useStyles();

  const {campus} = props;
  return (
    <div className={classes.root}>   
        <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit" >
            CRUD App
          </Typography>

          <Link className={classes.links} to={'/'} >
            <Button variant="contained" className={classes.button}>
              Home
            </Button>
          </Link>

          <Link className={classes.links} to={'/campuses'} >
            <Button variant="contained" className={classes.button}>
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'} >
            <Button className={classes.button} variant="contained">
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>


      <Link to={`/campus/${campus.id}/editcampus`}>
        <Button  className={classes.button} >Edit Campus</Button>
      </Link>


      <div className="container">
      <div className={classes.greeting}><h1>{campus.name}</h1></div>
        <img className={classes.images} src={campus.imageUrl} />
        <p className={classes.elements}>{campus.description}</p>
        <p className={classes.elements}>{campus.address}</p>

        <ul>
        {campus.students.map( student => {
          let name = student.firstname + " " + student.lastname;
          return (
            <div className="studentLink" key={student.id}>
               <Link to={`/student/${student.id}`}>
                <li className={classes.lists}>{name}</li>
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