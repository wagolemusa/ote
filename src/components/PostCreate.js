import React from 'react'
import { 
    Create,
    SimpleForm,
    TextInput,
 } from 'react-admin'
 const PostCreate = (props) => {
     return (
         <Create title="Create Customer" {...props}>
             <SimpleForm>
                <TextInput source='name'/>
                <TextInput source='phone'/>
                <TextInput source="email"/>
                <TextInput source='address'/>
                <TextInput source='status'/>
                <TextInput source='type'/>
             </SimpleForm>

        </Create>
         
     )
 }

 export default PostCreate