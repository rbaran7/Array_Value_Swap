import React from 'react';

class AddListValue extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            items: []
        };
        
        this.addItem = this.addItem.bind(this);
    }
    
    addItem(e){
        if(this._inputElement.value !== "" && this.state.items.length !== 10){
            var newItem = {
                text: this._inputElement.value
            };
            
            this.setState((prevState) =>{
                return{
                    items: prevState.items.concat(newItem)
                };
            });
            
            this._inputElement.value = "";
        }
        console.log(this.state.items);
        e.preventDefault();
    }
    
    render(){
        var barstyling = {
            marginTop: "100px",
            textAlign: "center",
        };
        
        return(
        <div className = "AddListValueMain" style={barstyling}>
            <form onSubmit={this.addItem}>
                <input ref={(a) => this._inputElement = a} placeholder="Enter a value.."></input>
                <button type="submit">Add</button>
            </form>
        </div>
    );
  }
}

export default AddListValue;