import React, { Component } from 'react';

class ContactCard extends Component {
    render() {
        const { src, name, phnnum, email } = this.props;
        // console.log(this.props)
        return (
            <div>
                <img src={src} />
                <h3>{name}</h3>
                <p>{phnnum}</p>
                <p>{email}</p>
            </div>
        )

    }
}
export default ContactCard;