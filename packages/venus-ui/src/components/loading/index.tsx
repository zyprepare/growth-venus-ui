/*
 * @Author: your name
 * @Date: 2021-03-24 15:40:41
 * @LastEditTime: 2021-04-02 17:21:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /venus-ui/packages/venus-ui/src/components/loading/index.tsx
 */
import React from 'react';
import { View } from '@tarojs/components';
import {VsLoadingProps} from '../../../types/loading'

export default function Loading(props: VsLoadingProps) {
    const { fixed, hasText } = props;
    return (
        <View className={`vs-loading ${fixed || ''}`}>
            <View className="icon" />
            {hasText && <View>加载中</View>}
            {hasText && <View className="dot" />}
        </View>
    );
}
