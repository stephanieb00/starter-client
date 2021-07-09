import AppBar from '@material-ui/core/AppBar';
import PropTypes from "prop-types";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

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

  
}));
  

const  AllStudentsView = (props) => {
    const classes = useStyles();
    const {students, deleteStudent} = props;
    if (!students.length) {
        return( 
            <div className={classes.root}>
                <AppBar position="static" elevation={0} className={classes.appBar}>
                    <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit" >
                        CRUD App
                    </Typography>

                    <Link className={classes.links} to={'/campuses'} >
                        <Button variant="contained" className={classes.button}>
                        All Campuses
                        </Button>
                    </Link>

                    <Link className={classes.links} to={'/'} >
                        <Button className={classes.button} variant="contained">
                        Home
                        </Button>
                    </Link>
                    </Toolbar>
                </AppBar>
      
                <div className={classes.greeting}><h1>Students</h1></div>

                <div className= "none"> There are no students.</div>
                <Link to={`student/new`}>
                    <button>Add New Student</button>
                </Link>
            </div>
        );
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" elevation={0} className={classes.appBar}>
                <Toolbar>
                <Typography variant="h6" className={classes.title} color="inherit" >
                    CRUD App
                </Typography>

                <Link className={classes.links} to={'/'} >
                    <Button className={classes.button} variant="contained">
                    Home
                    </Button>
                </Link>
                
                <Link className={classes.links} to={'/campuses'} >
                    <Button variant="contained" className={classes.button}>
                    All Campuses
                    </Button>
                </Link>
                </Toolbar>
            </AppBar>
      
                <div className={classes.greeting}><h1>Students</h1></div>

            <Link to={`/newstudent`}>
                <button  className={classes.button} >Add New Student</button>
            </Link>
            
            {students.map((student) => {
                let name = student.firstname + " " + student.lastname;
                return (
                <div key={student.id} className="container">
                    <Link to={`/student/${student.id}`}>
                        <h1 className={classes.elements}>{name}</h1>
                    </Link>
                    <button className={classes.button} onClick={() => deleteStudent(student.id)}>Delete</button>
                </div>
                );
            }
            )}
        </div>
    );
    };

export default AllStudentsView;
