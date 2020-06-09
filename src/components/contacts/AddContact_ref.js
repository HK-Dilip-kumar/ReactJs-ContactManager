import React, { Component } from 'react'

class AddContact extends Component {
    constructor(props) {
        super(props);

        this.nameInput = React.createRef();
        this.phoneInput = React.createRef();
        this.emailInput = React.createRef();
    }
    onSubmit = (e) => {
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            phone: this.phoneInput.current.value,
            email: this.emailInput.current.value
        }
        console.log(contact);
    }
    static defaultProps = {
        name: 'Krishna Yadav',
        email: 'Krishna@gmail.com',
        phone: '777-888-999'
    }
    render() {
        const { name, email, phone } = this.props;
        return (
            <div>
                <div className="car mb-3">
                    <div className="card-header">Add Contact</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text"
                                    name="name"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Name..."
                                    defaultValue={name}
                                    ref={this.nameInput}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email"
                                    name="email"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Email..."
                                    defaultValue={email}
                                    ref={this.emailInput}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input type="text"
                                    name="phone"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Phone Number..."
                                    defaultValue={phone}
                                    ref={this.phoneInput}
                                />
                            </div>
                            <input type="button" value="Add Contact" onSubmit={this.onSubmit} className="btn-light btn-block" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddContact;