/*
 * @Author: your name
 * @Date: 2021-03-25 14:47:30
 * @LastEditTime: 2021-04-02 17:37:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /venus-ui/packages/venus-ui/src/components/noMore/index.tsx
 */
import React from 'react';
import { View, Image } from '@tarojs/components';
import { VsNoMoreProps } from '../../../types/noMore'
export default function Nomore(props: VsNoMoreProps) {
    const { img = 'http://storage.a.com/static-common/daojia/no_more.png', text = '没有更多啦~' } = props;

    return (
        <View className="vs-noMore">
            <Image className="icon" src={img} />
            <View className="txt">{text}</View>
        </View>
    );
}
