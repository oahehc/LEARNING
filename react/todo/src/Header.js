import React from 'react'
import PropTypes from 'prop-types'

class Header extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        todoCount: PropTypes.number.isRequired
    };
    render() {
        const {name, todoCount} = this.props;
        return (
            <div>
                <h1>{name}的待辦清單</h1>
                <h6>{todoCount}項未完成待辦事項</h6>
            </div>
        )
    }
}
export default Header