
import React from 'react';

class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit  =  this.handleSubmit.bind(this); 
        this.handleDelete  =  this.handleDelete.bind(this);        
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAdd(
        this.refs.item.value,
        this.refs.quantity.value,
        this.refs.price.value,  
        this.refs.newName.value,
        this.refs.address.value 
        );        
    }

    handleDelete(e){
        e.preventDefault();
        this.props.onDelete();
    }

    render(){
        return(
            <div className="addTodo">
            <form  onSubmit={this.handleSubmit}>
                <input type="text" placeholder="item" required ref="item"/>                
                <input type="text" placeholder="quantity" required ref="quantity"/>
                <input type="text" placeholder="price" required ref="price"/>                
                <input type="text" id='company' placeholder="Company name"  ref="newName"/>  
                <input type="text" id='address' placeholder="address/email/phone"  ref="address"/> 
                <input type="submit" value="Create" />
            </form>
             <button id="deleteBtn" onClick={this.handleDelete} > Delete </button>
       </div>
        );
    }

    
    
};

module.exports = AddItem;


