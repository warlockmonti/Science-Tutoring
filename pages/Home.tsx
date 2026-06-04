import React from 'react';
import { SUBJECTS } from '../constants';

interface HomeProps {
  onBookNow: () => void;
  onLeaveReview: () => void;
}

const Home: React.FC<HomeProps> = ({ onBookNow, onLeaveReview }) => {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-lime-600">
              Biology • Chemistry • Physics
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-blue-950 sm:text-6xl">
              Clear science tutoring for students who want confidence.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              One-on-one support for tough concepts, homework, labs, Regents/AP prep,
              and the study habits that make science feel manageable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onBookNow}
                className="rounded-full bg-blue-900 px-6 py-3 font-extrabold text-white shadow-lg shadow-blue-900/20 transition hover:bg-blue-800"
              >
                Book a Session
              </button>
              <button
                type="button"
                onClick={onLeaveReview}
                className="rounded-full border border-slate-300 px-6 py-3 font-extrabold text-blue-950 transition hover:border-blue-900 hover:bg-slate-50"
              >
                Leave a Review
              </button>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <div className="absolute inset-0 rounded-full bg-lime-200/70 blur-3xl" />
            <div className="relative flex h-full items-center justify-center rounded-[2rem] bg-blue-950 text-lime-300 shadow-2xl">
              <div className="absolute h-28 w-28 rounded-full border-4 border-lime-300/80" />
              <div className="electron absolute h-4 w-4 rounded-full bg-yellow-300" />
              <div className="absolute h-3 w-3 rounded-full bg-white" />
              <div className="absolute bottom-8 left-8 rounded-2xl bg-white/10 px-4 py-3 text-sm font-bold text-white backdrop-blur">
                Learn the why, not just the answer.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="subjects" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold text-blue-950">Subjects</h2>
            <p className="mt-3 text-slate-600">
              Tutoring is tailored to the class, the student, and the next goal.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {SUBJECTS.map((subject) => (
              <article key={subject.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-blue-900">{subject.icon}</div>
                <h3 className="mt-5 text-xl font-extrabold text-blue-950">{subject.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{subject.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
