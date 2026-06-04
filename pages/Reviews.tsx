import React, { useState } from 'react';
import { Review } from '../types';

const INITIAL_REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Parent of Chemistry Student',
    rating: 5,
    text: 'Clear explanations and patient review made a huge difference before exam week.',
    date: '2026',
  },
  {
    id: '2',
    name: 'Biology Student',
    rating: 5,
    text: 'The diagrams and practice questions helped everything finally make sense.',
    date: '2026',
  },
];

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextReview: Review = {
      id: crypto.randomUUID(),
      name: String(data.get('name') || 'Anonymous'),
      rating: Number(data.get('rating') || 5),
      text: String(data.get('text') || ''),
      date: new Date().getFullYear().toString(),
    };

    setReviews((currentReviews) => [nextReview, ...currentReviews]);
    form.reset();
  };

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-lime-600">
            Reviews
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-blue-950">Share your experience.</h1>
          <p className="mt-4 leading-7 text-slate-600">
            Leave a note about what helped, what improved, or what future students should know.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <label className="block text-sm font-bold text-slate-700">
              Name
              <input name="name" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-100" />
            </label>
            <label className="mt-5 block text-sm font-bold text-slate-700">
              Rating
              <select name="rating" defaultValue="5" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-100">
                <option value="5">5 stars</option>
                <option value="4">4 stars</option>
                <option value="3">3 stars</option>
              </select>
            </label>
            <label className="mt-5 block text-sm font-bold text-slate-700">
              Review
              <textarea name="text" rows={5} required className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-100" />
            </label>
            <button type="submit" className="mt-6 rounded-full bg-blue-900 px-6 py-3 font-extrabold text-white hover:bg-blue-800">
              Add Review
            </button>
          </form>

          <div className="grid gap-4">
            {reviews.map((review) => (
              <article key={review.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-lg text-yellow-500" aria-label={`${review.rating} stars`}>
                  {'★'.repeat(review.rating)}
                </div>
                <p className="mt-3 leading-7 text-slate-700">"{review.text}"</p>
                <p className="mt-4 text-sm font-extrabold text-blue-950">{review.name}</p>
                <p className="text-xs font-semibold text-slate-400">{review.date}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
