export default function SectionHeading({ eyebrow, title, text, align = 'left' }) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      <span className="eyebrow"><i />{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </header>
  )
}
