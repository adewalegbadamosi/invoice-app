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
        return ( <li>
            <div onClick={this.handleDelete} >
                 <span> {this.props.index} </span>
                 <span> {this.props.content.item} </span>
                 <span> {this.props.content.quantity} </span>
                 <span> {this.props.content.price} </span>
                 <span> {this.props.content.amount} </span>
            </div>
            
             </li> );
            }     
}

 module.exports = TodoItem;
