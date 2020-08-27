import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Cardstuffs from './Cardstuff';
import {css} from '@emotion/core';
import BounceLoader from 'react-spinners/BounceLoader';
import './App.css';
class Business extends Component{

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
            wncat: "",
            wnurl: "",
            wnimg:"",
            wguardianimagesizer: ""

          };


              }
    callAPI() {
            if(this.props.butstateSend=="off")
            {
                fetch("BackendRouteRetracted1"+this.props.butstateSend+"business")
                .then(res => res.json())
                .then(
                    result => {
                      this.setState({
                        results: result.results.slice(0,10)
                      })})
                .then(data => this.setState({wareyouLoading: false}))
                ;
            
            }
            else if (this.props.butstateSend=="on"){
                fetch("BackendRouteRetracted1"+this.props.butstateSend+"business")
                .then(res => res.json())
                .then(
                    result => {
                      this.setState({
                        results: result.response.results.slice(0,10)
                      })})
                .then(data => this.setState({wareyouLoading: false}))
                ;
            }

            }
componentDidMount(){
    this.callAPI();
    this.setState({wareyouLoading: true});

}

    handleStuff=()=>{
                this.state.wtitleofPost = "gone";
              }

     worldparentFunct=(worlddata_from_child)=>{
                this.setState({whasbeenClicked:worlddata_from_child});
              }
    worldparentFunct1=(worlddata_from_child1)=>{
                this.setState({wclickedtitle:worlddata_from_child1});
              }
    worldparentFunct12=(worlddata_from_child12)=>{
                this.setState({wgidup:worlddata_from_child12});
              }
      render(){
        //const {apiResponse} = this.state;
          if(this.state.whasbeenClicked == "no"  && (this.state.wareyouLoading ? 'yes' : 'no') == "no"){
    return (
        
        <Container className="p-3" fluid>

        {this.state.results.map((postDetail, index)=>{
            if(this.props.butstateSend=="off"){
                try{this.state.wimagesizer= postDetail.multimedia.findIndex(x=>x.width > 2000) ;}
                catch(err){this.state.wimagesizer=-1}

                try{this.state.wntitle=postDetail.title}
                catch(err){}
                try{this.state.wndate=postDetail.published_date}
                catch(err){}
                try{this.state.wncontent=postDetail.abstract}
                catch(err){}
                try{this.state.wncat=postDetail.section}
                catch(err){}
                try{this.state.wnurl=postDetail.url}
                catch(err){}
            if(this.state.wimagesizer != -1){
                try{this.state.wnimg=postDetail.multimedia[this.state.wimagesizer].url}
                catch(err){}
                return(<Cardstuffs sendTitle={this.state.wntitle} sendContent={this.state.wncontent} sendDate={this.state.wndate} sendCat={this.state.wncat} 
                    sendURL={this.state.wnurl}
                    sendid = "nyt"
                    sendImage={ this.state.wnimg} 
                    hasClicked={this.worldparentFunct.bind(this)} sendidgup={this.worldparentFunct12.bind(this)} clickerTitle={this.worldparentFunct1.bind(this)}/> );
            }
            else{
                return(<Cardstuffs sendTitle={this.state.wntitle} sendContent={this.state.wncontent} sendDate={this.state.wndate} sendCat={this.state.wncat}
                    sendURL={this.state.wnurl}
                    sendid = "nyt"
                    sendImage="https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg"
                    hasClicked={this.worldparentFunct.bind(this)} sendidgup={this.worldparentFunct12.bind(this)} clickerTitle={this.worldparentFunct1.bind(this)}/> );
            }

            }
            else if (this.props.butstateSend=="on")
            {
                try{
                    this.state.wguardianimagesizer =  postDetail.blocks.main.elements[0].assets.length;
                    this.state.wguardianimagesizer = this.state.wguardianimagesizer - 1;
                    this.state.wguardianimagesizer = postDetail.blocks.main.elements[0].assets[this.state.wguardianimagesizer].file;
                }
                catch(err)
                {
                    this.state.wguardianimagesizer =  "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png";
                }
                try{this.state.wgtitle=postDetail.webTitle}
                catch(err){}
                try{this.state.wgdate=postDetail.webPublicationDate}
                catch(err){}
                try{this.state.wgcontent=postDetail.blocks.body[0].bodyTextSummary}
                catch(err){}
                try{this.state.wgcat=postDetail.sectionId}
                catch(err){}
                try{this.state.wgurl=postDetail.webUrl}
                catch(err){}
                try{this.state.wgid=postDetail.id}
                catch(err){}
               
            return(<Cardstuffs sendTitle={this.state.wgtitle} sendContent={this.state.wgcontent} sendDate={this.state.wgdate} 
                sendCat={this.state.wgcat} sendURL={this.state.wgurl}
                sendImage = {this.state.wguardianimagesizer}
                sendid = {this.state.wgid}
                hasClicked={this.worldparentFunct.bind(this)} sendidgup={this.worldparentFunct12.bind(this)} clickerTitle={this.worldparentFunct1.bind(this)}/> );    
            }
             
            })}
        {/*<Cardstuffs sendTitle={this.state.wtitleofPost} sendContent={this.state.wcontentofPost}/>*/}

        
        </Container>
    
        

    );
}
else if ((this.state.wareyouLoading ? 'yes' : 'no') == "yes" )
{
    
return(
    
    <Container className="centerLoad">
        <Row>
        <div className="centerLoadB"><BounceLoader color="#3049c5"/></div>
        </Row>
        <br />
        <Row>
        <h3 className="centerLoadB">Loading</h3>
        </Row>
    </Container>

 
)
}
else{
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
    <p>Hey there.  GUrl was : {this.state.wgidup}</p>
    <p>Hey there.  The card was clicked? : {this.state.whasbeenClicked}</p>
    <p>Hey there.  Butt is: {this.props.butstateSend}</p>
    
    </div>
        );
}




    }
}

export default Business;
