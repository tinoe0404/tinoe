export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-card)]/50 relative z-10">
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-[var(--text-muted)] font-medium">
          Tinotenda Chandengenda &copy; {new Date().getFullYear()}
        </p>
        <p className="text-sm text-[var(--text-muted)]">
          Designed &amp; Developed by <span className="text-[var(--accent)] font-medium">Tino</span>
        </p>
      </div>
    </footer>
  );
}





// <footer className="border-t border-[var(--border)] bg-[var(--bg-card)]/50 relative z-10">
//   <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between items-center gap-4">
//     <p className="text-sm text-[var(--text-muted)] font-medium">
//       Tinotenda Chandengenda &copy; {new Date().getFullYear()}
//     </p>
//     <p className="text-sm text-[var(--text-muted)]">
//       Designed &amp; Developed by <span className="text-[var(--accent)] font-medium">Tino</span>
//     </p>
//   </div>
// </footer>    