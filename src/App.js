import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { PostList } from './posts';
import { UserList } from './users';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} />
      <Resource name="users" list={UserList} />
  </Admin>

);



export default App;
