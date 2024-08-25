export default function Post({ content, title, sections, tags }) {
  return (
    <article className="prose">
      <h1>{title}</h1>
      {tags && (
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}
      <div dangerouslySetInnerHTML={{ __html: content }} />
      {sections && (
        <ul className="sections">
          {sections.map((section, index) => (
            <li key={index}>
              <a href={`#${section.id}`}>{section.title}</a>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
