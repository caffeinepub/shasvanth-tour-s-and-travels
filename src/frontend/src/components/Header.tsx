import { Phone, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center transition-transform hover:scale-105">
            <img
              src="/assets/generated/shasvanth-logo.dim_800x300.png"
              alt="Shasvanth Tours & Travels"
              className="h-14 w-auto object-contain"
            />
          </a>

          {/* Contact Info - Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+916382281842"
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+91 6382281842</span>
            </a>
            <a
              href="mailto:shasvanthtoursandtravels@gmail.com"
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden lg:inline">shasvanthtoursandtravels@gmail.com</span>
              <span className="lg:hidden">Email Us</span>
            </a>
          </div>

          {/* Contact Info - Mobile */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="tel:+916382281842"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              aria-label="Call us"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href="mailto:shasvanthtoursandtravels@gmail.com"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              aria-label="Email us"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
