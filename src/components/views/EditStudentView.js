import { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './edit.css';

class EditStudentView extends Component {


    constructor(props) {
        super(props);
        this.state = {
          firstname: props.student.firstname || '',
          lastname: props.student.lastname || '',
          email: props.student.email || '',
          gpa: props.student.gpa|| '',
          imageUrl: props.student.imageUrl || '',
          campus: props.student.campus ? props.student.campus.name : "None",
          campusId: props.student.campus ? props.student.campusId : 0,
          redirect: false
        }
    }
    handleChange = (event) => {
        this.setState({ 
            [event.target.id]: event.target.value 
        });
    }

    handleSubmit = () => {
        let student = {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          gpa: Number(this.state.gpa),
          campusId: this.state.campusId ? this.state.campusId : undefined,
          imageUrl: this.state.imgURL ? this.state.imageUrl : undefined,
          id: this.props.student.id
        };
        // submit
        this.props.editStudent(student);
        this.setState({ redirect: true });
      }

      render(){
        if (this.state.redirect)
        return <Redirect to={`/student/${this.props.student.id}`}/>
        return (
            <div className='container'>
                <div className= 'formContainer'>
                    <div className='formTitle'>
                    <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
                        Edit Student
                    </Typography>
                    </div>

                        <form style={{textAlign: 'center'}} onSubmit={this.handleSubmit}>

                        <label className="title" style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
                        <input id="firstname" type="text" name="firstname" placeholder={this.state.firstname} value={this.state.firstname} onChange={this.handleChange} />

                        <br/>
                        <br/>

                        <label className="title" style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
                        <input id="lastname" type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} />
                        <br/>
                        <br/>

                        <label className="title" style={{color:'#11153e', fontWeight: 'bold'}}>Email: </label>
                        <input id="email" type="text" name="email"   value={this.state.email}  onChange={this.handleChange} />
                        <br/>
                        <br/>

                        <label className="title" style={{color:'#11153e', fontWeight: 'bold'}}>GPA: </label>
                        <input id="gpa" type="text" name="gpa" value={this.state.gpa} onChange={this.handleChange} />
                        <br/>
                        <br/>

                        <label className="title" style={{color:'#11153e', fontWeight: 'bold'}}> Image URL: </label>
                        <input id="imageUrl" type="text" name="imageUrl"  value={this.state.imgURL} onChange={this.handleChange} />
                        <br/>
                        <br/>

                        <label className="title" style={{color:'#11153e', fontWeight: 'bold'}}>campusId: </label>
                        <input id="campusId" type="text" name="campusId" onChange={this.handleChange} />
                        <br/>
                        <br/>

                            <Button variant="contained" color="primary" type="submit">
                                Submit
                            </Button>

                        <br/>
                        <br/>
                        </form>
                    </div>
            </div>
    
  )
    }
}


export default (EditStudentView);