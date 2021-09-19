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

function Home() {
  return (
    <>
      <h1>Hello world</h1>
      <CompA />
    </>
  )
}

export default Home;
