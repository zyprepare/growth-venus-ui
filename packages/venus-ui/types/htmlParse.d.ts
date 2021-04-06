/*
 * @Author: your name
 * @Date: 2021-03-30 16:42:47
 * @LastEditTime: 2021-04-02 17:20:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /venus-ui/packages/venus-ui/types/image.d.ts
 */
import * as React from 'react'
import HtmlParseComponent from './base'
export interface VsHtmlParseProps extends HtmlParseComponent{
  html: string;
  imgLazy?: boolean;
}
declare const VsHtmlParseProps: React.FC<HtmlParseProps>

export default VsHtmlParseProps
