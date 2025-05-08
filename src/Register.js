// import React, { useRef, useState } from "react";
// import Webcam from "react-webcam";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";


// const RegisterPage = () => {
//     const webcamRef = useRef(null);
//     const [image, setImage] = useState(null);
//     const [username, setUsername] = useState("");
//     const [isCaptured, setIsCaptured] = useState(false); // State to track if a photo is captured

//     const capture = () => {
//         const imageSrc = webcamRef.current.getScreenshot();
//         setImage(imageSrc);
//         console.log(imageSrc);
        
//         setIsCaptured(true); // Hide the webcam and show the captured image
//     };

//     const retakePhoto = () => {
//         setImage(null); // Clear the captured image
//         setIsCaptured(false); // Show the webcam again
//     };

//     const handleRegister = async () => {
//         if (!image || !username) {
//             alert("Please capture your face and enter a username.");
//             return;
//         }

//         try {
//             const requestBody = {
//                 username: username,
//                 image:  image.split(",")[1],
//             };
//             //const requestBody = { username, image: image.split(",")[1] };
//             console.log("Request Body:", requestBody); // Log the request body
//             // const response = await fetch("http://localhost:8080/api/register", {
//             //     method: "POST",
//             //     headers: { "Content-Type": "application/json" },
//             //      // Send base64 image
//             // });

//             const response = await axios.post("http://localhost:8080/api/register",requestBody)
            
//             //const result = await response.json();
//             console.log("Response",response);
//         } catch (error) {
//             console.error("Error:", error);
//             alert("Registration failed. Please try again.");
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <div className="row justify-content-center">
//                 <div className="col-md-8 col-lg-6">
//                     <div className="card shadow">
//                         <div className="card-body">
//                             <h1 className="card-title text-center mb-4">Face Registration</h1>
//                             <p className="card-subtitle text-center text-muted mb-4">
//                                 Register your face for secure login
//                             </p>

//                             <div className="mb-3">
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     placeholder="Username"
//                                     value={username}
//                                     onChange={(e) => setUsername(e.target.value)}
//                                     required
//                                 />
//                             </div>

//                             {!isCaptured ? (
//                                 // Show the webcam if no photo is captured
//                                 <div className="mb-3 text-center">
//                                     <Webcam
//                                         audio={false}
//                                         ref={webcamRef}
//                                         screenshotFormat="image/jpeg"
//                                         width={320}
//                                         height={240}
//                                         mirrored
//                                         className="img-fluid rounded"
//                                     />
//                                 </div>
//                             ) : (
//                                 // Show the captured image if a photo is captured
//                                 <div className="mb-3 text-center">
//                                     <img
//                                         src={image}
//                                         alt="Captured"
//                                         className="img-fluid rounded"
//                                         style={{ maxWidth: "100%", height: "auto" }}
//                                     />
//                                 </div>
//                             )}

//                             <div className="mb-3 text-center">
//                                 {!isCaptured ? (
//                                     // Show the "Capture Photo" button if no photo is captured
//                                     <button
//                                         className="btn btn-primary"
//                                         onClick={capture}
//                                     >
//                                         <i className="bi bi-camera me-2"></i>Capture Photo
//                                     </button>
//                                 ) : (
//                                     // Show the "Retake Photo" button if a photo is captured
//                                     <button
//                                         className="btn btn-warning"
//                                         onClick={retakePhoto}
//                                     >
//                                         <i className="bi bi-arrow-repeat me-2"></i>Retake Photo
//                                     </button>
//                                 )}
//                             </div>

//                             {isCaptured && (
//                                 // Show the "Register" button only if a photo is captured
//                                 <div className="text-center">
//                                     <button
//                                         className="btn btn-success"
//                                         onClick={handleRegister}
//                                         disabled={!username}
//                                     >
//                                         <i className="bi bi-person-check me-2"></i>Register
//                                     </button>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RegisterPage;

// import React, { useRef, useState } from "react";
// import Webcam from "react-webcam";
// import { Link, Navigate } from 'react-router-dom';
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// const RegisterPage = () => {
//     const webcamRef = useRef(null);
//     const [image, setImage] = useState(null);
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [isCaptured, setIsCaptured] = useState(false);
//     const [errorMessage, setErrorMessage] = useState("");

//     // Validate email format using regex
//     const validateEmail = (email) => {
//         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//     };

//     const capture = () => {
//         const imageSrc = webcamRef.current.getScreenshot();
//         setImage(imageSrc);
//         setIsCaptured(true);
//     };

//     const retakePhoto = () => {
//         setImage(null);
//         setIsCaptured(false);
//     };

//     const handleRegister = async () => {
//         if (!image || !username || !email) {
//             setErrorMessage("Please fill in all fields and capture a photo.");
//             return;
//         }

//         if (!validateEmail(email)) {
//             setErrorMessage("Invalid email format.");
//             return;
//         }

//         try {
//             const requestBody = {
//                 username: username,
//                 email: email,
//                 image: image.split(",")[1],
//             };

//             const response = await axios.post("http://localhost:8080/api/register", requestBody);
            
//             if (response.status === 200) {
//                 alert("Registration successful!");
//                 return<Navigate to="/Login" />
//             }
//         } catch (error) {
//             console.error("Error:", error);
//             setErrorMessage(error.response?.data || "Registration failed.");
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <div className="row justify-content-center">
//                 <div className="col-md-8 col-lg-6">
//                     <div className="card shadow">
//                         <div className="card-body">
//                             <h1 className="card-title text-center mb-4">Face Registration</h1>
//                             <p className="card-subtitle text-center text-muted mb-4">
//                                 Register your face for secure login
//                             </p>

//                             <div className="mb-3">
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     placeholder="Username"
//                                     value={username}
//                                     onChange={(e) => setUsername(e.target.value)}
//                                     required
//                                 />
//                             </div>

//                             <div className="mb-3">
//                                 <input
//                                     type="email"
//                                     className="form-control"
//                                     placeholder="Email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                 />
//                             </div>

//                             {!isCaptured ? (
//                                 <div className="mb-3 text-center">
//                                     <Webcam
//                                         audio={false}
//                                         ref={webcamRef}
//                                         screenshotFormat="image/jpeg"
//                                         width={320}
//                                         height={240}
//                                         mirrored
//                                         className="img-fluid rounded"
//                                     />
//                                 </div>
//                             ) : (
//                                 <div className="mb-3 text-center">
//                                     <img
//                                         src={image}
//                                         alt="Captured"
//                                         className="img-fluid rounded"
//                                         style={{ maxWidth: "100%", height: "auto" }}
//                                     />
//                                 </div>
//                             )}

//                             <div className="mb-3 text-center">
//                                 {!isCaptured ? (
//                                     <button className="btn btn-primary" onClick={capture}>
//                                         <i className="bi bi-camera me-2"></i>Capture Photo
//                                     </button>
//                                 ) : (
//                                     <button className="btn btn-warning" onClick={retakePhoto}>
//                                         <i className="bi bi-arrow-repeat me-2"></i>Retake Photo
//                                     </button>
//                                 )}
//                             </div>

//                             {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}

//                             {isCaptured && (
//                                 <div className="text-center">
//                                     <button
//                                         className="btn btn-success"
//                                         onClick={handleRegister}
//                                         disabled={!username || !email}
//                                     >
//                                         <i className="bi bi-person-check me-2"></i>Register
//                                     </button>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RegisterPage;

import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logimg from "./assets/logimg.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const RegisterPage = () => {
    const webcamRef = useRef(null);
    const [image, setImage] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [isCaptured, setIsCaptured] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false); // Track loading state
    const [successMessage, setSuccessMessage] = useState(""); // Track success message
    const navigate = useNavigate(); // Hook for navigation

    // Validate email format using regex
    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc);
        setIsCaptured(true);
        setErrorMessage(""); // Clear error message on interaction
    };

    const retakePhoto = () => {
        setImage(null);
        setIsCaptured(false);
        setErrorMessage(""); // Clear error message on interaction
    };

    const handleRegister = async () => {
        if (!image || !username || !email) {
            setErrorMessage("Please fill in all fields and capture a photo.");
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage("Invalid email format.");
            return;
        }

        setIsLoading(true); // Start loading
        setErrorMessage(""); // Clear any previous error messages
        setSuccessMessage(""); // Clear any previous success messages

        try {
            const requestBody = {
                username: username,
                email: email,
                image: image.split(",")[1],
            };

            const response = await axios.post("http://localhost:8080/api/register", requestBody);

            if (response.status === 200) {
                setSuccessMessage("Registration successful!"); // Show success message
                setTimeout(() => {
                    navigate("/login"); // Redirect to the login page after 2 seconds
                }, 2000);
            }
        } catch (error) {
            console.error("Error:", error);
            setErrorMessage(error.response?.data || "Registration failed.");
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    return (
        <div
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${logimg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="card shadow-lg border-0" style={{ borderRadius: "15px" }}>
                            <div className="card-body p-4">
                                {/* Title without icon */}
                                <h1 className="card-title text-center mb-4" style={{ color: "#2c3e50", fontWeight: "bold" }}>
                                    Face Registration
                                </h1>
                                <p className="card-subtitle text-center text-muted mb-4">
                                    Register your face for secure login
                                </p>

                                {/* Username Input */}
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => {
                                            setUsername(e.target.value);
                                            setErrorMessage(""); // Clear error message on interaction
                                        }}
                                        required
                                        style={{ borderRadius: "10px" }}
                                    />
                                </div>

                                {/* Email Input */}
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setErrorMessage(""); // Clear error message on interaction
                                        }}
                                        required
                                        style={{ borderRadius: "10px" }}
                                    />
                                </div>

                                {/* Webcam or Captured Image */}
                                {!isCaptured ? (
                                    <div className="mb-3 text-center">
                                        <Webcam
                                            audio={false}
                                            ref={webcamRef}
                                            screenshotFormat="image/jpeg"
                                            width={240}
                                            height={180}
                                            mirrored
                                            className="img-fluid rounded shadow"
                                            style={{ borderRadius: "10px" }}
                                        />
                                    </div>
                                ) : (
                                    <div className="mb-3 text-center">
                                        <img
                                            src={image}
                                            alt="Captured"
                                            className="img-fluid rounded shadow"
                                            style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
                                        />
                                    </div>
                                )}

                                {/* Capture/Retake Button */}
                                <div className="mb-3 text-center">
                                    {!isCaptured ? (
                                        <button
                                            className="btn btn-primary btn-lg w-100"
                                            onClick={capture}
                                            style={{ borderRadius: "10px", backgroundColor: "#3498db", border: "none" }}
                                        >
                                            <i className="bi bi-camera me-2"></i>Capture Photo
                                        </button>
                                    ) : (
                                        <button
                                            className="btn btn-warning btn-lg w-100"
                                            onClick={retakePhoto}
                                            style={{ borderRadius: "10px", backgroundColor: "#f39c12", border: "none" }}
                                        >
                                            <i className="bi bi-arrow-repeat me-2"></i>Retake Photo
                                        </button>
                                    )}
                                </div>

                                {/* Loading Message */}
                                {isLoading && (
                                    <div className="alert alert-info text-center" style={{ borderRadius: "10px" }}>
                                        Registering...
                                    </div>
                                )}

                                {/* Error Message */}
                                {errorMessage && (
                                    <div className="alert alert-danger text-center" style={{ borderRadius: "10px" }}>
                                        {errorMessage}
                                    </div>
                                )}

                                {/* Success Message */}
                                {successMessage && (
                                    <div className="alert alert-success text-center" style={{ borderRadius: "10px" }}>
                                        {successMessage}
                                    </div>
                                )}

                                {/* Register Button */}
                                {isCaptured && !isLoading && !successMessage && (
                                    <div className="text-center">
                                        <button
                                            className="btn btn-success btn-lg w-100"
                                            onClick={handleRegister}
                                            disabled={!username || !email}
                                            style={{ borderRadius: "10px", backgroundColor: "#27ae60", border: "none" }}
                                        >
                                            <i className="bi bi-person-check me-2"></i>Register
                                        </button>
                                    </div>
                                )}

                                {/* Link to Login Page */}
                                <div className="text-center mt-3">
                                    <p className="text-muted">
                                        Already registered?{" "}
                                        <Link to="/login" className="text-primary" style={{ color: "#3498db" }}>
                                            Login here
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
