import { Link } from "react-router-dom"

export default function Toast() {
    return (
        <>
            <div className="position-fixed p-3" style={{ zIndex: 11, bottom: '80px', right: '10px' }}>
                <div className="toast align-items-center show rounded-circle d-flex justify-content-center align-items-center b-primary border"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                    style={{ width: '50px', height: '50px' }}
                >
                    <Link to={"/note/add/"}>
                        <div className="toast-body">
                            <i className="bi bi-plus fs-2 text-white"></i>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}