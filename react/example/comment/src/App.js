import React, {Component} from 'react'
import PropTypes from 'prop-types';
import CommentInput from './components/CommentInput'
import CommentList from './components/CommentList'
import wrapWithLoadData from './components/wrapWithLoadData'

class App extends Component {
  static propTypes = {
    data: PropTypes.any,
    saveData: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      comments: props.data
    }
  }

  handleSubmitComment = (comment) => {
    if (!comment) 
      return
    if (!comment.username) 
      return alert('请输入用户名')
    if (!comment.content) 
      return alert('请输入评论内容')
    const comments = this.state.comments
    comments.push(comment)
    this.setState({comments})
    this
      .props
      .saveData(comments)

  }

  handleDeleteComment = (index) => {
    const comments = this.state.comments
    comments.splice(index, 1)
    this.setState({comments})
    this
      .props
      .saveData(comments)
  }

  render() {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleSubmitComment}/>
        <CommentList
          comments={this.state.comments}
          onDeleteComment={this.handleDeleteComment}/>
      </div>
    )
  }
}

App = wrapWithLoadData(App, 'comments')
export default App;