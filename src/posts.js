import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const PostList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"></TextField>
            <TextField source="title"></TextField>
            <TextField source="body"></TextField>
        </Datagrid>
    </List>
);