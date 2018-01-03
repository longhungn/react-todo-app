import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

import TodoComponent from './todoComponent.js';
import './css/index.css';




ReactDOM.render(<TodoComponent  />, document.getElementById("todo-wrapper") );