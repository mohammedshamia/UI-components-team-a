import { cleanSearchParams, colorFromName } from "../Avatar/utils";
import { IOverflowAvatar } from "../../@types/AvatarTypes/IOverflowAvatar";
import { Img } from "../Avatar/Image";


export default function OverflowAvatar({ avatar, options, hidden }: IOverflowAvatar) {
    const size = options.size || 25;
    const backgroundColor = options.fontColor || options.backgroundColor || colorFromName(avatar, options.randomBackgroundColors);

    let fontSize = options.fontSize || 0.66;
    if (avatar.length === 3) {
        if (!options.fontSize || options.fontSize > 0.42) {
            // If the custom font size is less than the minimum of 0.42, don't override it.
            fontSize = 0.42;
        }
    } else if (avatar.length > 3) {
        if (!options.fontSize || options.fontSize > 0.32) {
            // If the custom font size is less than the minimum of 0.32, don't override it.
            fontSize = 0.32;
        }
    }

    const params = new URLSearchParams({
        size: `${size * 2}`,
        name: avatar,
        "font-size": `${fontSize}`,
        color: backgroundColor,
        background: "FFFFFF",
        bold: options.bold ? 'true' : '',
        uppercase: options.uppercase ? '' : 'false',
        length: '5',
        rounded: options.square ? 'false ' : ''
    });

    cleanSearchParams(params);

    return (
        <Img
            draggable="false"
            alt={`ui-avatar-${avatar}`}
            src={`https://ui-avatars.com/api/?${params.toString()}`}
            size={size}
            kind={options.kind}
            shadow={options.shadow}
            style={options.avatarStyle}
            className={hidden ? "overflow-hidden" : ""}
            backgroundColor={backgroundColor}
        />
    )
}