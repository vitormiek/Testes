export function SiteNav() {
  return (
    <header className="site-nav">
      <a className="wordmark" href="/">vimi</a>
      <nav>
        <a href="/solucoes">Soluções</a>
        <a href="/segmentos">Segmentos</a>
        <a href="/ecossistema">Ecossistema</a>
        <a href="/insights">Insights</a>
      </nav>
      <a className="pill primary" href="/#diagnostico">Começar <span>↗</span></a>
    </header>
  );
}
