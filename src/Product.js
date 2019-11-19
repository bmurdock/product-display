import React from 'react';

export default class Product extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('provider: ', this.props.provider);
        return (
            <div className="prodContainer">
                <p>{this.props.name}</p>
                <p>{this.props.description}</p>
                <p>${this.props.price}</p>
                <p>Provider: {this.props.productProvider.name}</p>
            </div>
        )
    }
}

