import React from "react";

interface Types {
    name : string
}

export default function Composition(props: Types):React.ReactElement {
    return (<>Hello, {props.name}</>)
}