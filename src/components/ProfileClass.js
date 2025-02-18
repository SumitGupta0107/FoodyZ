import React from "react";

// We have to make  a class and also we have to tell react that it is a component, so we need to make sure that we extends the React.Component


//You cannot create a class Component without a render method. It is mandatory to have a render method.This render method returns JSX.
class Profile extends React.Component{

   // constructor is used for initialization 
   constructor(props)
   {
      super(props);
      // creating a state variable
      //we create all state variables in the same object
      this.state = {
          count: 0,
          count2: 0, 
      };
      console.log("Child Constructor print");
   }
   
   //Another Lifecycle Method
   // Called after the render is called
   //So, it's a good place to call API methods
   //ComponentDidMount will be called after first render
   async componentDidMount(){
      console.log("Child ComponentdidMount1");
      const data = await fetch("https://api.github.com/users/akshaymarch7");
      const json = await data.json();
      console.log(json);
      this.setState({count: this.state.count + 1});
      this.setState({count2: this.state.count2 + 1});
      console.log("Child ComponentdidMount2");
  }


  //This will be executed after every render.
  /*
  componentDidUpdate(prevProps,prevState){
      if(this.state.count !== prevState.count)
      console.log("Child ComponentdidUpdate");
  }
*/ 
  //This will be called just before the component is destroyed
  componentWillUnmount(){
   console.log("Called just before the component is destroyed");
  }

   //WE DO NOT MUTATE STATE DIRECTLY
     render() {
   
      console.log("Child Render Print");
        const {count} = this.state;
        return (
         <>
        <h1> Profile Class Based Component</h1>
        <h2> Count of state variable is: {this.state.count}</h2>
        <button onClick={() => this.setState({count: this.state.count + 1})}>Increment</button> 

        <button onClick={ () => this.setState({count2: this.state.count2 +1})}>Increment Count 2</button>
        </>
        );
     }
}
export default Profile; 