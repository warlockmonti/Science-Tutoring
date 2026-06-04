import React, { useState } from 'react';

const Booking: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const endpoint = localStorage.getItem('formspreeEndpoint');

    if (endpoint) {
      const data = new FormData(form);
      await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
    }

    form.reset();
    setSubmitted(true);
  };

  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-lime-600">
            Book a Session
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-blue-950">Tell me what you need help with.</h1>
          <p className="mt-4 leading-7 text-slate-600">
            Submit a quick request with your subject, goals, and preferred time. You will get a follow-up
            to confirm the session details.
          </p>
        </div>

        <form id="booking-form" onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-bold text-slate-700">
              Student name
              <input name="name" required className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-100" />
            </label>
            <label className="block text-sm font-bold text-slate-700">
              Email
              <input name="email" type="email" required className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-100" />
            </label>
            <label className="block text-sm font-bold text-slate-700">
              Subject
              <select name="subject" required className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-100">
                <option value="">Choose one</option>
                <option>Biology</option>
                <option>Chemistry</option>
                <option>Physics</option>
                <option>General Science</option>
              </select>
            </label>
            <label className="block text-sm font-bold text-slate-700">
              Preferred time
              <input name="preferredTime" placeholder="Weeknights, Sunday afternoon..." className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-100" />
            </label>
          </div>
          <label className="mt-5 block text-sm font-bold text-slate-700">
            What should we work on?
            <textarea name="notes" rows={5} required className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-100" />
          </label>
          <button type="submit" className="mt-6 rounded-full bg-blue-900 px-6 py-3 font-extrabold text-white hover:bg-blue-800">
            Send Request
          </button>
          {submitted && (
            <p className="mt-4 rounded-xl bg-lime-100 px-4 py-3 text-sm font-bold text-lime-900">
              Request received. I will follow up to confirm.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Booking;
