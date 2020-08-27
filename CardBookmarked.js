import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import {MdShare, MdDelete} from 'react-icons/md';
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
  TwitterShareButton,
} from "react-share";
import {css} from '@emotion/core';
import BounceLoader from 'react-spinners/BounceLoader';
import TextTruncate from 'react-text-truncate';
import './App.css';
class CardBookmarked extends Component{

  constructor(props){
      super(props);
      this.state={
        youclicked: "no",
        thistitle:"testing title for this",
      thismoddate:"nodate",
      thismodcat: "SPORTS",
    thiscatcolor: "",
    thissourcecolor:"",
    thisgid: "somebody",
    initialarrayvalue: [],
  showornot: false};
  this.openmodal = this.openmodal.bind(this);
    this.closemodal = this.closemodal.bind(this); }
    handleClick() {
      if (this.props.sendSource=="NYTIMES")
      {localStorage.setItem('stg'+this.props.sendid, "NYT");}
      else{localStorage.setItem('stg'+this.props.sendid, "GUARD");}
      this.state.thisgid = this.props.sendid;
      var tempsendup = this.state.thisgid;
      this.props.sendidgup(tempsendup);
      this.props.sendurlupabit(this.props.sendURL);
    this.setState({thistitle: (this.props.sendTitle) });
    var curtitle=this.props.sendURL;
    this.props.clickerTitle(curtitle);
    this.props.hasClicked("yes");
    
  }
closemodal()
{
  this.setState({showornot: false});
}
openmodal(e)
{ e.stopPropagation();
  this.setState({showornot: true});
  
}
trashy(e)
{try{this.state.initialarrayvalue=JSON.parse(localStorage.getItem("arrayforbook"));
  if(this.props.sendSource == "NYTIMES"){
    console.log("Trashing NYT.  Remove" + this.props.sendid+ "from browserhistory");
    localStorage.setItem('trash', this.props.sendTitle);
    localStorage.setItem("book"+this.props.sendid, "no");
    localStorage.removeItem('source'+this.props.sendid);
    localStorage.removeItem('title'+this.props.sendid);
    localStorage.removeItem('image'+this.props.sendid);
    localStorage.removeItem('cat'+this.props.sendid);
    localStorage.removeItem('shareurl'+this.props.sendid);
    localStorage.removeItem('date'+this.props.sendid);
    this.state.initialarrayvalue=this.state.initialarrayvalue.filter(av => av != this.props.sendid);
    localStorage.setItem("arrayforbook", JSON.stringify(this.state.initialarrayvalue));
  }
  else if(this.props.sendSource == "GUARDIAN"){
    console.log("Trashing Guardian.  Remove" + this.props.sendid+ "from browserhistory");
    localStorage.setItem('trash', this.props.sendTitle);
    localStorage.setItem("book"+this.props.sendid, "no");
    localStorage.removeItem('source'+this.props.sendid);
    localStorage.removeItem('title'+this.props.sendid);
    localStorage.removeItem('image'+this.props.sendid);
    localStorage.removeItem('cat'+this.props.sendid);
    localStorage.removeItem('shareurl'+this.props.sendid);
    localStorage.removeItem('date'+this.props.sendid);
    this.state.initialarrayvalue=this.state.initialarrayvalue.filter(av => av != this.props.sendid);
    localStorage.setItem("arrayforbook", JSON.stringify(this.state.initialarrayvalue));

  }

}
catch(err){}
this.props.history.push('/Bookmarked');
e.stopPropagation();

}
    render(){

      if (this.state.youclicked=="no"){
        if(this.props.sendDate != null)
        {this.state.thismoddate=this.props.sendDate.substring(0,10);}
        if(this.props.sendCat != null)
        {
          this.state.thismodcat=this.props.sendCat.toUpperCase();
            if(this.state.thismodcat=="WORLD")
            {
              this.state.thiscatcolor = "bworldcss";
            }
            else if (this.state.thismodcat=="POLITICS")
            {
              this.state.thiscatcolor = "bpoliticscss";
            }
            else if (this.state.thismodcat=="BUSINESS")
            {
              this.state.thiscatcolor = "bbusinesscss";
            }
            else if (this.state.thismodcat=="TECHNOLOGY")
            {
              this.state.thiscatcolor = "btechnologycss";
            }
            else if (this.state.thismodcat=="SPORTS" || this.state.thismodcat=="SPORT")
            {
              this.state.thiscatcolor = "bsportscss";
            }
            else{
              this.state.thiscatcolor="ballelsecss";
            }
        } 
        if (this.props.sendSource == "GUARDIAN")
        {this.state.thissourcecolor = "guardcol"}
        else{
          this.state.thissourcecolor="nycol"
        }     
        return(
            <>
            <>
          <Col sm ={6} md={6} lg={4} xl={3} className="specialcol1">
              <Card  className="bcardspecial" onClick={() => this.handleClick()}>
                
                <Container fluid>
                  <br/>
          <Card.Subtitle className="specialfav">
           <TextTruncate 
        line={2}
        element="span"
        truncateText="..."
        text={this.props.sendTitle}
        /> <MdShare onClick={this.openmodal} /> <MdDelete onClick={this.trashy.bind(this)}/></Card.Subtitle>
               <Image className="w-auto" src={this.props.sendImage} fluid thumbnail/>
                     
<Row className="customtextbook" fluid>
  
  <Col xs ={6} sm ={6} md={7} lg={6} xl={6} className="bdate"><span className="d-flex justify-content-start">{this.state.thismoddate}</span></Col>
  <Col xs ={6} sm ={6} md={5} lg={6} xl={6}><span className="d-flex justify-content-end"><Badge className={this.state.thiscatcolor}>{this.state.thismodcat}</Badge><Badge className={this.state.thissourcecolor}>{this.props.sendSource}</Badge></span></Col>
  
</Row>

           </Container>
          
          </Card>
          <br />
       </Col>

       

</>
  <>
  <Modal show={this.state.showornot} onHide={this.closemodal} animation={true}>
    <Modal.Header closeButton>
      <Modal.Title>{this.props.sendTitle}</Modal.Title>
    </Modal.Header>
    <Modal.Body className="modalbodycss">Share via <br />
    <Container fluid>
      <Row>
        < Col xsm={4}>
        <FacebookShareButton url={this.props.sendURL} hashtag="#CSCI_571_NewsApp"  > <FacebookIcon size={42} round={true}/> </FacebookShareButton>
        </Col>
        < Col xsm={4}>
        <TwitterShareButton url={this.props.sendURL} hashtags={["CSCI_571_NewsApp"]}  > <TwitterIcon size={42} round={true}/> </TwitterShareButton>
        </Col>
        < Col xsm={4}>
        <EmailShareButton url={this.props.sendURL} subject="#CSCI_571_NewsApp" > <EmailIcon size={42} round={true}/> </EmailShareButton>
        </Col>
      </Row>
    </Container>
    </Modal.Body>
  </Modal>
</>
 <br />
 </>
        );
        
    }
}
}

export default withRouter (CardBookmarked);
