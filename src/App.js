import React,{ useState } from 'react';
import AddUser from './Component/Users/AddUser';
import UserList from './Component/Users/UserList';

function App() {
  const [usersList,setUserList]=useState([]);
  
  const addUserHandler=(uname,uage)=>
  {
    setUserList((prevUsersList)=>
    {
    return [
      ...prevUsersList,
       { name: uname,  age: uage, id:Math.random().toString() }
      ];
    });
  };
  return (
    <div>
         <AddUser onAddUser={addUserHandler}/>  
         <UserList users={usersList}/>
    </div>
    
  );
}

export default App;
