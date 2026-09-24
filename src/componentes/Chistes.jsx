export function Chistes({ title, description,
    link, pubDate, 
    category, language}){
    const categoria = category?.[0] || "Chistes"
    const fecha = pubDate? pubDate.split(" ")[0] : "sin fecha disponible"
    const lenguaje = language || "idioma sin especificar"
    return(
        <article className="chiste-card">
    <div>
        <p>{lenguaje}</p>
        <span>{categoria}</span>
        <span>{"</>"}</span>
    </div>
    <div>
      <div>
        <span>.</span>
        <span>{fecha}</span>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noreferrer">Leer chiste</a>
    </div>

 </article>
    )
}