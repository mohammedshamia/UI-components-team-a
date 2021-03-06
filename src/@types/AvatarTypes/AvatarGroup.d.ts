interface BaseAvatarGroup {
    // Limit the number of avatars that can be shown at once. If the avatar array length is greater than this number, an overflow avatar will be shown detailing how many avatars are hidden.
    max?: number;
    // If `max` is provided and displayAllOnHover is true, even the overflowing avatars will be shown when the mouse hovers over the group element
    displayAllOnHover?: boolean;
    // Should the avatars be square instead of rounded
    kind: 'circular'|'rounded'|'square'|string;
    // Avatar image size in pixels. Between: 16 and 512
    size?: number;
    // Box-shadow elevation as an integer from 1 to 5
    shadow?: number;
    style?: React.CSSProperties;
}

interface AvatarGroupOptions extends BaseAvatarGroup {
    // Font size in percentage of size. Between 0.1 and 1
    fontSize?: number;
    // Decide if the API should uppercase the name/initials
    uppercase?: boolean;
    // Boolean specifying if the returned letters should use a bold font
    bold?: boolean;
    // Length of the generated initials
    initialCharacters?: number;
    // Hex color for the image background, without the hash (#). Overrides `randomBackgroundColors`
    backgroundColor?: string;
    // Hex color for the font, without the hash (#)
    fontColor?: string;
}

export {AvatarGroupOptions,BaseAvatarGroup}