import * as React from "react";
import './App.css'
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Layout, Resource } from 'react-admin';
import { UserCreate, UserEdit, UserList } from "./Users/Users";
import Dashboard from "../Dashboard/Dashboard";
import authProvider from "../../utils/authProvider";
import { PostCreate, PostEdit, PostList } from "../Posts/Posts";
import { Header } from "../Header/Header";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


function App() {
  const HeaderLayout = (props) => <Layout {...props} appBar={Header} />;

  return (
      <Admin
      dashboard={Dashboard}
      authProvider={authProvider}
      dataProvider={dataProvider}
      layout={HeaderLayout}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate}/>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>
      </Admin>
  );
}

export default App;
