/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React from 'react';
import { Events }  from '@tarojs/taro';
import { View, Button ,Image} from '@tarojs/components';
import { VsHtmlParseProps } from '../../../types/htmlParse';
import { html2json } from './utils';
import { CamelCaseStyle } from './utils/styleParse';
import { parseImgUrl } from './utils/parseImgUrl';

const events = new Events()

function HtmlParse(props: VsHtmlParseProps) {
    const { html, imgLazy = false } = props;
    const renderHtml = (htmlStr: string) => {
        const htmlTree = html2json(`<div>${htmlStr}</div>`);

        console.log(1111, htmlTree);

        const htmlParseTagATap = (src: string) => {
            console.log('src: ', src);
            // 触发一个事件，传参
            events.trigger('goToOther', src)
            // 判断是否内部链接跳转
            // const isInnerPage = src.indexOf('http') === -1;
            // if (isInnerPage) {
            //   Taro.navigateTo({
            //         url: src,
            //     });
            // } else {
            //   // Taro.navigateTo({ url: `${WEBVIEWPAGE}?src=${src}` });
            // }
        };

        const deepTraversal = (tree) => {
            if (tree) {
                console.log(tree,"tree");
                return tree.map((item, index) => {
                    const { index: indexStr, nodes, tag, attr, text, node, href, classStr = '', id, value } = item;

                    let styleArray = [];
                    let style = {};
                    let src;

                    if (attr) {
                        attr.src && (src = attr.src);
                        attr.style && (styleArray = attr.style);

                        style = CamelCaseStyle(styleArray);
                    }

                    if (node === 'element') {
                        // eslint-disable-next-line default-case
                        switch (tag) {
                            case 'div':
                            case 'p': {
                                if (id === 'zbViewWeChatMiniImages') {
                                    return value.split(',').map((url) => {
                                        return url ? <Image className="vs-htmlParse-image" key={url} mode="widthFix" src={parseImgUrl(url)} lazyLoad={imgLazy} /> : '';
                                    });
                                }
                                return (
                                    <View key={indexStr} style={style}>
                                        {deepTraversal(nodes)}
                                    </View>
                                );
                            }
                            case 'img': {
                                return <Image className="vs-htmlParse-image" key={indexStr} mode="widthFix" src={parseImgUrl(src)} style={style} lazyLoad={imgLazy} />;
                            }
                            case 'button': {
                                return (
                                    <Button key={indexStr} type="default" size="mini" style={style}>
                                        {deepTraversal(nodes)}
                                    </Button>
                                );
                            }
                            case 'ol': {
                                return (
                                    <View key={indexStr} className={`${classStr}`} style={style}>
                                        <View className="vs-htmlParse-ol-inner">
                                            <View className="vs-htmlParse-ol-number">{index + 1}</View>
                                            <View className="flex-full overflow-hide">{deepTraversal(nodes)}</View>
                                        </View>
                                    </View>
                                );
                            }
                            case 'ul': {
                                return (
                                    <View key={indexStr} className={`${classStr}`} style={style}>
                                        <View className="htmlParse-ul-inner">
                                            <View className="htmlParse-li-circle" />
                                            <View className="flex-full overflow-hide">{deepTraversal(nodes)}</View>
                                        </View>
                                    </View>
                                );
                            }
                            case 'li': {
                                return (
                                    <View key={indexStr} className={`${classStr} vs-htmlParse-li`} style={style}>
                                        {deepTraversal(nodes)}
                                    </View>
                                );
                            }
                            case 'a': {
                                return (
                                    <View
                                        key={indexStr}
                                        onClick={() => htmlParseTagATap(item.attr.href)}
                                        className={`vs-htmlParse-inline ${classStr} vs-htmlParse-${item.tag}`}
                                        data-title={href}
                                        style={style}
                                    >
                                        {deepTraversal(nodes)}
                                    </View>
                                );
                            }
                            case 'br': {
                                return <View />;
                            }

                            case 'block': {
                                return (
                                    <View key={indexStr} className={`${classStr} vs-htmlParse-${item.tag} mb10`} style={style}>
                                        {deepTraversal(nodes)}
                                    </View>
                                );
                            }
                        }
                    } else if (node === 'text') {
                        return text;
                    }
                });
            }
        };

        return deepTraversal(htmlTree.nodes);
    };

    return <React.Fragment>{renderHtml(html)}</React.Fragment>;
}

export default HtmlParse;
