import { useState } from "react";
import { useTranslation } from "react-i18next";

const MAKE_WEBHOOK_URL = import.meta.env.VITE_MAKE_WEBHOOK_URL;

export default function MailMe() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ from_email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.from_email || !form.subject || !form.message) return;

    setStatus("sending");
    try {
      const res = await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      setForm({ from_email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 mb-8 w-full">
      {status === "success" && (
        <div className="mb-4 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm text-center">
          {t("contact.form.success")}
        </div>
      )}
      {status === "error" && (
        <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
          {t("contact.form.error")}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-sm font-medium text-foreground">
          {t("contact.form.email")}
          <input
            type="email"
            name="from_email"
            value={form.from_email}
            onChange={handleChange}
            required
            className="mt-1.5 w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
          />
        </label>
        <label className="block text-sm font-medium text-foreground">
          {t("contact.form.subject")}
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="mt-1.5 w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
          />
        </label>
        <label className="block text-sm font-medium text-foreground">
          {t("contact.form.message")}
          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
            className="mt-1.5 w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
          />
        </label>
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? t("contact.form.sending") : t("contact.form.send")}
        </button>
      </form>
    </div>
  );
}
