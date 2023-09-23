import React from "react";

const Lin = (pr) => {
    const { name, link } = pr
    return (


        <div class="text-black text-right  text-base font-bold pt-2 mr-12 pb-1">
            <a href={link} class="font-display max-w-sm text-xl font-bold leading-tight">
                <span class="link link-underline link-underline-black text-black">{name}</span>
                &nbsp;&nbsp;
            </a>
        </div>

    )
}
export default Lin 