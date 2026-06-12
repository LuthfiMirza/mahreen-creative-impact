export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-primary px-6 py-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3 md:items-start">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-gold">Mahreen</p>
          <p className="mt-3 text-sm text-muted">Internship Competency Test · Batch 1</p>
        </div>
        <div aria-hidden="true" />
        <div className="space-y-2 text-sm text-muted md:text-right">
          <p className="text-primary-text">Luthfi Mirza Darsono</p>
          <p>Web Developer Candidate</p>
          <p>Universitas Gunadarma</p>
          <a href="#" className="nav-link inline-block text-gold/70 hover:text-gold">Instagram Submission Post</a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/[0.06] pt-6">
        <div className="flex flex-col gap-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025</p>
          <p>Built with Next.js · Deployed on Vercel</p>
        </div>
      </div>
    </footer>
  );
}
