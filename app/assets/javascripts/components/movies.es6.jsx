class Movie extends React.Component{


  render(){
    return(
      <section>

        <h3>{this.props.movie_info.Title}</h3>
        <span><strong>ratings:</strong> 7.1</span><br/><br/>
        <span><strong>Description:</strong> Anna, a fearless optimist, sets off on an epic journey - teaming up with rugged mountain man Kristoff and his loyal reindeer Sven - to find her sister Elsa, whose icy powers have trapped the kingdom of Arendelle in eternal winter. Encountering Everest-like conditions, mystical trolls and a hilarious snowman named Olaf, Anna and Kristoff battle the elements in a race to save the kingdom. From the outside Annas sister </span><br/><br/>
        <span><strong>actors:</strong> Kristen Bell, Idina Menzel, Jonathan Groff, Josh Gad</span>
      </section>
      )
  }
}

