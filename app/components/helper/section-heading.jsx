// Shared section heading: the uppercase title + the inset rule that
// extends to the right. Used by every homepage section.
export default function SectionHeading({ title, className = "" }) {
    return (
        <div className={`mb-7 flex items-center gap-4 sm:mb-9 ${className}`}>
            <span className="nm-section-title">{title}</span>
            <span className="nm-rule" />
        </div>
    );
}
