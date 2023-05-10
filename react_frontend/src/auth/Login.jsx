export default function Login() {
    return (
        <>
            <div className="col-12 col-md-6 col-lg-4 p-4 m-auto">
                <h4 className="mb-3">Login Here!</h4>
                <form className="col-12">
                    <div class="form-floating mb-3">
                        <input
                            type="email"
                            class="form-control "
                            id="floatingInput"
                            placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input
                            type="password"
                            class="form-control"
                            id="floatingPassword"
                            placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div className="my-3">

                        <input
                            type="submit"
                            className="btn btn-success btn-lg w-100"
                        />
                    </div>
                </form>
            </div>
        </>
    )
}