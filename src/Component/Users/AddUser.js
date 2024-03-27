import React,{useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
const AddUser=()=>
{

 const [enteredUsername,setEnteredUsername]=useState('');
 const [enteredAge,setEnteredAge]=useState('');

      const addUserHandler=(event)=>
      {
           event.preventDefault();
           console.log(enteredUsername,enteredAge);
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
    <input id='username' type='text' onChange={usernameChangeHandler}/>

    <label htmlFor='age'>Age(Year)</label>
    <input id='age' type='number' onChange={ageChangeHandler}/>

    <Button type='submit'>ADD</Button>
   </form>
   
</Card>
 );
}
export default AddUser;