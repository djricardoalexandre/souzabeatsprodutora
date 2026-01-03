export default function Header() {
  return (
    <header className="py-6 px-4 border-b border-gray-800">
      <div className="container mx-auto flex flex-col items-center">
        <img
          src="/logo_souza_beats_nova.jpeg"
          alt="Souza Beats Logo"
          className="w-full max-w-[350px] h-auto"
        />
        <h1 className="mt-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Produtora Studio
        </h1>
      </div>
    </header>
  );
}
