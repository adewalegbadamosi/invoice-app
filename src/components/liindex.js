import React from "react";
import ReactDOM from "react-dom";

//Module requires
import AddItem from './components/addItem';
import TodoItem from './components/todoItem';

//Create a component
class TodoComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
                    todos: [],
                    sum:'',
                    count:'',
                    company: 'Your company Name',
                    address: 'Your address'             
                };
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this); 
              
        }
        
    //Custom functions
       onAdd(item,  quantity, price, company,address) {
        var updatedTodos = this.state.todos;
        var updatedSum = this.state.sum;
        var updatedCount = this.state.count; 
        var updatedCompany = this.state.company; 
        var updatedAddress = this.state.address; 

        var filter = updatedTodos.filter(function(val, index){            
            return  val.item == item  ;                             
       });
       
        if(updatedTodos.length == 0 )	{ 
            var firstContent = {
                item : item,
                quantity : Number(quantity),
                price : Number(price),
                amount : Number(price * quantity)
            }
            updatedTodos.push(firstContent);
            updatedSum = firstContent.amount ;
            }else if(filter.length == 0 && updatedTodos.length != 0  ){
                var anotherContent = {
                    item : item,
                    quantity : Number(quantity),
                    price : Number(price),
                    amount : Number(price * quantity)
                }
                updatedTodos.push(anotherContent);
                updatedSum = Number(updatedSum) + anotherContent.amount ; 
               }
            else{
                for(var i = 0; i< updatedTodos.length; i++) {
                if(updatedTodos[i].item == item){                                        
                updatedTodos[i].quantity += Number(quantity);                       
                updatedTodos[i].amount +=  Number(price * quantity) ;                
                updatedSum +=  Number(price * quantity) ;                
                    }
               }
            }
            

            updatedCount = Number(updatedCount) + Number(quantity) ;
            updatedCompany =  !company  ?  updatedCompany : company ; 
            updatedAddress =  !address  ?  updatedAddress : address ; 
      
        this.setState({
            todos: updatedTodos,
            sum: updatedSum,
            count: updatedCount,
            company: updatedCompany,
            address: updatedAddress
        });
    }

    onDelete (item)  {
        var updatedTodos = this.state.todos;
        var indexToDelete= updatedTodos.indexOf(item);        
            
        updatedTodos = updatedTodos.filter(function(val, index){            
            return  indexToDelete !== index  ;                             
       }) 
        
    var updatedSum = this.state.sum; 
    var updatedCount = this.state.count;           
    
    
    this.setState({
      todos: updatedTodos,
      sum: updatedSum,
      count:  updatedCount
    });
}   


      
    
    render() {       
        var todos = this.state.todos;         

        todos = todos.map(function(content, index){
            return(                                 
                         <TodoItem index={index+1} content={content} onDelete={this.onDelete} />                                                                                       
                
                 );
           }.bind(this)); 
           
           

        return (
            <div className="todoList">                
                <div id="h1h3">
                <h1> {this.state.company}</h1>
                <h3> {this.state.address}</h3>
                </div>
                <h2>Sales Invoice</h2>
                <ul className="listHeader"> 
                       
                        {todos}                    
                </ul>
                

                <h5> Total ({this.state.count})  N{this.state.sum} </h5>
                
                <h6> Thanks for Patronage </h6>
                <p> { Date()} </p>
                <h6><AddItem onAdd={this.onAdd}  /> </h6>
                
            </div>
        );
    }
}


const rootContainer = document.querySelector("#root");
ReactDOM.render(<TodoComponent />, rootContainer);
