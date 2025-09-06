import { PageProps } from "$fresh/server.ts";

export default function Home(_props: PageProps) {
  return (
    <main class="min-h-screen flex flex-col">
      <header class="w-full max-w-5xl mx-auto px-6 pt-8 flex items-center justify-between">
        <div class="font-bold text-xl tracking-tight">Invio</div>
        <nav class="flex gap-6 text-sm">
          <a href="#features" class="hover:text-violet transition-colors">Features</a>
          <a href="#install" class="hover:text-violet transition-colors">Install</a>
          <a href="https://github.com/kittendevv/invio" class="hover:text-violet transition-colors">GitHub</a>
        </nav>
      </header>
      
      <section class="flex-1 flex items-center">
        <div class="w-full max-w-5xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-12 gap-10">
          <div class="md:col-span-7 space-y-8">
            <h1 class="text-4xl md:text-6xl font-extrabold leading-tight">
              Clean Open Source
              <span class="block text-violet">Invoicing Software</span>
            </h1>
            <p class="text-lg md:text-xl text-nordic-90 max-w-prose">
              For people who just want invoices. No CRM. No project management. 
              Just fast, transparent billing you can self-host.
            </p>
            <p class="text-base text-nordic-90 max-w-prose">
              I built this because I needed simple invoicing for my PC flipping business 
              and couldn't find anything that fit my workflow. Invio does invoices. That's it. 
              Your customers get a link, they see the invoice. No accounts, no tracking, no subscriptions.
            </p>
            <div class="flex flex-wrap gap-4 pt-2">
              <a
                href="#install"
                class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-violet text-cloud font-semibold shadow-sm hover:brightness-110 active:translate-y-px transition-all"
              >
                <i data-lucide="book-open" class="w-5 h-5"></i>
                Read Documentation
              </a>
              <a
                href="https://github.com/kittendevv/invio"
                class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-violet-40 text-cloud hover:border-violet hover:bg-violet-10 transition-colors"
              >
                <i data-lucide="github" class="w-5 h-5"></i>
                View on GitHub
              </a>
            </div>
          </div>
          <div class="md:col-span-5 relative">
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-b from-highway-40 via-highway-10 to-cloud-0 blur-2xl opacity-60" />
            <div class="relative rounded-xl border border-highway-40 bg-highway-40 backdrop-blur-md p-6 shadow-xl space-y-4">
              <h2 class="text-lg font-semibold">Why Invio?</h2>
        <ul class="space-y-3 text-sm text-nordic-90">
                <li class="flex items-center gap-3">
          <i data-lucide="target" class="text-duranta w-5 h-5 flex-shrink-0"></i>
                  <span><strong>Focus, invoices only</strong> - No feature creep, just the billing essentials</span>
                </li>
                <li class="flex items-center gap-3">
          <i data-lucide="shield" class="text-duranta w-5 h-5 flex-shrink-0"></i>
                  <span><strong>Transparent and portable</strong> - Your data stays yours, always accessible</span>
                </li>
                <li class="flex items-center gap-3">
          <i data-lucide="zap" class="text-duranta w-5 h-5 flex-shrink-0"></i>
                  <span><strong>Modern web UI</strong> - Built with Deno and Fresh for speed and reliability</span>
                </li>
                <li class="flex items-center gap-3">
          <i data-lucide="link-2" class="text-duranta w-5 h-5 flex-shrink-0"></i>
                  <span><strong>Zero friction for customers</strong> - Send invoices via simple, secure links</span>
                </li>
              </ul>
              <p class="text-xs text-nordic-60 pt-2">
                Built with Deno and Fresh. Check out the docs to get started, 
                or browse the code on GitHub. Built in the open, shared freely.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="install" class="py-16 bg-highway-40 bg-opacity-20">
        <div class="w-full max-w-5xl mx-auto px-6 text-center space-y-6">
          <h2 class="text-2xl font-bold">Ready to self-host?</h2>
          <p class="text-nordic-90 max-w-2xl mx-auto">
            Built with Deno and Fresh. Check out the docs to get started, 
            or browse the code on GitHub. Built in the open, shared freely.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-duranta text-highway font-semibold shadow-sm hover:brightness-110 transition-all"
            >
              <i data-lucide="book-open" class="w-5 h-5"></i>
              Read Documentation
            </a>
            <a
              href="https://github.com/kittendevv/invio"
              class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-violet-40 text-cloud hover:border-violet hover:bg-violet-10 transition-colors"
            >
              <i data-lucide="github" class="w-5 h-5"></i>
              View on GitHub
            </a>
            <a
              href="#"
              class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-duranta text-duranta hover:bg-duranta hover:text-highway transition-colors"
            >
              <i data-lucide="heart" class="w-5 h-5"></i>
              Support the Project
            </a>
          </div>
        </div>
      </section>
      
      <footer class="py-10 text-center text-xs text-nordic-60">
        © {new Date().getFullYear()} Invio. Built with Fresh & Deno.
      </footer>
    </main>
  );
}
