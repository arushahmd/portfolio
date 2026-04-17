import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("Sending...");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID,
        {
          ...form,
          sender_name: "Aroosh Ahmad - AI Engineer",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("Message sent! 🎉");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send. Try again later. ❌");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.form
      className="relative flex flex-col gap-4 w-full p-6 md:p-8 rounded-2xl
                 bg-[linear-gradient(135deg,#7C3AED,#5B21B6,#06B6D4)]/80
                 shadow-[0_15px_30px_rgba(124,58,237,0.2),
                     0_10px_20px_rgba(91,33,182,0.15),
                     0_5px_10px_rgba(0,0,0,0.1),
                     0_2px_5px_rgba(6,182,212,0.05)]
                 shadow-2xl"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
        rows={5}
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
      />

      <motion.button
        type="submit"
        disabled={isSending}
        whileHover={{ scale: isSending ? 1 : 1.05 }}
        whileTap={{ scale: isSending ? 1 : 0.95 }}
        className={`bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 text-white font-semibold py-3 rounded-lg transition
        ${isSending ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}
      >
        {isSending ? "Sending..." : "Send Message"}
      </motion.button>

      {status && (
        <motion.p
          className="text-center text-sm text-gray-50 mt-2"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {status}
        </motion.p>
      )}
    </motion.form>
  );
};

export default ContactForm;
