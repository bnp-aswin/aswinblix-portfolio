// Shared section heading: a real <h2> (uppercase title) + a decorative inset
// rule that extends to the right. Used by every homepage/resume section.
// The <h2> gives search engines and answer engines the page's topic outline.
export default function SectionHeading({ title, id, className = "" }) {
    return (
        <div className={`mb-7 flex items-center gap-4 sm:mb-9 ${className}`}>
            <h2 id={id} className="nm-section-title">
                {title}
            </h2>
            <span className="nm-rule" aria-hidden="true" />
        </div>
    );
}
