export function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <h1 className="mb-12 tracking-wider">CONTACT</h1>
      <div className="max-w-2xl space-y-12">
        <div>
          <p className="mb-6">
            For inquiries about exhibitions, commissions, or purchases, please get in touch
            using the information below.
          </p>
        </div>

        <div className="space-y-6 pt-12 border-t border-black">
          <div>
            <p className="opacity-60 mb-2">Email</p>
            <a
              href="mailto:linzza.feldman@gmail.com"
              className="hover:opacity-50 transition-opacity"
            >
              linzza.feldman@gmail.com
            </a>
          </div>
       <div>
            <p className="opacity-60 mb-2">Representation</p>
            <p>Represented by </p>
            <a
              href="mailto:"
              className="hover:opacity-50 transition-opacity"
            >
             .
            </a>
          </div>
        </div>

        <div className="space-y-4 pt-12 border-t border-black">
          <p className="opacity-60 mb-4">Links</p>
          <div className="flex gap-8">
            <a
              href="https://instagram.com/_olgafeldman_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-50 transition-opacity"
            >
              Instagram
            </a>
          
          </div>
          <div className="flex gap-8">
            <a
              href="https://x.com/_olgafeldman_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-50 transition-opacity"
            >
              X Twitter
            </a>
          
          </div>
        </div>
      </div>
    </div>
  );
}
