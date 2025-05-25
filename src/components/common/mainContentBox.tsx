export default function MainContentBox({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen lg:ml-64 pt-16 lg:pt-0">
      {children}
    </main>
  );
}

