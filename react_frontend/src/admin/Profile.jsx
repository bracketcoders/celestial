import React from "react"

export default function Profile() {
    return (
        <>
            <div className="p-5">
                <h4>Profile</h4>

                <br />
                <div className="fst-italic">
                    <p><span className="text-primary">User: </span>Gurdayal-s</p>
                    <p><span className="text-primary">Name: </span>Gurdayal Singh</p>
                    <p><span className="text-primary">Email: </span>gurdayal.s.20@gmail.com</p>
                    <p><span className="text-primary">Last Login: </span>13 May, 2023 09:26:33PM</p>
                </div>
                <div className="my-2 d-flex align-items-center">
                    <a href="/" className="text-warning">Edit</a>
                    <a href="/" className="text-danger ms-3">Remove Profile</a>
                </div>
            </div>
        </>
    )
}