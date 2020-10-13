import React, { useState } from 'react';
import ImageTile from './ImageTile.js';
import TextTile from './TextTile.js';


function List(props){
    
    const rows = props.state.reduce(function (rows, key,index) { 
        return (index % 2 == 0 ? rows.push([key]) 
          : rows[rows.length-1].push(key)) && rows;
      }, []);
    
    return(
        rows.map((row,i) =>{
            return(
            <table>
                <tbody>
                    <tr>
                        {        
                        row.map((item,index) =>{
                            console.log(item);
                            return(   
                                <td>
                                    <div className={index%2===0? 'left-side':'right-side'} >
                                        <ImageTile {...item}
                                                    index={index}/>
                                        <TextTile   {...item}/>
                                    </div>
                                </td>
                            )}
                        )}
                    </tr>
                </tbody>
            </table>

        )})
        );
 
    
}

export default List;
