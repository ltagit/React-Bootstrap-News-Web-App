import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';
import {ToastContainer, toast, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {css} from '@emotion/core';
import BounceLoader from 'react-spinners/BounceLoader';
import TextTruncate from 'react-text-truncate';
import CardBookmarked from './CardBookmarked';
import './App.css';
class Bookmarked extends Component{

    constructor(props){
        super(props);
        this.state={
            whasbeenClicked: "no",
            wclickedtitle: "",
            wclickedcontent: "",
            wtitleofPost: "Test Title",
            wcontentofPost: "Testcontent Blah blah blah if this is the right stuff then idk",
            results: [],
            wareyouLoading: false,
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
            wurlclicked: "",
            wncat: "",
            wnurl: "",
            wnimg:"",
            wguardianimagesizer: "",
            arrayvalue: [],
            indivi: "",
            needsrefresh: "no"
          };
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
              closenotify1 = () => toast("Removing "+ localStorage.getItem("trash"), {
                transition: Zoom,
                autoClose: 3000,
                hideProgressBar: true,
                pauseOnHover: false,
                pauseOnFocusLoss: false,
                bodyClassName: "toasttext",
                draggable: false
              });
    
componentDidMount(){
    console.log("mounted");
        if(localStorage.getItem("trash") != "no")
        {   if(localStorage.getItem("trash") != null)
        { this.closenotify1();}
            localStorage.setItem('trash', "no");

        }
    }
              ;
      render(){
          try{this.setState({indivi: localStorage.getItem("arrayforbook")});}
          catch(err){}
        if(this.state.whasbeenClicked == "no"){
            this.state.arrayvalue=JSON.parse(localStorage.getItem("arrayforbook"));
            if(this.state.arrayvalue==null){
                this.state.arrayvalue=[];
            }
            if (this.state.arrayvalue.length != 0){
                return(
                    <>
                    <ToastContainer position="top-center"/>
                    <Container className="stylingsmallcards " fluid> 
                    <h4 className="resultandbooktitle">Favorites</h4>
                    <CardGroup className="styleattempt1" >
      
                          {this.state.arrayvalue.map((index)=>{  

                        if (localStorage.getItem("source"+index)=="GUARDIAN")
                        {
                            return(
                        <CardBookmarked sendTitle={localStorage.getItem("title"+index)} sendDate={localStorage.getItem("date"+index)} sendCat={localStorage.getItem("cat"+index)}
                          sendURL={localStorage.getItem("shareurl"+index)}
                          sendid = {index}
                          sendImage={localStorage.getItem("image"+index)}
                          sendSource="GUARDIAN"
                          hasClicked={this.worldparentFunct.bind(this)} sendurlupabit={this.worldparentFunct1234.bind(this)} sendidgup={this.worldparentFunct12.bind(this)} clickerTitle={this.worldparentFunct1.bind(this)}/> 

                            );
                        }
                        else{
                            return(
                                <CardBookmarked sendTitle={localStorage.getItem("title"+index)} sendDate={localStorage.getItem("date"+index)} sendCat={localStorage.getItem("cat"+index)}
                          sendURL={localStorage.getItem("shareurl"+index)}
                          sendid = {index}
                          sendImage={localStorage.getItem("image"+index)}
                          sendSource="NYTIMES"
                          hasClicked={this.worldparentFunct.bind(this)} sendurlupabit={this.worldparentFunct1234.bind(this)} sendidgup={this.worldparentFunct12.bind(this)} clickerTitle={this.worldparentFunct1.bind(this)}/> 
                                    );
                        }  
                          
                          
                          
                          })}  

                      </CardGroup>
                    </Container>
                 
                   
                   </>
                );
            }
            else{return(
            <>
            <ToastContainer position="top-center"/>
            <Container className="text-center">
            <h2 className="tinytext">You have no saved articles</h2>
            </Container>
            </>);}
        }

        else {
            this.props.buturlIs(this.state.wgidup);
    this.props.gidSend(this.state.wgidup);
            this.props.sendwhicup(localStorage.getItem("stg"+this.state.wgidup));
         this.props.history.push(
        {pathname: '/empty/' + this.state.wurlclicked
        }); 
        

    return(
        <div>
    <p>Hey there.  GUrl was : {this.state.wgidup}</p>
    <p>Hey there.  The card was clicked? : {this.state.whasbeenClicked}</p>
    <p>Hey there.  Butt is: {this.props.butstateSend}</p>
    
    </div>
        );
        }
      }
}

export default Bookmarked;
