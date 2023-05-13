import React, { useState, useEffect, useRef } from "react"
import Toast from "../assist/Toast";
import content from "../content.json"
import parse from "html-react-parser"

export default function Notes() {
    const [data] = useState(content);
    const latest = useRef(null);

    useEffect(() => {
        latest.current.scrollTop = latest.current.scrollHeight;
    }, [latest]);

    return (
        <>
            <div className="">
                <Toast />
                <div className="notes-area">
                    {
                        data ?
                            <>
                                <div className="cover-space" ref={latest}>
                                    {
                                        data.map((item, i) => {
                                            return (
                                                <div className="note-section" key={i}>
                                                    <div className="note-heading">
                                                        {item.heading}
                                                    </div>
                                                    <div className="note-content">
                                                        {parse(item.content)}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </> :
                            <>
                                <div className="py-5
                                    d-flex
                                    justify-content-center
                                    align-items-center
                                    flex-column cover-space">
                                    <h3>Welcome to Celestial Notes</h3>
                                    <div className="p-4">
                                        You havn't Created Any Note.
                                    </div>
                                    <div className="p-2">
                                        <a href="/">Create Note</a>
                                    </div>
                                </div>
                            </>
                    }

                    <div className="create-notes d-flex align-items-center">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                        />
                    </div>
                </div>
            </div>
        </>
    )
}