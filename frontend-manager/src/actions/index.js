import * as Types from '../constants/actionType'
import callApi from '../utils/apiCaller'

export const actGetSongsRequest = () => {
    return (dispatch) => {
        return callApi('songs', 'GET', null).then(res => {
            dispatch(actGetSongs(res.data));
            console.log(res);

        });

    }
}

export const actDeleteSongRequest = (id) => {
    return (dispatch) => {
        return callApi(`song/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteSong(id));
        })
    }
}

export const actCreateSongRequest = (song) => {
    return (dispatch) => {
        return callApi('song', 'POST', song).then(res => {
            dispatch(actCreateSong(song));
        })
    }
}

export const actCreateSong = (song) => {
    return {
        type: Types.CREATE_SONG,
        song
    }

}
export const actGetSongs = (songs) => {
    return {
        type: Types.GET_SONGS,
        songs
    }
}
export const actDeleteSong = (id) => {
    return {
        type: Types.DELETE_SONG,
        id
    }
}