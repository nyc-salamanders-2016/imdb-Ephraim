class MovieTitle extends React.Component{


  render(){

    return(
      <section>
        <h3>{this.props.movie_info.Title} | {this.props.movie_info.Year} </h3>
        <img src={this.props.movie_info.Poster}/>
      </section>
      )
  }
}

