import React,{useEffect,useState} from 'react';
import './App.css';
import List from './Components/List.js';
import collegeList from './Data/colleges.json';

function App() {
   const [start,setStart]=useState(0);
  const [list,updateList]=useState([]);
  const [loading,setLoading]=useState(false);
  const jsonLen = Object.keys(collegeList.colleges).length;
 
  useEffect(()=>{
      loadData();
    },[])
      
  useEffect(() => {
      window.addEventListener('scroll',pageEnd);
      return () => window.removeEventListener('scroll', pageEnd);
    }, []);

  useEffect(() => {
      if (!loading) return;
      loadData();
    },[loading,start]);

  function pageEnd() {
      if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return ;
      setLoading(true);
  }
  function loadData(){
      let arr=[];
      arr = collegeList.colleges.slice(start,start+10).map((item,index)=>{
      return arr[index] = item;
    })   
      if(start === 0) {
        updateList([...list,...arr]); 
        setLoading(false); 
        setStart(start + 10); 
      }
      else
      {
        if(start === jsonLen) setLoading(true);
        else{
        setTimeout(()=>{
          updateList([...list,...arr]); 
        setLoading(false); 
        setStart(start + 10); 
        },100)
        }
      }
     }


  return (
    <div className="App">
         <h1><u>List of colleges in North India</u></h1> 
      <List state={list}
            loading={loading}/> 
    </div>
  );
}

export default App;
