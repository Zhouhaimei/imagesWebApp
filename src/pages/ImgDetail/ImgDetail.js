import React, {Component} from 'react';
import axios from 'axios'

export default class ImgDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }
    componentDidMount() {
        var _this = this
        axios
            .get('/api/imgdetail?id='+this.props.match.params.id)
            .then(function (response) {
                _this.setState({data: response.data[0]})

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        const data = this.state.data||{}
        return (
            <div >
                <h3 >{data.name}</h3>
                <img  src={data.img}/>
                <p >{data.description}</p>
            </div>
        )
    }
}