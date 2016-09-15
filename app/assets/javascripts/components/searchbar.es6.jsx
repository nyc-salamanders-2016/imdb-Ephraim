class SearchBar extends React.Component{

  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault
    let searchedTitle = this.refs.title.value
    let searchedYear = this.refs.year.value

    $.ajax({
      url: "http://www.omdbapi.com/?",
      method: "GET",
      data: {
        t: searchedTitle,
        y: searchedYear,
        plot: "full",
        r: "json"
      }
    })
    .done((response) => {
      debugger
      this.props.onSearch(response)
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref="title" type="text" name="t" placeholder="Movie Title"/>
          <input ref="year" type="text" name="y" placeholder="Year"/>
          <input type="submit" value="Search"/>
        </form>
      </div>
      )
  }
}
