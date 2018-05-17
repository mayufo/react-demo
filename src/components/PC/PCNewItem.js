import React from 'react'
import {Card} from 'antd'
import { news } from '@/server/getData'
import style from './PC.css'
import {Link} from 'react-router-dom'


export default class PCNewItem extends React.Component {
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
                    <Link to={`detail/${newsItem.uniquekey}`}>
                        {newsItem.title}
                    </Link>
                </li>
            )):'没有加载到新闻'
        return (
            <div className={style.newItem}>
                <Card title={this.props.title} bordered={this.props.border}>
                    <ul>
                        {newsList}
                    </ul>
                </Card>
            </div>
        )
    }
}
