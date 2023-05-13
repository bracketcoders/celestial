import { useState, useRef } from "react";
import { Editor } from '@tinymce/tinymce-react';

export default function AddNote() {
    const [inputs, setInputs] = useState({});
    const editorRef = useRef(null);

    const handleChange = (e) => {
        setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }))
    }
    
    const handleEditorChange = (name, editorRef) => {
        setInputs(inputs => ({ ...inputs, [name]: editorRef.current.getContent() }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
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
                    <input
                        type="submit"
                        className="btn btn-success my-3" 
                    />
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