/*
 * @Author: your name
 * @Date: 2021-03-24 13:55:06
 * @LastEditTime: 2021-04-02 17:19:07
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /venus-ui/packages/demo/src/pages/error/index.tsx
 */
import React  from 'react'
import { View } from '@tarojs/components'
import { VsError } from 'venus-ui'
import 'venus-ui/lib/style/components/error.scss'
import './index.scss'
function ErrorPage() {

  return (
    <View className="error-container">
      <VsError  />
    </View>
  )
}

export default ErrorPage
