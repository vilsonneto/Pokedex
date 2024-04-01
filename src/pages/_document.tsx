/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <title>Pokedex</title>
        <meta
          name="keywords"
          content="Pokémon, Pokedex, Next.js, Redux, PokéAPI"
        />
        <meta name="author" content="Vilson Padilha" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Aplicativo web para listar e visualizar informações detalhadas de Pokémons, construído com Next.js, Redux, e consumindo a API do PokéAPI."
        />
        <meta property="og:title" content="Pokedex" />
        <meta property="og:site_name" content="Pokedex" />
        <meta
          property="og:description"
          content="Aplicativo web dedicado a fornecer informações detalhadas sobre todos os Pokémon conhecidos, é o recurso definitivo para treinadores de Pokémon de todas as idades e níveis de experiência. Construído com Next.js, Redux, e consumindo a API do PokéAPI."
        />
        <meta
          property="og:url"
          content="https://vilsonneto-pokedex.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta
          name="google-site-verification"
          content="iUbHbHYvVfmHeW-nHauAxx4h65_l2nqLQeyKeewuRBY"
        />
        <link rel="canonical" href="https://vilsonneto-pokedex.vercel.app/" />
        <link rel="icon" href="/icon.png" type="image/png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
