import { useState, useRef } from "react";
import { Editor } from '@tinymce/tinymce-react';
import { useNavigate } from "react-router-dom";
import $ from "jquery"
import conf from "../config.json"

export default function AddNote() {
    const [inputs, setInputs] = useState({});
    const editorRef = useRef(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }))
    }

    const handleEditorChange = (name, editorRef) => {
        setInputs(inputs => ({ ...inputs, [name]: editorRef.current.getContent() }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(inputs)
        $.ajax({
            url: conf.api_endpoints.notes_create,
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(inputs),
            success: () => {
                navigate('/notes/');
            },
            error: (xhr, textStatus) => {
                if (textStatus === 'timeout') {
                    // setErrors("Something Wrong : Code 408")
                } else if (xhr.status === 0) {
                    // setErrors("Something Wrong : Code 0")
                } else if (xhr.status === 404) {
                    // setErrors("Something Wrong : Code 404")
                } else if (xhr.status === 401) {
                    // setErrors("Something Wrong : Code 401 (Unauthorized)")
                } else if (xhr.status === 400) {
                    const err = xhr.responseJSON.errors;
                    err.forEach(element => {
                        // setErrors(er => ({ ...er, [element.field]: element.message }))
                    })
                } else if (xhr.status === 500) {
                    // setErrors("Something Wrong : Code 500")
                }
                else {
                    // setErrors("Something Wrong : Code Unknown")
                }
            }
        })

    }

    return (
        <>
            <div className="p-5">
                <h4 className="mb-3">Add Note</h4>

                <form onSubmit={handleSubmit} className="add-note-form">
                    <input
                        type="text"
                        name="heading"
                        id="heading"
                        className="form-control mb-3"
                        placeholder="Heading"
                        onChange={handleChange}
                        value={inputs.heading || ""}
                    />
                    <Editor
                        onInit={(e, editor) => editorRef.current = editor}
                        init={{
                            height: 350,
                            menubar: true,
                            plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
                            toolbar: 'undo redo | bold removeformat image | numlist bullist | fullscreen  preview | fontselect fontsizeselect styleselect | italic forecolor backcolor outdent indent formatselect codesample | hr alignleft aligncenter alignright alignjustify charmap emoticons | image media link anchor underline strikethrough',
                            content_style: 'body { font-family: Helvetica, Arial, sans-serif; font-size:14px }',
                            skin: "oxide-dark",
                            content_css: "dark"
                        }}
                        onEditorChange={() => handleEditorChange("content", editorRef)}
                    />
                    <div>
                        <input
                            type="submit"
                            className="btn btn-success my-3"
                        />
                    </div>
                </form>
            </div>
        </>
    )
}

// tox-menubar
// tox-tinymce
// tox-toolbar__primary
// tox-editor-header
// mce-content-body
// tox-status-bar