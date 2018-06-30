import React, {Component} from 'react'
import PropTypes from 'prop-types';

class CommentInput extends Component {
    // propType setting
    static propTypes = {
        onSubmit: PropTypes.func
    }

    // default state
    constructor() {
        super()
        this.state = {
            username: 'Visiter',
            content: ''
        }
    }

    // life cycle
    componentDidMount() {
        this
            .textarea
            .focus()
    }
    componentWillMount() {
        this._loadUsername()
    }

    // private function
    _loadUsername() {
        const username = localStorage.getItem('username')
        if (username) {
            this.setState({username})
        }
    }
    _saveUsername(username) {
        localStorage.setItem('username', username)
    }

    // bind event
    handleUsernameChange = (event) => {
        this.setState({username: event.target.value})
    }
    handleUsernameBlur = (event) => {
        this._saveUsername(event.target.value)
    }
    handleContentChange = (event) => {
        this.setState({content: event.target.value})
    }
    handleSubmit = () => {
        if (this.props.onSubmit) {
            const {username, content} = this.state
            this
                .props
                .onSubmit({
                    username,
                    content,
                    createdTime: Date.now()
                })
        }
        this.setState({content: ''})
    }

    // dom
    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>User Name</span>
                    <div className='comment-field-input'>
                        <input
                            value={this.state.username}
                            onBlur={this.handleUsernameBlur}
                            onChange={this.handleUsernameChange}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>Comment</span>
                    <div className='comment-field-input'>
                        <textarea
                            ref={(textarea) => this.textarea = textarea}
                            value={this.state.content}
                            onChange={this.handleContentChange}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput