/*
 * @Author: your name
 * @Date: 2021-03-24 15:44:09
 * @LastEditTime: 2021-04-02 17:34:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /venus-ui/packages/demo/src/pages/loading/index.tsx
 */
import React from 'react'
import { View} from '@tarojs/components'
import { VsLayOut } from 'venus-ui'
import 'venus-ui/lib/style/components/layout.scss'
import './index.scss'
function LayOutDemo() {

  return (
    <View className="loading-container">
      <VsLayOut title="标题" >
        <View>这是内容</View>
        <View>这是内容</View>
        <View>这是内容</View>
        <View>这是内容</View>
      </VsLayOut>
    </View>
  )
}

export default LayOutDemo
