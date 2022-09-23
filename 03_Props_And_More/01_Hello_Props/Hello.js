class Hello extends React.Component {
  render(){
    
    const { to:reciever, from:sender, num, data, bangs, img } = this.props;

    let shout = "!".repeat(bangs)

    console.log(this.props)

    return(
      <div>
        <p>Hello there {reciever}! From {sender} {shout}</p>
        <img src={img} />
      </div>
    )
  }
}