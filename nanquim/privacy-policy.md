---
layout: default
title: Nanquim Privacy Policy - Mobyle
description: How Nanquim, the open-source painting app for Android, handles your data.
permalink: /nanquim/privacy-policy/
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

<main class="policy" data-title-en="Nanquim Privacy Policy - Mobyle" data-title-pt="Política de Privacidade do Nanquim - Mobyle">
<div class="container" markdown="1">

<div class="lang-switch" role="group" aria-label="Language / Idioma">
  <button type="button" class="lang-switch__btn" data-set-lang="en" aria-pressed="true" lang="en" title="English">EN</button>
  <button type="button" class="lang-switch__btn" data-set-lang="pt" aria-pressed="false" lang="pt-BR" title="Português (Brasil)">PT-BR</button>
</div>

<div class="i18n" lang="en" markdown="1">

# Nanquim Privacy Policy

**Effective date:** November 12, 2026<br>
**Developer:** Mobyle<br>
**Contact:** [support@mobyleapps.com](mailto:support@mobyleapps.com)

This policy covers Nanquim for Android. In short: **your artworks never leave your device unless you share them.** Nanquim has no accounts and no cloud storage. It sends anonymous usage statistics and crash reports so we can fix problems (you can turn this off), and the gallery shows ads.

Nanquim is open source, so you can check everything described here in its [source code](https://github.com/mobyleOfficial/Nanquim).

## What stays on your device

Nanquim keeps everything you make on your device, and none of it is sent to us:

- **Your artworks:** the canvases, layers, animation frames and timelapse recordings, and their thumbnails.
- **What you import:** images, PSD, TIFF and `.procreate` files, brushes, stamps, textures, palettes and fonts. Nanquim only reads the files you pick in the system file picker or share with it.
- **Settings:** your preferences, gestures, keyboard shortcuts, macros, brush and palette libraries.

Uninstalling Nanquim deletes all of this. Export or share the artworks you want to keep first.

## Usage statistics and crash reports

Nanquim uses **Google Firebase Analytics** and **Firebase Crashlytics**. They collect:

- **Which screens you open and how the app performs:** how long the app takes to start, to open, close and save an artwork, and whether a save succeeded.
- **Technical details of the open artwork:** its size in pixels, number of layers and color depth. Never its content, its name or any text in it.
- **Device information:** device model, Android version, app version, graphics renderer (OpenGL ES or Vulkan), language and approximate country (from the IP address).
- **Crash reports:** when the app crashes or the drawing engine fails, a technical report of what went wrong, with the details above.
- **An app instance ID:** a random identifier created by Firebase. It is not your name, email or phone number, and it is reset when you reinstall the app.

We use this only to find and fix bugs and to make the app faster. Google processes it under the [Firebase privacy information](https://firebase.google.com/support/privacy) and the [Google Privacy Policy](https://policies.google.com/privacy). Analytics data is kept for up to 14 months and crash reports for up to 90 days.

**Turning it off:** Settings › Privacy › *Share usage statistics and crash reports*. When it is off, nothing is sent.

## Ads

The gallery screen shows ads served by **Google AdMob**. Ads never appear while you draw.

To show ads and measure them, AdMob receives your device's **advertising ID**, IP address and device information. In regions where the law requires it (such as the European Economic Area and the UK), Nanquim asks for your consent before showing personalized ads, and you can change your choice at any time in Settings › Privacy › *Ad choices*. Elsewhere you can opt out of personalized ads, or reset or delete your advertising ID, in Android's settings (Settings › Privacy › Ads, or Google › Ads).

Google's use of this data is described in [How Google uses information from sites or apps that use its services](https://policies.google.com/technologies/partner-sites).

## Permissions

- **Camera:** only used to make a color palette from what your camera sees, when you choose to. The frames are processed on your device and are neither saved nor sent.
- **Notifications:** to show the progress of long exports (such as a timelapse video).
- **Files:** Nanquim has no access to your files. It only opens what you pick in the system file picker, and its gallery appears in the picker so other apps can open your artworks when you choose them.

## What you choose to share

- **Sharing and exporting:** artworks, brushes and palettes go only where you send them through Android's share sheet or file picker.
- **Diagnostics:** the Diagnostics screen can export a technical report (device, graphics, stylus, latency). It is only sent if you share it.
- **Bug reports and suggestions:** if you report through GitHub, your report is public on GitHub and covered by [GitHub's privacy statement](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement). If you write to us by email, we use your message and address only to answer you.

## Your rights

Depending on where you live (for example under Brazil's LGPD or the EU's GDPR), you may have the right to access, correct or delete data about you, and to object to its use. Because Nanquim has no accounts, we cannot link usage statistics to you. Turning statistics off stops new data from being sent; to ask for anything else, write to [support@mobyleapps.com](mailto:support@mobyleapps.com).

## Children

Nanquim is not directed at children under 13 and does not knowingly collect personal information from them.

## Changes to this policy

If this policy changes, we will update this page and its effective date.

## Contact

Questions about this policy: [support@mobyleapps.com](mailto:support@mobyleapps.com).

See also the [Terms of Use](/nanquim/terms/).

</div>

<div class="i18n" lang="pt-BR" markdown="1">

# Política de Privacidade do Nanquim

**Data de vigência:** 12 de novembro de 2026<br>
**Desenvolvedor:** Mobyle<br>
**Contato:** [support@mobyleapps.com](mailto:support@mobyleapps.com)

Esta política se aplica ao Nanquim para Android. Em resumo: **suas artes nunca saem do seu aparelho, a não ser que você as compartilhe.** O Nanquim não tem contas nem armazenamento na nuvem. Ele envia estatísticas de uso anônimas e relatórios de falhas para corrigirmos problemas (você pode desativar isso), e a galeria exibe anúncios.

O Nanquim é de código aberto: você pode conferir tudo o que está descrito aqui no [código-fonte](https://github.com/mobyleOfficial/Nanquim).

## O que fica no seu aparelho

Tudo o que você cria no Nanquim fica no seu aparelho, e nada disso é enviado para nós:

- **Suas artes:** as telas, camadas, quadros de animação e gravações de timelapse, e suas miniaturas.
- **O que você importa:** imagens, arquivos PSD, TIFF e `.procreate`, pincéis, carimbos, texturas, paletas e fontes. O Nanquim só lê os arquivos que você escolhe no seletor de arquivos do sistema ou compartilha com ele.
- **Configurações:** suas preferências, gestos, atalhos de teclado, macros e bibliotecas de pincéis e paletas.

Desinstalar o Nanquim apaga tudo isso. Exporte ou compartilhe antes as artes que quiser guardar.

## Estatísticas de uso e relatórios de falhas

O Nanquim usa o **Google Firebase Analytics** e o **Firebase Crashlytics**. Eles coletam:

- **Quais telas você abre e o desempenho do app:** quanto tempo o app leva para iniciar e para abrir, fechar e salvar uma arte, e se o salvamento deu certo.
- **Detalhes técnicos da arte aberta:** tamanho em pixels, número de camadas e profundidade de cor. Nunca o conteúdo, o nome ou qualquer texto dela.
- **Informações do aparelho:** modelo, versão do Android, versão do app, renderizador gráfico (OpenGL ES ou Vulkan), idioma e país aproximado (pelo endereço IP).
- **Relatórios de falhas:** quando o app fecha sozinho ou o motor de desenho falha, um relatório técnico do que deu errado, com os detalhes acima.
- **Um identificador de instalação:** um código aleatório criado pelo Firebase. Não é seu nome, e-mail nem telefone, e muda quando você reinstala o app.

Usamos esses dados apenas para encontrar e corrigir erros e deixar o app mais rápido. O Google os trata conforme as [informações de privacidade do Firebase](https://firebase.google.com/support/privacy) e a [Política de Privacidade do Google](https://policies.google.com/privacy?hl=pt-BR). Os dados de uso ficam guardados por até 14 meses e os relatórios de falhas por até 90 dias.

**Como desativar:** Configurações › Privacidade › *Compartilhar estatísticas de uso e relatórios de falhas*. Desativado, nada é enviado.

## Anúncios

A tela da galeria exibe anúncios fornecidos pelo **Google AdMob**. Os anúncios nunca aparecem enquanto você desenha.

Para exibir e medir os anúncios, o AdMob recebe o **ID de publicidade** do aparelho, o endereço IP e informações do aparelho. Nas regiões em que a lei exige (como o Espaço Econômico Europeu e o Reino Unido), o Nanquim pede seu consentimento antes de exibir anúncios personalizados, e você pode mudar sua escolha a qualquer momento em Configurações › Privacidade › *Opções de anúncios*. Nas demais regiões, você pode desativar os anúncios personalizados ou redefinir ou excluir seu ID de publicidade nas configurações do Android (Configurações › Privacidade › Anúncios, ou Google › Anúncios).

O uso desses dados pelo Google está descrito em [Como o Google usa informações de sites ou apps que utilizam nossos serviços](https://policies.google.com/technologies/partner-sites?hl=pt-BR).

## Permissões

- **Câmera:** usada apenas para criar uma paleta de cores a partir do que a câmera vê, quando você escolhe fazer isso. As imagens são processadas no aparelho e não são salvas nem enviadas.
- **Notificações:** para mostrar o andamento de exportações longas (como um vídeo de timelapse).
- **Arquivos:** o Nanquim não tem acesso aos seus arquivos. Ele só abre o que você escolhe no seletor de arquivos do sistema, e a galeria dele aparece no seletor para que outros apps possam abrir suas artes quando você as escolhe.

## O que você escolhe compartilhar

- **Compartilhar e exportar:** artes, pincéis e paletas vão apenas para onde você os envia, pelo menu de compartilhamento ou pelo seletor de arquivos do Android.
- **Diagnóstico:** a tela de Diagnóstico pode exportar um relatório técnico (aparelho, gráficos, caneta, latência). Ele só é enviado se você o compartilhar.
- **Relatos de erros e sugestões:** se você relatar pelo GitHub, seu relato fica público no GitHub e é regido pela [declaração de privacidade do GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement). Se você nos escrever por e-mail, usamos sua mensagem e seu endereço apenas para responder.

## Seus direitos

Conforme a lei do lugar onde você vive (por exemplo, a LGPD no Brasil ou o GDPR na União Europeia), você pode ter o direito de acessar, corrigir ou excluir dados sobre você e de se opor ao uso deles. Como o Nanquim não tem contas, não conseguimos associar as estatísticas de uso a você. Desativar as estatísticas impede o envio de novos dados; para qualquer outro pedido, escreva para [support@mobyleapps.com](mailto:support@mobyleapps.com).

## Crianças

O Nanquim não é direcionado a crianças menores de 13 anos e não coleta intencionalmente informações pessoais delas.

## Alterações nesta política

Se esta política mudar, atualizaremos esta página e a data de vigência.

## Contato

Dúvidas sobre esta política: [support@mobyleapps.com](mailto:support@mobyleapps.com).

Veja também os [Termos de Uso](/nanquim/terms/).

</div>

</div>
</main>
