import React,{Component} from "react";
import data from "./data.json";
import Options from "./Options";
import Story from "./Story";
import Historical from "./Historical";

class Start extends Component{

    //Se inicializa el constructor
    constructor(props){
        super(props);

        this.state = {
            opcionesSeleccionadas: [],
            historiaActual: data[0],
          };
          this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        alert("Start!")
    }

    handleClick(opcion) {
        this.setState(
          { opcionesSeleccionadas: [...this.state.opcionesSeleccionadas, opcion] },
          () => {
            const historia = this.obtenerSiguienteHistoria(opcion);
            if (historia !== null) {
              this.setState({
                historiaActual: historia,
              });
            } if((this.state.opcionesSeleccionadas.length === this.props.limiteHistorias)){
              this.setState({
                historiaActual: data[0],
                opcionesSeleccionadas:[]
              
              })
              alert("End!")
            }        
          }      
        )
     }

     obtenerSiguienteHistoria(opcion) {
        return data.find((p) => p.id === (this.state.opcionesSeleccionadas.length + 1 + opcion.toLowerCase()));
      }
    
      render() {
        return (
          <div className="layout">
            <Story historia={this.state.historiaActual.historia} /> 
            <Options
              handleClick={this.handleClick}
              opcionA={this.state.historiaActual.opciones.a}
              opcionB={this.state.historiaActual.opciones.b}
            />
            <Historical opcionesSeleccionadas={this.state.opcionesSeleccionadas} />
          </div>
        );
      }
}

export default Start;