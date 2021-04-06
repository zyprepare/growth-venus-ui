/*
 * @Author: your name
 * @Date: 2021-03-30 10:58:46
 * @LastEditTime: 2021-04-02 17:21:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /venus-ui/packages/venus-ui/src/components/image/index.tsx
 */
/**
 * 图片组件增强
 */
import React, { useEffect, useState } from 'react';
import { VsImagesProps } from '../../../types/image';
import { parseImgUrl } from './utils/index';
import { Image } from '@tarojs/components';
import { ImageProps } from '@tarojs/components/types/Image';

const defaultImgage = 'https://storage.a.com/static-common/daojia/list-default-img.png';



function ImagePro(props: VsImagesProps) {
    const [src, setSrc] = useState(props.src || defaultImgage);

    useEffect(() => {
        setSrc(props.src);
    }, [props.src]);

    const { showDefaultImg = true, defaultSrc } = props;

    const handleError = () => {
        if (showDefaultImg === false) {
            return;
        }
        if (defaultSrc) {
            setSrc(defaultSrc);
        } else {
            setSrc(defaultImgage);
        }
    };
    return (
        <Image
            {...props}
            src={parseImgUrl(src, props.width, props.height, props.cut)}
            onError={handleError}
            style={props.style}
            className={props.className || ''}
        />
    );
}

export default ImagePro;
