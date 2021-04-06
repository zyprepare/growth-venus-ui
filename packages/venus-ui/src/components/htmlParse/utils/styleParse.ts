export const CamelCaseStyle = (styleArr: string[]) => {
    const styleMap = {};
    for (let i = 0; i < styleArr.length - 1; i += 2) {
        let key: string = styleArr[i];

        let value: string = styleArr[i + 1];

        if (key.indexOf(':') >= 0) {
            const [val] = key.split(':');
            key = val;
        }
        if (key.indexOf('-') >= 0) {
            const front = key.split('-')[0];
            let end = key.split('-')[1];
            end = end.substr(0, 1).toUpperCase() + end.substr(1, end.length - 1);
            key = front + end;
        }
        if (value.indexOf(';') >= 0) {
            const [val] = value.split(';');
            value = val;
        }
        styleMap[key] = value;
    }
    return styleMap;
};

export const formatStyle = (styles: string) => {
    const styleArr: string[] = [];
    const stylesArr = styles.split(';');
    for (let i = 0; i < stylesArr.length; i++) {
        const style = stylesArr[i];
        const [key, value] = style.split(':');
        styleArr.push(key);
        styleArr.push(value);
    }
    return CamelCaseStyle(styleArr);
};

const styleParse = (styl: string) => {
    let seflStyle = styl;

    const styleMap = {};

    seflStyle = seflStyle
        .replace(/<style>/g, '')
        .replace(/<\/style>/g, '')
        .replace(/\n/g, '');

    const styleArr1 = seflStyle.split('}');

    for (let i = 0; i < styleArr1.length; i++) {
        if (styleArr1[i] !== '') {
            const styleArr2 = styleArr1[i].split('{');

            const className = styleArr2[0];

            const style = formatStyle(styleArr2[1]);

            const classNameArr = className.split(',');

            for (let o = 0; o < classNameArr.length; o++) {
                let key = classNameArr[o];
                if (key) {
                    key = key.replace(/\./g, '').replace(/\s*/g, '');
                    styleMap[key] = style;
                }
            }
        }
    }
    return styleMap;
};

export default styleParse;
