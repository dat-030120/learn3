import logo from './logo.svg';
import './App.css';
import {react,useState } from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function App() {
  const [datas,setData]= useState([
    {
      id:1,
      sate:true,
      name:`Tiểu sử của người yêu `,
      description:`Người tôi được sinh ra ở sài gòn và ở đó được vài nằm sau đó về hương khê hà tĩnh để sinh sống,
      bên cạnh đó người yêu tôi bắt đầu học đại học tại huế`,
    },
    {
      id:2,
      sate:true,
      name:`Người yêu tôi như thế nào`,
      description:`Người con gái tôi yêu có một tính cách bất bình thường hơn mn vì đó là điều tui thích về cô ấy, 
      vì cô ấy nắng mưa thất thường, bênh cạnh đó lâu chị châu trông rất xinh`, 
    },
    {
      id:3,
      sate:true,
      name:`Khi nào người yêu dỗi là khi nào nè  `,
      description:`Khi tôi vô tình làm cô ấy buồn, ngoài ra còn`,
    },
    {
      id:4,
      sate:true,
      name:`Người yêu khi nào đi ngủ `,
      description:`cô ấy rất ít khi ngủ nè   `,
    },  
])
 function check (data){

   const ojt = datas.map((c,i)=>{
      if(i===(data.id-1)){
        return {...c, sate: !data.sate};
      }
      return c
   })
  setData(ojt)
 }
  let element = datas.map((data,index)=>{
    return(
      <div className='box-item' key={index}>
        <button className='titile-box' onClick={()=>check(data)}>
          <h2 className='name'>
            {data.name}
          </h2>
          {data.sate ?(<ArrowDropDownIcon/>):(<ArrowDropUpIcon/>)} 
        </button>
      <p className='description'> 
      {data.sate && data.description} 
        </p>
    </div>
    )
  })
  return (
    <div className="warapper">
      <h1 className="title " onClick={check}> 
          Some thing my girl-friend
      </h1>
      <div className='box'>
          {element}
      </div>
    </div>
  );
}

export default App;
