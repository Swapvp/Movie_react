import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import React, { Component } from 'react';
import Header from './components/Header'
import styles from './styles/Main.module.css'
import loaderimg from './Loader/preloader.gif'
import Footer from './components/Footer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      api : [],
      loader: true
    }
  }
  componentDidMount(){
    fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war")
    .then(response => response.json())
    .then(json => setTimeout(()=> this.setState({api : json, loader:false}),2000)) //used setTimeout to just show the loader gif
  }
  render() { 
    
    let cardArr = this.state.api.Search
    console.log(this.state.loader)
    return ( <>
      <Header  />
      
      <div className={styles.Main}>
        {this.state.loader ? <img src={loaderimg} alt=""/> : 
          <div className={styles.CardGrid}>
            {cardArr ?  cardArr.map(item => <Card props={item}/>)   : null}
          </div>
        }
      </div>

      <Footer />
      </>
    );
}
}
 

export default App;