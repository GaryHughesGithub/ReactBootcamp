class App extends React.Component {
  render() {
    return (
      <div>


        <Hello 
          to="Cassie"
          from="Gary" 
          num={9}
          data={[1,2,3,4,5]}  
          isFunny
        />

        <Hello
          to="Cher"
          from="Sonny"
          bangs={10}
          img="https://images.unsplash.com/photo-1633989464081-16ccd31287a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
        />


      </div>
      
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));