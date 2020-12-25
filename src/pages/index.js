import React,{useState,useRef} from "react"
import Lolly from "../components/lolly"
import { useQuery,useMutation } from '@apollo/client';
import gql from 'graphql-tag';

import "./style.css";

const GET_TODOS = gql`
{
    GetCard {
      c1,c2,c3,msg
    }
}
`;

const ADD_DATA=gql`
  mutation AddData($c1:String,$c2:String,$c3:String,$rec:String,$msg:String,$sender:String,$link:String){
    AddData(c1:$c1,c2:$c2,c3:$c3,rec:$rec,msg:$msg,sender:$sender,link:$link){
      c1,c2,c3,rec,sender,msg,link
    }
  }

`
export default function Home() {
  const {loading,error,data}=useQuery(GET_TODOS)
  const [AddData]=useMutation(ADD_DATA)
  const[c1,setC1]=useState("#d52358")
  const[c2,setC2]=useState("#e95946")
  const[c3,setC3]=useState("#deaa43")
  const To=useRef();
  const From=useRef()
  const TextArea=useRef();

  const Link=useRef();
  
 
  const OnSubmit=async()=>{

console.log(TextArea.current.value,"textarea")
    const obj={
      c1:c1,c2:c2,c3:c3,msg:TextArea.current.value,sender:To.current.value,rec:From.current.value
    }
  

    await AddData({variables:{
      c1:c1,c2:c2,c3:c3,msg:TextArea.current.value,sender:To.current.value,rec:From.current.value,
      link:Link.current.value
    }})
  }
  if (loading)
  return <h2>Loading..</h2>

if (error) {
  console.log(error)
  return <h2>Error</h2>
}
 
console.log(data,"daata")

  
  return(
    <>



<div className="wrapper" style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>

<div className="container" style={{display:"flex"}}>
{/* lolly hai */}



<div>

<div><Lolly top={c1}  middle={c2}  bottom={c3} /></div>
<input type="color" value={c1} onChange={(e)=>setC1(e.target.value)}></input>
<input type="color" value={c2} onChange={(e)=>setC2(e.target.value)}></input>
<input type="color" value={c3} onChange={(e)=>setC3(e.target.value)}></input>
<button onClick={()=>OnSubmit()}>ON SUBMIT</button>
</div>



{/* lolly hai yeh */}
{/* form wala idher hai */}


<div style={{alignSelf:"center",width:"300px",justifySelf:"center",
height:"420px"}}>
<div  style={{marginTop:"20px",textAlign:"center"}}>
  <input placeholder="from" ref={From}></input>
</div>
<div>

  <div style={{marginTop:"20px",textAlign:"center"}}><textarea style={{height:"250px"}} 
   ref={TextArea}></textarea></div>
</div>
<div style={{marginTop:"20px",textAlign:"center"}}>  <input placeholder="TO" ref={To}></input></div>
<div style={{marginTop:"20px",textAlign:"center"}}>  
<input placeholder="TO" ref={Link}></input></div>
<div style={{marginTop:"20px",textAlign:"center"}}>

</div>
</div>

{/* form wala idehr hai */}

</div>

</div>







    </>
  )
}
