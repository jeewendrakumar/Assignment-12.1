import React from "react";
import Relay from "react-relay";

class Hello extends React.Component {
    render() {
        const {hello} = this.props.bookStore;
        const {firstName, lastName} = this.props.user;
        return (
            <div>
                {hello}
                <div>{firstName} {lastName}</div>           
            </div>
        );
    }
}


export default Relay.createContainer(Hello, {
    fragments: {
        bookStore: () => Relay.QL `
        fragment on BookStore {
            hello
        }
        `,
        user: () => Relay.QL `
        fragment on User {
            firstName
            lastName
        }
        `
    }
});
