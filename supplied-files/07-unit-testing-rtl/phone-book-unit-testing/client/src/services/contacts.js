import axios from 'axios';

class ContactsService {
    static get() {
        return axios.get( 'http://localhost:4000/contacts' )
                    .then( response => response.data );
    }

    static post( contact ) {
        return axios.post( 'http://localhost:4000/contacts', contact, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then( response => response.data );
    }
    
    static put( contact ) {
        return axios.put( `http://localhost:4000/contacts/${contact.id}`, contact, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then( response => response.data );
    }

    static delete( id ) {
        return axios.delete( `http://localhost:4000/contacts/${id}` );
    }
}

export default ContactsService;