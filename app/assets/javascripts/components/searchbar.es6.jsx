class SearchBar extends React.Component{

  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    let searchedTitle = this.refs.title.value
    let searchedYear = this.refs.year.value

    $.ajax({
      url: "http://www.omdbapi.com/?s="+searchedTitle+"&y="+searchedYear+"&plot=full&r=json",
      method: "GET"
    })
    .done((response) => {
      this.props.onSearch(response)
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref="title" type="text"  placeholder="Movie Title"/>
          <input ref="year" type="text"  placeholder="Year"/>
          <input type="submit" value="Search"/>
        </form>
      </div>
      )
  }
}
