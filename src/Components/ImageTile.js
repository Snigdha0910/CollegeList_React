import React from 'react';
import './../list.css';

function ImageTile(props){
    // var image=props.image.split['.'];

    return(
        <>
        <img className='tile' src={require(`./../images/${props.image}`)} alt='Picture1'/>
        {props.promoted ?
        <div className='promoted'>
            PROMOTED
        </div>: ''}

        <div className='bottom-div' style={{display:'inline-block'}}>
            <button>
                {props.tags[0]}
            </button>
            <button style={{marginLeft:'5px'}}>
                {props.tags[1]}
            </button>
        </div>

        <div className='bottom-text'>
            #{props.ranking}
        </div>

        <div className='ranking'>
            <p style={{display:'inline-block'}}>
                <span style={{fontSize:'20px'}}>{props.rating}</span>/5
            </p>
            <p>{props.rating_remarks}</p>
        </div>
    </>
    );  
}

export default ImageTile;