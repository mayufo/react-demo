import React from 'react'
import {Card} from 'antd'
import { news } from '@/server/getData'
import style from './PC.css'

export default class PCNewImage extends React.Component {
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

    render () {
        const newsList = this.state.news.length ?
            this.state.news.map((newsItem, index) => (
                <li key={index}>
                    <div>
                        <img src={newsItem.thumbnail_pic_s} alt=""/>
                    </div>
                    <div>
                        <h3>{newsItem.title}</h3>
                        <p>{newsItem.author_name}</p>
                    </div>
                </li>
            )):'没有加载到新闻'
        return (
            <div>
                <Card title={this.props.title} bordered={this.props.border}>
                    <ul className={style.newImage}>
                        {newsList}
                    </ul>
                </Card>
            </div>
        )
    }
}
