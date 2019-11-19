import React from 'react'
import fetch from 'node-fetch'
import Product from './Product'

export default class ProductList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            providers: new Map(),
            baseRoute: 'http://lvh.me:3444'
        }
    }

    componentDidMount() {

        fetch(`${this.state.baseRoute}/products`).then((
            response) => {
            return response.json()
        }).then((parsed) => {
            this.setState(
                {
                    products: parsed.map((prod, idx) => {
                        console.log('searching for: ', prod.productProvider)
                        return (
                            <Product
                                key={`pr${idx}`}
                                {...prod}
                            />
                        )
                    })
                })
        }).catch((err) => {
            console.error('Fetch error: ', err)
        })
    }

    render() {
        return (
            <div className='prodListOuter'>
                <h2>Product Listing</h2>
                <div className='prodListInner'>{this.state.products}</div>
            </div>
        )
    }
}