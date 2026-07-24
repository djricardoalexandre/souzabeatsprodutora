export default function Header() {
  return (
    <header className="py-4 px-4 border-b border-amber-500/20">
      <div className="container mx-auto flex flex-col items-center">
        <img
          src="/logo_souza_beats_nova.jpeg.png"
          alt="Souza Beats Logo"
          className="w-full max-w-[300px] h-auto"
        />

        <h1 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-500">
          Produtora Studio
        </h1>
      </div>
    </header>
  );
}
