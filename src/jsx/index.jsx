import React from 'react';
import ReactDOM from 'react-dom';

class Title extends React.Component{

    render(){
        return <h1>Color Picker</h1>
    }
}

class ColorInput extends React.Component{

    render(){
        return <div>
                    <label>{this.props.color} : {this.props.value}</label>
                    <input type="range" min={this.props.min} max={this.props.max} step={this.props.step} onChange={this.props.change}/>
               </div>
    }
}

class ColorPicker extends React.Component{
    constructor(props){
        super(props);
        this.changeState = this.changeState.bind(this);
        this.copyText = this.copyText.bind(this);
        this.state = {red: '71', green: '159', blue: '157', alpha :'1'}
    }

    changeState(color){
        let value = window.event.target.value;
        this.setState({[color] : value});
    }

    copyText(){
        let copyText = document.getElementById("colorInput");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        alert("Copied the text: " + copyText.value);
    }

    render(){

        let red = this.state.red;
        let green = this.state.green;
        let blue = this.state.blue;
        let alpha = this.state.alpha;
        let rgba = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

        let style = {backgroundColor: rgba};
        document.body.style.backgroundColor = rgba;

        return(
            <div>
                <Title/>
                    <div className="wrapper">
                        <div className="colorArea" style={style}>
                            <div className="copyText" onClick={this.copyText}>Copy Color</div>
                        </div>
                        <input id="colorInput" value={rgba} readOnly/>
                        <div className="colorInputWrapper">
                            <ColorInput color="red" min="0" max="255" value={red} change={this.changeState.bind(this, 'red')}/>
                            <ColorInput color="green" min="0" max="255" value={green} change={this.changeState.bind(this, 'green')}/>
                            <ColorInput color="blue" min="0" max="255" value={blue} change={this.changeState.bind(this, 'blue')}/>
                            <ColorInput color="alpha" min="0" step="0.01" max="1" value={alpha} change={this.changeState.bind(this, 'alpha')}/>
                        </div>
                    </div>
            </div>
        )
    }
}

ReactDOM.render(<ColorPicker/>, document.getElementById('app'));
