import React, { Fragment, useCallback, useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { VsPopupProps } from '../../../types/popup';

const isWeb = Taro.getEnv() === Taro.ENV_TYPE.WEB;

const VsPopup: React.FC<VsPopupProps> = (props: VsPopupProps) => {
  const imageUrl = 'http://storage.360buyimg.com/static-common/daojia/icon-layer-close.png';
  const {
    isShow,
    adjustPosition,
    closeCallback,
    openCallback,
    textAlign = 'center',
    zIndex,
    disableTitle,
    disableClose,
    closeSrc,
  } = props;
  const [animationData, setanimationData] = useState({ actions: [] });
  const [showStatus, setShowStatus] = useState(false);

  const selfOpenCallback = useCallback(() => openCallback && openCallback(), [openCallback]);

  // 关闭弹层
  const hideHandle = useCallback(() => {
    // setShowStatus(false);
    closeCallback && closeCallback();
  }, [closeCallback]);

  useEffect(() => {
    if (isWeb) {
      if (isShow) {
        setShowStatus(true);
      } else {
        setShowStatus(false);
      }
    } else {
      // console.log(isWeb, 'isWeb');
      const animation: any = Taro.createAnimation({
        duration: 400,
        timingFunction: 'ease',
      });
      if (isShow) {
        animation.translateY('-100%').step();
        // console.log('%c isShow', 'color:#f00');
        setanimationData(animation.export());
        setShowStatus(true);
        selfOpenCallback();
        if (adjustPosition && adjustPosition > 0) {
          animation.translateY(`-${adjustPosition + 100}%`).step();
          setanimationData(animation.export());
        } else if (adjustPosition === 0) {
          animation.translateY('-100%').step();
          setanimationData(animation.export());
        }
      } else {
        // console.log('%c isShowfalse', 'color:#f00');
        setanimationData(animation);
        animation.translateY('100%').step();
        setanimationData(animation.export());
        setShowStatus(false);
      }
    }
  }, [adjustPosition, isShow, selfOpenCallback]);
  const display = showStatus ? 'block' : 'none';
  return (
    <Fragment>
      <View
        className='vs-popup'
        style={{
          zIndex: zIndex ? zIndex + 1 : 'inherit',
          bottom: isWeb ? '0' : '-80vh',
          display: isWeb ? display : 'block',
        }}
        animation={animationData}
      >
        <View className='vs-popup-wrapper'>
          <View className={`vs-popup-header ${disableTitle ? 'vs-popup-default' : ''}`}>
            <Text className='vs-popup-header-title' style={{ textAlign, display: disableTitle ? 'none' : 'block' }}>
              {props.title}
            </Text>
            <Image
              style={{ display: disableClose ? 'none' : 'block' }}
              className='vs-popup-header-iconClose'
              src={closeSrc || imageUrl}
              mode="widthFix"
              onClick={hideHandle}
            />
          </View>
        </View>
      </View>
      <View className='vs-popup-mask' style={{ zIndex, display: showStatus ? 'block' : 'none' }} onClick={hideHandle} />
    </Fragment>
  );
};

export default VsPopup;
