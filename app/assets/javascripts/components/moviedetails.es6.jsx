class MovieDetails extends React.Component{
  render(){


    return(
        <div>
          <span>Description:{this.props.data.Plot}</span><br/><br/>
          <span>Rating:{this.props.data.imdbRating}</span><br/><br/>
          <span>Description:{this.props.data.Actors}</span>
        </div>
      )
  }
}
