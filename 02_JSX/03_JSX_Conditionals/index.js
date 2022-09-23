class NumPicker extends React.Component {
  render() {

    function randNum() {
      return Math.floor(Math.random() * 10) + 1;
    }

    const num = randNum();

    return(
      <div>
        <h1>
        Your random number is : {num}
        </h1>
        <p>
          {num >= 7 ? "Congratulations you win!" : "Sorry you lose!"}
        </p>
        {num >= 7 ? <img src="https://media4.giphy.com/media/j3gsT2RsH9K0w/giphy.gif?cid=82a1493bbgsrmeg9dl8ebf4vabmhb5x1yab3e438f4g14pbu&rid=giphy.gif&ct=g" /> : null}
      </div>
      
    )
    
  }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));