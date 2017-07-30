import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class CreateContact extends Component {
    render()
    {
        return(
            <section>
                <div> RouterCreateContact </div>
               <Link className='close-create-contact' to='/'>Close</Link>
            </section>
        )
    }


}


export default CreateContact;
