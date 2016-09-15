class MovieList extends React.Component{


  render(){

    return(
      <div>
        <h2>Your Searched Movies</h2>
        {
          this.props.data.map((movie)=>{
           return (<MovieTitle movie_info={movie}/>)
          })
        }
      </div>

      )
  }
}
