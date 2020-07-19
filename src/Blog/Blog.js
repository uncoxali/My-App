import React from "react";
import OtherComponent from "../OtherComponent";

function Blog() {
    return (
        <>
            <div className="container mt-5 bg-style">
                <div className="row d-flex justify-content-center">
                    <div>
                        <OtherComponent/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog;