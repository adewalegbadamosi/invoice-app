
import React from 'react';

class Balance extends React.Component {
    constructor(props){
        super(props);       
        this.handleSubmit  =  this.handleSubmit.bind(this); 
        this.handleDelete  =  this.handleDelete.bind(this);               
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.cashAnalysis(        
        this.refs.cash.value ,
        this.refs.discount.value ,
        this.refs.vat.value  
        );        
    }

    handleDelete(e){
        e.preventDefault();
        this.props.onDelete();
    }
  

   

    render(){
        return(
            <div className="balance"  >
            <form  onSubmit={this.handleSubmit} >
                <input type="text" placeholder="Cash paid" required  ref="cash"/> 
                <input type="text" placeholder="Discount"  ref="discount"/> 
                <input type="text" placeholder="VAT"  ref="vat"/> 
                <input   type="submit" value="Balance" />
            </form>
             <button id="deleteBtn" onClick={this.handleDelete} > Delete </button>

       </div>
        );
    }

    
    
};

module.exports = Balance;


