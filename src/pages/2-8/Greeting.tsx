import React from "react";

interface Types {
    name?: string;
    count?: number;
}

// 유저 그리팅 컴포넌트
function UserGreeting(props: Types) {
    return (
        <h1>{props.name && props.name + ','} Welcome {!!props.count && `It's ${props.count} times`}</h1>
        // <h1>{props.name && props.name + ','} Welcome {Boolean(props.count) && `It's ${props.count} times`}</h1>
    )
}

// 게스트 그리팅 컴포넌트
function GuestGreeting(props: Types) {
    return (
        <h1>Please Sign up.</h1>
    )
}

// 그리팅 컴포넌트
export default function Greeting():React.ReactElement {
    const isLoggedIn = true;

    return (
        <>{isLoggedIn ? <UserGreeting name="sara" count={1}/>:<GuestGreeting />}</>
    )
}