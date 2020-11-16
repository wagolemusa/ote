import React from "react";
import {Admin, Resource } from 'react-admin';
import { fetchUtils } from 'ra-core';
// import simpleRestProvider from 'ra-data-simple-rest';
import jsonServerProvider from 'ra-data-json-server';
import PostList from './components/PostList'
import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'
import OrderList from './components/OrderList'
import OrderCreate from './components/OrderCreate'
import OrderEdit from './components/OrderEdit'
import RoleList  from './components/RoleList.js'
import RoleCreate from './components/RoleCreate'
import RoleEdit from './components/RoleEdit'
import UserList from './components/UserList'
import UserCreate from './components/UserCreate'
import UserEdit from  './components/UserEdit'

const fetchJson = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  // add your own headers here
  // options.headers.set('content-type', 'application/json');
  options.headers.set('Access-Control-Expose-Headers', 'X-Total-Count')
  options.headers.set('X-Custom-Header', 'foobar');
  return fetchUtils.fetchJson(url, options);
}

const dataProvider = jsonServerProvider('https://api.ote.co.ke/api/v1', fetchJson);
           
function App(){
  return (
    <Admin dataProvider={dataProvider}>
      <Resource 
          name="customers" 
          list={PostList} 
          create={PostCreate}  
          edit={PostEdit}
        />
        <Resource
           name="orders" 
          list={OrderList} 
          create={OrderCreate}  
          edit={OrderEdit}
        />

        <Resource
           name="roles" 
          list={RoleList} 
          create={RoleCreate}  
          edit={RoleEdit}
        />
        <Resource
          name="users" 
          list={UserList} 
          create={UserCreate}  
          edit={UserEdit}
        />
    </Admin>
  );
}
export default App;

