import React, { useState, useEffect, useRef } from "react"
import Toast from "../assist/Toast";
import parse from "html-react-parser"
import conf from "../config.json"
import $ from "jquery"

export default function Notes() {
    const [notes, setNotes] = useState([]);
    const latest = useRef(null);

    useEffect(() => {
        $.ajax({
            url: conf.api_endpoints.notes,
            method: 'GET',
            timeout: 20000,
            success: function (response) {
                setNotes(response)
            },
            error: function (xhr, textStatus) {
                if (textStatus === 'timeout') {
                    // setErrors("Something Wrong : Code 408")
                } else if (xhr.status === 0) {
                    // setErrors("Something Wrong : Code 0")
                } else if (xhr.status === 404) {
                    // setErrors("Something Wrong : Code 404")
                } else if (xhr.status === 500) {
                    // setErrors("Something Wrong : Code 500")
                } else {
                    // setErrors("Something Wrong : Code Unknown")
                }
            }
        });

        latest.current.scrollTop = latest.current.scrollHeight;
    }, [latest]);

    return (
        <>
            <div className="">
                <Toast />
                <div className="notes-area">
                    {
                        (notes.length !== 0) ?
                            <>
                                <div className="cover-space" ref={latest}>
                                    {
                                        notes.map((item, i) => {
                                            return (
                                                <div className="note-section" key={i}>
                                                    <div className="note-heading">
                                                        {item.heading}
                                                        <div className="small text-secondary">
                                                            <span className="me-2">{item.date_created.slice(0, 10)}</span>
                                                            &bull;
                                                            <span className="mx-2">{item.date_created.slice(0, 10)}</span>
                                                            &bull;
                                                            <button
                                                                className="btn btn-link fst-italic text-danger p-0 ms-2">
                                                                <span className="small">Delete</span>
                                                            </button>
                                                        </div>
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
                                    flex-column cover-space" ref={latest}>
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


// const handleDelete = (id, index) => {
//     $.ajax({
//         url: conf.api_endpoints.notes_delete + id,
//         method: 'DELETE',
//         timeout: 20000,
//         success: function () {
//             setNotes(notes.splice(index, 0));
//         },
//         error: function (xhr, textStatus) {
//             if (textStatus === 'timeout') {
//                 // setErrors("Something Wrong : Code 408")
//             } else if (xhr.status === 0) {
//                 // setErrors("Something Wrong : Code 0")
//             } else if (xhr.status === 404) {
//                 // setErrors("Something Wrong : Code 404")
//             } else if (xhr.status === 500) {
//                 // setErrors("Something Wrong : Code 500")
//             } else {
//                 // setErrors("Something Wrong : Code Unknown")
//             }
//         }
//     })
// }