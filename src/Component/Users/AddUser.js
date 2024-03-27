import React from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
const AddUser=()=>
{
      const addUserHandler=(event)=>
      {
           event.preventDefault();
      }

 return(
     <Card className={classes.input}>
 <form>
    <label htmlFor='username'>Name</label>
    <input id='username' type='text'/>

    <label htmlFor='age'>Age(Year)</label>
    <input id='age' type='number'/>

    <Button type='submit'>ADD</Button>
   </form>
   
</Card>
 );
}
export default AddUser;