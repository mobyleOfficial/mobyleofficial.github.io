---
layout: default
title: Nanquim Terms of Use - Mobyle
description: Terms of use for Nanquim, the open-source painting app for Android.
permalink: /nanquim/terms/
github_url: https://github.com/mobyleOfficial/Nanquim
extra_css:
  - /assets/nanquim/css/lang.css
extra_js:
  - /assets/nanquim/js/lang.js
---
<script>
  /* Pick the language before the first paint (lang.js does the rest). */
  (function () {
    var lang = null;
    try { lang = localStorage.getItem('nanquim.lang'); } catch (e) {}
    if (lang !== 'en' && lang !== 'pt') {
      var list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en'];
      lang = 'en';
      for (var i = 0; i < list.length; i++) {
        var code = String(list[i]).toLowerCase();
        if (code.indexOf('pt') === 0) { lang = 'pt'; break; }
        if (code.indexOf('en') === 0) break;
      }
    }
    if (lang === 'pt') { document.documentElement.setAttribute('data-lang', 'pt'); document.documentElement.lang = 'pt-BR'; }
  })();
</script>
<!-- Without JavaScript both languages show, one after the other, and the switch is hidden. -->
<noscript><style>.policy .i18n { display: block !important; } .lang-switch { display: none !important; }</style></noscript>

<main class="policy" data-title-en="Nanquim Terms of Use - Mobyle" data-title-pt="Termos de Uso do Nanquim - Mobyle">
<div class="container" markdown="1">

<div class="lang-switch" role="group" aria-label="Language / Idioma">
  <button type="button" class="lang-switch__btn" data-set-lang="en" aria-pressed="true" lang="en" title="English">EN</button>
  <button type="button" class="lang-switch__btn" data-set-lang="pt" aria-pressed="false" lang="pt-BR" title="Português (Brasil)">PT-BR</button>
</div>

<div class="i18n" lang="en" markdown="1">

# Nanquim Terms of Use

**Effective date:** November 12, 2026<br>
**Developer:** Mobyle<br>
**Contact:** [support@mobyleapps.com](mailto:support@mobyleapps.com)

These terms apply to the Nanquim app for Android distributed by Mobyle (for example on Google Play). By installing or using Nanquim you agree to them. If you do not agree, please do not use the app.

## The app

Nanquim is free. Its source code is published under the [MIT License](https://github.com/mobyleOfficial/Nanquim/blob/main/LICENSE), which governs what you may do with the code. These terms govern your use of the app as we distribute it.

## Your artworks are yours

Everything you create with Nanquim belongs to you. We claim no rights over your artworks, and we never receive them: they are stored only on your device.

Because of that, **you are responsible for keeping copies of your work.** Uninstalling the app, clearing its data or losing your device deletes your artworks. Export the ones you want to keep.

## Content you import

When you import images, brushes, textures, fonts, palettes or files from other apps, make sure you have the right to use them. Nanquim only reads them on your device and does not check their license.

## Ads

The gallery shows ads from third parties through Google AdMob. Advertisers are responsible for their ads and for what they offer; we do not endorse them. See the [Privacy Policy](/nanquim/privacy-policy/) for how ads use data.

## Name and icon

The Nanquim name, logo and app icon are not covered by the MIT License. Forks and modified versions distributed publicly must use a different name and icon, and must not suggest they are the official app.

## Feedback

If you send us suggestions or bug reports, we may use them to improve Nanquim without owing you anything. Reports made on GitHub are public.

## No warranty

Nanquim is provided "as is", without warranties of any kind, to the extent permitted by law. We work to keep it stable and to save your work automatically, but we cannot guarantee that it will be free of errors or that data will never be lost.

## Limitation of liability

To the extent permitted by law, Mobyle is not liable for indirect or consequential damages, or for loss of data, arising from the use of or inability to use the app. Nothing in these terms limits rights you have under consumer protection laws that cannot be waived.

## Changes

We may update these terms. When we do, we will update this page and its effective date. Continuing to use the app after a change means you accept the new terms.

## Law

These terms are governed by the laws of Brazil, without prejudice to the consumer protection laws of the country where you live.

## Contact

Questions about these terms: [support@mobyleapps.com](mailto:support@mobyleapps.com).

</div>

<div class="i18n" lang="pt-BR" markdown="1">

# Termos de Uso do Nanquim

**Data de vigência:** 12 de novembro de 2026<br>
**Desenvolvedor:** Mobyle<br>
**Contato:** [support@mobyleapps.com](mailto:support@mobyleapps.com)

Estes termos se aplicam ao app Nanquim para Android distribuído pela Mobyle (por exemplo, no Google Play). Ao instalar ou usar o Nanquim, você concorda com eles. Se não concordar, não use o app.

## O app

O Nanquim é gratuito. O código-fonte é publicado sob a [Licença MIT](https://github.com/mobyleOfficial/Nanquim/blob/main/LICENSE), que rege o que você pode fazer com o código. Estes termos regem o uso do app como nós o distribuímos.

## Suas artes são suas

Tudo o que você cria com o Nanquim pertence a você. Não reivindicamos nenhum direito sobre suas artes e nunca as recebemos: elas ficam guardadas apenas no seu aparelho.

Por isso, **você é responsável por manter cópias do seu trabalho.** Desinstalar o app, limpar os dados dele ou perder o aparelho apaga suas artes. Exporte as que quiser guardar.

## Conteúdo que você importa

Ao importar imagens, pincéis, texturas, fontes, paletas ou arquivos de outros apps, garanta que você tem o direito de usá-los. O Nanquim apenas os lê no seu aparelho e não verifica a licença deles.

## Anúncios

A galeria exibe anúncios de terceiros pelo Google AdMob. Os anunciantes são responsáveis pelos anúncios e pelo que oferecem; não os endossamos. Veja na [Política de Privacidade](/nanquim/privacy-policy/) como os anúncios usam dados.

## Nome e ícone

O nome Nanquim, o logotipo e o ícone do app não estão cobertos pela Licença MIT. Forks e versões modificadas distribuídas publicamente devem usar outro nome e outro ícone, e não podem sugerir que são o app oficial.

## Sugestões

Se você nos enviar sugestões ou relatos de erros, podemos usá-los para melhorar o Nanquim sem que isso gere qualquer obrigação. Relatos feitos no GitHub são públicos.

## Sem garantias

O Nanquim é fornecido "no estado em que se encontra", sem garantias de qualquer tipo, na medida permitida pela lei. Trabalhamos para mantê-lo estável e salvar seu trabalho automaticamente, mas não podemos garantir que ele não terá erros nem que dados nunca serão perdidos.

## Limitação de responsabilidade

Na medida permitida pela lei, a Mobyle não se responsabiliza por danos indiretos ou consequentes, nem por perda de dados, decorrentes do uso ou da impossibilidade de uso do app. Nada nestes termos limita direitos que você tenha pelo Código de Defesa do Consumidor ou por outras leis de proteção ao consumidor que não podem ser renunciados.

## Alterações

Podemos atualizar estes termos. Quando isso acontecer, atualizaremos esta página e a data de vigência. Continuar usando o app depois de uma alteração significa aceitar os novos termos.

## Legislação

Estes termos são regidos pelas leis do Brasil, sem prejuízo das leis de proteção ao consumidor do país onde você vive.

## Contato

Dúvidas sobre estes termos: [support@mobyleapps.com](mailto:support@mobyleapps.com).

</div>

</div>
</main>
