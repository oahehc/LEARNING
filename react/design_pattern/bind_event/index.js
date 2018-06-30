class Button extends React.Component {
    constructor(props) {    
        super(props)
        this.handleClick = this.handleClick.bind(this)  
    }
    handleClick() {    
      console.log(this)  
    }
    render() {    
        return <button onClick={this.handleClick} />  
    }
}

// performance issue: 
class Button extends React.Component {  
    handleClick() {    
        console.log(this)  
    }
    render() {    
        return <button onClick={() => this.handleClick()} />  
    } 
}

