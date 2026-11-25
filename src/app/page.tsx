"use client";

import { useRef } from "react";
import "./nutri.css";

/* ============================================================
   LINKS DE CHECKOUT — CAMPOS EDITÁVEIS
   Troque qualquer URL abaixo e a página inteira passa a usar
   o novo link automaticamente (planos + oferta de recuperação).
   ============================================================ */
const CHECKOUT_LINKS = {
  // Pacote Starter — R$ 19,90
  starter: "https://pay.cakto.com.br/ftof3nb",
  // Pacote Final — R$ 47,90
  final: "https://pay.cakto.com.br/3abb5c5_1369754",
  // Final com condição especial (oferta de recuperação) — R$ 34,90
  upgrade: "https://pay.cakto.com.br/yo6vjof",
};

/* Artes do carrossel de preview (feed) */
const FEED_IMAGES = [
  "previa-habitos.webp",
  "previa-mitos.webp",
  "previa-compulsao.webp",
  "previa-hidratacao.webp",
  "previa-reducao.webp",
  "previa-suplementos.webp",
  "previa-geladeira.webp",
  "v3-post-1.webp",
  "v3-post-2.webp",
  "v3-post-3.webp",
];

/* Os 6 bônus do pacote Final */
const BONUSES: Array<{ img: string; title: string; description: string }> = [
  { img: "v5-cover-3.webp", title: "+45 artes para feed e carrossel", description: "Mais opções de publicação para variar o feed." },
  { img: "v5-cover-4.webp", title: "+20 artes para carrosséis", description: "Sequências extras para desenvolver assuntos em etapas." },
  { img: "v5-cover-5.webp", title: "Calendário de Conteúdo", description: "Uma base para planejar o que postar ao longo do período." },
  { img: "v5-cover-6.webp", title: "Organizador de Feed", description: "Ajuda para distribuir as artes com harmonia no perfil." },
  { img: "v5-cover-7.webp", title: "Guia Paleta de Cores", description: "Referência para escolher e combinar as cores do conteúdo." },
  { img: "v5-cover-8.webp", title: "eBook", description: "Leitura complementar incluída no pacote." },
];

/* Comentários de clientes */
const COMMENTS: Array<{ name: string; city: string; quote: string }> = [
  { name: "Marina", city: "São Paulo", quote: "Gostei de encontrar artes e legendas organizadas em um só lugar." },
  { name: "Camila", city: "Rio de Janeiro", quote: "Os temas ajudam a planejar as publicações da semana." },
  { name: "Renata", city: "Brasília", quote: "Ter um ponto de partida para o feed faz diferença na rotina." },
  { name: "Juliana", city: "Belo Horizonte", quote: "Achei prático poder adaptar os materiais ao meu perfil." },
  { name: "Fernanda", city: "Curitiba", quote: "Os roteiros me deram ideias para conversar nos Stories." },
  { name: "Patrícia", city: "Salvador", quote: "A organização dos formatos facilita escolher o que publicar." },
];

export default function NutriSalesPage() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openUpgradeDialog = () => {
    dialogRef.current?.showModal();
  };

  const goToCheckout = (type: keyof typeof CHECKOUT_LINKS) => {
    const url = CHECKOUT_LINKS[type];
    if (url) window.location.assign(url);
  };

  const handleStarterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openUpgradeDialog();
  };

  const handleFinalClick = (e: React.MouseEvent) => {
    e.preventDefault();
    goToCheckout("final");
  };

  const handleAcceptUpgrade = (e: React.MouseEvent) => {
    e.preventDefault();
    goToCheckout("upgrade");
  };

  const handleKeepStarter = () => {
    goToCheckout("starter");
  };

  const handleDialogBackdrop = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) dialogRef.current?.close();
  };

  return (
    <>
      <main>
        {/* Hero */}
        <section className="hero">
          <div className="wrap hero-short">
            <span className="label">Conteúdo digital para nutricionistas</span>
            <h1>
              Seu Instagram com conteúdo pronto para <span className="accent">adaptar e publicar.</span>
            </h1>
            <p>
              Sem tempo ou ideias para criar posts? Receba artes, legendas e roteiros prontos para editar no Canva,
              colocar sua identidade e publicar com mais rapidez.
            </p>
            <a className="button" href="#por-dentro">
              Veja o material por dentro
            </a>
            <div className="hero-points">
              <span>✓ Acesso digital</span>
              <span>✓ Edite no Canva</span>
              <span>✓ Garantia de 7 dias</span>
            </div>
          </div>
        </section>

        {/* Preview — carrossel automático */}
        <section className="section preview" id="por-dentro">
          <div className="section-head wrap">
            <span className="label">Veja antes de escolher</span>
            <h2>
              Assim são as <span className="accent">artes por dentro.</span>
            </h2>
            <p>Veja exemplos de posts por dentro. Troque fotos, cores, textos e adapte as legendas ao seu atendimento.</p>
          </div>
          <div className="marquee" aria-label="Carrossel contínuo de artes para feed">
            <div className="track">
              {[...FEED_IMAGES, ...FEED_IMAGES].map((file, i) => (
                <div className="post" key={`post-${i}`}>
                  { }
                  <img src={`assets/${file}`} alt={`Arte para feed ${(i % FEED_IMAGES.length) + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
          <div className="center">
            <a href="#oferta" className="button">
              Escolher meu pacote
            </a>
          </div>
        </section>

        {/* O que você recebe */}
        <section className="section quick">
          <div className="wrap">
            <div className="section-head">
              <span className="label">O que você recebe</span>
              <h2>
                Escolha uma arte, <span className="accent">personalize e publique.</span>
              </h2>
            </div>
            <div className="quick-grid">
              <article>
                { }
                <img src="assets/v5-cover-1.webp" alt="Conteúdo Pronto para Nutricionistas: artes e legendas" loading="lazy" />
                <h3>Conteúdo Pronto para Nutricionistas</h3>
                <p>
                  Artes e legendas como ponto de partida. Personalize fotos, cores e textos no Canva; o Final libera mais
                  formatos.
                </p>
              </article>
              <article>
                { }
                <img src="assets/v5-cover-2.webp" alt="Stories Prontos para Nutricionistas: roteiros em PDF" loading="lazy" />
                <h3>Stories Prontos para Nutricionistas</h3>
                <p>Roteiros em PDF para você saber o que dizer e manter a conversa com seu público.</p>
              </article>
            </div>
          </div>
        </section>

        {/* 6 bônus */}
        <section className="section bonus">
          <div className="wrap">
            <div className="bonus-number" aria-hidden="true">
              6
            </div>
            <div className="bonus-intro">
              <span className="bonus-kicker">EXCLUSIVOS DO PACOTE FINAL</span>
              <h2>
                Mais <span className="accent">6 bônus</span> para você publicar com variedade e manter tudo organizado.
              </h2>
              <p>Além das artes, roteiros e demais formatos, o Final libera cada um destes materiais:</p>
            </div>
            <div className="bonus-stack">
              {BONUSES.map((bonus, i) => (
                <article className="bonus-row" key={bonus.title}>
                  { }
                  <img src={`assets/${bonus.img}`} alt={`Capa ${bonus.title}`} loading="lazy" />
                  <div className="bonus-row-copy">
                    <span>BÔNUS {String(i + 1).padStart(2, "0")}</span>
                    <h3>{bonus.title}</h3>
                    <p>{bonus.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Prova social — carrossel automático */}
        <section className="section proof">
          <div className="section-head wrap">
            <span className="label">Experiências de clientes</span>
            <h2>
              Quem recebeu <span className="accent">conta.</span>
            </h2>
          </div>
          <div className="marquee" aria-label="Comentários de clientes">
            <div className="proof-track">
              {[...COMMENTS, ...COMMENTS].map((c, i) => (
                <article className="proof-card" key={`proof-${i}`}>
                  <span className="stars" aria-label="Cinco estrelas">
                    ★★★★★
                  </span>
                  <blockquote>“{c.quote}”</blockquote>
                  <b>
                    {c.name} · {c.city}
                  </b>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Oferta */}
        <section className="section offer" id="oferta">
          <div className="wrap">
            <div className="section-head">
              <span className="label">Escolha o seu pacote</span>
              <h2>
                Comece com o essencial ou <span className="accent">leve a coleção completa.</span>
              </h2>
            </div>
            <div className="plans">
              <article className="plan">
                <span className="label">Essencial</span>
                <h3>Starter</h3>
                <p>Feed + roteiros de Stories para começar.</p>
                <div className="plan-art plan-art-v6">
                  { }
                  <img
                    src="assets/v6-starter.webp"
                    alt="Composição visual do pacote Starter para nutricionistas"
                    loading="lazy"
                  />
                </div>
                <ul>
                  <li>Artes para feed com legendas</li>
                  <li>Roteiros de Stories em PDF</li>
                  <li>Aulas para baixar e editar</li>
                </ul>
                <div className="price">R$ 19,90</div>
                <a href={CHECKOUT_LINKS.starter} className="button" onClick={handleStarterClick}>
                  Quero o Starter
                </a>
                <p className="micro">Pagamento único · Acesso digital</p>
              </article>

              <article className="plan featured">
                <span className="label">Mais escolhido</span>
                <h3>Final</h3>
                <p>Todos os formatos + 6 bônus.</p>
                <div className="plan-art plan-art-v6">
                  { }
                  <img src="assets/v6-final.webp" alt="Composição visual do pacote Final para nutricionistas" loading="lazy" />
                </div>
                <ul>
                  <li>Feed com legendas + roteiros de Stories</li>
                  <li>Carrosséis, destaques e arquivo de Reels</li>
                  <li>Aulas para baixar e editar</li>
                  <li>+45 artes para feed e carrossel</li>
                  <li>+20 artes para carrosséis</li>
                  <li>Calendário de Conteúdo</li>
                  <li>Organizador de Feed</li>
                  <li>Guia Paleta de Cores</li>
                  <li>eBook complementar</li>
                </ul>
                <div className="price">R$ 47,90</div>
                <a href={CHECKOUT_LINKS.final} className="button" onClick={handleFinalClick}>
                  Quero o Final
                </a>
                <p className="micro">Pagamento único · Acesso digital</p>
              </article>
            </div>
          </div>
        </section>

        {/* Garantia */}
        <section className="section guarantee">
          <div className="wrap">
            <div className="guarantee-card">
              <div className="seal" aria-hidden="true">
                <span>Garantia</span>
                <b>7</b>
                <span>dias</span>
              </div>
              <div>
                <span className="label">Compre com tranquilidade</span>
                <h2>
                  Garantia de <span className="accent">7 dias.</span>
                </h2>
                <p>
                  Conheça os materiais. Se não forem para você, solicite o reembolso em até 7 dias após a compra, conforme
                  as condições do checkout.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section faq">
          <div className="wrap">
            <div className="section-head">
              <h2>
                Dúvidas <span className="accent">frequentes.</span>
              </h2>
            </div>
            <div className="faq-list">
              <details>
                <summary>Posso personalizar os materiais?</summary>
                <p>Sim. Ajuste textos, identidade visual e abordagem antes de publicar.</p>
              </details>
              <details>
                <summary>O que muda do Starter para o Final?</summary>
                <p>O Final acrescenta carrosséis, destaques, arquivo de Reels e os seis bônus.</p>
              </details>
              <details>
                <summary>Os Stories são artes prontas?</summary>
                <p>São roteiros em PDF para orientar o que você vai falar e publicar.</p>
              </details>
              <details>
                <summary>Como recebo os arquivos?</summary>
                <p>O acesso é digital pela área de membros, com instruções para baixar e editar.</p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">Conteúdo Pronto para Nutricionistas · Todos os direitos reservados.</div>
      </footer>

      {/* Oferta de recuperação (upgrade) */}
      <dialog className="upgrade" ref={dialogRef} aria-label="Oferta de pacote completo" onClick={handleDialogBackdrop}>
        <button
          className="close"
          aria-label="Fechar"
          onClick={() => dialogRef.current?.close()}
        >
          ×
        </button>
        <div className="upgrade-inner">
          <div className="upgrade-art">
            { }
            <img src="assets/v6-final.webp" alt="Pacote Final" />
          </div>
          <div className="upgrade-copy">
            <span className="label">Antes de continuar</span>
            <h2>Quer levar o pacote completo?</h2>
            <p>Aproveite a condição especial para levar carrosséis, Reels, destaques e os seis bônus junto com o Starter.</p>
            <div className="upgrade-price">
              + R$ 15<small>Total do Final nesta opção: R$ 34,90.</small>
            </div>
            <a href={CHECKOUT_LINKS.upgrade} className="button" onClick={handleAcceptUpgrade}>
              Sim, quero o Final por R$ 34,90
            </a>
            <button className="text-button" onClick={handleKeepStarter}>
              Continuar com o Starter por R$ 19,90
            </button>
            <p className="pending" aria-live="polite">
              Pagamento único · Acesso digital
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}
