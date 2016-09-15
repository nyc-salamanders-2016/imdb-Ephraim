
class App extends React.Component{

  constructor(){
    super()
    this.state= {
      movie: ""
    }
    this.displaySearchedMovie = this.displaySearchedMovie.bind(this)
  }


  displaySearchedMovie(movie) {
    this.setState({
      movie: movie
    })

  }


  render(){
    return(
      <div>
        <h1>Hello World!</h1>
        <SearchBar onSearch={this.displaySearchedMovie} />
        <Movie movie_info={this.state.movie} />
      </div>
      )
  }
}
