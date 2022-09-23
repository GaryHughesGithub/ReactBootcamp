class JSXDemo extends React.Component {
  render() {

    function getMood() {
      const moods = ["angry", "sad","happy","confused"]
      const rand = Math.floor(Math.random()* moods.length);
      return moods[rand];
    }

    return(
      <div>
        <h1>My Image</h1>
        <img src="https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" />
        <h1>My number is : {2*9}</h1> 
        <h2>My currnt mood is : {getMood()}</h2>
      </div>
      )
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));