
// // import React, { useRef, useState } from "react";
// // import Webcam from "react-webcam";
// // import axios from "axios";
// // import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
// // import { Container, Card, Form, Button, Alert } from "react-bootstrap"; // Import Bootstrap components

// // const FaceLogin = () => {
// //   const webcamRef = useRef(null); // Reference to the Webcam component
// //   const [message, setMessage] = useState(""); // Message to display login status
// //   const [cameraStarted, setCameraStarted] = useState(false); // Track if the camera is started
// //   const [username, setUsername] = useState(""); // Store the username input

// //   // Start the camera
// //   const startCamera = () => {
// //     setCameraStarted(true);
// //   };

// //   // Stop the camera
// //   const stopCamera = () => {
// //     setCameraStarted(false);
// //   };

// //   // Capture a photo from the webcam
// //   const capturePhoto = () => {
// //     if (!username) {
// //       setMessage("Please enter your username.");
// //       return;
// //     }

// //     if (webcamRef.current) {
// //       const imageSrc = webcamRef.current.getScreenshot(); // Capture the current frame as a base64 image
// //       if (imageSrc) {
// //         // Send the username and image to the backend for face recognition
// //         verifyFace(username, imageSrc);
// //       } else {
// //         setMessage("Failed to capture photo. Please try again.");
// //       }
// //     }
// //   };

// //   // Send the captured image and username to the backend for verification
// //   const verifyFace = async (username, imageData) => {
// //     try {
// //       setMessage("Verifying face...");

// //       // Send the image and username to the backend
// //       const response = await axios.post("http://localhost:8080/api/login", {
// //         username: username,
// //         image: imageData.split(",")[1], // Remove the data URL prefix
// //       });

// //       // Handle the response from the backend
// //       if (response.status === 200) {
// //         setMessage("Login successful! Redirecting...");
// //         // Redirect the user or perform other actions
// //       } else {
// //         setMessage("Login failed. Please try again.");
// //       }
// //     } catch (error) {
// //       console.error("Error verifying face:", error);
// //       setMessage("Error verifying face. Please try again.");
// //     }
// //   };

// //   return (
// //     <Container className="d-flex justify-content-center align-items-center vh-100">
// //       <Card className="text-center p-4" style={{ width: "400px" }}>
// //         <Card.Body>
// //           <Card.Title className="mb-4">Face Login</Card.Title>

// //           {/* Username Input */}
// //           <Form.Group className="mb-3">
// //             <Form.Control
// //               type="text"
// //               placeholder="Enter your username"
// //               value={username}
// //               onChange={(e) => setUsername(e.target.value)}
// //             />
// //           </Form.Group>

// //           {cameraStarted ? (
// //             <>
// //               <Webcam
// //                 ref={webcamRef}
// //                 audio={false}
// //                 screenshotFormat="image/jpeg"
// //                 width={300}
// //                 height={225}
// //                 className="mb-3"
// //               />
// //               <Button variant="primary" onClick={capturePhoto} className="mb-2 w-100">
// //                 Login with Face
// //               </Button>
// //               <Button variant="danger" onClick={stopCamera} className="w-100">
// //                 Stop Camera
// //               </Button>
// //             </>
// //           ) : (
// //             <Button variant="success" onClick={startCamera} className="w-100">
// //               Start Camera
// //             </Button>
// //           )}

// //           {/* Display message */}
// //           {message && (
// //             <Alert variant={message.includes("successful") ? "success" : "danger"} className="mt-3">
// //               {message}
// //             </Alert>
// //           )}
// //         </Card.Body>
// //       </Card>
// //     </Container>
// //   );
// // };

// // export default FaceLogin;
// import React, { useRef, useState } from "react";
// import Webcam from "react-webcam";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
// import { Container, Card, Form, Button, Alert } from "react-bootstrap"; // Import Bootstrap components

// const FaceLogin = () => {
//   const webcamRef = useRef(null); // Reference to the Webcam component
//   const [message, setMessage] = useState(""); // Message to display login status
//   const [cameraStarted, setCameraStarted] = useState(false); // Track if the camera is started
//   const [username, setUsername] = useState(""); // Store the username input

//   // Start the camera
//   const startCamera = () => {
//     setCameraStarted(true);
//   };

//   // Stop the camera
//   const stopCamera = () => {
//     setCameraStarted(false);
//   };

//   // Capture a photo from the webcam
//   const capturePhoto = () => {
//     if (!username) {
//       setMessage("Please enter your username.");
//       return;
//     }

//     if (webcamRef.current) {
//       const imageSrc = webcamRef.current.getScreenshot(); // Capture the current frame as a base64 image
//       if (imageSrc) {
//         // Send the username and image to the backend for face recognition
//         verifyFace(username, imageSrc);
//       } else {
//         setMessage("Failed to capture photo. Please try again.");
//       }
//     }
//   };

//   // Send the captured image and username to the backend for verification
//   const verifyFace = async (username, imageData) => {
//     try {
//       setMessage("Verifying face...");

//       // Send the image and username to the backend
//       const response = await axios.post("http://localhost:8080/api/login", {
//         username: username,
//         image: imageData.split(",")[1], // Remove the data URL prefix
//       });

//       // Handle the response from the backend
//       if (response.status === 200) {
//         setMessage("Login successful! Redirecting...");
//         // Redirect the user or perform other actions
//       }
//     } catch (error) {
//       console.error("Error verifying face:", error);

//       // Handle specific error cases
//       if (error.response) {
//         const { status, data } = error.response;

//         if (status === 401) {
//           if (data === "User not registered") {
//             setMessage("User not registered. Please sign up first.");
//           } else if (data === "No face data found for user") {
//             setMessage("No face data found for this user. Please contact support.");
//           } else if (data === "Face verification failed") {
//             setMessage("Face verification failed. Please try again.");
//           }
//         } else {
//           setMessage("An error occurred. Please try again.");
//         }
//       } else {
//         setMessage("Error verifying face. Please try again.");
//       }
//     }
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center vh-100">
//       <Card className="text-center p-4" style={{ width: "400px" }}>
//         <Card.Body>
//           <Card.Title className="mb-4">Face Login</Card.Title>

//           {/* Username Input */}
//           <Form.Group className="mb-3">
//             <Form.Control
//               type="text"
//               placeholder="Enter your username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </Form.Group>

//           {cameraStarted ? (
//             <>
//               <Webcam
//                 ref={webcamRef}
//                 audio={false}
//                 screenshotFormat="image/jpeg"
//                 width={300}
//                 height={225}
//                 className="mb-3"
//               />
//               <Button variant="primary" onClick={capturePhoto} className="mb-2 w-100">
//                 Login with Face
//               </Button>
//               <Button variant="danger" onClick={stopCamera} className="w-100">
//                 Stop Camera
//               </Button>
//             </>
//           ) : (
//             <Button variant="success" onClick={startCamera} className="w-100">
//               Start Camera
//             </Button>
//           )}

//           {/* Display message */}
//           {message && (
//             <Alert
//               variant={
//                 message.includes("successful")
//                   ? "success"
//                   : message.includes("not registered") || message.includes("failed")
//                   ? "danger"
//                   : "warning"
//               }
//               className="mt-3"
//             >
//               {message}
//             </Alert>
//           )}
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default FaceLogin;











// import React, { useRef, useState } from "react";
// import Webcam from "react-webcam";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
// import { Container, Card, Form, Button, Alert } from "react-bootstrap"; // Import Bootstrap components

// const FaceLogin = () => {
//   const webcamRef = useRef(null); // Reference to the Webcam component
//   const [message, setMessage] = useState(""); // Message to display login status
//   const [cameraStarted, setCameraStarted] = useState(false); // Track if the camera is started
//   const [identifier, setIdentifier] = useState(""); // Store the username or email input

//   // Start the camera
//   const startCamera = () => {
//     setCameraStarted(true);
//   };

//   // Stop the camera
//   const stopCamera = () => {
//     setCameraStarted(false);
//   };

//   // Capture a photo from the webcam
//   const capturePhoto = () => {
//     if (!identifier) {
//       setMessage("Please enter your username or email.");
//       return;
//     }

//     if (webcamRef.current) {
//       const imageSrc = webcamRef.current.getScreenshot(); // Capture the current frame as a base64 image
//       if (imageSrc) {
//         // Send the identifier and image to the backend for face recognition
//         verifyFace(identifier, imageSrc);
//       } else {
//         setMessage("Failed to capture photo. Please try again.");
//       }
//     }
//   };

//   // Send the captured image and identifier (username or email) to the backend for verification
//   const verifyFace = async (identifier, imageData) => {
//     try {
//       setMessage("Verifying face...");

//       // Send the image and identifier to the backend
//       const response = await axios.post("http://localhost:8080/api/login", {
//         identifier: identifier, // Can be either username or email
//         image: imageData.split(",")[1], // Remove the data URL prefix
//       });

//       // Handle the response from the backend
//       if (response.status === 200) {
//         setMessage("Login successful! Redirecting...");
//         // Redirect the user or perform other actions (e.g., navigate to dashboard)
//       }
//     } catch (error) {
//       console.error("Error verifying face:", error);

//       // Handle specific error cases
//       if (error.response) {
//         const { status, data } = error.response;

//         if (status === 401) {
//           if (data === "User not registered") {
//             setMessage("User not registered. Please sign up first.");
//           } else if (data === "No face data found for user") {
//             setMessage("No face data found for this user. Please contact support.");
//           } else if (data === "Face verification failed") {
//             setMessage("Face verification failed. Please try again.");
//           }
//         } else {
//           setMessage("An error occurred. Please try again.");
//         }
//       } else {
//         setMessage("Error verifying face. Please try again.");
//       }
//     }
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center vh-100">
//       <Card className="text-center p-4 shadow-lg" style={{ width: "400px" }}>
//         <Card.Body>
//           <Card.Title className="mb-4">Face Login</Card.Title>

//           {/* Identifier Input (Username or Email) */}
//           <Form.Group className="mb-3">
//             <Form.Control
//               type="text"
//               placeholder="Enter your username or email"
//               value={identifier}
//               onChange={(e) => setIdentifier(e.target.value)}
//             />
//           </Form.Group>

//           {cameraStarted ? (
//             <>
//               <Webcam
//                 ref={webcamRef}
//                 audio={false}
//                 screenshotFormat="image/jpeg"
//                 width={300}
//                 height={225}
//                 className="mb-3"
//               />
//               <Button variant="primary" onClick={capturePhoto} className="mb-2 w-100">
//                 Login with Face
//               </Button>
//               <Button variant="danger" onClick={stopCamera} className="w-100">
//                 Stop Camera
//               </Button>
//             </>
//           ) : (
//             <Button variant="success" onClick={startCamera} className="w-100">
//               Start Camera
//             </Button>
//           )}

//           {/* Display message */}
//           {message && (
//             <Alert
//               variant={
//                 message.includes("successful")
//                   ? "success"
//                   : message.includes("not registered") || message.includes("failed")
//                   ? "danger"
//                   : "warning"
//               }
//               className="mt-3"
//             >
//               {message}
//             </Alert>
//           )}
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default FaceLogin;
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import logimg from "./assets/logimg.jpg"; // Import the background image

const FaceLogin = () => {
  const webcamRef = useRef(null); // Reference to the Webcam component
  const [message, setMessage] = useState(""); // Message to display login status
  const [cameraStarted, setCameraStarted] = useState(false); // Track if the camera is started
  const [identifier, setIdentifier] = useState(""); // Store the username or email input
  const navigate = useNavigate(); // Hook for navigation

  // Start the camera
  const startCamera = () => {
    setCameraStarted(true);
  };

  // Stop the camera
  const stopCamera = () => {
    setCameraStarted(false);
  };

  // Capture a photo from the webcam
  const capturePhoto = () => {
    if (!identifier) {
      setMessage("Please enter your username or email.");
      return;
    }

    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot(); // Capture the current frame as a base64 image
      if (imageSrc) {
        // Send the identifier and image to the backend for face recognition
        verifyFace(identifier, imageSrc);
      } else {
        setMessage("Failed to capture photo. Please try again.");
      }
    }
  };

  const verifyFace = async (identifier, imageData) => {
    try {
      setMessage("Verifying face...");
  
      // Send the image and identifier to the backend
      const response = await axios.post("http://localhost:8080/api/login", {
        identifier: identifier,
        image: imageData.split(",")[1],
      });
  
      // Handle the response from the backend
      if (response.status === 200) {
        const { identifier } = response.data; // Extract the identifier from the response
        setMessage("Login successful! Redirecting...");
  
        // Redirect to the dashboard after 2 seconds and pass the identifier
        setTimeout(() => {
          navigate("/", { state: { identifier } }); // Pass the identifier to the dashboard
        }, 2000);
      }
    } catch (error) {
      console.error("Error verifying face:", error);
  
      // Handle specific error cases
      if (error.response) {
        const { status, data } = error.response;
  
        if (status === 401) {
          if (data.error === "User not registered") {
            setMessage("User not registered. Please sign up first.");
          } else if (data.error === "No face data found for user") {
            setMessage("No face data found for this user. Please contact support.");
          } else if (data.error === "Face verification failed") {
            setMessage("Face verification failed. Please try again.");
          }
        } else {
          setMessage("An error occurred. Please try again.");
        }
      } else {
        setMessage("Error verifying face. Please try again.");
      }
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
      <Container>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <Card className="text-center p-4 shadow-lg" style={{ borderRadius: "15px" }}>
              <Card.Body>
                <Card.Title className="mb-4" style={{ color: "#2c3e50", fontWeight: "bold" }}>
                  Face Login
                </Card.Title>

                {/* Identifier Input (Username or Email) */}
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Enter your username or email"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Group>

                {cameraStarted ? (
                  <>
                    <Webcam
                      ref={webcamRef}
                      audio={false}
                      screenshotFormat="image/jpeg"
                      width={240}
                      height={180}
                      mirrored
                      className="mb-3"
                      style={{ borderRadius: "10px" }}
                    />
                    <Button
                      variant="primary"
                      onClick={capturePhoto}
                      className="mb-2 w-100"
                      style={{ borderRadius: "10px", backgroundColor: "#3498db", border: "none" }}
                    >
                      Login with Face
                    </Button>
                    <Button
                      variant="danger"
                      onClick={stopCamera}
                      className="w-100"
                      style={{ borderRadius: "10px", backgroundColor: "#e74c3c", border: "none" }}
                    >
                      Stop Camera
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="success"
                    onClick={startCamera}
                    className="w-100"
                    style={{ borderRadius: "10px", backgroundColor: "#27ae60", border: "none" }}
                  >
                    Start Camera
                  </Button>
                )}

                {/* Display message */}
                {message && (
                  <Alert
                    variant={
                      message.includes("successful")
                        ? "success"
                        : message.includes("not registered") || message.includes("failed")
                        ? "danger"
                        : "warning"
                    }
                    className="mt-3"
                    style={{ borderRadius: "10px" }}
                  >
                    {message}
                  </Alert>
                )}
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FaceLogin;