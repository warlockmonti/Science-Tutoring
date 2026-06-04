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
              Struggling in science class?
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Now offering one-on-one support for students struggling to understand science; breaking
              down the concepts and building up their knowledge base to make science class feel more
              manageable and potentially even fun!
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

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-6 rounded-full bg-lime-200/70 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] bg-blue-950 p-6 text-white shadow-2xl">
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border-[18px] border-lime-300/20" />
              <div className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-lime-300/10" />

              <div className="relative rounded-2xl bg-white p-5 text-blue-950 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-lime-600">
                      Study Plan
                    </p>
                    <h2 className="mt-1 text-2xl font-extrabold">From confused to confident</h2>
                  </div>
                  <span className="rounded-full bg-lime-200 px-3 py-1 text-sm font-extrabold text-blue-950">
                    1:1
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {[
                    ['Diagnose', 'Find the exact concept that is getting in the way.'],
                    ['Break Down', 'Turn big science ideas into simple, usable steps.'],
                    ['Build Up', 'Practice until the student can explain it back.'],
                  ].map(([title, text], index) => (
                    <div key={title} className="flex gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-900 text-sm font-extrabold text-white">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-base font-extrabold">{title}</h3>
                        <p className="text-sm leading-6 text-slate-600">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mt-5 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur">
                <p className="text-sm font-bold leading-6 text-blue-50">
                  Practical lessons, visual explanations, and steady encouragement for biology,
                  chemistry, and physics.
                </p>
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
