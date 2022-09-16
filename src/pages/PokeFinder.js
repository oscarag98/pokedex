import React, { Component } from 'react'

export default class FindPokemon extends Component {

constructor(props){
    super(props);   // super must always been written for get the props from the constructor

this.state = {
    name: '',
    img: "#", }

}

// Read below: each time fetchApi is executed , which is asynchronous waits that let res and let data are resolved before give us a resolution.
fetchApi = async () => {
let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`);
let data = await res.json ();

console.log(data);

this.setState({
    img: `${data.sprites.other.dream_world.front_default}`
})
} // "fetchApi" is a regular function and can have any other name  /The json is a format of objects

//Below statement is for is for run the components , we use async call because fetch has been stated as sync hence this needs to match.
async componentDidMount(){
    this.fetchApi();
}

handleName = e => {
    this.setState({
        name: e.target.value
    })
}

handleSubmit = e =>{
    let resp =this.state.name;
    console.log(resp);
    e.preventDefault();
    this.fetchApi();
    this.setState({
        name:''
    })
}

//HERE starts the data that we're gonna see

  render() {
    return (
      <div>

      <div class="card">

  <h5 class="card-header">Pokemon</h5>

  <div class="card-body">

    <form onSubmit={this.handleSubmit}>
<label>Catch them all!</label>
<br/>
<input 
type="text"
placeholder='Submit Pokemon'
value={this.state.name}
onChange={ this.handleName}
/>
<br/>
<button type='submit'> Send Pokemon</button>
<br/>
<br/>
<img src={this.state.img} alt="ImageError"/> 
    </form>
  </div>
</div>

      </div>
    )
  }
} // Above card was inserted directly using bootstrap