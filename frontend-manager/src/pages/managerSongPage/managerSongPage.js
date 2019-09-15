import React from 'react';
import ListSong from '../../components/songs/listSong';
import { connect} from 'react-redux'
import { actGetSongsRequest, actDeleteSongRequest } from '../../actions';
import SongItem from '../../components/songItem/songItem';
class ManagerSongPage extends React.Component {
 

  render(){
    var{songs} = this.props;
    if(songs&&songs.length===0){
      this.props.getSongs();
    }
  

  return (
    <div > 
     <ListSong >{this.showSongs(songs)}</ListSong>
    </div>
  );
 }
  
 showSongs = (songs)=>{
  var result = null;
  console.log("songs", songs);
  if(songs)
  {
   
    if(songs.length>0)
    {
      result = songs.map((item ,index ) =>
      {
        return <SongItem key = {index} song = {item} index = {index} deleteSong = {this.props.deleteSong}></SongItem>
      })
    }
  }
  
  return result;
}

}




const mapStateToProps = (state) =>{
  return {
     songs: state.songs
     
  }

}

const mapDispatchToProps = (dispatch, props)=>{
  return {
    getSongs :() =>{ dispatch(actGetSongsRequest())},
    deleteSong: (id) =>{ dispatch(actDeleteSongRequest(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ManagerSongPage);
