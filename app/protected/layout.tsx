import { Suspense } from "react";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="h-16 border-b border-border bg-card/50 flex items-center justify-between px-8">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-semibold">Welcome back!</h1>
          </div>

          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <Suspense
              fallback={
                <div className="w-8 h-8 rounded-full bg-muted animate-pulse" />
              }
            >
              <AuthButton />
            </Suspense>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-8 bg-background">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border py-6 px-8 bg-card/50">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>© 2026 SupaAuth. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
