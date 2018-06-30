import React from 'react'
import PropTypes from 'prop-types'

class InputField extends React.Component {
    static propTypes = {
        placeholder: PropTypes.string.isRequired,
        onSubmitEditing: PropTypes.func.isRequired,
        onKeyDown: PropTypes.func
    }

    handleKeyDown = (e) => {
        const {onKeyDown, onSubmitEditing} = this.props;
        const {value} = e.target;
        switch (e.keyCode) {
            case 13:
                if (value.trim()) 
                    onSubmitEditing && onSubmitEditing(value);
                e.target.value = '';
                break;
            default:
                break;
        }
        onKeyDown && onKeyDown(e);
    }

    render() {
        return (<input {...this.props} type="text" onKeyDown={this.handleKeyDown}/>)
    }
}
export default InputField