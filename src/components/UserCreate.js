import React from 'react'
import { 
    Create,
    SimpleForm,
    TextInput,
    PasswordInput,
 } from 'react-admin'
 const UserCreate = (props) => {
     return (
         <Create title="Create User" {...props}>
             <SimpleForm>
                <TextInput source='name'/>
                <TextInput source="email"/>
                <TextInput source='phone'/>
                <TextInput source='role_id'/>
                <PasswordInput source='password'/>
                <TextInput source='account_status'/>
             </SimpleForm>

        </Create>
         
     )
 }

 export default UserCreate