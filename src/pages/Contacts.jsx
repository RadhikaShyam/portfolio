import React from 'react';
import './Contacts.css';

const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSeCIKijccDm9AEZRFqb1zupyMcDC1DJdmFRcZRUi-sVk5eL_A/formResponse';

const Contacts = () => {
  return (
    <section className="contact-container">
      <h2>Contact Me</h2>
      <p>This form submits directly to my inbox via Google Forms.</p>
      <form
        action={GOOGLE_FORM_ACTION}
        method="POST"
        target="hidden_iframe" // 👈 Target the hidden iframe
        onSubmit={() => {
          setTimeout(() => {
            window.location.href = '/thank-you'; // 👈 Redirect to your custom page
          }, 500); // Small delay for form submission
        }}
        className="contact-form"
      >
        <input
          type="text"
          name="entry.1027540074"
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="entry.1894997560"
          placeholder="Email"
          required
        />
        <textarea
          name="entry.1100416646"
          placeholder="Message"
          rows="5"
          required
        />
        <button type="submit">Send Message</button>
      </form>
       <iframe
        name="hidden_iframe"
        style={{ display: 'none' }}
        title="hiddenFrame"
      ></iframe>
    </section>
  );
};

export default Contacts;
