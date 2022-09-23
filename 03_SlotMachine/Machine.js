class Machine extends React.Component {
  render() {

    const { s1 , s2 , s3 } = this.props;

    let result = ""
    s1 === s2 && s2 === s3 ? result = "WINNER!!" : result = "LOSER!";

    return (
      <div>
        <p>{s1}{s2}{s3} </p>
        <p>{result}</p>
      </div>
    )
  }
}