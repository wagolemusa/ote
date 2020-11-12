import React from 'react'
import { 
    Create,
    SimpleForm,
    TextInput,
 } from 'react-admin'
 const OrderCreate = (props) => {
     return (
         <Create title="Create Orders" {...props}>
             <SimpleForm>
                {/* <TextInput disabled source='id'/> */}
                <TextInput source='customer_id'/>
                <TextInput source='rider_id'/>
                <TextInput source='origin'/>
                <TextInput source='origin_contact'/>
                <TextInput source='destination'/>
                <TextInput source='destination_contact'/>
                <TextInput source='notes'/>
                <TextInput source='status'/>
             </SimpleForm>

        </Create>
         
     )
 }

 export default OrderCreate