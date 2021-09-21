import React, { useState } from "react";

function CompA(allProps){
  console.log(allProps)
  return (
    <>
      <h1>CompA</h1>
      <p>Hello Comp A</p>
      <div>My Prop1: {allProps.myProp1}</div>
      <div>My Prop1: {allProps.myProp2}</div>
      <div>My Prop1: {allProps.myProp3.toString()}</div>
      <div>My Prop1: {<allProps.myProp4 />}</div>
    </>
  )
}

class CompC extends React.Component {
  render() {
    return (
      <h1>Hello CompC</h1>
    )
  }
}

function Home() {
  const [myValue, setValue] = useState(10);

  console.log("I am called initialy and when state is changed!");

  return (
    <>
      CurrentState: { myValue }
      <button onClick={() => setValue(myValue + 1)}>+</button>
      <button onClick={() => setValue(myValue - 1)}>-</button>
      <CompA 
        myProp1={myValue}
        myProp2="My custom Value"
        myProp3={true}
        myProp4={() => <div>My new JSX!</div>}
      />
    </>
  )
}


export default Home;