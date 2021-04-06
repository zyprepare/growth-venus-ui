/*
 * @Author: your name
 * @Date: 2021-03-25 14:58:59
 * @LastEditTime: 2021-04-02 17:37:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /venus-ui/packages/venus-ui/src/components/layOut/index.tsx
 */
import React from 'react';
import { View } from '@tarojs/components';
import {VsLayOutProps} from '../../../types/layOut'
const Content = (props: VsLayOutProps) => {
    return (
        <View className={`vs-layout-contentBox ${props.borderRadius}`}>
            <View className="contentDetail">
                <View className="contentTitle">{props.title}</View>
                <View className={`contentList ${props.borderTop ? 'contentTop' : ''}`}>{props.children}</View>
            </View>
        </View>
    );
};
export default Content;
