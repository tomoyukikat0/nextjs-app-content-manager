import React, { useState } from "react";

function CompA(){
  return (
    <>
      <h1>CompA</h1>
      <p>Hello Comp A</p>
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
  const [myValue, mutateState] = useState(10);
  return (
    <>
      valueState: { myValue }
      <h1>Hello World</h1>
      <CompA />
    </>
  )
}


export default Home;