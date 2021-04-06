/*
 * @Author: your name
 * @Date: 2021-03-30 16:57:13
 * @LastEditTime: 2021-04-02 17:20:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /venus-ui/packages/venus-ui/types/error.d.ts
 */
import * as React from 'react'
import LayOutComponent from './base'
export interface VsLayOutProps extends LayOutComponent{
  borderRadius?:string;
  title:string;
  borderTop?:string;
  children?:JSX.Element
}
declare const VsLayOutProps: React.FC<LayOutProps>

export default VsLayOutProps
