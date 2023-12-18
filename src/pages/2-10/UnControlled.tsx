import React, { useRef } from "react";

export default function UnControlled():React.ReactElement {
    const fileInpuRef = useRef(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`selected file: ${fileInpuRef.current.files[0].name}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Upload file:
                <input type="file" ref={fileInpuRef} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}