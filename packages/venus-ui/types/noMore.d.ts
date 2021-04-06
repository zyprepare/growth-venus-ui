/*
 * @Author: your name
 * @Date: 2021-03-30 16:51:07
 * @LastEditTime: 2021-04-02 17:20:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /venus-ui/packages/venus-ui/types/noMore.d.ts
 */
import * as React from 'react'
import NoMoreComponent from './base'
export interface VsNoMoreProps extends NoMoreComponent{
  img?: string;
  text?: string;
}
declare const VsNoMoreProps: React.FC<NoMoreProps>

export default VsNoMoreProps
