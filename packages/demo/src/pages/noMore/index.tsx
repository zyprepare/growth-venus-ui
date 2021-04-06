/*
 * @Author: your name
 * @Date: 2021-03-24 15:44:09
 * @LastEditTime: 2021-04-02 17:34:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /venus-ui/packages/demo/src/pages/loading/index.tsx
 */
import React from 'react'
import { View} from '@tarojs/components'
import { VsNoMore } from 'venus-ui'
import 'venus-ui/lib/style/components/noMore.scss'
import './index.scss'
function noMoreDemo() {

  return (
    <View className="noMore-container">
      这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容
      这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容
      这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容
      这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容
      这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容
      <VsNoMore  />
    </View>
  )
}

export default noMoreDemo
