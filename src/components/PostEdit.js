import React from 'react'
import { 
    Edit,
    SimpleForm,
    TextInput,
 } from 'react-admin'
 const PostEdit = (props) => {
     return (
         <Edit title="Edit A  Customer" {...props}>
             <SimpleForm>
                <TextInput disabled source='id'/>
                <TextInput source='name'/>
                <TextInput source='phone'/>
                <TextInput source="email"/>
                <TextInput source='address'/>
                <TextInput source='status'/>
                <TextInput source='type'/>
             </SimpleForm>

        </Edit>
         
     )
 }

 export default PostEdit