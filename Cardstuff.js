import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {MdShare} from 'react-icons/md';
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

class Cardstuffs extends Component{
  constructor(props){
    super (props);
    this.state = {
      youclicked: "no",
      thistitle:"testing title for this",
    thismoddate:"nodate",
    thismodcat: "",
  thiscatcolor: "",
  thisgid: "somebody",
showornot: false};
this.openmodal = this.openmodal.bind(this);
  this.closemodal = this.closemodal.bind(this);
  }
  handleClick() {
      
      this.state.thisgid = this.props.sendid;
      var tempsendup = this.state.thisgid;
      this.props.sendidgup(tempsendup);
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

render(){
  if (this.state.youclicked=="no"){
    if(this.props.sendDate != null)
    {this.state.thismoddate=this.props.sendDate.substring(0,10);}
    if(this.props.sendCat != null)
    {
      this.state.thismodcat=this.props.sendCat.toUpperCase();
        if(this.state.thismodcat=="WORLD")
        {
          this.state.thiscatcolor = "worldcss";
        }
        else if (this.state.thismodcat=="POLITICS")
        {
          this.state.thiscatcolor = "politicscss";
        }
        else if (this.state.thismodcat=="BUSINESS")
        {
          this.state.thiscatcolor = "businesscss";
        }
        else if (this.state.thismodcat=="TECHNOLOGY")
        {
          this.state.thiscatcolor = "technologycss";
        }
        else if (this.state.thismodcat=="SPORTS" || this.state.thismodcat=="SPORT")
        {
          this.state.thiscatcolor = "sportscss";
        }
        else{
          this.state.thiscatcolor="allelsecss";
        }
    }
    
    return(
      <>

  <Card className="cardspecial" onClick={() => this.handleClick()}>

    <Container className="marginsof" fluid>
      <Row>
        
        <Col sm={4} md={3} lg={3} xl={3}><Image className="imgwd" src={this.props.sendImage} thumbnail fluid/></Col>
        <Col sm={8} md={9} lg={9} xl={9}><Card.Title className="hometitle">{this.props.sendTitle} <MdShare onClick={this.openmodal} /></Card.Title>
        <Card.Text >
        <TextTruncate 
        line={3}
        element="span"
        truncateText="..."
        text={this.props.sendContent}
        />
      </Card.Text>
          <Row>
    <Col xs={9} lg={5}className="homedate">{this.state.thismoddate}</Col>
    <Col xs={3} lg={7} className="homebadge d-flex justify-content-end justify-content-end"><Badge className={this.state.thiscatcolor}>{this.state.thismodcat}</Badge></Col>
          </Row>
      </Col>
      </Row>
    </Container>

  
  </Card>
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
  
    )
  }

else{
  return(
   {/*<Testing oldTitle={this.state.thistitle}/>*/}

  )
}  
}
}


export default Cardstuffs;
