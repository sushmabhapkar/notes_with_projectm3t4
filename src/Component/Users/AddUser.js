import React from 'react';
const AddUser=()=>
{
      const addUserHandler=(event)=>
      {
           event.preventDefault();
      }

 return(
 <form>
    <label htmlFor='username'>Name</label>
    <input id='username' type='text'/>

    <label htmlFor='age'>Age(Year)</label>
    <input id='age' type='number'/>

    <button type='submit'>ADD</button>
   </form>
 );
}
export default AddUser;