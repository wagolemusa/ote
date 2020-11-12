import React from 'react'
import { 
    Create,
    SimpleForm,
    TextInput,
 } from 'react-admin'
 const RoleCreate = (props) => {
     return (
         <Create title="Create Roles" {...props}>
             <SimpleForm>
                <TextInput source='name'/>
                
             </SimpleForm>

        </Create>
         
     )
 }

 export default RoleCreate