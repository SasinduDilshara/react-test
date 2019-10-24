import React, { Component } from 'react';

class ContactCard extends Component {
    render() {
        const { name, phnnum, email } = this.props;
        // console.log(this.props)
        return (
            <div>
                <h3>{name}</h3>
                <p>{phnnum}</p>
                <p>{email}</p>
            </div>
        )

    }
}
export default ContactCard;