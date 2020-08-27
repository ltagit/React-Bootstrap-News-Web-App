import React, { Component } from 'react';
import { Link, withRouter, Redirect }  from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import _ from "lodash";
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Switch from "react-switch";
import ReactTooltip from 'react-tooltip';
import debounce from "debounce-promise";
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import {stateOptions} from './posts/data';
import {MdBookmark, MdBookmarkBorder } from 'react-icons/md';
import './App.css';



class Navcomp extends Component{
  constructor(props){
    super(props);
    this.state={showBut: true,
      checked: false,
    searchterm:"",
    switchtextnyt: "NYTimes",
    switchtextguard: "Guardian",
    hh: "",
    wh: "",
    ph: "",
    bh: "",
    th: "",
    testvalue: "",
    sh: "",
    blank:[],
    results1:[],
    testoptions: [  { value: "chocolate", label: "Chocolate" },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }],
    stateofbooktab: "no",
  stateoftheclick: "yes"};
    this.handleChange = this.handleChange.bind(this);
    const toLoad = inputValue => this.AsyncSearch(inputValue);
    this.debounceinput = debounce(toLoad, 1200, {leading: true});
  }
  
  componentDidMount(){
    if(localStorage.getItem('select') != null){
      if(localStorage.getItem('select') == "true"){
        this.setState({checked: true});
        this.props.butstateIs(this.state.checked ? 'off' : 'on');
      }
      else{
        this.setState({checked: false});
       
      }
  }
  }
  handleChange(checked) {
    this.props.butstateIs(this.state.checked ? 'off' : 'on');
    this.setState({ checked });
    localStorage.setItem('select', checked);
  }
  handleSubmit = (searchterm) => {
    this.setState({searchterm});
    console.log(this.state.searchterm);
    
    this.props.history.push(
      {pathname: '/search',
      search: searchterm.value
      });
  }
  handleSubmit2 = (searchterm) => {
console.log(searchterm);

  }
  handleFormchange(event)
  {
    this.setState({searchterm: event.target.value});
  }
  handleClicker=()=>
  { 
    this.props.history.push(
      {pathname: '/home' + this.state.clickedtitle
      });
  }
  handleBookmarkPage()
  {this.setState({stateofbooktab: "yes"});
  this.props.history.push(
    {pathname: '/Bookmarked'
    });
  }


testcall(inputValue)
{
  this.testing123(inputValue);
  console.log(this.state.results1);
  return(this.state.results1);

}

testing123(inputValue){
  console.log(inputValue);
  const headers = {
    "Ocp-Apim-Subscription-Key": "RETRACTED"
  };
  if(inputValue != "" && inputValue != null){
    inputValue = inputValue.split(" ").join("");
  return axios.get('https://api.cognitive.microsoft.com/bing/v7.0/suggestions?q='+ inputValue, {
    headers: headers
  })
  .then(response => {

          const resultsRaw = response.data.suggestionGroups[0].searchSuggestions;
          const results = resultsRaw.map(result => ({ value: result.displayText, label: result.query }));
          this.setState({ results1: results });
              console.log("here");
          return results;


    
})

}
else{
  console.log("outofthisworld");
  return([]);

}

}

AsyncSearch(inputValue) {
  return new Promise((resolve, reject) => {
    resolve(this.testing123(inputValue));
  });
}



render(){
  let switchbar;
  let switchbarleft;
  let switchbarright;
  
  let tryitout;

  console.log(this.props.history.location.pathname);
  if (this.props.history.location.pathname=="/home" || this.props.history.location.pathname=="/World" 
  || this.props.history.location.pathname=="/Politics"|| this.props.history.location.pathname=="/Business"
  || this.props.history.location.pathname=="/Technology"|| this.props.history.location.pathname=="/Sports" )
  { 
    if(this.props.history.location.pathname=="/home")
    {this.state.hh="hs";
    this.state.wh="hu";
    this.state.ph="hu";
    this.state.bh="hu";
    this.state.th="hu";
    this.state.sh="hu";
    this.state.stateofbooktab="no";
  }
  if(this.props.history.location.pathname=="/World")
  {this.state.hh="hu";
  this.state.wh="hs";
  this.state.ph="hu";
  this.state.bh="hu";
  this.state.th="hu";
  this.state.sh="hu";
  this.state.stateofbooktab="no";
}
if(this.props.history.location.pathname=="/Politics")
{this.state.hh="hu";
this.state.wh="hu";
this.state.ph="hs";
this.state.bh="hu";
this.state.th="hu";
this.state.sh="hu";
this.state.stateofbooktab="no";
}
if(this.props.history.location.pathname=="/Business")
{this.state.hh="hu";
this.state.wh="hu";
this.state.ph="hu";
this.state.bh="hs";
this.state.th="hu";
this.state.sh="hu";
this.state.stateofbooktab="no";
}
if(this.props.history.location.pathname=="/Technology")
{this.state.hh="hu";
this.state.wh="hu";
this.state.ph="hu";
this.state.bh="hu";
this.state.th="hs";
this.state.sh="hu";
this.state.stateofbooktab="no";
}
if(this.props.history.location.pathname=="/Sports")
{this.state.hh="hu";
this.state.wh="hu";
this.state.ph="hu";
this.state.bh="hu";
this.state.th="hu";
this.state.sh="hs";
this.state.stateofbooktab="no";
}



    this.state.switchtextnyt = "NYTimes";
    this.state.switchtextguard= "Guardian";
    switchbarleft=<Navbar.Text className="Switchstyle">{this.state.switchtextnyt}</Navbar.Text>;
    switchbarright=<Navbar.Text className="Switchstyle">{this.state.switchtextguard}</Navbar.Text>;
    switchbar=<Switch
     checked={this.state.checked}
    onChange={this.handleChange}
    onColor="#4696ec"
    offColor="#dddddd"
    onHandleColor="#ffffff"
    handleDiameter={22}
    uncheckedIcon={false}
    checkedIcon={false}
    height={22}
    width={48}
    className="react-switch"
    id="material-switch"
  />;
    this.state.stateoftheclick="show";
  }
  else{
    this.state.hh="hu";
    this.state.wh="hu";
    this.state.ph="hu";
    this.state.bh="hu";
    this.state.th="hu";
    this.state.sh="hu";
    this.state.switchtextnyt = "";
    this.state.switchtextguard= "";
    this.state.stateoftheclick="hide";
  }
var booktabswitch;
  if (this.state.stateofbooktab=="no")
  {
    booktabswitch=<span><ReactTooltip place="bottom" effect = "solid" type="dark" className= "tooltipcust"/><MdBookmarkBorder data-tip="Bookmark" color="white" size={34} className="bookmarkbar" onClick={this.handleBookmarkPage.bind(this)}/></span>
  }
  else
  {
    booktabswitch=<span><MdBookmark data-tip="Bookmark" data-for="nc1" color="white" size={34} className="bookmarkbar" onClick={this.handleBookmarkPage.bind(this)}/><ReactTooltip place="bottom" effect = "solid" type="dark" id="nc1" className= "tooltipcust"/></span>
  }
  if (this.props.history.location.pathname=="/Bookmarked")
  {
    booktabswitch=<span><MdBookmark data-tip="Bookmark" data-for="nc1" color="white" size={34} className="bookmarkbar" onClick={this.handleBookmarkPage.bind(this)}/><ReactTooltip place="bottom" effect = "solid" type="dark" id="nc1" className= "tooltipcust"/></span>
  }
  else if (this.props.history.location.pathname != "/Bookmarked")
  {
    booktabswitch=<span><ReactTooltip place="bottom" effect = "solid" type="dark" className= "tooltipcust"/><MdBookmarkBorder data-tip="Bookmark" data-for="nc1" color="white" size={34} className="bookmarkbar" onClick={this.handleBookmarkPage.bind(this)}/><ReactTooltip place="bottom" effect = "solid" type="dark" id="nc1" className= "tooltipcust"/></span>
  }
  if(this.props.history.location.pathname == "/search")
  {
    console.log(this.state.searchterm);
    tryitout = <div><AsyncSelect defaultInputValue={this.state.searchterm.value} className="navclass" placeholder= "Enter keyword .." cache={false} loadOptions={inputValue => this.debounceinput(inputValue)} 
    onChange={this.handleSubmit.bind(this)} /></div>
  }
  else if (this.props.history.location.pathname != "/search")
  {
    tryitout = <AsyncSelect  className="navclass" placeholder= "Enter keyword .." cache={false} loadOptions={inputValue => this.debounceinput(inputValue)} 
    onChange={this.handleSubmit.bind(this)} />
  }
  return(
    <>
<Navbar collapseOnSelect expand="lg" bg = "dark" variant="dark" className="Navstyle" >
<Form onSubmit={this.handleSubmit.bind(this)} inline fluid>
{tryitout}
  </Form>

  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
  <Nav className="mr-auto" defaultActiveKey="/home">
    <Nav.Link as={Link} to="/home" href="/home" className={this.state.hh}  >Home</Nav.Link>
    <Nav.Link as={Link} to="/World" href="/World" className={this.state.wh}>World</Nav.Link>
    <Nav.Link as={Link} to="/Politics" href="/Politics" className={this.state.ph}>Politics</Nav.Link>
    <Nav.Link as={Link} to="/Business" href="/Business" className={this.state.bh}>Business</Nav.Link>
    <Nav.Link as={Link} to="/Technology" href="/Technology" className={this.state.th}>Technology</Nav.Link>
    <Nav.Link as={Link} to="/Sports" href="/Sports" className={this.state.sh}>Sports</Nav.Link>
    </Nav>
    <Nav>
      {booktabswitch}
  {switchbarleft}
    
            
        
         {switchbar}
       
       
      
  {switchbarright}
    </Nav>
  </Navbar.Collapse>
</Navbar>

</>
  )
}
}
export default withRouter(Navcomp);
