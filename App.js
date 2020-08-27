import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';

import './App.css';
import Alertmod from './Alert';
import Navcomp from './Navcomp';
import Home from './Home';
import Worlds from './World';
import Politics from './Politics';
import Business from './Business';
import Technology from './Technology';
import Sports from './Sports';
import Empty from './Empty';
import Search from './Search';
import Bookmarked from './Bookmarked';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Cardstuffs from './Cardstuff';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      testval: "off",
      urltosendaway: "",
      idtosendaway: "",
      sourcetosendaway: "",
      amihidingtheswitch: "",
    };
  }
  parentFunct=(data_from_child)=>{
    this.setState({testval:data_from_child});
  }
  parentFunct2=(data_from_child2)=>{
    this.setState({urltosendaway:data_from_child2});
  }
  parentFunct21=(data_from_child21)=>{
    this.setState({idtosendaway:data_from_child21});
  }
  parentFunct2222=(data_from_child2222)=>{
    this.setState({sourcetosendaway:data_from_child2222});
  }
  handleClicker=()=>
  {
    this.props.history.push(
      {pathname: '/*/home' + this.state.clickedtitle
      });
  }
  render(){
    return(

  <Container fluid>


  <BrowserRouter>
  <Navcomp butstateIs={this.parentFunct.bind(this)} toswitchornottoswitch={this.state.amihidingtheswitch}/>
   <Switch>
     {/*<Route path="/"  exact render = {props => (<Home {...props} butstateSend={this.state.testval} refreshState={"yes"} key={Math.random()}/>)} /> */}
      <Route path="/home"  exact render = {props => (<Home {...props} butstateSend={this.state.testval} refreshState={"yes"} sendwhicup={this.parentFunct2222.bind(this)} buturlIs={this.parentFunct2.bind(this)} gidSend={this.parentFunct21.bind(this)} key={Math.random()}/>)} />
      <Route path="/World"  render = {props => (<Worlds {...props} butstateSend={this.state.testval } sendwhicup={this.parentFunct2222.bind(this)} buturlIs={this.parentFunct2.bind(this)} gidSend={this.parentFunct21.bind(this)} key={Math.random()}/>)}/>
      <Route path="/Politics" render = {props => (<Politics {...props} butstateSend={this.state.testval} sendwhicup={this.parentFunct2222.bind(this)} buturlIs={this.parentFunct2.bind(this)} gidSend={this.parentFunct21.bind(this)} key={Math.random()}/>)} />
      <Route path="/Business" render = {props => (<Business {...props} butstateSend={this.state.testval} sendwhicup={this.parentFunct2222.bind(this)} buturlIs={this.parentFunct2.bind(this)} gidSend={this.parentFunct21.bind(this)} key={Math.random()}/>)} />
      <Route path="/Technology" render = {props => (<Technology {...props} butstateSend={this.state.testval} sendwhicup={this.parentFunct2222.bind(this)} buturlIs={this.parentFunct2.bind(this)} gidSend={this.parentFunct21.bind(this)} key={Math.random()}/>)} />
      <Route path="/Sports" render = {props => (<Sports {...props} butstateSend={this.state.testval} sendwhicup={this.parentFunct2222.bind(this)} buturlIs={this.parentFunct2.bind(this)} gidSend={this.parentFunct21.bind(this)} key={Math.random()}/>)} />
      <Route path="/empty" render = {props => (<Empty {...props} butstateSend={this.state.testval} areyouguardornyt={this.state.sourcetosendaway} sendingtheurldown={this.state.urltosendaway}  sendingtheidbackdown={this.state.idtosendaway} key={Math.random()}/>)} />
      <Route path="/Bookmarked" render = {props => (<Bookmarked {...props} butstateSend={this.state.testval} sendwhicup={this.parentFunct2222.bind(this)} buturlIs={this.parentFunct2.bind(this)} gidSend={this.parentFunct21.bind(this)} key={Math.random()}/>)} />
      <Route path="/search" render = {props => (<Search {...props} butstateSend={this.state.testval} sendwhicup={this.parentFunct2222.bind(this)} buturlIs={this.parentFunct2.bind(this)} gidSend={this.parentFunct21.bind(this)} key={Math.random()} key={Math.random()}/>)} />
      </Switch>
  </BrowserRouter>
</Container>

    );
  }
}


export default App;
