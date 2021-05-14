import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import {HomeComponent,ResumeComponent,WorkExperienceComponent,SchoolProjectsComponent,NavComponent} from './Components/Component';

function App() {
  return (
    <div className="App">
      <Router>
          {/* navigation component */}
          <NavComponent/>
          <Switch>
              {/* about page */}
              <Route path="/" exact component={HomeComponent}/>
              {/* resume page */}
              <Route path="/resume" exact component={ResumeComponent}/>
              {/* work experience page */}
              <Route path="/Work-Experience" exact component={WorkExperienceComponent}/>
              {/* school project page */}
              <Route path="/School-Projects" exact component={SchoolProjectsComponent}/>
              {/* contact page */}
          </Switch>
      </Router> 
    </div>
  );
}

export default App;
