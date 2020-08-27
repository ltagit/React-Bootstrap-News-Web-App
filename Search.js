import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import {ToastContainer, toast, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import ReactTooltip from 'react-tooltip';
import commentBox from 'commentbox.io';
import CardGroup from 'react-bootstrap/CardGroup';
import BounceLoader from 'react-spinners/BounceLoader';
import Cardsearch from './Cardsearch';
import { Link, animateScroll as scroll } from "react-scroll";
import {MdKeyboardArrowUp, MdKeyboardArrowDown, MdBookmark, MdBookmarkBorder } from 'react-icons/md';
import {FaBookmark, FaRegBookmark } from 'react-icons/fa';
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
  TwitterShareButton,
} from "react-share";
import ListGroup from 'react-bootstrap/ListGroup';
import TextTruncate from 'react-text-truncate';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Testing from './Testing';
import './App.css';


class Search extends Component{
constructor(props){
    super(props);
    this.state = {youclicked: "no",
    thistitle:"Anger on Easter Island after truck crashes into sacred stone statue",
    thismoddate:"nodate",
    thismodcat: "",
  thiscatcolor: "",
  thiscustomid: "",
  storeresultg: "",
  thisisnytorguard: "NYT",
  areyouLoadinge: false,
  idtoget: "a",
  thisarrowstate: "up",
  thisexpand: "no",
  respjson: [],
  thisimagesource: "",
  whichsource: "NYT",
  iamdetailed:"no",
  thisimagearray: [],
  thisbookmarkpressed: "no",
  imagesizere: "-1",
  testtoggle: "off",
  willexpandtext: "",
  togtodelay: 0,
  texttoenter: "",
  catfor: "",
  initialarrayvalue: [],
  thistestingurl: "http://www.bafta.org/games/awards/story",
  thistestingtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quam lacus, gravida vel lacus ac, posuere euismod sapien. Aliquam nec aliquet diam, vel mattis erat. Ut semper, justo vel tincidunt fermentum, velit augue accumsan est, vitae laoreet ligula tortor vel nisl. Suspendisse dolor odio, eleifend cursus ipsum et, porta rutrum lorem. Duis sed hendrerit nulla, nec efficitur urna. Fusce vulputate ligula id dapibus rhoncus. In vel enim ac urna viverra elementum. Curabitur ornare facilisis cursus. Nullam ultrices auctor ligula, et consequat tellus suscipit eget. Nam vel turpis congue, volutpat quam vitae, ornare mi. Sed vel mi a quam fermentum efficitur in vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales nisi ut fermentum porttitor. Phasellus volutpat tempus justo, a accumsan ante elementum in. Fusce tincidunt lacus non feugiat fermentum. Aliquam neque erat, ullamcorper vulputate interdum nec, convallis ac enim. Mauris cursus suscipit turpis et pharetra. Praesent diam neque, sagittis et libero vitae, aliquet pulvinar tellus. Sed ac quam quis neque rutrum mattis et sit amet dui. Fusce feugiat porta leo in interdum. Ut commodo nisl in eros blandit, eu porttitor est vehicula. Fusce consequat metus lacus, id cursus nibh aliquam sit amet. Nulla in placerat erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque consectetur vel libero nec sodales. Nullam in pulvinar sapien, et cursus massa. Fusce eu orci metus. Nulla at aliquam ipsum. In aliquam augue ac rhoncus volutpat. Fusce a augue sit amet dolor sollicitudin tempus nec gravida erat. Donec varius sem id imperdiet viverra. Nulla consectetur arcu vitae nisi ornare, sed euismod massa suscipit. Integer quam nulla, congue quis volutpat sed, pulvinar nec libero. Nunc vitae mauris a nunc placerat scelerisque sit amet eget sem. Donec sed est at tortor dignissim convallis et pellentesque lacus. Duis a lacinia felis. Morbi efficitur eros id orci rutrum interdum. Nunc non euismod ante. Curabitur libero nisl, sollicitudin ut accumsan vehicula, efficitur eu lectus. Sed tortor leo, mollis quis lectus ut, cursus molestie urna. Ut consequat scelerisque nibh, nec suscipit sapien cursus et. Donec vulputate risus eu dictum fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas fermentum nisi ut risus commodo tempor. Vivamus vitae metus ullamcorper, venenatis felis vitae, facilisis lorem. Sed ligula quam, feugiat nec orci ut, accumsan pretium lacus. Integer et vulputate nisi. Vestibulum interdum sollicitudin tempus.",
showornot: false,

whasbeenClicked: "no",
wclickedtitle: "",
wclickedcontent: "",
wtitleofPost: "Test Title",
wcontentofPost: "Testcontent Blah blah blah if this is the right stuff then idk",
results: [],
wareyouLoading: true,
wimagesizer: "",
wgtitle: "",
wgdate: "",
wgcontent: "",
wgcat: "",
wgurl: "",
wgid: "",
wgidup: "",
wntitle: "",
wndate: "",
wncontent: "",
wncat: "",
wnurl: "",
wnimg:"",
wguardianimagesizer: ""
};


}
callAPI1() {

  try{
      if(this.props.butstateSend == "off")
      {
          this.setState({whichsource: "NYT"});
      }
      else if (this.props.butstateSend == "on")
      {
          this.setState({whichsource: "Guard"});
      }
  }
  catch(err){
  }

  if(this.props.butstateSend == "on")
  {
    axios.post('BackendRouteRetracted4', {
      whichguardurl: this.props.history.location.search.substring(1)
    })
    .then(response => {
          if (response.data.response.results.length == 0)
          {console.log("no results")}
          else{
            this.setState({storeresultg: response.data.response.results});
          }
  }).then(data => this.setState({wareyouLoading: false}))
    .catch(function (error) {
      console.log("hereerr");
      console.log(error);
    });
      
  }



  else {
axios.post('BackendRouteRetracted3', {
whichurl: this.props.history.location.search.substring(1)
})
.then(response => {
  if (response.data.response.docs.length == 0)
  {console.log("no results")}
  else{
    this.setState({storeresultg: response.data.response.docs.slice(0,10)});
  }
}).then(data => this.setState({wareyouLoading: false}))
.catch(function (error) {

console.log(error);
});
  }




  }
componentDidMount(){
  this.callAPI1();
  this.setState({wareyouLoading: true});
  console.log(this.state.wareyouLoading);
}
handleStuff=()=>{
  this.state.titleofPost = "gone";
}

worldparentFunct=(worlddata_from_child)=>{
  this.setState({whasbeenClicked:worlddata_from_child});
}
worldparentFunct1=(worlddata_from_child1)=>{
  this.setState({wclickedtitle:worlddata_from_child1});
}
worldparentFunct1234=(worlddata_from_child1234)=>{
  this.setState({wurlclicked:worlddata_from_child1234});
}
worldparentFunct12=(worlddata_from_child12)=>{
  this.setState({wgidup:worlddata_from_child12});
}

  render(){

    console.log(this.state.wareyouLoading);
    console.log(this.state.whasbeenClicked);
  if(this.state.whasbeenClicked == "no" && (this.state.wareyouLoading ? 'yes' : 'no') == "no" && this.state.storeresultg.length !=0){

      if(this.props.butstateSend == "on")
      {
        return(
          <>
          <br/>
                <Container className="stylingsmallcards " fluid> 
                    <h4 className="resultandbooktitle">Results</h4>
                    <CardGroup className="styleattempt1" >
          

          {
            this.state.storeresultg.map((index)=>{
              try{
                this.state.wguardianimagesizer =  index.blocks.main.elements[0].assets.length;
                this.state.wguardianimagesizer = this.state.wguardianimagesizer - 1;
                this.state.wguardianimagesizer = index.blocks.main.elements[0].assets[this.state.wguardianimagesizer].file;
            }
            catch(err)
            {
                this.state.wguardianimagesizer =  "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png";
            } 
            try{this.state.wgtitle=index.webTitle;}
            catch(err){}
            try{this.state.wgcat=index.sectionId;}
            catch(err){}
            try{this.state.wgdate=index.webPublicationDate;}
            catch(err){}
            try{this.state.wgurl=index.webUrl;}
            catch(err){}
            try{this.state.wgid=index.id;}
            catch(err){}
              return(<Cardsearch sendTitle={this.state.wgtitle} sendDate={this.state.wgdate} 
              sendCat={this.state.wgcat}
              sendURL={this.state.wgurl}
              sendid = {this.state.wgid}
              sendImage={this.state.wguardianimagesizer}
              sendSource="GUARDIAN"
              hasClicked={this.worldparentFunct.bind(this)}  
              sendidgup={this.worldparentFunct12.bind(this)} clickerTitle={this.worldparentFunct1.bind(this)}/>);})
          }



                              </CardGroup>
                    </Container>
                 
          </>);
      }
      else if(this.props.butstateSend == "off"){
        return(

          <>
                    <Container className="stylingsmallcards " fluid> 
                    <h4 className="resultandbooktitle">Results</h4>
                    <CardGroup className="styleattempt1" >


          {
            this.state.storeresultg.map((index)=>{
              try{this.state.wimagesizer= index.multimedia.findIndex(x=>x.width > 2000) ;}
              catch(err){this.state.wimagesizer=-1}

            try{this.state.wntitle=index.headline.main;}
            catch(err){}
            try{this.state.wncat=index.news_desk;}
            catch(err){}
            try{this.state.wndate=index.pub_date;}
            catch(err){}
            try{this.state.wnurl=index.web_url;}
            catch(err){}
            
              if(this.state.wimagesizer != -1){
                try{this.state.wnimg="https://static01.nyt.com/"+index.multimedia[this.state.wimagesizer].url;}
                catch(err){}
            }
            else{this.state.wnimg="https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg";}
            return(
              <Cardsearch sendTitle={this.state.wntitle} sendDate={this.state.wndate} 
              sendCat={this.state.wncat}
              sendURL={this.state.wnurl}
              sendid = {this.state.wnurl}
              sendImage={this.state.wnimg}
              sendSource="NYTIMES"
              hasClicked={this.worldparentFunct.bind(this)}  
              sendidgup={this.worldparentFunct12.bind(this)} clickerTitle={this.worldparentFunct1.bind(this)}/>
            );
            
            })
          }



                              </CardGroup>
                    </Container>
                 
          </>
);
      }

}





else if((this.state.wareyouLoading ? 'yes' : 'no') == "yes")
{return (
  <Container>
  <br/>


<Container className="centerLoad" >
<Row>
<div className="centerLoadB"><BounceLoader color="#3049c5"/></div>
</Row>
<br />
<Row>
<h3 className="centerLoadB">Loading</h3>
</Row>
</Container>

<br />

</Container>

);}

else if(this.state.whasbeenClicked == "no" && (this.state.wareyouLoading ? 'yes' : 'no') == "no" && (this.state.storeresultg.length == 0 || this.state.storeresultg.length == null)){
  return(            <Container className="text-center">
  <h2 className="tinytext">No Results Found</h2>
  </Container>);
}

else if(this.state.whasbeenClicked == "yes"){
  console.log("here at the end");
  this.props.buturlIs(this.state.wclickedtitle);
this.props.gidSend(this.state.wgidup);
if (this.props.butstateSend=="off")
{this.props.sendwhicup("NYT");}
else{
{this.props.sendwhicup("GUARD");}
}
this.props.history.push(
{pathname: '/empty/' + this.state.wclickedtitle
}); 
  
  return(
      <div>
<p>outstanding</p>
  
  </div>
      );}


}
}

export default Search;
