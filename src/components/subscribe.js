class App extends Component {

   state = {
      email:""
    };

    handleChange = (e)=>{
        this.setState({
          email:e.target.value
        })
    }

  render() {
    return (
      <div>
          <input value={this.state.email} onChange={this.handleChange} />
          <button disabled={this.state.email.length<1}>Submit</button>      </div>
    );
  }
}