import React from 'react'
import {Card} from 'antd'
import { news } from '@/server/getData'


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
        console.log(this.state.news)
        const newsList = this.state.news.length ?
            this.state.news.map((newsItem, index) => (
                <li key={index}>
                    {newsItem.title}
                </li>
            )):'没有加载到新闻'
        return (
            <div>
                <Card title={this.props.title} bordered={this.props.border}>
                    <ul>
                        {newsList}
                    </ul>
                </Card>
            </div>
        )
    }
}
