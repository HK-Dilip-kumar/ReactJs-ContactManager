import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showContactInfo: false
  };
  onDeleteClick = () => {
    this.props.deleteClickHandler();
  }
  // onShowClick = e => {
  //   if (this.state.showContactInfo === true)
  //     this.setState({ showContactInfo: false })
  //   else if (this.state.showContactInfo === false)
  //     this.setState({ showContactInfo: true })

  // };
  render() {
    const { contact } = this.props;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {contact.name}
          <i
            onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })}
            className="fas fa-sort-down" style={{ cursor: 'pointer' }} />
          <i className="fas fa-times" style={{ cursor: 'pinter', color: 'red', float: 'right' }}
           onClick={this.onDeleteClick} />
        </h4>
        {showContactInfo ? (<ul className="list-group">
          <li className="list-group-item">{contact.email}</li>
          <li className="list-group-item">{contact.phone}</li>
        </ul>) : null}
      </div>
    );
  }
}
Contact.protoTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
