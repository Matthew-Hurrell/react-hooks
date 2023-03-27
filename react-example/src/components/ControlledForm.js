import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: '',
            category: 'website',
            comments: ''
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    handleCommentChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    // One handler for all form fields
    // handleChange = (event) => {
    //     const {name, value} = event.target
    //     this.setState({
    //         [name]: value
    //     })
    // }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted')
    }

    render() {
        return (
            <div>
                <h2>Please fill out the form below:</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your Name:</label>
                        <input 
                            value={this.state.name} 
                            onChange={this.handleNameChange}
                            id="id-name" 
                            name="name" 
                            type="text">
                        </input>
                    </div>
                    <div>
                        <label htmlFor="id-category">Query category:</label>
                        <select 
                            id="id-category"
                            name="category"
                            value={this.state.category}
                            onChange={this.handleCategoryChange}
                        >
                            <option value="website">Website issue</option>
                            <option value="order">Order issue</option>
                            <option value="general">General inquiry</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments:</label>
                        <textarea 
                            id="id-comments" 
                            name="comments"
                            value={this.state.comments}
                            onChange={this.handleCommentChange}
                        ></textarea>
                    </div>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        )
    }
}

export default ControlledForm