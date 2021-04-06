/*
 * @Author: your name
 * @Date: 2021-03-30 16:42:47
 * @LastEditTime: 2021-04-02 17:20:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /venus-ui/packages/venus-ui/types/image.d.ts
 */
import * as React from 'react'
import React from 'react'
import { ImageProps } from '@tarojs/components/types/Image';
import ImgComponent from './base'
export interface VsImagesProps extends ImageProps {
  /**
   * 是否显示默认占位图
   * default true
   */
  showDefaultImg?: boolean;
  /**
   * 默认占位图url
   */
  defaultSrc?: string;
  /**
   * 样式
   */
  style?: any;
  /**
   * class名
   */
  className?: string;
  /**
   * 请求图片尺寸宽设置
   */
  width?: number;
  /**
   * 请求图片尺寸高设置, 不传默认高等与宽
   */
  height?: number;
  /**
   * 裁剪参数, 不传默认
   */
  cut?: string;
}
declare const VsImagesProps: React.FC<ImagesProps>

export default VsImagesProps
