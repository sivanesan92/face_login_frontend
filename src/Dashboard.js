// import React from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Navbar, Nav, Container, Row, Col, Card, Button } from "react-bootstrap";
// import secureImage from "./assets/secure.jpg"; // Import card images
// import easyImage from "./assets/easy.jpg";
// import privacyImage from "./assets/privacy.jpg";
// import welcomeImage from "./assets/welcome.jpg"; // Import welcome background image

// const Dashboard = () => {
//   return (
//     <div>
//       {/* Navbar at the Top */}
//       <Navbar bg="primary" expand="lg" fixed="top" className="shadow-sm">
//         <Container fluid>
//           <Navbar.Brand as={Link} to="/" className="fw-bold text-white">
//             <h3>Face Recognition App</h3>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link as={Link} to="/login">
//                 <Button variant="outline-light" className="me-2">
//                   Login
//                 </Button>
//               </Nav.Link>
//               <Nav.Link as={Link} to="/register">
//                 <Button variant="light">Register</Button>
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Big Welcome Card */}
//       <Container fluid className="p-0" style={{ marginTop: "75px" }}>
//         <Card className="text-white border-0 rounded-0">
//           <Card.Img src={welcomeImage} alt="Welcome" style={{ height: "400px", objectFit: "cover" }} />
//           <Card.ImgOverlay
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               backgroundColor: "rgba(0, 0, 0, 0.5)",
//             }}
//           >
//             <div className="text-center">
//               <h1 className="display-4 mb-4">Welcome to Face Recognition</h1>
//               <p className="lead">
//                 Experience seamless and secure authentication with our face recognition technology.
//               </p>
//             </div>
//           </Card.ImgOverlay>
//         </Card>
//       </Container>

//       {/* Features Section */}
//       <Container fluid className="my-5">
//         <Row className="justify-content-center">
//           <Col md={4} className="mb-4">
//             <Card className="h-100 shadow">
//               <Card.Img variant="top" src={secureImage} style={{ height: "200px", objectFit: "cover" }} />
//               <Card.Body className="text-center">
//                 <Card.Title>Fast & Secure</Card.Title>
//                 <Card.Text>
//                   Our face recognition system ensures fast and secure authentication for all users.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4} className="mb-4">
//             <Card className="h-100 shadow">
//               <Card.Img variant="top" src={easyImage} style={{ height: "200px", objectFit: "cover" }} />
//               <Card.Body className="text-center">
//                 <Card.Title>Easy to Use</Card.Title>
//                 <Card.Text>
//                   Simply register your face and log in with a single click. No passwords required!
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4} className="mb-4">
//             <Card className="h-100 shadow">
//               <Card.Img variant="top" src={privacyImage} style={{ height: "200px", objectFit: "cover" }} />
//               <Card.Body className="text-center">
//                 <Card.Title>Privacy First</Card.Title>
//                 <Card.Text>
//                   Your data is safe with us. We prioritize your privacy and security.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>

//       {/* Call to Action Section */}
//       <div
//         style={{
//           background: "#f8f9fa",
//           padding: "50px 0",
//           textAlign: "center",
//         }}
//       >
//         <Container fluid>
//           <h2 className="mb-4">Ready to Get Started?</h2>
//           <Button as={Link} to="/login" variant="primary" size="lg" className="me-3">
//             Login
//           </Button>
//           <Button as={Link} to="/register" variant="outline-primary" size="lg">
//             Register
//           </Button>
//         </Container>
//       </div>

//       {/* Footer */}
//       <footer className="bg-dark text-white text-center py-4">
//         <Container fluid>
//           <p className="mb-0">&copy; 2023 Face Recognition App. All rights reserved.</p>
//         </Container>
//       </footer>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Navbar, Nav, Container, Row, Col, Card, Button } from "react-bootstrap";
// import secureImage from "./assets/secure.jpg"; // Import card images
// import easyImage from "./assets/easy.jpg";
// import privacyImage from "./assets/privacy.jpg";
// import welcomeImage from "./assets/welcome.jpg"; // Import welcome background image

// const Dashboard = () => {
//   const location = useLocation(); // Access the state passed from FaceLogin
//   const navigate = useNavigate(); // Hook for navigation
//   const [username, setUsername] = useState(location.state?.username || ""); // Get the username from location state

//   // Handle logout
//   const handleLogout = () => {
//     setUsername(""); // Clear the username
//     navigate("/login"); // Redirect to the login page
//   };

//   return (
//     <div>
//       {/* Navbar at the Top */}
//       <Navbar bg="primary" expand="lg" fixed="top" className="shadow-sm">
//         <Container fluid>
//           <Navbar.Brand as={Link} to="/" className="fw-bold text-white">
//             <h3>Face Recognition App</h3>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               {username ? (
//                 // Display username and logout button if logged in
//                 <>
//                   <Navbar.Text className="text-white me-3">
//                     Welcome, <strong>{username}</strong>
//                   </Navbar.Text>
//                   <Button variant="outline-light" onClick={handleLogout}>
//                     Logout
//                   </Button>
//                 </>
//               ) : (
//                 // Display login and register buttons if not logged in
//                 <>
//                   <Nav.Link as={Link} to="/login">
//                     <Button variant="outline-light" className="me-2">
//                       Login
//                     </Button>
//                   </Nav.Link>
//                   <Nav.Link as={Link} to="/register">
//                     <Button variant="light">Register</Button>
//                   </Nav.Link>
//                 </>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Big Welcome Card */}
//       <Container fluid className="p-0" style={{ marginTop: "75px" }}>
//         <Card className="text-white border-0 rounded-0">
//           <Card.Img src={welcomeImage} alt="Welcome" style={{ height: "400px", objectFit: "cover" }} />
//           <Card.ImgOverlay
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               backgroundColor: "rgba(0, 0, 0, 0.5)",
//             }}
//           >
//             <div className="text-center">
//               <h1 className="display-4 mb-4">Welcome to Face Recognition</h1>
//               <p className="lead">
//                 Experience seamless and secure authentication with our face recognition technology.
//               </p>
//             </div>
//           </Card.ImgOverlay>
//         </Card>
//       </Container>

//       {/* Features Section */}
//       <Container fluid className="my-5">
//         <Row className="justify-content-center">
//           <Col md={4} className="mb-4">
//             <Card className="h-100 shadow">
//               <Card.Img variant="top" src={secureImage} style={{ height: "200px", objectFit: "cover" }} />
//               <Card.Body className="text-center">
//                 <Card.Title>Fast & Secure</Card.Title>
//                 <Card.Text>
//                   Our face recognition system ensures fast and secure authentication for all users.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4} className="mb-4">
//             <Card className="h-100 shadow">
//               <Card.Img variant="top" src={easyImage} style={{ height: "200px", objectFit: "cover" }} />
//               <Card.Body className="text-center">
//                 <Card.Title>Easy to Use</Card.Title>
//                 <Card.Text>
//                   Simply register your face and log in with a single click. No passwords required!
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4} className="mb-4">
//             <Card className="h-100 shadow">
//               <Card.Img variant="top" src={privacyImage} style={{ height: "200px", objectFit: "cover" }} />
//               <Card.Body className="text-center">
//                 <Card.Title>Privacy First</Card.Title>
//                 <Card.Text>
//                   Your data is safe with us. We prioritize your privacy and security.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>

//       {/* Footer */}
//       <footer className="bg-dark text-white text-center py-4">
//         <Container fluid>
//           <p className="mb-0">&copy; 2023 Face Recognition App. All rights reserved.</p>
//         </Container>
//       </footer>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Row, Col, Card, Button } from "react-bootstrap";
import secureImage from "./assets/secure.jpg"; // Import card images
import easyImage from "./assets/easy.jpg";
import privacyImage from "./assets/privacy.jpg";
import welcomeImage from "./assets/welcome.jpg"; // Import welcome background image

const Dashboard = () => {
  const location = useLocation(); // Access the state passed from FaceLogin
  const navigate = useNavigate(); // Hook for navigation
  const [identifier, setIdentifier] = useState(location.state?.identifier || ""); // Get the identifier from location state

  // Handle logout
  const handleLogout = () => {
    setIdentifier(""); // Clear the identifier
    navigate("/"); // Redirect to the login page
  };

  return (
    <div>
      {/* Navbar at the Top */}
      <Navbar bg="primary" expand="lg" fixed="top" className="shadow-sm">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="fw-bold text-white">
            <h3>Face Recognition App</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {identifier ? (
                // Display identifier and logout button if logged in
                <>
                  <Navbar.Text className="text-white me-3">
                    Welcome, <strong>{identifier}</strong>
                  </Navbar.Text>
                  <Button variant="outline-light" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                // Display login and register buttons if not logged in
                <>
                  <Nav.Link as={Link} to="/login">
                    <Button variant="outline-light" className="me-2">
                      Login
                    </Button>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register">
                    <Button variant="light">Register</Button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Big Welcome Card */}
      <Container fluid className="p-0" style={{ marginTop: "75px" }}>
        <Card className="text-white border-0 rounded-0">
          <Card.Img src={welcomeImage} alt="Welcome" style={{ height: "400px", objectFit: "cover" }} />
          <Card.ImgOverlay
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <div className="text-center">
              <h1 className="display-4 mb-4">Welcome to Face Recognition</h1>
              <p className="lead">
                Experience seamless and secure authentication with our face recognition technology.
              </p>
            </div>
          </Card.ImgOverlay>
        </Card>
      </Container>

      {/* Features Section */}
      <Container fluid className="my-5">
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Img variant="top" src={secureImage} style={{ height: "200px", objectFit: "cover" }} />
              <Card.Body className="text-center">
                <Card.Title>Fast & Secure</Card.Title>
                <Card.Text>
                  Our face recognition system ensures fast and secure authentication for all users.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Img variant="top" src={easyImage} style={{ height: "200px", objectFit: "cover" }} />
              <Card.Body className="text-center">
                <Card.Title>Easy to Use</Card.Title>
                <Card.Text>
                  Simply register your face and log in with a single click. No passwords required!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Img variant="top" src={privacyImage} style={{ height: "200px", objectFit: "cover" }} />
              <Card.Body className="text-center">
                <Card.Title>Privacy First</Card.Title>
                <Card.Text>
                  Your data is safe with us. We prioritize your privacy and security.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <Container fluid>
          <p className="mb-0">&copy; 2023 Face Recognition App. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default Dashboard;