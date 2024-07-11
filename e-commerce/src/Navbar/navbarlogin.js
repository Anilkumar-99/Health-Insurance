import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';


export const Navbarlogin = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true); 
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleCloseModal = () => {
    setShowModal(false);
    // Reset form data and errors when modal is closed
    setFormData({ name: '', email: '', password: '' });
    setErrors({});
  };
  
  const handleShowModal = () => setShowModal(true);

  const handleToggleForm = () => {
    setIsLoginForm(!isLoginForm);
    // Reset form data and errors when toggling between login and register forms
    setFormData({ name: '', email: '', password: '' });
    setErrors({});
  };

  const handleSubmit = () => {
    let errors = {};
    let isValid = true;

    // Basic validation
    if (!formData.email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email cannot contain only spaces';
      isValid = false;
    }

    if (!formData.password) {
      errors.password = 'Password is required';
      isValid = false;
    }  else if (
      !/(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[!@#$%^&()_+])[A-Za-z\d!@#$%^&()_+]{8,}/.test(formData.password)
    ) {
      errors.password =
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special symbol';
      isValid = false;
    }

    if (!isLoginForm && !formData.name) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.name.trim()) {
      errors.name = 'Name cannot contain only spaces';
      isValid = false;
    }
  

    // Set errors if any
    setErrors(errors);

    if (isValid) {
      // Logic for handling form submission
      if (isLoginForm) {
        console.log('Login form submitted:', formData);
      } else {
        console.log('Register form submitted:', formData);
      }
      // Close the modal
      handleCloseModal();
    }
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleShowModal} id='log'>Login&nbsp;<i class="fa-solid fa-right-to-bracket"></i></button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{isLoginForm ? 'Login' : 'Register'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {!isLoginForm && (
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {errors.name && <Form.Text className="text-danger">{errors.name}</Form.Text>}
              </Form.Group>
            )}

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && <Form.Text className="text-danger">{errors.email}</Form.Text>}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              {errors.password && <Form.Text className="text-danger">{errors.password}</Form.Text>}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {isLoginForm ? 'Login' : 'Register'}
          </Button>
          <Button variant="link" onClick={handleToggleForm}>
            {isLoginForm ? "Don't have an account? Register" : 'Switch to Login'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Navbarlogin;