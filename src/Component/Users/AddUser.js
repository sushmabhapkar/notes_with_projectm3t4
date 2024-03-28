import React,{useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
const AddUser=()=>
{

 const [enteredUsername,setEnteredUsername]= useState('');
 const [enteredAge,setEnteredAge]=useState('');

      const addUserHandler=(event)=>
      {
           event.preventDefault();
           //adding validation
           if(enteredUsername.trim().length===0||enteredAge.trim().length===0)
           {
            return;
           }

           if(+enteredAge<1)
           {
            return;
           }
           console.log(enteredUsername,enteredAge);
           //form reset logic
           setEnteredUsername('');
           setEnteredAge('');
      }
         //function for username
      const usernameChangeHandler=(event)=>
      {
          setEnteredUsername(event.target.value);
      }

      //function for Age

      const ageChangeHandler=(event)=>
      {
          setEnteredAge(event.target.value);

      }



 return(
     <Card className={classes.input}>
 <form onSubmit={addUserHandler}>
    <label htmlFor='username'>Name</label>
    <input 
    id='username' 
    type='text' 
    value={enteredUsername}
    onChange={usernameChangeHandler}/>

    <label htmlFor='age'>Age(Year)</label>
    <input 
    id='age' 
    type='number'
    value={enteredAge} 
    onChange={ageChangeHandler}/>

    <Button type='submit'>ADD</Button>
   </form>
   
</Card>
 );
}
export default AddUser;