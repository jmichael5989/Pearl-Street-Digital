import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="cta-band inverted">
      <div className="wrap">
        <p className="kicker appear">Work with us</p>
        <h2 className="appear">Two people. Your whole web presence.</h2>
        <Link className="btn appear" href="/contact#talk-to-us">
          Book a consultation
        </Link>
      </div>
    </section>
  );
}
