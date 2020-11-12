import * as React from "react";

import {
    List,
    TextField,
    Datagrid,
    EditButton,
    DeleteButton,
} from 'react-admin'

const RoleList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id'/>
                <TextField source='name'/>
                <EditButton basePath='/roles'/>
                <DeleteButton basePath='/roles'/>
            </Datagrid>
        </List>
    )
}

export default RoleList