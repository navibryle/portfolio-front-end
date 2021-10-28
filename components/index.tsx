import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IntrosSection from './IntroSection';
import Menu from './Menu'
import MenuItem from './MenuItem'
import BouncingArrow from './BouncingArrow';
import { faHackerrank,faGithub } from '@fortawesome/free-brands-svg-icons';
import Project from './Project'
import weathear_app from './../img/weather_app.png'
import LeftArrowLink from './LeftArrowLink';
ReactDOM.render(
  <React.StrictMode>
    <div className="main-wrapper">
      <title>Ivan</title>
      <IntrosSection/>
      <BouncingArrow/>
    </div>
    <Menu>
      <MenuItem link ="https://github.com/navibryle" faIcon={faGithub}/><br/>
      <MenuItem link ="https://www.hackerrank.com/naviivan321?hr_r=1" faIcon={faHackerrank}/>
    </Menu>
    <div id="projects">
      <Project imgSrc={weathear_app} gitLink="https://github.com/navibryle/web-weather-app">
        <LeftArrowLink demoLink="https://ipenales.com:4000"/>
      </Project>
      <Project imgSrc={weathear_app} gitLink="https://github.com/navibryle/web-weather-app">
        <LeftArrowLink demoLink="https://ipenales.com:4000"/>
      </Project>
      <Project imgSrc={weathear_app} gitLink="https://github.com/navibryle/web-weather-app">
        <LeftArrowLink demoLink="https://ipenales.com:4000"/>
      </Project>
      <Project imgSrc={weathear_app} gitLink="https://github.com/navibryle/web-weather-app">
        <LeftArrowLink demoLink="https://ipenales.com:4000"/>
      </Project>
      <Project imgSrc={weathear_app} gitLink="https://github.com/navibryle/web-weather-app">
        <LeftArrowLink demoLink="https://ipenales.com:4000"/>
      </Project>
      <Project imgSrc={weathear_app} gitLink="https://github.com/navibryle/web-weather-app">
        <LeftArrowLink demoLink="https://ipenales.com:4000"/>
      </Project>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);