import React from 'react';
import star from './../images/star.png';
import disable from './../images/disable.png';

function Star(props){
  let left = parseInt(props.rating);
  let arr = new Array(5).fill(1);
    for(let i =0;i<left;i++){
        arr[i] = 0;
   } 
   let newList=arr;

    return(
    newList.map((item,i)=>
      item === 0 ?
            <img src={star} alt='' className='stars'></img>
            :
            <img src={disable} alt='' className='stars'></img>
    ));
}

export default Star;