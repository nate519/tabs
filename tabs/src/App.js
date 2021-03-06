import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.js';
import ReactDOM from 'react-dom';
import {Tabs, Tab, TabContainer, TabContent, TabPane} from 'react-bootstrap';

const tabsInstance = (
    <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
        <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
        <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
    </Tabs>
);

ReactDOM.render(tabsInstance, mountNode);

//export default App;
