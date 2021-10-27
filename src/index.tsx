import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IntrosSection from './IntroSection';
import reportWebVitals from './reportWebVitals';
import Menu from './Menu'
import MenuItem from './MenuItem'
import BouncingArrow from './BouncingArrow';
import { faHackerrank,faGithub } from '@fortawesome/free-brands-svg-icons';

ReactDOM.render(
  <React.StrictMode>
    <IntrosSection/>
    <Menu>
      <MenuItem link = "https://github.com/navibryle" faIcon={faGithub}/><br/>
      <MenuItem link = "https://www.hackerrank.com/naviivan321?hr_r=1" faIcon={faHackerrank}/>
    </Menu>
    <BouncingArrow/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();