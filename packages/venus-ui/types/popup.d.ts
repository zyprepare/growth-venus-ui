import * as React from 'react'
import React from 'react'

import VsComponent from './base'

export interface VsPopupProps extends VsComponent{
  /**
   *  插入内容
   */
  children: JSX.Element;
  /**
   *  标题
   */
  title?: string;
  /**
   *  标题位置
   */
  textAlign?:
      | 'inherit'
      | 'center'
      | '-moz-initial'
      | 'initial'
      | 'revert'
      | 'unset'
      | 'end'
      | 'justify'
      | 'left'
      | 'match-parent'
      | 'right'
      | 'start';
  /**
   *  是否使用默认头
   */
  disableTitle?: boolean;
  /**
   *  关闭按钮显示隐藏
   */
  disableClose?: boolean;
  /**
   *  显示层级
   */
  zIndex?: number;
  /**
   *  弹窗显示和隐藏
   */
  isShow?: boolean;
  /**
   *  关闭按钮链接
   */
  closeSrc?: string;
  /**
   *  键盘弹起时，是否自动上推页面
   */
  adjustPosition?: number;
  /**
   *  关闭回调
   */
  closeCallback?(): void;
  /**
   *  显示回调
   */
  openCallback?(): void;
}

declare const VsPopup: React.FC<VsPopupProps>

export default VsPopup
