import React from 'react';
import { actCreateSongRequest } from '../../actions';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom'

class EditSong extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameSong: "",
            singer: "",
            composer: "",
            releaseYear: 0

        }

    }
    render() {
        return (
            <div className="container text-center">
                <div className="w-50 ">
                    <form onSubmit={this.addSong}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Tên bài hát" name="nameSong" value={this.state.nameSong} onChange={this.onChange} />

                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Ca sĩ" name="singer" value={this.state.singer} onChange={this.onChange} />

                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Sáng tác" name="composer" value={this.state.composer} onChange={this.onChange} />

                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Năm phát hành" name="releaseYear" value={this.state.releaseYear} onChange={this.onChange} />

                        </div>
                        <div className="d-flex flex-row-reverse">
                            <button className="btn btn-info  ml-2" type="submit" onClick={() => this.addSong}> Lưu</button>
                           <button className = "btn btn-infor"> <NavLink to = '/songs'> Trở lại</NavLink> </button>
                            </div>
                    </form>
                </div>

            </div>
        );
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
        console.log(this.state);
    }
    addSong = (e) => {
        e.preventDefault();
        var { history } = this.props;
        var { nameSong, singer, composer, releaseYear } = this.state;
        var song = {
            nameSong: nameSong,
            singer: singer,
            composer: composer,
            releaseYear: releaseYear
        }
        this.props.addSong(song);
        history.goBack();
    }
   
}

const stateMapToProps = (state) => {
    return {
        songs: state.songs
    }

}
const dispatchMapToProps = (dispatch, props) => {
    return {
        addSong: (song) => {
            dispatch(actCreateSongRequest(song));
        }
    }
}
export default connect(stateMapToProps, dispatchMapToProps)(EditSong);
