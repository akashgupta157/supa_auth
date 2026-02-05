import { Suspense } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { User, Mail, Calendar, Shield } from "lucide-react";

async function UserDetails() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/auth/login");
  }

  const user = data.user;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <User className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-semibold text-sm text-muted-foreground">
            User ID
          </h3>
        </div>
        <p className="text-sm font-mono break-all">{user.id}</p>
      </div>

      <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-semibold text-sm text-muted-foreground">Email</h3>
        </div>
        <p className="text-sm">{user.email}</p>
      </div>

      <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Calendar className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-semibold text-sm text-muted-foreground">
            Created At
          </h3>
        </div>
        <p className="text-sm">
          {new Date(user.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-semibold text-sm text-muted-foreground">
            Email Verified
          </h3>
        </div>
        <p className="text-sm">
          {user.email_confirmed_at ? (
            <span className="inline-flex items-center gap-2 text-green-600">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Verified
            </span>
          ) : (
            <span className="inline-flex items-center gap-2 text-amber-600">
              <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
              Not Verified
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

export default function ProtectedPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here&apos;s your account overview.
        </p>
      </div>

      {/* User Details Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Account Information</h2>
        </div>
        <Suspense
          fallback={
            <div className="grid gap-6 md:grid-cols-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-lg p-6 animate-pulse"
                >
                  <div className="h-4 bg-muted rounded w-1/2 mb-4"></div>
                  <div className="h-6 bg-muted rounded"></div>
                </div>
              ))}
            </div>
          }
        >
          <UserDetails />
        </Suspense>
      </div>
    </div>
  );
}
