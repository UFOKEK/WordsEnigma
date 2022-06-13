import React,{useContext} from 'react'
import { GameContext } from '../App'

const Key = (props) => {
  const {writeLetter,correctLetters,incorrectLetters,closeLetters} =useContext(GameContext);
  let keyColor="";
  if(correctLetters.includes(props.keyVal)){keyColor="correct"}
  else{if(closeLetters.includes(props.keyVal)){keyColor="close"}}
  if(incorrectLetters.includes(props.keyVal)){keyColor="incorrect"}


  //if()
  return (
    <div className={'letter '+keyColor} onClick={()=>writeLetter(props.keyVal)} key={props.index}> {props.keyVal}</div>
  )
}

export default Key