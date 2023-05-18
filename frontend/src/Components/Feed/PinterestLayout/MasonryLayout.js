import React from 'react'
import Masonry from "react-masonry-css";
import Pin from "../Pin/Pin.jsx"
import "./Masonry.scss"
const breakpointColumnsObj ={
    default:4,
    // 3000:6,
    // 2000:5,
    // 1200:3,
    // 1000:2,
    // 500:1,
    3000:7,
    2000:6,
    1100: 3,
    700:2,
    500: 1
}
// const breakpointColumnsObj ={
//   default:4,
//   // 3000:6,
//   // 2000:5,
//   // 1200:3,
//   // 1000:2,
//   // 500:1,
//   3000:7,
//   2000:6,
//   1100: 3,
//   700:2,
//   500: 1
// }

function MasonryLayout({data}) {
  console.log("data",data)
  return (
    <div className='Masonry'>
      <Masonry  breakpointCols={ breakpointColumnsObj}  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
       {
        data.map((item)=>(
            // <img src={item.img}/>
            <Pin pin={item} id={item.id} />
        ))
       }
      </Masonry>
    </div>
  )
}

export default MasonryLayout
