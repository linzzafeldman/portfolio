export const artOfBeingAlone = {
  id: 'art-of-being-alone',
  title: 'ART OF BEING ALONE',
  dates: '29 September – 14 October 2026',
  location: 'Jerusalem',
} as const;

export function ArtOfBeingAlone() {
  return (
    <article className="max-w-4xl mx-auto px-8">
      <a
        href="/exhibitions"
        className="inline-block mb-12 tracking-wider hover:opacity-50 transition-opacity text-black"
      >
        ← BACK TO EXHIBITIONS
      </a>
      <h1 className="mb-4 tracking-wider">{artOfBeingAlone.title}</h1>
      <p className="mb-2 opacity-60">{artOfBeingAlone.dates} | {artOfBeingAlone.location}</p>
    </article>
  );
}
