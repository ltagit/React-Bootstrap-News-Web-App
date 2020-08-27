import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Cardstuffs from './Cardstuff';
import {css} from '@emotion/core';
import BounceLoader from 'react-spinners/BounceLoader';
import './App.css';
class Home extends Component{
    
    constructor(props){
        super(props);
        this.state={
            hasbeenClicked: "no",
            clickedtitle: "",
            clickedcontent: "",
            titleofPost: "Test Title",
            contentofPost: "Testcontent Blah blah blah if this is the right stuff then idk",
            results: [],
            areyouLoading: false,
            imagesizer: "",
            gtitle: "",
            gdate: "",
            gcontent: "",
            gcat: "",
            gurl: "",
            gid: "",
            gidup: "lol",
            ntitle: "",
            ndate: "",
            ncontent: "",
            ncat: "",
            nurl: "",
            nimg:"",
            guardianimagesizer: ""
            
          };


              }
    callAPI() {
            if(this.props.butstateSend=="off")
            {
                fetch("BackendRouteRetracted1"+this.props.butstateSend)
                .then(res => res.json())
                .then(
                    result => {
                      this.setState({
                        results: result.results.slice(0,10)
                      })})
                .then(data => this.setState({areyouLoading: false}))
                ;
            
            }
            else if (this.props.butstateSend=="on"){
                fetch("BackendRouteRetracted1"+this.props.butstateSend)
                .then(res => res.json())
                .then(
                    result => {
                      this.setState({
                        results: result.response.results.slice(0,10)
                      })})
                .then(data => this.setState({areyouLoading: false}))
                ;
            }

            }
componentDidMount(){
    this.callAPI();
    this.setState({areyouLoading: true});
    
}



    handleStuff=()=>{
                this.state.titleofPost = "gone";
              }

     worldparentFunct=(worlddata_from_child)=>{
                this.setState({hasbeenClicked:worlddata_from_child});
              }
    worldparentFunct1=(worlddata_from_child1)=>{
                this.setState({clickedtitle:worlddata_from_child1});
              }
    worldparentFunct12=(worlddata_from_child12)=>{
                this.setState({gidup:worlddata_from_child12});
              }

      render(){

        //const {apiResponse} = this.state;
       
          if(this.state.hasbeenClicked == "no" && (this.state.areyouLoading ? 'yes' : 'no') == "no"){
    return (
        
        <Container className="p-3" fluid>
        {this.state.results.map((postDetail, index)=>{
            if(this.props.butstateSend=="off"){
                try{this.state.imagesizer= postDetail.multimedia.findIndex(x=>x.width > 2000) ;}
                catch(err){this.state.imagesizer=-1}

                try{this.state.ntitle=postDetail.title}
                catch(err){}
                try{this.state.ndate=postDetail.published_date}
                catch(err){}
                try{this.state.ncontent=postDetail.abstract}
                catch(err){}
                try{this.state.ncat=postDetail.section}
                catch(err){}
                try{this.state.nurl=postDetail.url}
                catch(err){}
            if(this.state.imagesizer != -1){
                try{this.state.nimg=postDetail.multimedia[this.state.imagesizer].url}
                catch(err){}
                return(<Cardstuffs sendTitle={this.state.ntitle} sendContent={this.state.ncontent} sendDate={this.state.ndate} sendCat={this.state.ncat} 
                    sendURL={this.state.nurl}
                    sendid = "nyt"
                    sendImage={ this.state.nimg} 
                    hasClicked={this.worldparentFunct.bind(this)} sendidgup={this.worldparentFunct12.bind(this)} clickerTitle={this.worldparentFunct1.bind(this)}/> );
            }
            else{
                return(<Cardstuffs sendTitle={this.state.ntitle} sendContent={this.state.ncontent} sendDate={this.state.ndate} sendCat={this.state.ncat}
                    sendURL={this.state.nurl}
                    sendid = "nyt"
                    sendImage="https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg"
                    hasClicked={this.worldparentFunct.bind(this)} sendidgup={this.worldparentFunct12.bind(this)} clickerTitle={this.worldparentFunct1.bind(this) }/> );
            }

            }
            else if (this.props.butstateSend=="on")
            {
                try{
                    this.state.guardianimagesizer =  postDetail.blocks.main.elements[0].assets.length;
                    this.state.guardianimagesizer = this.state.guardianimagesizer - 1;
                    this.state.guardianimagesizer = postDetail.blocks.main.elements[0].assets[this.state.guardianimagesizer].file;
                }
                catch(err)
                {
                    this.state.guardianimagesizer =  "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png";
                }
                try{this.state.gtitle=postDetail.webTitle}
                catch(err){}
                try{this.state.gdate=postDetail.webPublicationDate}
                catch(err){}
                try{this.state.gcontent=postDetail.blocks.body[0].bodyTextSummary}
                catch(err){}
                try{this.state.gcat=postDetail.sectionId}
                catch(err){}
                try{this.state.gurl=postDetail.webUrl}
                catch(err){}
                try{this.state.gid=postDetail.id}
                catch(err){}
               
            return(<Cardstuffs sendTitle={this.state.gtitle} sendContent={this.state.gcontent} sendDate={this.state.gdate} 
                sendCat={this.state.gcat} sendURL={this.state.gurl}
                sendImage = {this.state.guardianimagesizer}
                sendid = {this.state.gid}
                hasClicked={this.worldparentFunct.bind(this)} clickerTitle={this.worldparentFunct1.bind(this)} sendidgup={this.worldparentFunct12.bind(this)}/> );    
            }
             
            })}
        {/*<Cardstuffs sendTitle={this.state.titleofPost} sendContent={this.state.contentofPost}/>*/}


        </Container>
    
        

    );
}

else if ((this.state.areyouLoading ? 'yes' : 'no') == "yes" )
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
    this.props.buturlIs(this.state.clickedtitle);

    this.props.gidSend(this.state.gidup);
    if (this.props.butstateSend=="off")
    {this.props.sendwhicup("NYT");}
    else{
    {this.props.sendwhicup("GUARD");}
    }
         this.props.history.push(
        {pathname: '/empty/' + this.state.clickedtitle
        }); 
        

    return(
        <div>
    <p>Hey there.  GUrl was : {this.state.gidup}</p>
    <p>Hey there.  The card was clicked? : {this.state.hasbeenClicked}</p>
    <p>Hey there.  Butt is: {this.props.butstateSend}</p>
    
    </div>
        );
}




    }
}

export default Home;
