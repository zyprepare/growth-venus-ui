/*
 * @Author: your name
 * @Date: 2021-03-24 15:44:09
 * @LastEditTime: 2021-04-02 17:34:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /venus-ui/packages/demo/src/pages/loading/index.tsx
 */
import React from 'react'
import { View} from '@tarojs/components'
import { VsLoading } from 'venus-ui'
import 'venus-ui/lib/style/components/loading.scss'
import './index.scss'
function LoadingDemo() {
  return (
    <View className="loading-container">
      <VsLoading  />
    </View>
  )
}

export default LoadingDemo
