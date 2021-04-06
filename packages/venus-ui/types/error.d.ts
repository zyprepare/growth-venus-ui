/*
 * @Author: your name
 * @Date: 2021-03-30 16:57:13
 * @LastEditTime: 2021-04-02 17:20:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /venus-ui/packages/venus-ui/types/error.d.ts
 */
import * as React from 'react'
import ErrorComponent from './base'
export interface VsErrorProps extends ErrorComponent{
  text?: string;
  btnText?: string;
  image?: string;
  onShow?: (params?: any) => void;
  onRetry?: (params?: any) => void;
  customClass?: string;
}
declare const VsErrorProps: React.FC<ErrorProps>

export default VsErrorProps
