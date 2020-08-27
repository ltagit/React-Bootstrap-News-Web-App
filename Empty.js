import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ScrollIntoView from 'react-scroll-into-view';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import {ToastContainer, toast, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import ReactTooltip from 'react-tooltip';
import commentBox from 'commentbox.io';
import BounceLoader from 'react-spinners/BounceLoader';
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


class Empty extends Component{
constructor(props){
    super(props);
    this.state = {youclicked: "no",
      thistitle:"Anger on Easter Island after truck crashes into sacred stone statue",
    thismoddate:"nodate",
    thismodcat: "",
  thiscatcolor: "",
  thiscustomid: "",
  thisisnytorguard: "NYT",
  areyouLoadinge: true,
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
  texttoenter: "",
  catfor: "",
  expandagain: "no",
  initialarrayvalue: [],
  thistestingurl: "http://www.bafta.org/games/awards/story",
  thistestingtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quam lacus, gravida vel lacus ac, posuere euismod sapien. Aliquam nec aliquet diam, vel mattis erat. Ut semper, justo vel tincidunt fermentum, velit augue accumsan est, vitae laoreet ligula tortor vel nisl. Suspendisse dolor odio, eleifend cursus ipsum et, porta rutrum lorem. Duis sed hendrerit nulla, nec efficitur urna. Fusce vulputate ligula id dapibus rhoncus. In vel enim ac urna viverra elementum. Curabitur ornare facilisis cursus. Nullam ultrices auctor ligula, et consequat tellus suscipit eget. Nam vel turpis congue, volutpat quam vitae, ornare mi. Sed vel mi a quam fermentum efficitur in vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales nisi ut fermentum porttitor. Phasellus volutpat tempus justo, a accumsan ante elementum in. Fusce tincidunt lacus non feugiat fermentum. Aliquam neque erat, ullamcorper vulputate interdum nec, convallis ac enim. Mauris cursus suscipit turpis et pharetra. Praesent diam neque, sagittis et libero vitae, aliquet pulvinar tellus. Sed ac quam quis neque rutrum mattis et sit amet dui. Fusce feugiat porta leo in interdum. Ut commodo nisl in eros blandit, eu porttitor est vehicula. Fusce consequat metus lacus, id cursus nibh aliquam sit amet. Nulla in placerat erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque consectetur vel libero nec sodales. Nullam in pulvinar sapien, et cursus massa. Fusce eu orci metus. Nulla at aliquam ipsum. In aliquam augue ac rhoncus volutpat. Fusce a augue sit amet dolor sollicitudin tempus nec gravida erat. Donec varius sem id imperdiet viverra. Nulla consectetur arcu vitae nisi ornare, sed euismod massa suscipit. Integer quam nulla, congue quis volutpat sed, pulvinar nec libero. Nunc vitae mauris a nunc placerat scelerisque sit amet eget sem. Donec sed est at tortor dignissim convallis et pellentesque lacus. Duis a lacinia felis. Morbi efficitur eros id orci rutrum interdum. Nunc non euismod ante. Curabitur libero nisl, sollicitudin ut accumsan vehicula, efficitur eu lectus. Sed tortor leo, mollis quis lectus ut, cursus molestie urna. Ut consequat scelerisque nibh, nec suscipit sapien cursus et. Donec vulputate risus eu dictum fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas fermentum nisi ut risus commodo tempor. Vivamus vitae metus ullamcorper, venenatis felis vitae, facilisis lorem. Sed ligula quam, feugiat nec orci ut, accumsan pretium lacus. Integer et vulputate nisi. Vestibulum interdum sollicitudin tempus.",
showornot: false};
this.midofpara = React.createRef();
this.offpara = React.createRef();

}


callAPI1() {

    try{
        if(this.props.areyouguardornyt == "NYT")
        {
            this.setState({whichsource: "NYT"});
        }
        else if (this.props.areyouguardornyt == "GUARD")
        {
            this.setState({whichsource: "Guard"});
        }
    }
    catch(err){
    }

    if(this.props.areyouguardornyt == "GUARD")
    {
      axios.post('BackendRouteRetracted2', {
        whichguardurl: this.props.sendingtheidbackdown
      })
      .then(response => {
    
            try{this.setState({thistitle: response.data.response.content.webTitle});}
            catch(err){}
            try{this.setState({catfor: response.data.response.content.sectionId});}
            catch(err){}
            try{this.setState({thistestingtext: response.data.response.content.blocks.body[0].bodyTextSummary});}
            catch(err){}
            try{this.state.thismoddate=response.data.response.content.webPublicationDate.substring(0,10);
            this.setState({thismoddate: this.state.thismoddate});}
            catch(err){}
            try{
              this.state.thisimagearray=response.data.response.content.blocks.main.elements[0].assets.length;
              this.state.thisimagearray=this.state.thisimagearray-1;
              this.state.thisimagesource=response.data.response.content.blocks.main.elements[0].assets[this.state.thisimagearray].file;
              this.state.imagesizere=1;
            }
            catch(err){
            console.log(err);
            console.log("somethingoff");
            this.state.imagesizere=-1;}
        
    
        
    })
    .then(data => this.setState({areyouLoadinge: false}))
      .catch(function (error) {
        console.log(error);
      });
        
       
    
    
    }






    else {
axios.post('BackendRouteRetracted1', {
  whichurl: this.props.sendingtheurldown
})
.then(response => {

      try{this.setState({thistitle: response.data.response.docs[0].headline.main});}
      catch(err){}
      try{this.setState({catfor: response.data.response.docs[0].section_name});}
      catch(err){}
      try{this.setState({thistestingtext: response.data.response.docs[0].abstract});}
      catch(err){}
      try{this.state.thismoddate=response.data.response.docs[0].pub_date.substring(0,10);
      this.setState({thismoddate: this.state.thismoddate});}
      catch(err){}
      try{this.state.thisimagearray= response.data.response.docs[0].multimedia.length;
      for(var i =0; i<this.state.thisimagearray; i++)
      {
          if(response.data.response.docs[0].multimedia[i].width > 2000)
          {this.state.thisimagesource="https://static01.nyt.com/"+response.data.response.docs[0].multimedia[i].url;
          this.state.imagesizere=1;
          break;}
          else{
              this.state.imagesizere=-1;
          }
      }
      }
      catch(err){
      console.log(err);
      this.state.imagesizere=-1;}
  

  
})
.then(data => this.setState({areyouLoadinge: false}))
.catch(function (error) {
  console.log(error);
});
    }




    }


handleExpand()
{  var scrollOptions = {
  bottom: 0,
  top: "wellhello",
  behavior: 'smooth' 
}
this.setState({expandagain: "yes"});
var togtodelay;
    if(this.state.thisexpand == "no")
    {
       
        this.setState({thisarrowstate: "down"});
        this.setState({thisexpand: "yes"});
        
    }

else
    {
     
          
      setTimeout(
        function() {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });


        }
        .bind(this),
        1
    );
       

    this.setState({thisexpand: "no"});
    this.setState({thisarrowstate: "up"});   
    }
  
}

handleBook()
{
    this.setState({expandagain: "no"});
    if(this.state.thisbookmarkpressed == "no")
    {   
        this.setState({thisbookmarkpressed: "yes"});

        if(this.props.areyouguardornyt=="GUARD")
        {
          localStorage.setItem("book"+this.props.sendingtheidbackdown, "yes");
          localStorage.setItem('source'+this.props.sendingtheidbackdown, "GUARDIAN");
          localStorage.setItem('title'+this.props.sendingtheidbackdown, this.state.thistitle);
          localStorage.setItem('image'+this.props.sendingtheidbackdown, this.state.thisimagesource);
          localStorage.setItem('cat'+this.props.sendingtheidbackdown, this.state.catfor);
          localStorage.setItem('shareurl'+this.props.sendingtheidbackdown, this.props.sendingtheurldown);
          localStorage.setItem('date'+this.props.sendingtheidbackdown, this.state.thismoddate);
          localStorage.setItem('trash', "no");
        }
        else
        {
          localStorage.setItem("book"+this.props.sendingtheurldown, "yes");
          localStorage.setItem('source'+this.props.sendingtheurldown, "NYTIMES");
          localStorage.setItem('title'+this.props.sendingtheurldown, this.state.thistitle);
          localStorage.setItem('image'+this.props.sendingtheurldown, this.state.thisimagesource);
          localStorage.setItem('cat'+this.props.sendingtheurldown, this.state.catfor);
          localStorage.setItem('shareurl'+this.props.sendingtheurldown, this.props.sendingtheurldown);
          localStorage.setItem('date'+this.props.sendingtheurldown, this.state.thismoddate);
          localStorage.setItem('trash', "no");
        }

          if (localStorage.getItem("arrayforbook")== null)
          { 
            if(this.props.areyouguardornyt == "GUARD"){
            this.state.initialarrayvalue.push(this.props.sendingtheidbackdown);
            localStorage.setItem("arrayforbook", JSON.stringify(this.state.initialarrayvalue));
            
            }
            else{
            this.state.initialarrayvalue.push(this.props.sendingtheurldown);
            localStorage.setItem("arrayforbook", JSON.stringify(this.state.initialarrayvalue));
            
            }
            
          }
          else{
            this.state.initialarrayvalue=JSON.parse(localStorage.getItem("arrayforbook"));
            if(this.props.areyouguardornyt == "GUARD"){
              this.state.initialarrayvalue.push(this.props.sendingtheidbackdown);
              localStorage.setItem("arrayforbook", JSON.stringify(this.state.initialarrayvalue));
              
              }
              else{
              this.state.initialarrayvalue.push(this.props.sendingtheurldown);
              localStorage.setItem("arrayforbook", JSON.stringify(this.state.initialarrayvalue));
              
              }
            console.log(this.state.initialarrayvalue);
          }
          this.notify();
    }
    else
    { 
    try{this.state.initialarrayvalue=JSON.parse(localStorage.getItem("arrayforbook"));
    if(this.props.areyouguardornyt == "GUARD"){
      localStorage.removeItem('source'+this.props.sendingtheidbackdown);
      localStorage.removeItem('title'+this.props.sendingtheidbackdown);
      localStorage.removeItem('image'+this.props.sendingtheidbackdown);
      localStorage.removeItem('cat'+this.props.sendingtheidbackdown);
      localStorage.removeItem('shareurl'+this.props.sendingtheidbackdown);
      localStorage.removeItem('date'+this.props.sendingtheidbackdown);
      localStorage.setItem('trash', "no");
      this.state.initialarrayvalue=this.state.initialarrayvalue.filter(av => av != this.props.sendingtheidbackdown);
      localStorage.setItem("arrayforbook", JSON.stringify(this.state.initialarrayvalue));
      console.log(this.state.initialarrayvalue);
      }
      else{
        localStorage.removeItem('source'+this.props.sendingtheurldown);
        localStorage.removeItem('title'+this.props.sendingtheurldown);
        localStorage.removeItem('image'+this.props.sendingtheurldown);
        localStorage.removeItem('cat'+this.props.sendingtheurldown);
        localStorage.removeItem('shareurl'+this.props.sendingtheurldown);
        localStorage.removeItem('date'+this.props.sendingtheurldown);
        localStorage.setItem('trash', "no");
        this.state.initialarrayvalue=this.state.initialarrayvalue.filter(av => av != this.props.sendingtheurldown);
        localStorage.setItem("arrayforbook", JSON.stringify(this.state.initialarrayvalue));
      
      }
  }
    catch(err){}  
      
        
        this.setState({thisbookmarkpressed: "no"});
        if(this.props.areyouguardornyt=="GUARD")
        {
          localStorage.setItem("book"+this.props.sendingtheidbackdown, "no");
        }
        else
        {
          localStorage.setItem("book"+this.props.sendingtheurldown, "no");
        }
        
        this.closenotify();
    }
  
}

componentDidMount() {
    this.setState({areyouLoadinge: true});
    let boxId1 = "lol";
    this.setState({iamdetailed: "yes"});
    commentBox('5676076156059648-proj');
    this.callAPI1();

    
}
componentDidUpdate(oldstate){
  if(oldstate.texttoenter != this.state.texttoenter && this.state.thisexpand == "yes" && this.state.expandagain =="yes" && oldstate.thisarrowstate != this.state.thisarrowstate)
  {
    window.scrollTo({
      top: this.midofpara.current.offsetTop+120,
      left: 0,
      behavior: 'smooth'
    });
  console.log("heretoscroll");

  }

}

componentWillMount(){
  this.state.testtoggle="yes";
  console.log(this.props.areyouguardornyt);

  if(this.props.areyouguardornyt == "GUARD"){
    if(localStorage.getItem('book'+this.props.sendingtheidbackdown)==null)
    {
      this.setState({thisbookmarkpressed: "no"});
    }
    else{
      this.setState({thisbookmarkpressed: localStorage.getItem('book'+this.props.sendingtheidbackdown)});
    }




    }
    else{
      if(localStorage.getItem('book'+this.props.sendingtheurldown)==null)
      {
        this.setState({thisbookmarkpressed: "no"});
      }
      else{
        this.setState({thisbookmarkpressed: localStorage.getItem('book'+this.props.sendingtheurldown)});
      }


    }
  
  
  
  
}
componentWillUnmount()
{
  this.state.testtoggle="no";
  console.log("hereunmount");
  
}


notify = () => toast("Saving "+this.state.thistitle, {
    transition: Zoom,
    autoClose: 3000,
    hideProgressBar: true,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    bodyClassName: "toasttext",
    draggable: false
  });
  closenotify = () => toast("Removing "+this.state.thistitle, {
    transition: Zoom,
    autoClose: 3000,
    hideProgressBar: true,
    pauseOnHover: false,
    pauseOnFocusLoss: false,
    bodyClassName: "toasttext",
    draggable: false
  });


  render(){
   
    let switchdisplay;
    let arrowis;
    let bookmarkis;
    this.state.thiscustomid=this.state.thistitle.replace(/\s/g, "");
    

          if(this.state.thisexpand == "yes")
  {this.state.texttoenter = this.state.thistestingtext;
          }
          else{
            this.state.texttoenter = <TextTruncate 
            line={6}
            element="span"
            truncateText="..."
            text={this.state.thistestingtext}
            
            />;
            
          }
          if(this.state.thisarrowstate=="down")
          {
           arrowis = <MdKeyboardArrowUp size={30} className="pointerover" onClick={this.handleExpand.bind(this)} />;
          }
          else
          {
            arrowis = <MdKeyboardArrowDown size={30} className="pointerover" onClick={this.handleExpand.bind(this)} />;
          }
          if(this.state.thisbookmarkpressed=="no")
          {
           bookmarkis = <MdBookmarkBorder color="rgba(217,0,50)" size={30} className="pointerover" onClick={this.handleBook.bind(this)} />;
          }
          else
          {
            bookmarkis = <MdBookmark color="rgba(217,0,50)" size={30} className="pointerover" onClick={this.handleBook.bind(this)} />;
          }
        if(this.state.imagesizere == -1 && this.state.whichsource == "NYT"){
            this.state.thisimagesource = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg";
          }
        else if(this.state.imagesizere == -1 && this.state.whichsource == "Guard"){
            this.state.thisimagesource = "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png";
          }
          if((this.state.areyouLoadinge ? 'yes' : 'no') == "no")
          {
              return (
            <>
            <Container fluid>
            <br/>

            <ToastContainer position="top-center"/>
        <Card className="styleattempt2 cardshadow" > 
          <Card.Body >
            <Container fluid>
                <Row>
                <Card.Title className="expandedTitle">{this.state.thistitle}</Card.Title>
                </Row>
                <Row>
                    <Col xs={6} s={6} m={8} lg={9} className="expandeddate justify-content-start">{this.state.thismoddate}</Col>
                    <Col xs={4} s={4} m={2} lg={2} className=" d-flex justify-content-end">
          
                    <FacebookShareButton data-tip="Facebook" data-for="dft1" url={this.props.sendingtheurldown} hashtag="#CSCI_571_NewsApp"  > <FacebookIcon size={25} round={true}/> </FacebookShareButton>
                    <TwitterShareButton data-tip="Twitter" data-for="dft1" url={this.props.sendingtheurldown} hashtags={["CSCI_571_NewsApp"]}  > <TwitterIcon size={25} round={true}/> </TwitterShareButton>
                    <EmailShareButton data-tip="Email" data-for="dft1" url={this.props.sendingtheurldown} subject="#CSCI_571_NewsApp" > <EmailIcon size={25} round={true}/> </EmailShareButton>
                        </Col>
                    <Col xs={1} s={1} m={1} lg={1} ><><span data-tip="Bookmark" data-for="dft1">{bookmarkis}</span></></Col>
                </Row>
                <br />    
               <Row md={13} lg={12}>
                <Col md={12} lg={12} className="pl-0 pr-0"> 
                <Card.Img  className="trytofix" md={12} lg={13} variant="top" src={this.state.thisimagesource}  fluid/>
                </Col>
                </Row>
              <Row>
                <Card.Text className="show">
                    <br />
                    <span ref={this.midofpara}></span>
                {this.state.texttoenter}
                
              </Card.Text>
              </Row>
              <Row>
                  <Col xs={10} lg={11}></Col>
                  <Col xs={2} lg={1}>{arrowis}</Col>
              </Row>
            </Container>
            </Card.Body>
        
          </Card>

          <br />
          <span>
          <div className="commentbox" />
          </span>
          <ReactTooltip effect = "solid" type="dark" id="dft1" className= "tooltipcust"/>
          </Container>
          
        
        </>
        );
        }
          else if((this.state.areyouLoadinge ? 'yes' : 'no') == "yes")
          {return (
            <>
            <Container>
            <br/>

            <ToastContainer position="top-center"/>
        
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
          <span className="hiddenz">
          <div className="commentbox" />
          </span>
          
          </Container>
          
        
        </>
        );}
  



      
}
}

export default Empty;
