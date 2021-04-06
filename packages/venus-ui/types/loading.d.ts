/*
 * @Author: your name
 * @Date: 2021-03-30 16:42:47
 * @LastEditTime: 2021-03-30 16:58:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /venus-ui/packages/venus-ui/types/image.d.ts
 */
import * as React from 'react'
import LoadComponent from './base'
export interface VsLoadingProps extends LoadComponent{
  fixed?: boolean;
  hasText?: boolean;
}
declare const VsLoadingProps: React.FC<LoadingProps>

export default VsLoadingProps
