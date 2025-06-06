import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "", budget: "" });
    const [responseMessage, setResponseMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/your-api-endpoint", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString(),
            });
            
            const result = await response.text();

            if (response.ok) {
                setMessageType("success");
                setResponseMessage(result);
                setFormData({ name: "", email: "", message: "", budget: "" });
            } else {
                setMessageType("error");
                setResponseMessage(result || "Oops! An error occurred and your message could not be sent.");
            }
        } catch (error) {
            setMessageType("error");
            setResponseMessage("Oops! An error occurred and your message could not be sent.");
        }

        setTimeout(() => {
            setResponseMessage("");
            setMessageType("");
        }, 5000);
    };

    return (
        <form id="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required></textarea>
            <select name="budget" value={formData.budget} onChange={handleChange}>
                <option value="">Select Budget</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button type="submit">Send</button>
            {responseMessage && <div className={`ajax-response ${messageType}`}>{responseMessage}</div>}
        </form>
    );
};

export default ContactForm;