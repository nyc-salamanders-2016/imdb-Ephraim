class MovieTitle extends React.Component{

  constructor(){
    super()
    this.state = {
      details: null,
      toggle: false
    },
    this.getDetails = this.getDetails.bind(this),
    this.showDetails = this.showDetails.bind(this),
    this.toggleDetails = this.toggleDetails.bind(this)
  }

  getDetails(event){

    let id = this.props.movie_info.imdbID
    $.ajax({
      url: `http://www.omdbapi.com/?i=${id}`,
      method: "GET"
    })
    .done(function(response){
      // debugger
      this.setState({
        details: response
      })
      // debugger
    }.bind(this))
  }

  toggleDetails(){

    currState = !this.state.toggle
    this.setState({
      toggle: currState
    })

    if(currState){

      this.getDetails()
    }
  }

  showDetails(){
    if(this.state.toggle){
      return <MovieDetails data={this.state.details} />
    }else{
      return null;
    }
  }

  render(){

    return(
      <section onClick={this.toggleDetails}>
        <h3>{this.props.movie_info.Title} | {this.props.movie_info.Year} </h3>
        <img src={this.props.movie_info.Poster}/>
        {this.showDetails()}
      </section>
      )
  }
}

