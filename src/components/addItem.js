
import React from 'react';

class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit  =  this.handleSubmit.bind(this);                 
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAdd(
        this.refs.item.value,
        this.refs.quantity.value,
        this.refs.price.value,  
        this.refs.newName.value,
        this.refs.address.value,
        this.refs.currency.value       
        );        
    }
   

    render(){
        return(
            <div className="addTodo">
            <form  onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Item" required ref="item"/>                
                <input type="text" placeholder="Quantity" required ref="quantity"/>
                <input type="text" placeholder="Price" required ref="price"/>                
                <input type="text" id='company' placeholder="Company name"  ref="newName"/>  
                <input type="text" id='address' placeholder="address/email/phone"  ref="address"/> 
                <select name="currency" ref='currency' className="currency" >
                  <option value="" disabled selected>Choose currency</option>
                  <option value="NGN">Nigeria NGN</option>
                  <option value="GHS">Ghana GHS</option>
                  <option value="USD">US USD</option>
                  <option value="CAD">Canada CAD</option> 
                  <option value="EUR">Euro EUR </option>
                  <option value="KPW">North Korea KPW</option>
                  <option value="KRW">South Korea KRW</option>
                  <option value="RUB"> Russia RUB</option>
                  <option value="SAR">Saudi SAR</option>
                  <option value="SGD">Singapore SGD</option>
                  <option value="GBP">UK GBP</option>
                  <option value="CNY">China CNY</option>                 
                </select>                
                <input type="submit" value="Create" />
            </form>
            
       </div>
        );
    }

    
    
};

module.exports = AddItem;


