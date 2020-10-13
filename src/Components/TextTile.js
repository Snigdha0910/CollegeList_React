import React from'react';
import Star from './Star.js';
import './../textlist.css';


function TextTile(props){
    let originalFees = props.original_fees;
    let discountedFees = props.discounted_fees;
    let len= props.amenties.length;
    let amenityList;

    function colormaker(offertext,place)
    {
        var temp = offertext
        var final_req = ''
        for(var i = 0;i<temp.length;i++)
        {
            if(((temp[i] >= '0' && temp[i] <= '9')||(temp[i]==','))&&(place==='offer'))
            {
                final_req += "<span style='color:rgb(21, 132, 146);font-weight:bold'>"+temp[i]+"</span>"
            }
            else if(((temp[i] >= '0' && temp[i] <= '9')||(temp[i]=='.'))&&(place==='places'))
            {
                final_req += "<span style='font-weight:bold;color:black'>"+temp[i]+"</span>"
            }
            else
            {
                final_req += temp[i]
            }
        }
        final_req = final_req.replace('LOGIN',"<span style='color:blue'>LOGIN</span>").replace(['kms '],"<span style='font-weight:bold;color:black'>kms </span>").replace(['Kms '],"<span style='font-weight:bold;color:black'>Kms </span>")
        return final_req
    }


    return(
        <div className='texttileStyle'>
            <div className='FlexLeft'>
                <div align='left' className='TextLeftDiv college'>
                    {props.college_name}
                    <span style={{marginLeft:'2%'}}>
                        <Star rating={props.rating}/>
                    </span>
                </div>
                    
                <div align='left' className='TextLeftDiv'>
                    <span>
                        <b>{props.nearest_place[0]}|</b> 
                    </span> 
                    <span className='nearLight'>{props.nearest_place[1]}</span>
                </div>

                <div align='left' className='TextLeftDiv'>
                    <span className='match'> 93% Match : </span>
                    <span style={{fontSize:'12px'}} dangerouslySetInnerHTML={{__html: colormaker(props.famous_nearest_places,'places')}}> 
                    </span>
                </div>
                {
                props.promoted ? 
                <button className='offers TextLeftDiv'>
                    <span dangerouslySetInnerHTML={{__html: colormaker(props.offertext,'offer')}}>
                    </span>
                </button>:
                <div className='TextLeftDiv dealDiv' align='left'>
                    <button className='deal'> DEAL</button>
                    <span style={{marginLeft:'2%'}} 
                            dangerouslySetInnerHTML={{__html: colormaker(props.offertext,'offer')}}>
                    </span>
               </div> 
                }
            </div>   

            <div className='FlexRight'> 
                <div className='TextRightDiv'>
                        <del>
                            <span>&#x20B9;</span>
                            {Number(originalFees).toLocaleString('en')}
                        </del>
                        <span id='banner'> 
                            <span>
                                <b>{props.discount}</b>
                            </span>
                        </span> 
                    
                </div> 

                <div className='TextRightDiv discountedFees' align='right'> 
                    <span>&#x20B9;</span>{Number(discountedFees).toLocaleString('en')}
                </div>  
            
                <div className='TextRightDiv fees' align='right'> 
                    {props.fees_cycle}
                </div> 
                
                <div className='TextRightDiv amenities' align='right'>
                    <b>{
                        props.amenties.map((a,i) =>{
                            amenityList= len === i+1 ? `${a}` : `${a} +` ;
                            return amenityList;
                        })}
                   </b> 
                </div>  
           </div> 
            <br style={{clear:'all'}}/> 
        </div>
    );

}
export default TextTile;

