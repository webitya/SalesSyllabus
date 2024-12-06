import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./FormEl.css"; // Custom CSS file for styling

const FormEl = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        companyName: "",
        totalEmployees: "",
        phoneNumber: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        emailjs.send("service_evnh226", "template_43ycn0v", formData, "aHWw0G5vVDW9ORqW2")
            .then((response) => {
                console.log("Email sent successfully:", response);
                setFormData({
                    fullName: "",
                    companyName: "",
                    totalEmployees: "",
                    phoneNumber: "",
                    email: "",
                    message: "",
                });
            })
            .catch((error) => {
                console.error("Error sending email:", error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="small-input-form">
            <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-input"
                    required
                />
            </div>
            <div className="form-group">
                <label className="form-label">Company Name</label>
                <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="form-input"
                    required
                />
            </div>
            <div className="form-group">
                <label className="form-label">Total Employees</label>
                <input
                    type="number"
                    name="totalEmployees"
                    value={formData.totalEmployees}
                    onChange={handleChange}
                    className="form-input"
                    required
                />
            </div>
            <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="form-input"
                    required
                />
            </div>
            <div className="form-group">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                />
            </div>
            <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    required
                />
            </div>
            <button type="submit" className="submit-button">Send Message</button>
        </form>
    );
};

export default FormEl;
