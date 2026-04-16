import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { personal } from "../Home/personal";

// ── Update these with your EmailJS credentials ──────────────────
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";
// ────────────────────────────────────────────────────────────────

const channels = [
  {
    name: "LinkedIn",
    handle: "linkedin.com/in/arushahmd",
    url: personal.linkedin,
    bg: "bg-blue-50",
    color: "#0A66C2",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    handle: "github.com/arushahmd",
    url: personal.github,
    bg: "bg-slate-100",
    color: "#111",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Email",
    handle: personal.email,
    url: `mailto:${personal.email}`,
    bg: "bg-amber-50",
    color: "#D97706",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    handle: personal.phone,
    url: personal.whatsapp,
    bg: "bg-emerald-50",
    color: "#16A34A",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12.003 0C5.374 0 0 5.374 0 12.003c0 2.122.554 4.112 1.523 5.84L.057 23.514a.75.75 0 0 0 .93.93l5.67-1.466A11.951 11.951 0 0 0 12.003 24C18.63 24 24 18.626 24 12.003 24 5.374 18.63 0 12.003 0zm0 21.818a9.793 9.793 0 0 1-5.003-1.374l-.36-.214-3.722.962.982-3.624-.235-.373A9.796 9.796 0 0 1 2.18 12.003c0-5.416 4.407-9.821 9.823-9.821s9.82 4.405 9.82 9.821-4.404 9.815-9.82 9.815z" />
      </svg>
    ),
  },
];

type Status = "idle" | "sending" | "sent" | "error";

const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus("sent");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <p className="font-mono text-xs text-indigo-600 uppercase tracking-widest mb-2 flex items-center gap-2">
          <span className="w-5 h-px bg-indigo-600 inline-block" />
          Get In Touch
        </p>
        <h2
          className="text-slate-900 mb-3"
          style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(36px,5vw,52px)", fontWeight: 400 }}
        >
          Let's Build.
        </h2>
        <p className="text-slate-500 text-base max-w-lg">
          Open to FAANG-tier remote roles, senior AI/ML positions, and select consulting projects.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            Looking for an engineer who ships <strong className="text-slate-800 font-medium">real AI systems</strong> — voice, vision, NLP, LLMs.
            Available for full-time remote roles. Based in Lahore, working{" "}
            <strong className="text-slate-800 font-medium">US timezones</strong>.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-1.5">Name</label>
              <input
                name="from_name" type="text" required placeholder="Your name"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-1.5">Email</label>
              <input
                name="reply_to" type="email" required placeholder="your@company.com"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-1.5">Message</label>
              <textarea
                name="message" required rows={4} placeholder="Tell me about the role or project..."
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all resize-none"
              />
            </div>
            <button
              type="submit" disabled={status === "sending" || status === "sent"}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white text-sm font-medium rounded-xl transition-all duration-150 hover:-translate-y-0.5 cursor-pointer"
            >
              {status === "sending" ? "Sending..." : status === "sent" ? "✓ Sent!" : "Send Message →"}
            </button>
            {status === "error" && (
              <p className="text-xs text-red-500 text-center">
                Something went wrong. Email me directly at{" "}
                <a href={`mailto:${personal.email}`} className="underline">{personal.email}</a>
              </p>
            )}
          </form>
        </motion.div>

        {/* Channels */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-4">Direct Channels</p>
          <div className="flex flex-col gap-3">
            {channels.map((ch) => (
              <a
                key={ch.name}
                href={ch.url}
                target={ch.url.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:border-indigo-200 hover:bg-indigo-50/30 transition-all duration-150 group"
              >
                <div className={`w-9 h-9 rounded-lg ${ch.bg} flex items-center justify-center shrink-0`} style={{ color: ch.color }}>
                  {ch.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-slate-900">{ch.name}</div>
                  <div className="font-mono text-xs text-slate-400 truncate">{ch.handle}</div>
                </div>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
                  className="text-slate-300 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all shrink-0">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
