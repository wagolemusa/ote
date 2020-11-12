import * as React from "react";

import {
    List,
    Datagrid,
    TextField,
    EmailField,
    EditButton,
    DeleteButton,
} from 'react-admin'

const PostList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id'/>
                <TextField source='name'/>
                <TextField source='phone'/>
                <EmailField source='email'/>
                <TextField source='address'/>
                <TextField source='status'/>
                <EditButton basePath='/customers'/>
                <DeleteButton basePath='/customers'/>
            </Datagrid>
        </List>
    )
}

export default PostList