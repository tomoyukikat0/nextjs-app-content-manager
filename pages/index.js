import React from "react";

function CompA(){
  return (
    <>
      <h1>CompA</h1>
      <p>Hello CompA</p>
      <CompB />
    </>
  )
}

function CompB() {
  return (
    <>
      <h1>CompB</h1>
      <p>Hello CompB</p>
    </>
  )
}

class CompC extends React.Component {
  render() {
    return (
      <h1>CompC</h1>
    )
  }
}

function Home() {
  return (
    <>
      <h1>Hello world</h1>
      <CompA />
      <CompC />
    </>
  )
}

export default Home;
