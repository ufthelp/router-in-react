import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ContactList from './ContactList'
import CreateContact from './CreateContact'

class App extends Component {

//function to remove contactlist item
remove =(contact) =>{
	this.setState((state) =>({
								contacts: state.contacts.filter((c) => c.id !== contact.id 
							)}
				)
				)
}

  state = {
			contacts : [
					{
						"id": "1",
						"name": "Ryan",
						"email": "ryan@uftHelp.com",
					},
					{
						"id": "2",
						"name": "Rion",
						"email": "rion@uftHelp.com",
					},
					{
						"id": "3",
						"name": "Rian",
						"email": "rian@uftHelp.com"
					}
				]
  		}
  render() {
    return (
      <div>
				
				<Route exact path="/" render={() =>
						 <ContactList  contact ={ this.state.contacts } clickDelete={this.remove} />

				}
				/>
				<Route path="/create"
				       component={CreateContact}
				/>
			  
      </div>
    )
  }
}

export default App;
