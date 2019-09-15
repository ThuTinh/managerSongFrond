import React from 'react';

class EditSong extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            nameSong: "",
            singer : "",
            composer: "",
            releaseYear:""

        }

    }
    render() {
        return (
            <div className="container text-center">
                <div className="w-50 ">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Tên bài hát" name = "nameSong" value = {this.state.nameSong} onChange = {this.onChange} />

                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Ca sĩ" name = "singer"  value = {this.state.singer} onChange = {this.onChange} />

                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Sáng tác" name = "composer"  value = {this.state.composer} onChange = {this.onChange}/>

                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Năm phát hành" name = "releaseYear"  value = {this.state.releaseYear} onChange = {this.onChange}/>

                    </div>
                    <div className="d-flex flex-row-reverse">
                        <button className="btn btn-info  ml-2" onClick={ ()=>this.saveSong(this.state)}> Lưu</button>
                        <button className="btn btn-info"> Trở lại</button>
                    </div>


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
    saveSong = (song)=>{
        
    }

}

export default EditSong;
