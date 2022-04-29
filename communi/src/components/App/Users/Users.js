import * as React from "react";
import './Users.css'
import CustomUrlField from '../../CustomUrlField/CustomUrlField';
import { List, Datagrid, TextField, EmailField, SimpleForm, TextInput, Edit, Create, EditButton } from 'react-admin';
export function UserList() {

  return (
      <List>
      <Datagrid rowClick="edit">
          <TextField source="_id" />
          <TextField source="name" />
          <EmailField source="email" />
          <EditButton />
      </Datagrid>
  </List>
  );
}


export const UserEdit = () => (
  <Edit>
      <SimpleForm>
          <TextInput disabled source="id" />
          <TextInput source="email" />
          <TextInput source="phone" />
          <TextInput source="website" />
          <TextInput source="company.name" />
          <TextInput source="name" />
          <TextInput source="title" />
          <TextInput multiline source="body" />
      </SimpleForm>
  </Edit>
);

export const UserCreate = props => (
      <Create {...props}>
          <SimpleForm>
            <TextInput source="email" />
            <TextInput source="phone" />
            <TextInput source="website" />
            <TextInput source="company.name" />
            <TextInput source="name" />
            <TextInput source="title" />
            <TextInput multiline source="body" />
          </SimpleForm>
      </Create>
)
