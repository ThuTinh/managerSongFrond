import React from 'react';
import SongItem from '../songItem/songItem';
import {NavLink} from 'react-router-dom'

function ListSong(props) {
  
  console.log("â", props.children);
  return (
  
    <div className="container">
      <div className="card ">
        <div className="card-body">
          <h4 className="card-title w-100 text-center">Danh sách bài hát</h4>
          <div>
            <div className = "w-100  d-flex  flex-row-reverse" >
             <NavLink to = '/song/add'> <button className = "btn btn-danger mb-2">Thêm bài hát</button></NavLink> 
            </div>
           <table className="table">
             <thead>
               <tr>
                 <th>STT</th>
                 <th>Tên bài hát</th>
                 <th>Ca sĩ</th>
                 <th>Sáng tác</th>
                 <th>Năm phát hành</th>
                 <th>Edit</th>
               </tr>
             </thead>
             <tbody>
              {props.children}
             </tbody>
           </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListSong;
