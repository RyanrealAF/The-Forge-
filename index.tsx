// index.tsx
const { useState } = React;

function App() {
  const [message] = useState("Authenticity Ain’t Optional");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-void text-bronze font-bold text-3xl tracking-wide">
      <h1>{message}</h1>
      <p className="mt-4 text-stone text-lg">
        Shield & Spear • Cadence over polish • Truth over apology
      </p>
      <span className="mt-6 px-4 py-2 border border-bronze text-bronze uppercase text-sm tracking-widest">
        Anti‑Fragile Doctrine
      </span>
    </div>
  );
}

// Mount to root
ReactDOM.createRoot(document.getElementById("root")).render(<App />);