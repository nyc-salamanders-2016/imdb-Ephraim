
class App extends React.Component{

  constructor(){
    super()
    this.state= {
      movies: []

    }
    this.displaySearchedMovie = this.displaySearchedMovie.bind(this)
  }


  displaySearchedMovie(movies) {
    this.setState({
      movies: movies.Search
    })

  }


  render(){
    return(
      <div>
        <h1>Hello World!</h1>
        <SearchBar onSearch={this.displaySearchedMovie} />
        <MovieList data={this.state.movies}/>
      </div>
      )
  }
}
