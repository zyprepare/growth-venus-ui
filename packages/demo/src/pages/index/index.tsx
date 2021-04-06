import React, { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.goPage = this.goPage.bind(this)
  }

  goPage(pagePath) {
    Taro.navigateTo({
      // url: '/pages/page/path/name'
      url: `/pages/${pagePath}/index`
    })
  }

  componentWillMount() {}

  componentDidMount() {
    Taro.getNetworkType()
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Button
          className='demo-btn'
          onClick={() => {
            this.goPage('popup')
          }}
        >
          popup组件
        </Button>
        <Button
          className='demo-btn'
          onClick={() => {
            this.goPage('htmlParse')
          }}
        >
          htmlParse组件
        </Button>
        <Button
          className='demo-btn'
          onClick={() => {
            this.goPage('error')
          }}
        >
          error组件
        </Button>
        <Button
          className='demo-btn'
          onClick={() => {
            this.goPage('loading')
          }}
        >
          loading组件
        </Button>
        <Button
          className='demo-btn'
          onClick={() => {
            this.goPage('noMore')
          }}
        >
          noMore组件
        </Button>
        <Button
          className='demo-btn'
          onClick={() => {
            this.goPage('layOut')
          }}
        >
          layOut组件
        </Button>
        <Button
          className='demo-btn'
          onClick={() => {
            this.goPage('image')
          }}
        >
          Image组件
        </Button>
      </View>
    )
  }
}
