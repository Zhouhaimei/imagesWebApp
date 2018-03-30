import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getImagesList} from "actions/imagesList";
import {Link} from 'react-router-dom';

import style from './Home.css'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNo: 2,
            pageSize: 12,
            imagesList:[],
            isLoadingMore:false
        }
    }
    async componentDidMount() {
       await this
        .props
        .getImagesList(1, this.state.pageSize)
        
    }
    render() {
        const {imagesList, isLoading, errorMsg,hasMore} = this.props.imagesList;
        return (
            <div>
                {isLoading
                    ? '请求信息中......'
                    : (errorMsg
                        ? errorMsg
                        : <div className={style.homeWrapper}>
                            {imagesList.map((item, index) => {
                                return  <Link to={"/imgDetail/" +item.id} key={index} > <img className={style.homeImg} src={item.img}/></Link>
                            })}
                            {/* <LoadMore
                                isLoadingMore={this.state.isLoadingMore}
                                loadMoreFn={this
                                .loadMoreData
                                .bind(this)}/> */}

                        </div>)
}
                {/* <button onClick={() => this.props.getImagesList()}>请求用户信息</button> */}
            </div>
        )
    }
}

export default connect((state) => ({imagesList: state.imagesList}), {getImagesList})(Home);
