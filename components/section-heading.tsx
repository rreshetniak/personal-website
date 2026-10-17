type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="preserve-lines">{title}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
