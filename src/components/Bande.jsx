

export default function Bande({ text }) {
  return (
    <div className="overflow-hidden mt-15 w-full">
      <div className="whitespace-nowrap scrolling-text py-2">
        <span className="text-blue-950 text-4xl font-bold mx-4">{text}</span>
        

        {/* On répète le texte pour un scroll continu */}
      </div>
    </div>
  );
}
