import "./Box.css";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import {useForm} from "react-hook-form";
export default function Box(){
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
        const onSubmit = data => console.log(data);
        console.log(errors);    
  
return(
    <Container className="Box">
        <Container className="Regpage">REGISTRATION PAGE
        <Container className="Details">
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Full Name : </label>
        <input id="Fullname" {...register('Fullname', {
      required: true,
      validate: {
        minLength: (v) => v.length >= 5,
        matchPattern: (v) => /^[a-zA-Z _]+$/.test(v),
      },
    })} />

    {errors.Fullname?.type === "required" && (
        <p className="Error">*Full Name is required</p>
      )}
    
      {errors.Fullname?.type === "minLength" && (
        <p className="Error">*Fullname should have at least 5 characters</p>
      )}
    
      {errors.Fullname?.type === "matchPattern" && (
        <p className="Error">*Fullname must contain only letters </p>
      )}
      
        <label>Email ID :    </label>
        <input id="EmailID" {...register('EmailID', {
      required: true,
      validate: {
        matchPattern: (v) => /^[a-zA-Z @.0-9_]+$/.test(v),
      },
    })}/>
    {errors.EmailID?.type === "required" && (
        <p className="Error">*Email ID is required</p>
      )}
      {errors.EmailID?.type === "matchPattern" && (
        <p className="Error">*Please enter the valid EmailID </p>
      )}
        <label>Password : </label>
        <input id="Password"{...register('Password', {
      required: true,
      validate: {
        minLength: (v) => v.length >= 5,
        matchPattern: (v) => /^[a-zA-Z0-9!@#$%^&*]{6,16]+$/.test(v),
      },
    })} />
     {errors.Password?.type === "required" && (
        <p className="Error">*Password is required</p>
      )}
       {errors.Password?.type === "minlength" && (
        <p className="Error">*Password should have the minlength of 5 characters</p>
      )}
      <label>Gender: </label>
      <input id="Gender" type="radio" {...register('Gender', {
      required: true
    })}/>Male
     <input id="Gender" type="radio" {...register('Gender', {
      required: true
    })} />Female
{errors.Gender?.type === "required" && (
        <p className="Error">*Gender is required</p>
      )}<br></br>
      <label>Place: </label>
    <select className="Dropdown">
    <option defaultValue="SELECT" >SELECT</option>
      <option value="Chennai">Chennai</option>
      <option value="Coimbatore">Coimbatore</option>
      <option value="Trichy">Trichy</option>
      <option value="Madurai">Madurai</option>
      <option value="Theni">Theni</option>
    </select> 

          <label className="Languages">Languages Known:</label>
          <input
            type='checkbox'
            className="Checkbox"
          />
          <label>English</label>
          <input
            type='checkbox'
            className="Checkbox"
          />
          <label>Tamil</label>
          <input
            type='checkbox'
            className="Checkbox"
          />
           <label>Hindi</label>
           <input
            type='checkbox'
            className="Checkbox"
          /> <label>Others: </label>
           {errors.Languages?.type === "required" && (
        <p className="Error">*Select any one</p>
      )}
       <Button className="Button" type="submit">SUBMIT</Button></form>
        </Container>
        </Container>
    </Container>
);
}
