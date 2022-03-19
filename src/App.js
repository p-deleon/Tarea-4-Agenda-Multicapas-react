import React,{useState,useRef} from 'react';
import './App.css';
import './agenda.css';
import Enviar from './enviar';
class App extends React.Component {
   
    
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    componentDidMount() {
        fetch(
"http://www.raydelto.org/agenda.php")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;

          
   
        return (

          
        <div className = "App">
            <table>
              <thead><tr><th>Nombre</th><th>Apellido</th><th>Contacto</th></tr></thead>
            <tbody>{
                items.map((item,i) => ( 
                <tr key = { i +1 } >
                     <td key = { i + 2}>{ item.nombre }</td> 
                     <td key = {i+3}>{ item.apellido }</td> 
                    <td key = { i+4}>{ item.telefono }</td> 
                </tr>
                ))
            }</tbody>
            
            </table>  
        </div>
       
    );
}
}

export default App;