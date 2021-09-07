import { useRef } from "react";

const FileInputComponent = (props) => {
    const inputRef = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputRef.current.files[0]);
    };
    return (
        // You can use the useRef to implement accessing doms of html.
        // Uncontrolled introduction.
        <form onSubmit={handleSubmit}>
            <input type="file" ref={inputRef}></input>
            <button type="submit">Submit File</button>
        </form>
    )
};

export default FileInputComponent;