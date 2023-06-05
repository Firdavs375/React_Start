import React from "react";

export default function Button( {name, clasname}) {
    return (
        <>
            <button className={!clasname ? "red" : clasname }>
                {"click" && name}
            </button>
        </>
    )
}