import React from 'react';
import {render} from 'react-dom';
import App from './App';
import { config } from './modules/config';
import AppService from './modules/app.service';
import './css/index.css';
import './less/index.less';
import './scss/index.scss';

render(<App />, document.getElementById('app'));