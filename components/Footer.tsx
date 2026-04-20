export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-sm text-[var(--text-muted)]">
          Tinotenda Chandengenda &copy; 2026
        </p>
        <p className="text-sm text-[var(--text-muted)]">
          Designed &amp; Developed by Tino
        </p>
      </div>
    </footer>
  );
}
