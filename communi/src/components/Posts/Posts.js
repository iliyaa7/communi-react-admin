import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton, TextInput, SelectInput, Edit, SimpleForm, ReferenceInput, Create } from 'react-admin';

export const PostList = () => (
  <List>
      <Datagrid>
          <TextField source="id" />
          <ReferenceField source="userId" reference="users">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" />
          <EditButton />
      </Datagrid>
  </List>
);

export const PostEdit = () => (
  <Edit>
      <SimpleForm>
          <ReferenceInput  source="userId" reference="users">
              <SelectInput optionText="name" />
          </ReferenceInput>
          <TextInput source="title" />
          <TextInput multiline source="body" />
      </SimpleForm>
  </Edit>
);

export const PostCreate = props => (
      <Create {...props}>
          <SimpleForm>
              <ReferenceInput source="userId" reference="users">
                  <SelectInput optionText="name" />
              </ReferenceInput>
              <TextInput source="title" />
              <TextInput multiline source="body" />
          </SimpleForm>
      </Create>
)