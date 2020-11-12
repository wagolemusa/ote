import React from 'react'
import { 
    Edit,
    SimpleForm,
    TextInput,
 } from 'react-admin'
 const RoleEdit = (props) => {
     return (
         <Edit title="Edit Roles" {...props}>
             <SimpleForm>
                <TextInput source='name'/>
                
             </SimpleForm>

        </Edit>
         
     )
 }

 export default RoleEdit