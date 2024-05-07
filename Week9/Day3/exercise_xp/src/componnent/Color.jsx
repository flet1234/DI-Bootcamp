import React from "react"
import Child from "./Child"

class Color extends React.Component {
  constructor(){
    super()
    this.state={
      favoriteColor:'red',
      show:true
    }
  }
  componentDidMount(){
    alert('Mount Reached')
    this.setState({favoriteColor:'yellow'})
  }

  shouldComponentUpdate(){
    return true
  }

  componentDidUpdate(){
    console.log('after update');
  }

  getSnapshotBeforeUpdate(){
    console.log("in getSnapshotBeforeUpdate");
    return null
    
  }

    render(){
      if (this.state.show){
        return <div>
                <Child/>
                <button onClick={()=>this.setState({show:false})}>Delete World</button>
              </div>
       
      }
      return <>
      <p>My favorite color is {this.state.favoriteColor}</p>
        <button onClick={()=>this.setState({favoriteColor:'blue'})}>Change color</button>
        
      </>
      
    }
  
}

export default Color