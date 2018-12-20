var React = require('react');



//Create TodoItem component
class TodoItem extends React.Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(){
        this.props.onDelete(this.props.item);
    }

    render(){
        return( <div>
            
            <li>
                <div className="todoItem">
                    <span className="itemName" onClick={this.handleDelete} >{this.props.item}</span>
                    
                </div>
            </li>
            </div>
        );
    }     
}

module.exports = TodoItem;
