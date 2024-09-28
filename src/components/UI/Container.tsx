export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto max-w-6xl pt-16 flex-row px-6">
      {children}
    </div>
  );
}
