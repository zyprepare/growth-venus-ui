/*
 * @Author: your name
 * @Date: 2021-03-24 13:46:45
 * @LastEditTime: 2021-04-02 17:20:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /venus-ui/packages/venus-ui/src/components/error/index.tsx
 */
import React from "react";
import { View, Text, Image, Button } from "@tarojs/components";
import noWifiImg from "./assets/bg_netless.png";
import { VsErrorProps } from '../../../types/error';
export default function Error(props: VsErrorProps) {
  const {
    text = "网络请求失败",
    btnText = "重新加载",
    image = noWifiImg,
    onShow,
    onRetry,
    customClass,
  } = props;

  onShow && onShow();

  return (
    <View className={`vs-error-special ${customClass || ''}`}>
      <Image className="img" src={image} />
      <Text className="text">{text}</Text>
      {onRetry && (
        <Button className="btn" onClick={onRetry}>
          {btnText}
        </Button>
      )}
    </View>
  );
}
