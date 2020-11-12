import * as React from "react";

import {
    List,
    Datagrid,
    TextField
    // EditButton,
    // DeleteButton,
} from 'react-admin'

const UserList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='name'/>
                <TextField source='email'/>
                <TextField source='role_id'/>
                <TextField source='phone'/>
                <TextField source='account_status'/>
                {/* <EditButton basePath='/users'/>
                <DeleteButton basePath='/users'/> */}
            </Datagrid>
        </List>
    )
}

export default UserList