import { useState } from "react";
import {SingleAvatar} from "../Avatar/Avatar";
import { GroupDiv, IAvatarGroup } from "./AvatarGroup.style";
import OverflowAvatar from "./OverFlowAvatar";

export default function AvatarGroup(props: IAvatarGroup) {
    const [overrideMax, setOverrideMax] = useState<boolean>(false);

    if (props.avatars.length === 0) {
        return <></>;
    } else {
        if (props.max && props.avatars.length > props.max) {
            if (props.displayAllOnHover) {
                return (
                    <GroupDiv style={props.style} onMouseEnter={_ => setOverrideMax(true)} onMouseLeave={_ => setOverrideMax(false)}>
                        {props.avatars.map((ele, i) =>
                            <SingleAvatar
                                kind={props.kind}
                                avatar={ele}
                                options={props}
                                hidden={i >= (props.max as number)}
                                key={"avatar-max-" + i} style={undefined} backgroundColor={undefined}
                                />
                                )
                        }
                        <OverflowAvatar avatar={`+${props.avatars.length - props.max}`} options={props} key="avatar-overflow" hidden={overrideMax} kind={props.kind} />
                    </GroupDiv>
                );
            } else {
                return (
                    <GroupDiv style={props.style}>
                        {props.avatars.slice(0, props.max).map((ele, i) =>
                            <SingleAvatar
                                kind={props.kind}
                                avatar={ele}
                                options={props}
                                key={"avatar-max-" + i} style={undefined} backgroundColor={undefined}
                                />)
                        }
                        <OverflowAvatar avatar={`+${props.avatars.length - props.max}`} options={props} key="avatar-overflow" kind={props.kind}/>
                    </GroupDiv>
                );
            }
        } else {
            return (
                <GroupDiv style={props.style}>
                    {props.avatars.map((ele, i) =>
                        <SingleAvatar
                            kind={props.kind}
                            hidden={true}
                            avatar={ele}
                            options={props}
                            key={"avatar-nomax-" + i} style={undefined} backgroundColor={undefined}
                            />)
                    }
                </GroupDiv>
            );
        }
    }
}