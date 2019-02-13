var React = require('react');

//Create TodoItem component
class TodoItem extends React.Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
      
    }

    handleDelete(){
        this.props.onDelete(this.props.content);
    }

    
    render(){
        return (
            <div className="todoItem" onClick={this.handleDelete} >
                  <span> {this.props.content.amount}   </span>
                  <span id='delete'> del </span>
            </div>
            
              );
            }     
}

 module.exports = TodoItem;
