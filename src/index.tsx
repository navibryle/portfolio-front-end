import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import IntrosSection from './components/IntroSection';
import Menu from './components/Menu'
import MenuItem from './components/MenuItem'
import BouncingArrow from './components/BouncingArrow';
import { faHackerrank,faGithub } from '@fortawesome/free-brands-svg-icons';
import Project from './components/Project'
import weathear_app from './assets/weather_app.png'
import LeftArrowLink from './components/LeftArrowLink';
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