// pages/Contact.jsx
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import GlassCard from "../components/ui/GlassCard";
import GradientBtn from "../components/ui/GradientBtn";
import SectionHeader from "../components/ui/SectionHeader";
import { useInView } from "../hooks";
import { META } from "../data/portfolio";

// ─────────────────────────────────────────────
//  📧 EMAILJS CONFIGURATION
//  Replace the three values below with your own.
//
//  How to get them:
//  1. Sign up free at https://www.emailjs.com
//  2. Dashboard → Email Services → Add Service
//     (connect Gmail / Outlook / etc.)
//     → copy the SERVICE_ID
//  3. Dashboard → Email Templates → Create Template
//     Use these variables inside the template:
//       {{from_name}}   — sender's full name
//       {{from_email}}  — sender's email (reply-to)
//       {{subject}}     — message subject
//       {{message}}     — message body
//       {{to_name}}     — your name (greeting)
//     → copy the TEMPLATE_ID
//  4. Dashboard → Account → API Keys
//     → copy the PUBLIC_KEY
// ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "service_i5f8e19";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_zwg8zyy";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = "1KqCxfJUEB9bXHVEA";   // e.g. "aBcDeFgHiJkLmNoP"

const CONTACT_ITEMS = [
  { icon: "fas fa-envelope",       label: "Email",         key: "email" },
  { icon: "fas fa-phone",          label: "Phone",         key: "phone" },
  { icon: "fas fa-map-marker-alt", label: "Location",      key: "location" },
  { icon: "fas fa-clock",          label: "Response Time", key: "responseTime" },
];

const EMPTY_FORM = { fname: "", lname: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [ref, visible] = useInView();
  const formRef                   = useRef(null);
  const [form, setForm]           = useState(EMPTY_FORM);
  const [status, setStatus]       = useState(""); // "success" | "error" | "sending"
  const [errorMsg, setErrorMsg]   = useState("");

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = async () => {
    // ── client-side validation ──
    if (!form.fname.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg("Please fill in First Name, Email and Message.");
      setStatus("error");
      return;
    }
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRx.test(form.email)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    // ── EmailJS send ──
    // Template variables sent to EmailJS:
    //   from_name  → full name shown in the email
    //   from_email → reply-to address
    //   subject    → email subject line
    //   message    → message body
    //   to_name    → your name (recipient greeting)
    const templateParams = {
      from_name:  `${form.fname.trim()} ${form.lname.trim()}`.trim(),
      from_email: form.email.trim(),
      subject:    form.subject.trim() || "No Subject",
      message:    form.message.trim(),
      to_name:    META.name,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm(EMPTY_FORM);
      // auto-clear success banner after 6 s
      setTimeout(() => setStatus(""), 6000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setErrorMsg("Something went wrong. Please try again or email me directly.");
      setStatus("error");
    }
  };

  const inputClass = `
    w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5
    text-white text-sm placeholder-gray-600
    focus:outline-none focus:border-violet-400/60
    focus:shadow-[0_0_16px_rgba(167,139,250,0.2)]
    transition-all duration-300
  `;

  return (
    <section className="min-h-screen px-6 py-28 relative" ref={ref}>
      {/* ambient glow */}
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-[140px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle,#ec4899,transparent)" }}
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Get In Touch"
          title={
            <>
              Let's{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg,#f472b6,#a78bfa)" }}
              >
                Work Together
              </span>
            </>
          }
          sub="Have a project in mind? My inbox is always open."
        />

        <div className="grid md:grid-cols-2 gap-10">

          {/* ── Contact info cards ── */}
          <div
            className="transition-all duration-1000"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-48px)",
            }}
          >
            <p className="text-gray-400 mb-8 leading-relaxed">
              Whether you have a project idea, a collaboration proposal, or just
              want to say hi — I'd love to hear from you.
            </p>

            <div className="flex flex-col gap-4">
              {CONTACT_ITEMS.map(({ icon, label, key }) => (
                <GlassCard
                  key={label}
                  className="flex items-center gap-4 p-4 hover:translate-x-2 transition-transform duration-300 cursor-pointer"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border border-violet-400/20"
                    style={{
                      background:
                        "linear-gradient(135deg,rgba(167,139,250,0.15),rgba(6,182,212,0.15))",
                    }}
                  >
                    <i className={`${icon} text-violet-400 text-sm`} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                      {label}
                    </p>
                    <p className="text-white font-bold text-sm">{META[key]}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* ── Form ── */}
          <div
            className="transition-all duration-1000"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(48px)",
              transitionDelay: "200ms",
            }}
          >
            <GlassCard className="p-8 relative">
              {/* top gradient line */}
              <div
                className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
                style={{
                  background:
                    "linear-gradient(90deg,transparent,#a78bfa 30%,#06b6d4 70%,transparent)",
                }}
              />

              <h3 className="font-black text-white text-xl mb-6">Send a Message</h3>

              <div ref={formRef}>
                {/* First + Last name */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5 block">
                      First Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      className={inputClass}
                      placeholder="Full Name"
                      value={form.fname}
                      onChange={update("fname")}
                      disabled={status === "sending"}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5 block">
                      Last Name
                    </label>
                    <input
                      className={inputClass}
                      placeholder="Initial or PrefixName"
                      value={form.lname}
                      onChange={update("lname")}
                      disabled={status === "sending"}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5 block">
                    Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    className={inputClass}
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={update("email")}
                    disabled={status === "sending"}
                  />
                </div>

                {/* Subject */}
                <div className="mb-4">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5 block">
                    Subject
                  </label>
                  <input
                    className={inputClass}
                    placeholder="Project Collaboration"
                    value={form.subject}
                    onChange={update("subject")}
                    disabled={status === "sending"}
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5 block">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    className={inputClass + " resize-none"}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={update("message")}
                    disabled={status === "sending"}
                  />
                </div>
              </div>

              {/* Submit button */}
              <GradientBtn
                onClick={handleSubmit}
                className="w-full justify-center"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <><i className="fas fa-spinner fa-spin" /> Sending…</>
                ) : (
                  <><i className="fas fa-paper-plane" /> Send Message</>
                )}
              </GradientBtn>

              {/* Status messages */}
              {status === "success" && (
                <div className="mt-4 flex items-center gap-2 px-4 py-3 rounded-xl border border-cyan-400/30 bg-cyan-400/8">
                  <i className="fas fa-check-circle text-cyan-400" />
                  <p className="text-cyan-400 text-sm font-semibold">
                    Message sent! I'll reply within 24 hours.
                  </p>
                </div>
              )}
              {status === "error" && (
                <div className="mt-4 flex items-center gap-2 px-4 py-3 rounded-xl border border-rose-400/30 bg-rose-400/8">
                  <i className="fas fa-exclamation-circle text-rose-400" />
                  <p className="text-rose-400 text-sm font-semibold">{errorMsg}</p>
                </div>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}

