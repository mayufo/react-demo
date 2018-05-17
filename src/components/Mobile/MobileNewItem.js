import React, {Component} from 'react';
import {Row, Col} from 'antd'
import style from './Mobile.css'
import { news } from '@/server/getData'

import {Link} from 'react-router-dom'

class MobileNewItem extends Component {
    constructor() {
        super()
        this.state = {
            news: []
        }
    }
    async componentDidMount() {
        let res = await news(this.props.type, this.props.count, 'getnews')
        this.setState({
            news: res
        })
    }

    render() {
        const newsList = this.state.news.length ? this.state.news.map((newsItem, index) => (
            <li key={index} className={style.newItem}>
                <Link to={`/detail/${newsItem.uniquekey}`}>
                    <img src={newsItem.thumbnail_pic_s} alt=""/>
                    <div>
                        <p>{newsItem.title}</p>
                        <div>
                            <span className={style.newItemType}>{newsItem.realtype}</span>
                            <span>{newsItem.date}</span>
                        </div>
                    </div>
                </Link>
            </li>
        )):'正在加载';
        return (
            <div style={{marginTop: '15px'}}>
                <Row>
                    <Col span={1}></Col>
                    <Col span={22}>
                        <div>
                            {newsList}
                        </div>
                    </Col>
                    <Col span={1}></Col>

                </Row>
            </div>
        )
    }
}

export default MobileNewItem;
