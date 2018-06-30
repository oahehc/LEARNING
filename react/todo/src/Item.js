import React from 'react'
import PropTypes from 'prop-types'

class Item extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        onDelete: PropTypes.func.isRequired,
        onToggle: PropTypes.func.isRequired,
        onUpdate: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            editable: false,
            value: props.title || ''
        };
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
    }

    handleKeyDown = (e) => {
        const {onUpdate} = this.props;
        const {value} = this.state;
        switch (e.keyCode) {
            case 13: // enter
                if (value.trim()) {
                    onUpdate && onUpdate(value);
                    this.toggleEditMode();
                }
                this.setState({value: ''});
                break;
            case 27: // esc
                e.preventDefault();
                this.toggleEditMode();
                break;
            default:
                break;
        }
    }

    toggleEditMode = () => {
        this.setState({
            editable: !this.state.editable
        });
    }

    renderEditMode() {
        return (<input
            {...this.props}
            autoFocus
            placeholder="編輯待辦事項"
            type="text"
            value={this.state.value}
            onBlur={this.toggleEditMode}
            onKeyDown={this.handleKeyDown}
            onChange={this.handleChange}/>);
    }
    renderViewMode() {
        const {title, completed, onDelete, onToggle} = this.props;
        return (
            <div>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => onToggle && onToggle()}/>
                <span onClick={this.toggleEditMode}>{title}</span>
                <button onClick={() => onDelete && onDelete()}>X</button>
            </div>
        )
    }

    render() {
        return (
            <li>
                {this.state.editable
                    ? this.renderEditMode()
                    : this.renderViewMode()}
            </li>
        )
    }
}
export default Item