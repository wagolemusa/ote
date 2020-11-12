import * as React from "react";

import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
} from 'react-admin'

const PostList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id'/>
                <TextField source='customer_id'/>
                <TextField source='rider_id'/>
                <TextField source='origin'/>
                <TextField source='origin_contact'/>
                <TextField source='destination'/>
                <TextField source='destination_contact'/>
                <TextField source='notes'/>
                <TextField source='status'/>
                <EditButton basePath='/orders'/>
                <DeleteButton basePath='/orders'/>
            </Datagrid>
        </List>
    )
}

export default PostList