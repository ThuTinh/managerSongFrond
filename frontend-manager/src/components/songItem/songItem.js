import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NavLink} from 'react-router-dom'
class SongItem extends React.Component {
   
   
      
    render() {
        var { song, index } = this.props;
        console.log(song);
      const  tdStyle = {
            
                display : 'inline-block',
                color: 'black'
            
            
          };
        return (
            <tr>
                <td >{index + 1}</td>
                <td>{song.nameSong}</td>
                <td>{song.singer}</td>
                <td>{song.composer}</td>
                <td>{song.releaseYear}</td>
                <td >
                <NavLink style = {tdStyle} className="nav-link" to="/song/add"   > <FontAwesomeIcon className= "mr-2" icon="edit"  /></NavLink>  
                <NavLink style = {tdStyle} className="nav-link" to="/song/add"   >  <FontAwesomeIcon className= "mr-2" icon="eye" onClick = {this.wiewSong} /></NavLink> 
                <FontAwesomeIcon style = {tdStyle} className= "mr-2" icon="trash"  onClick = {()=>this.deleteSong(song.id)} />
                </td>
            </tr>

        );
    }

    deleteSong(id)
    {
        
        console.log(id);
        this.props.deleteSong(id);

    }

}

export default SongItem;
