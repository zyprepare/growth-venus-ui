/*
 * @Author: your name
 * @Date: 2021-03-23 18:01:24
 * @LastEditTime: 2021-04-02 17:33:56
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /venus-ui/packages/demo/src/pages/htmlParse/index.tsx
 */
import React  from 'react'
import { View  } from '@tarojs/components'
import { VsHtmlParse } from 'venus-ui'
import  { Events } from '@tarojs/taro'
import 'venus-ui/lib/style/components/htmlParse.scss'
import './index.scss'
const events = new Events()

function HtmlParseDemo() {

  const html= `<div class="for_separator"></div><a href="https://m.a.com" ><img class="init_pic" src="https://img20.360buyimg.com/imgzone/jfs/t1/145191/30/8952/28718/5f68096cEa545804e/7220e6548a30bcf4.jpg"></a><div class="for_separator"></div><a href="https://a.com"><img class="init_pic" src="https://img10.360buyimg.com/imgzone/jfs/t1/146426/30/8643/403081/5f680970Ef8675982/25004fc6fcc7530a.jpg"></a><div class="for_separator"></div><img class="init_pic" src="https://img13.360buyimg.com/imgzone/jfs/t1/132047/6/10422/355691/5f680974E6f17a043/4f500d0eb0b263c0.jpg"><div class="for_separator"></div><p><br></p>`
  // 监听一个事件，接受参数
  events.on('goToOther', (arg) => {
    // doSth
    console.log(arg,"arg")
  })
  return (
    <View className="html-container">

      <VsHtmlParse html={html} />
    </View>
  )
}

export default HtmlParseDemo
