import React from "react";
import ReactDOM from "react-dom";

//Module requires
import AddItem from './components/addItem';
import TodoItem from './components/todoItem';
import Balance from './components/Balance';

//Create a component
class TodoComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {             
                    todos: [],
                    sum:'',
                    count:'',
                    
                    currency:'',
                    cash: '',
                    discount: 0,
                    vat:0 ,
                    balance:''            
                };
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this); 
        this.cashAnalysis = this.cashAnalysis.bind(this);  
        this.showInputField = this.showInputField.bind(this);            
        }
        
    //Custom functions
  
    
       onAdd(item,  quantity, price,  currency) {
        var updatedTodos = this.state.todos;
        var updatedSum = this.state.sum;
        var updatedCount = this.state.count;  
        var updatedCurrency = this.state.currency;

        var filter = updatedTodos.filter(function(val, index){            
            return  val.item == item  ;                             
       });
       
        if(updatedTodos.length == 0 )	{ 
            var firstContent = {
                item : item,
                quantity : Number(quantity),
                price : Number((price*1).toFixed(2)) ,
                amount : Number((price * quantity).toFixed(2))
            }
            updatedTodos.push(firstContent);
            updatedSum = firstContent.amount ;
            }else if(filter.length == 0 && updatedTodos.length != 0  ){
                var anotherContent = {
                    item : item,
                    quantity : Number(quantity),
                    price : Number((price*1).toFixed(2)) ,
                    amount : Number((price * quantity).toFixed(2))
                }
                updatedTodos.push(anotherContent);
                updatedSum += Number( anotherContent.amount.toFixed(2)) ; 
               
            }
            else{
                for(var i = 0; i< updatedTodos.length; i++) {
                if(updatedTodos[i].item == item){                                        
                updatedTodos[i].quantity += Number(quantity);                       
                updatedTodos[i].amount +=  Number((price * quantity).toFixed(2)) ;                            
                updatedSum = updatedSum + Number(price*quantity)  ; 
                            
                    }
               }
            }
            

            updatedCount = Number(updatedCount) + Number(quantity) ;
            updatedCurrency =  !currency  ?  updatedCurrency : currency ;            
      
        this.setState({
            todos: updatedTodos,
            sum: updatedSum,
            count: updatedCount,
            currency: updatedCurrency
        });
    }

    cashAnalysis(cash,discount,vat) {        
        var updatedSum = this.state.sum ;       
        var updatedCash = this.state.cash;
        var updatedDiscount = this.state.discount;
        var updatedVat = this.state.vat;         
        var updatedBalance = this.state.balance;             
        updatedCash =  !cash  ?  updatedCash : (cash *1).toFixed(2);
        updatedDiscount =  !discount  ?  updatedDiscount : (discount /100 * updatedSum).toFixed(2) ;
        updatedVat =  !vat  ?  updatedVat : (vat/100 * updatedSum).toFixed(2) ; 
        updatedBalance = Number(updatedCash) + Number(updatedDiscount) - Number(updatedVat) - Number(updatedSum);
        updatedBalance = (updatedBalance *1).toFixed(2);

        this.setState({
            cash: updatedCash,
            discount: updatedDiscount,
            vat: updatedVat,
            balance: updatedBalance
        });
    }

    onDelete (item)  {
        var updatedTodos = this.state.todos;
        var indexToDelete= updatedTodos.indexOf(item);        
        var updatedSum = this.state.sum; 
        var updatedCount = this.state.count; 
        var updatedCash = this.state.cash;
        var updatedDiscount = this.state.discount;
        var updatedVat = this.state.vat; 
        var updatedBalance = this.state.balance;

       if(item){
          updatedTodos = updatedTodos.filter(function(val, index){            
            return  indexToDelete !== index  ;                             
       })         
         updatedSum -= item.amount;     
         updatedCount -= item.quantity;  
       } else{
        updatedTodos = [];
        updatedSum = '';     
        updatedCount ='';
        updatedCash ='';
        updatedDiscount = 0;
        updatedVat = 0; 
        updatedBalance ='';  
       }       
    
    this.setState({
      todos: updatedTodos,
      sum: updatedSum,
      count:  updatedCount,
      cash: updatedCash ,
      discount: updatedDiscount ,
      vat:  updatedVat,        
      balance:  updatedBalance
    });
}  
showInputField(e){
    e.preventDefault();   
    this.setState({
        todos: [],
        sum: '',
        count:  '',
        cash: '' ,
        discount: 0 ,
        vat:  0,        
        balance:  ''
    })  
}    
    
    render() {       
        var todos = this.state.todos; 
        todos = todos.map(function(content, index){
            return( 
              <tr>                    
                        <td className="index"  > {index+1}  </td>
                        <td className="itemName" > {content.item}  </td>
                        <td className="itemQuantity" > {content.quantity} </td>
                        <td className="itemPrice"  > {content.price} </td>                        
                        <td className="tdTodoItem" > <TodoItem  content={content} onDelete={this.onDelete} />  </td>                                                                 
              </tr>   
                 );
           }.bind(this));  

        return (
            <div className="todoList">                
                
                <h1> Xzemplar Cleaners</h1>
                <h3> 21, Oguntifa Street Off Church street, Alapare Ketu Lagos.<br/> 08131537029, 07034336104 </h3>                
                <h2>Sales Invoice</h2>                
                <table > 
                        <tr >
                            <th> S/N </th>
                            <th> Item </th>
                            <th> Qty </th>
                            <th> Price </th>
                            <th> Amount ({this.state.currency}) </th>
                        </tr>
                        {todos}                    
                </table>                
                
                <h5> Invoice total ({this.state.count})  {this.state.sum} </h5> 
                <div className="cashAnalysis">
                    <h6> Cash paid   {this.state.cash} </h6> 
                    <h6> Discount(%) {this.state.discount} </h6>  
                    <h6> VAT(%) ({this.state.vat}) </h6>
                    <h6> Invoice total ({this.state.sum})  </h6>
                </div>
                <h5 id='invoiceBalance'> Invoice balance   {this.state.balance} </h5> 

                <p style={this.state.balance ? {display:'block'} : {display:'none'}} > Thanks for Patronage </p>
                <p style={this.state.balance ? {display:'block'} : {display:'none'}} >  { Date()} </p>

            <div className='inputField'>    
                <h4 style={!this.state.balance ? {display:'block'} : {display:'none'}}><AddItem onAdd={this.onAdd}  /> </h4> 
                <h4 style={!this.state.balance ? {display:'block'} : {display:'none'}} ><Balance cashAnalysis={this.cashAnalysis} onDelete={this.onDelete} /> </h4>
            </div>  <br/> <br/>  
                <button id='create' style={this.state.balance ? {display:'block'} : {display:'none'}} onClick={this.showInputField} > Create New  </button>
            
            </div>
        );
    }
}


const rootContainer = document.querySelector("#root");
ReactDOM.render(<TodoComponent />, rootContainer);

