import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Link } from 'react-router-dom'



class ContactList extends Component{
   //Adding prop-types validation on props passed to components
    static propTypes = {
        contact : PropTypes.array.isRequired,
        clickDelete:PropTypes.func.isRequired 
    }

    state ={
        query: ''
        
    }
    //Update the query
    updateQuery = (query) => {
        this.setState({ query : query.trim() })
    }
    //Reset the query
    clearQuery = (query) =>{
        this.setState(
            {query : ''}
        )
    }


    render(){
            //Delcaring the variables
            const { contact,clickDelete } = this.props;
            const {query} = this.state;
            //filter logic
            let showingContacts;
            if(query){
                const match = new RegExp(escapeRegExp(this.state.query), 'i');
                showingContacts = contact.filter((contact ) =>match.test(contact.name) )
            }
            else{
                showingContacts = contact;
            }
            //sort the contact us list
            showingContacts.sort(sortBy('name'))
            
        return(
               <div className='list-contacts'>
                   {/* {JSON.stringify(this.state)}  */}
                    <div className='list-contacts-top'>
                    <input
                        className='search-contacts'
                        type='text'
                        placeholder='Search contacts'
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                    <Link
                        to='/create'
                        onClick={this.props.onNavigate}
                        className='add-contact'
                        >Add Contact
                    </Link>
                    </div>
                    {showingContacts.length !== contact.length && (
                              <div className='showing-contacts'>
                                <span>Now showing {showingContacts.length} of {contact.length} total</span>
                                <button onClick={this.clearQuery}>Show all</button>
                              </div>
                            )}
                    <ol className="contact-list">
                        {
                            showingContacts.map(contact => 
                                <li key={contact.id} className="contact-list-item">
                                    <div className="contact-details">
                                        <p>{contact.name}</p>
                                        <p>{contact.email}</p>
                                    </div> 
                                    <button className="contact-remove" onClick={()=>clickDelete(contact)}>
                                        Remove
                                    </button>
                                </li>
                            )
                        }

                    </ol>
            </div>
        )
    }

}

export default ContactList;

