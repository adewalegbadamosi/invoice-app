



import React from 'react';



class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit  =  this.handleSubmit.bind(this); 
        
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.refs.newItem.value);
        
    }

    render(){
        return(
            <form className="addTodo" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="item,price" required ref="newItem"/>
                
                <input type="submit" value="Hit me" />
            </form>
        );
    }

    
    
};

module.exports = AddItem;


