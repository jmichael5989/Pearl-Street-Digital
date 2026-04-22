import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function FoundingClientCTA({
  variant,
}: {
  variant: "prominent" | "compact";
}) {
  if (variant === "compact") {
    return (
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-semibold text-xl text-slate-900">
                Ready to be our next success story?
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Let&apos;s talk about what we can do for your business.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 shrink-0"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 py-10 mb-10">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-10">
          {/* Decorative blur blobs */}
          <div
            className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-teal-500/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-violet-500/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent mb-3">
              Founding Client Program
            </p>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4 leading-tight">
              Building something real. Taking a small number of founding
              clients.
            </h2>
            <p className="text-base text-slate-300 mb-6 leading-relaxed">
              Founding clients get locked-in pricing for twelve months, direct
              access to the founder throughout the engagement, and a featured
              case study on this page when we launch their site.
            </p>

            {/* Trust signals */}
            <div className="inline-flex items-center gap-x-4 gap-y-2 text-xs text-slate-400 mb-6 flex-wrap justify-center">
              <span className="inline-flex items-center gap-2">
                <Check
                  className="w-4 h-4 text-teal-400"
                  aria-hidden="true"
                />
                Locked-in founding pricing
              </span>
              <span aria-hidden="true" className="text-slate-600">
                &middot;
              </span>
              <span className="inline-flex items-center gap-2">
                <Check
                  className="w-4 h-4 text-teal-400"
                  aria-hidden="true"
                />
                Founder-led delivery
              </span>
              <span aria-hidden="true" className="text-slate-600">
                &middot;
              </span>
              <span className="inline-flex items-center gap-2">
                <Check
                  className="w-4 h-4 text-teal-400"
                  aria-hidden="true"
                />
                Featured case study on launch
              </span>
            </div>

            {/* Dual CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact?founding=true"
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-900 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                Apply for Founding Client Program
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                See Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
