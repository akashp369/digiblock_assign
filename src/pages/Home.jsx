import React, { useState } from 'react'

const Home = () => {
  const [err, setErr]=useState(false)
  const[gst, setGst]=useState('');

  const handlesubmit =()=>{
    if(gst){
      setErr(true)
    }
  }
  return (
    <div className="container-fluid " style={{ height: '65vh' }}>
      <div className="text-center">
        <input  onChange={e=>setGst(e.target.value)} placeholder='search GSTIN' style={{width:"60%", marginTop:"4rem"}}/>
        <br />
        <br />
        <button onClick={handlesubmit}>Submit</button>
      </div>
      <br />
      <div className="text-center">
        {err?<p style={{color:"red"}}>Error while fetching data</p>:null}
      </div>
    </div>
  )
}

export default Home
