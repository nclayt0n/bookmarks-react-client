import React, { Component } from 'react';
import './App.css';
import AddBookmark from './addBookmark/addBookmark'
import BookmarkApp from './bookmarkApp/BookmarkApp'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      bookmarks:[],
      showAddForm:false,
      
    };
  }
  componentDidMount(){
    let apiKey='$2a$10$HB8PQtBHtwL.t7foeol.Mexgemqg.s8OWnKAss.t1cqNPJKG7LsrC';
    const url = 'https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks';
    const options = {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      }
    };
    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          bookmarks: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });    
  } 
  setShowAddForm(show){
      this.setState({
        showAddForm:show
      });
    }
    AddBookmark(bookmark){
      this.setState({
        bookmarks:[...this.state.bookmarks, bookmark],
        showAddForm:false
      })
    }
  render() {
    const page = this.state.showAddForm 
    ? <AddBookmark showForm={show => this.setShowAddForm(show)}
      handleAdd={bookmark=>this.AddBookmark(bookmark)}/>
    : <BookmarkApp bookmarks={this.state.bookmarks} showForm={show=> this.setShowAddForm(show)} /> 

    return (
      <div className="App">
      {page}
      </div>
    );
  }
}

export default App;
