import { useState } from "react";

const CONTACT_ITEMS = [
  { icon: "📧", label: "Email",    value: "abdulrosyid1999bogor@gmail.com" },
  { icon: "📱", label: "Phone",    value: "+62 812 1377 6005" },
  { icon: "📍", label: "Location", value: "Ciomas, Indonesia" },
];

const FIELDS = [
  { id: "name",  label: "Name",  type: "text",  placeholder: "Your name" },
  { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
];

export default function Contact() {
  const [sent, setSent]   = useState(false);
  const [form, setForm]   = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-divider" />
      <div className="section-tag">
        <span className="section-tag-num">03</span> Contact
      </div>
      <h2 className="section-heading">
        Let's <em>work</em><br />together
      </h2>

      <div className="contact-layout">
        {/* Info Cards */}
        <div className="contact-info">
          {CONTACT_ITEMS.map((c) => (
            <div className="contact-card reveal" key={c.label}>
              <span className="contact-icon">{c.icon}</span>
              <div className="contact-label">{c.label}</div>
              <div className="contact-value">{c.value}</div>
            </div>
          ))}
        </div>

        {/* Form */}
        <form className="contact-form reveal" onSubmit={handleSubmit}>
          {FIELDS.map((f) => (
            <div className="form-field" key={f.id}>
              <label className="form-label" htmlFor={f.id}>{f.label}</label>
              <input
                className="form-input"
                id={f.id}
                name={f.id}
                type={f.type}
                placeholder={f.placeholder}
                value={form[f.id]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <div className="form-field">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea
              className="form-textarea"
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{
              alignSelf: "flex-start",
              background: sent ? "#00b894" : undefined,
            }}
          >
            {sent ? (
              "✓ Sent!"
            ) : (
              <>
                Send Message
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z" />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}