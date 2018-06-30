import React, {Component} from 'react'
import PropTypes from 'prop-types';

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        onDeleteComment: PropTypes.func,
        index: PropTypes.number
    }

    constructor() {
        super()
        this.state = {
            timeString: ''
        }
    }

    componentWillMount() {
        this._updateTimeString()
        this._timer = setInterval(this._updateTimeString.bind(this), 5000)
    }
    componentWillUnmount() {
        clearInterval(this._timer)
    }

    _updateTimeString() {
        const comment = this.props.comment
        const duration = (Date.now() - comment.createdTime) / 1000
        this.setState({
            timeString: duration > 60
                ? `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }

    handleDeleteComment = () => {
        if (this.props.onDeleteComment) {
            this
                .props
                .onDeleteComment(this.props.index)
        }
    }

    render() {
        const content = this
            .props
            .comment
            .content
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
            .split('\n')
            .join('<br>')
        return (
            <div className='comment'>
                <div className='comment-user'>{this.props.comment.username}：</div>
                <div
                    className='comment-content'
                    dangerouslySetInnerHTML={{
                    __html: content
                }}/>
                <div className='comment-delete' onClick={this.handleDeleteComment}>删除</div>
                <div className='comment-time'>{this.state.timeString}</div>
            </div>
        )
    }
}

export default Comment