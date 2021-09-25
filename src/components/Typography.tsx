import React from "react";

function TitleXLarge (props: any) {
    return (
        <h1>{props.children}</h1>
    );
}

function TitleLarge (props: any) {
    return (
        <h2 className={props.class}>{props.children}</h2>
    );
}

function TitleMedium (props: any) {
    return (
        <h3 className={props.class}>{props.children}</h3>
    );
}

function TitleSmall (props: any) {
    return (
        <h5>{props.children}</h5>
    );
}

function Text (props: any) {
    return (
        <p>{props.children}</p>
    );
}

export {
    TitleXLarge,
    TitleLarge,
    TitleMedium,
    TitleSmall,
    Text
};