import React from "react"
import "./EditingPage.css"

const EditingPage = () => {

    return (
        <div className="editing-page">
            <div className="editing-page-outer">
                <div className="editing-page-form-container">
                    <h1>Editing Resume</h1>
                    <form>
                        <p>This is the resume form</p>
                    </form>
                </div>
                <div className="editing-page-preview-container">
                    <h1>Resume Preview</h1>
                    <p>This is a preview</p>
                </div>
            </div>
        </div>
    )

}

export default EditingPage;
