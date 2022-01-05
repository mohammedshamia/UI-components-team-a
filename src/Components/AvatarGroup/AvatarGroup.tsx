import { useState } from "react";
import { Avatar } from "../Avatar/Avatar.style";
import { GroupDiv, IAvatarGroup } from "./AvatarGroup.style";

export default function AvatarGroup (props: IAvatarGroup) {
    const [overrideMax, setOverrideMax] = useState<boolean>(false);

    if (props.avatars.length === 0) {
        return <></>;
    } else {
        if (props.max && props.avatars.length > props.max) {
            if (props.displayAllOnHover) {
                return (
                    <GroupDiv style={props.style} onMouseEnter={_ => setOverrideMax(true)} onMouseLeave={_ => setOverrideMax(false)}>
                        {props.avatars.map((ele, i) =>
                            <Avatar
                            kind={props.kind}
                                hidden={i >= (props.max as number)}
                                key={"avatar-max-" + i}
                            />)
                        }
                    </GroupDiv>
                );
            } else {
                return (
                    <GroupDiv style={props.style}>
                        {props.avatars.slice(0, props.max).map((ele, i) =>
                            <Avatar
                            kind={props.kind}
                                key={"avatar-max-" + i}
                                onClick={_ => props.onAvatarClick && props.onAvatarClick(ele, i)}
                            />)
                        }
                    </GroupDiv>
                );
            }
        } else {
            return (
                <GroupDiv style={props.style}>
                    {props.avatars.map((ele, i) =>
                        <Avatar
                        kind={props.kind}
                            key={"avatar-nomax-" + i}
                            onClick={_ => props.onAvatarClick && props.onAvatarClick(ele, i)}
                        />)
                    }
                </GroupDiv>
            );
        }
    }
}
;