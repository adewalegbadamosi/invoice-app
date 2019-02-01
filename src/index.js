import React from "react";
import ReactDOM from "react-dom";

//Module requires
import TodoItem from './components/todoItem';
import AddItem from './components/addItem';



//Create a component
class TodoComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
                    todos: [],
                    sum:'',
                    count:''              
                };
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);        
        }
        
    //Custom functions
       onAdd(item) {
        var updatedTodos = this.state.todos;
        var updatedSum = this.state.sum;
        var updatedCount = this.state.count;  
        
        var subItem = item.split(' ');
        var name = subItem[0];
        var rate = subItem[1];
        var newItem = name+' '+ 1 +' '+rate+' '+'N'+rate;
	    var nameArray =[];	
	
	for(var i = 0; i<updatedTodos.length; i++){
	var updatedTodosItem = updatedTodos[i].split(' ');
    var newName = updatedTodosItem[0];
    nameArray.push(newName);
	if(name === newName){
	var unit = Number(updatedTodosItem[1]);
	var newUnit = unit +1;
	var newRate = Number(updatedTodosItem[2]);
	var unitRate = newUnit * newRate;
	updatedTodos[i] = newName+' '+newUnit+' '+newRate+' '+'N'+unitRate;
	updatedSum = Number(updatedSum) + Number(newRate);		
	}	 	
	}
		
	if(nameArray.indexOf(name) === -1){
	updatedTodos.push( newItem); 
	updatedSum = Number(updatedSum) + Number(rate);
	}

 	updatedCount++;
	   
        this.setState({
            todos: updatedTodos,
            sum: updatedSum,
            count: updatedCount
        });
    }

    onDelete (item)  {
            var updatedTodos = this.state.todos;
            var indexToDelete= updatedTodos.indexOf(item);
            var subItem = item.split(' ');            
            var unitRate = Number(subItem[1]) * Number(subItem[2]);
                
            updatedTodos = updatedTodos.filter(function(val, index){            
                return  indexToDelete !== index  ;                             
           }) 
            
        var updatedSum = this.state.sum; 
        var updatedCount = this.state.count;           
        
            updatedSum = updatedSum - unitRate;             
            updatedCount= updatedCount-  Number(subItem[1]) ;
        
        this.setState({
          todos: updatedTodos,
          sum: updatedSum,
          count:  updatedCount
        });
    }   
    
    
    render() {
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(<TodoItem key={index} item={item} onDelete={this.onDelete} />);
        }.bind(this));    

        return (
            <div className="todoList">
                <h1> Emplar Boutique</h1>
                <h2>Sales Invoice</h2>
                <h6> Item   Qty  Price  Amount </h6>
                <ul>{todos}</ul>
               
                <h5> Total ({this.state.count})  N{this.state.sum} </h5>
                
                <h6> Thanks for Patronage </h6>
                <h6> { Date()} </h6>
                <h6><AddItem onAdd={this.onAdd}  /> </h6>
                
            </div>
        );
    }
}


const rootContainer = document.querySelector("#root");
ReactDOM.render(<TodoComponent />, rootContainer);

