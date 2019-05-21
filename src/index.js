import { config } from './modules/config';
import AppService from './modules/app.service';
import './modules/header.component';

console.log('From Config', config.key);

const service = new AppService('Hello');
service.log();