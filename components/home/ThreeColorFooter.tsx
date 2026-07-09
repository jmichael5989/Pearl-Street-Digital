import Link from "next/link";

export default function ThreeColorFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-legal">
          <span>
            2026 Rank Point Media, a DBA of JSL Innovations LLC. All rights
            reserved.
          </span>
          <span>
            <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link> ·{" "}
            <a href="/sitemap.xml">Sitemap</a>
          </span>
        </div>
        <p className="foot-badge">
          <span>Design by:</span> <span>Rank Point Media</span>
        </p>
      </div>
    </footer>
  );
}
