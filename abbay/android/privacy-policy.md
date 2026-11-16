---
layout: default
title: Abbay for Android Privacy Policy - Mobyle
permalink: /abbay/android/privacy-policy/
github_url: https://github.com/mobyleOfficial/AbbayAndroid
extra_css:
  - /assets/abbay/css/lang.css
extra_js:
  - /assets/abbay/js/lang.js
---
<script>
  /* Pick the language before the first paint, as on the landing page (lang.js does the rest). */
  (function () {
    var lang = null;
    try { lang = localStorage.getItem('abbay.lang'); } catch (e) {}
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

<main class="policy" data-title-en="Abbay for Android Privacy Policy - Mobyle" data-title-pt="Política de Privacidade do Abbay para Android - Mobyle">
<div class="container" markdown="1">

<div class="lang-switch" role="group" aria-label="Language / Idioma">
  <button type="button" class="lang-switch__btn" data-set-lang="en" aria-pressed="true" lang="en" title="English">EN</button>
  <button type="button" class="lang-switch__btn" data-set-lang="pt" aria-pressed="false" lang="pt-BR" title="Português (Brasil)">PT-BR</button>
</div>

<div class="i18n" lang="en" markdown="1">

# Abbay for Android Privacy Policy

**Effective date:** November 16, 2026<br>
**Developer:** Mobyle<br>
**Contact:** [support@mobyleapps.com](mailto:support@mobyleapps.com)

This policy covers Abbay for Android, including Android Auto, its widgets and its Quick Settings tile. The iPhone app has [its own policy]({{ '/abbay/privacy-policy/' | relative_url }}).

In short: Abbay has **no accounts, no ads and no advertising ID**, and your books stay on your device. The only data that reaches us is **anonymous crash reports and usage statistics**, which you can turn off at any time in **Settings → Privacy**.

## What stays on your device

Abbay keeps everything it needs on your phone, and none of it is sent to us:

- **Your library:** the folders you choose, the books in them, their titles, chapters and covers.
- **Your listening:** how far you have listened, bookmarks, notes, your queue, listening history and statistics.
- **Settings:** your preferences, equalizer presets and audio effects.
- **Books you import:** Abbay plays files where they are, through the folder access you grant it. It does not upload or copy them anywhere.
- **Read-along text:** text made from a book's audio is saved on your device for that book.

Deleting Abbay deletes all of this, except the files described in the next section.

## Files Abbay writes in your folders

- **Progress in folders:** while *Save progress in book folders* is on (it is by default), Abbay saves each book's progress and bookmarks in a hidden `.abbay` folder next to the book, so they come back after a reinstall or move with the book to another device. If that folder is synced by a cloud service (such as Google Drive), the file is synced with it under that service's policy. You can turn this off in Settings.
- **Backups and converted files:** when you export a backup or convert an audiobook, Abbay writes the file only where you choose.

## Android backup

Your library database and settings are included in Android's own backup and device-to-device transfer, which are run by Google under your Google account, so they can be restored on a new phone. Your Audiobookshelf sign-in is left out of backups. You can turn off Android backup in your phone's settings.

## Crash reports and usage statistics

Abbay uses **Firebase Crashlytics** and **Google Analytics for Firebase**, services of Google, to find bugs and learn which parts of the app are used.

- **What is sent:** crash reports (where in the code the app failed), device model, Android version, app version, language, and automatic usage events such as app opens, session length and app updates. Google identifies your installation with a random ID made for Firebase, and works out your approximate country or region from your IP address.
- **What is never sent:** file names, book titles, your library, what you listen to, your search terms, anything you type, or your advertising ID. Abbay removes Android's advertising-ID permission and turns off ad personalization signals.
- **Your choice:** this is on by default. Turn off *Send crash reports and usage statistics* in **Settings → Privacy** and Abbay stops sending anything to Firebase.
- Google processes this data under the [Firebase privacy information](https://firebase.google.com/support/privacy) and [Google's Privacy Policy](https://policies.google.com/privacy). Crash reports are kept for 90 days.

## Online sources

Abbay only goes online for features you use:

- **LibriVox and the Internet Archive:** when you browse, search, stream or download free public-domain audiobooks, Abbay contacts **librivox.org** and **archive.org** with only what is needed: your search terms, the book you picked, its cover and audio files. Their own policies apply, including the [Internet Archive's terms and privacy policy](https://archive.org/about/terms.php).
- **Audiobookshelf:** if you sign in to an Audiobookshelf server, Abbay talks only to the server address you enter. Your password is sent to that server to sign in and is never stored; the server's sign-in tokens are kept in the app's private storage, until you sign out. The server's owner handles your data there.
- **Read-along speech models:** the first time read-along is used in a language, Abbay downloads that language's speech model (30–50 MB) from **alphacephei.com**, the maker of the open-source Vosk engine. The download contains nothing about you or your books.
- **Finding a cover:** if you choose to search the web for a cover, Abbay opens Google Image Search in your browser with the book's title. Google's policy applies to that search.

As with any website, these services receive your device's IP address and standard request information. Abbay adds no identifiers and sends no listening history.

## Read-along

Read-along shows the audiobook's text as it plays. If the book's EPUB is in its folder, or you pick one, the text comes from the EPUB. Otherwise the text is made **on your device** by speech recognition from the audiobook's audio. The audio and the text never leave your device. Abbay never uses your microphone and does not ask for microphone permission.

## Casting, Android Auto and other devices

- **Chromecast and Cast devices:** when you cast, Abbay streams the book's audio from your phone over your local network to the device you pick, along with the title and cover to display.
- **Android Auto:** your library and the book playing are shown on your car's screen through Android Auto.
- **Widgets, the Quick Settings tile and notifications** show the book playing on your phone.
- **Motion features:** shake to extend the sleep timer, face-down to pause and flip to rewind read your phone's motion sensors on your device only. Nothing is recorded or sent.

## Permissions

Abbay uses notification permission (to show playback and download controls) and uses Internet access for the online sources above. It does not ask for your location, contacts, camera or microphone.

## Children

Abbay is not directed at children and has no accounts or profiles. The statistics above are not used to identify anyone.

## Your rights

Most of your data never leaves your device, so you control it directly: delete books or clear statistics in the app, or uninstall Abbay. You can stop crash reports and usage statistics at any time in Settings. For any request about data held by Firebase, including under the LGPD or the GDPR, write to us.

## Changes to this policy

If this policy changes, we will update this page and its effective date.

## Contact

Questions about this policy: [support@mobyleapps.com](mailto:support@mobyleapps.com).

</div>

<div class="i18n" lang="pt-BR" markdown="1">

# Política de Privacidade do Abbay para Android

**Data de vigência:** 16 de novembro de 2026<br>
**Desenvolvedor:** Mobyle<br>
**Contato:** [support@mobyleapps.com](mailto:support@mobyleapps.com)

Esta política se aplica ao Abbay para Android, incluindo o Android Auto, os widgets e o bloco de Configurações rápidas. O app para iPhone tem [a sua própria política]({{ '/abbay/privacy-policy/' | relative_url }}).

Em resumo: o Abbay **não tem contas, anúncios nem ID de publicidade**, e os seus livros ficam no seu aparelho. Os únicos dados que chegam até nós são **relatórios de falhas e estatísticas de uso anônimos**, que você pode desativar a qualquer momento em **Configurações → Privacidade**.

## O que fica no seu aparelho

Tudo o que o Abbay precisa fica no seu celular, e nada disso é enviado para nós:

- **Sua biblioteca:** as pastas que você escolhe, os livros nelas, seus títulos, capítulos e capas.
- **Sua escuta:** até onde você ouviu, marcadores, anotações, sua fila, histórico de escuta e estatísticas.
- **Configurações:** suas preferências, predefinições de equalizador e efeitos de áudio.
- **Livros importados:** o Abbay reproduz os arquivos onde eles estão, pelo acesso à pasta que você concede. Ele não envia nem copia esses arquivos para lugar nenhum.
- **Texto da leitura acompanhada:** o texto gerado a partir do áudio de um livro fica salvo no seu aparelho, para aquele livro.

Desinstalar o Abbay apaga tudo isso, exceto os arquivos descritos na próxima seção.

## Arquivos que o Abbay grava nas suas pastas

- **Progresso nas pastas:** enquanto *Salvar o progresso nas pastas dos livros* estiver ativado (vem ativado), o Abbay salva o progresso e os marcadores de cada livro em uma pasta oculta `.abbay` ao lado do livro, para que sobrevivam a uma reinstalação ou acompanhem o livro em outro aparelho. Se essa pasta for sincronizada por um serviço de nuvem (como o Google Drive), o arquivo é sincronizado junto, conforme a política desse serviço. Você pode desativar isso nas Configurações.
- **Backups e arquivos convertidos:** quando você exporta um backup ou converte um audiolivro, o Abbay grava o arquivo somente onde você escolher.

## Backup do Android

O banco de dados da sua biblioteca e as configurações fazem parte do backup e da transferência entre aparelhos do próprio Android, feitos pelo Google na sua conta Google, para que possam ser restaurados em um celular novo. O login no Audiobookshelf fica fora dos backups. Você pode desativar o backup do Android nas configurações do celular.

## Relatórios de falhas e estatísticas de uso

O Abbay usa o **Firebase Crashlytics** e o **Google Analytics para Firebase**, serviços do Google, para encontrar erros e saber quais partes do app são usadas.

- **O que é enviado:** relatórios de falhas (o ponto do código em que o app falhou), modelo do aparelho, versão do Android, versão do app, idioma e eventos de uso automáticos, como aberturas do app, duração das sessões e atualizações. O Google identifica a sua instalação com um ID aleatório criado para o Firebase e estima o seu país ou região aproximados a partir do endereço IP.
- **O que nunca é enviado:** nomes de arquivos, títulos de livros, sua biblioteca, o que você ouve, seus termos de busca, qualquer coisa que você digite ou o seu ID de publicidade. O Abbay remove a permissão de ID de publicidade do Android e desativa os sinais de personalização de anúncios.
- **Sua escolha:** isso vem ativado. Desative *Enviar relatórios de falhas e estatísticas de uso* em **Configurações → Privacidade** e o Abbay deixa de enviar qualquer coisa ao Firebase.
- O Google trata esses dados conforme as [informações de privacidade do Firebase](https://firebase.google.com/support/privacy) e a [Política de Privacidade do Google](https://policies.google.com/privacy?hl=pt-BR). Os relatórios de falhas são guardados por 90 dias.

## Fontes on-line

O Abbay só acessa a internet para os recursos que você usa:

- **LibriVox e Internet Archive:** quando você navega, busca, ouve ou baixa audiolivros gratuitos de domínio público, o Abbay acessa **librivox.org** e **archive.org** apenas com o necessário: os termos da busca, o livro escolhido, a capa e os arquivos de áudio. Valem as políticas deles, incluindo os [termos e a política de privacidade do Internet Archive](https://archive.org/about/terms.php).
- **Audiobookshelf:** se você entrar em um servidor Audiobookshelf, o Abbay se comunica apenas com o endereço de servidor que você digitar. Sua senha é enviada a esse servidor para fazer login e nunca é guardada; os tokens de login do servidor ficam no armazenamento privado do app até você sair. O dono do servidor é quem trata os seus dados lá.
- **Modelos de fala da leitura acompanhada:** na primeira vez que a leitura acompanhada é usada em um idioma, o Abbay baixa o modelo de fala desse idioma (30–50 MB) de **alphacephei.com**, criadora do mecanismo de código aberto Vosk. O download não contém nada sobre você ou seus livros.
- **Buscar uma capa:** se você escolher buscar uma capa na web, o Abbay abre a Pesquisa de Imagens do Google no seu navegador com o título do livro. Vale a política do Google para essa busca.

Como acontece com qualquer site, esses serviços recebem o endereço IP do seu aparelho e as informações padrão da solicitação. O Abbay não adiciona identificadores nem envia seu histórico de escuta.

## Leitura acompanhada

A leitura acompanhada mostra o texto do audiolivro enquanto ele toca. Se o EPUB do livro estiver na pasta dele, ou se você escolher um, o texto vem do EPUB. Caso contrário, o texto é gerado **no seu aparelho** por reconhecimento de fala, a partir do áudio do audiolivro. O áudio e o texto nunca saem do seu aparelho. O Abbay nunca usa o seu microfone e não pede permissão de microfone.

## Transmissão, Android Auto e outros dispositivos

- **Chromecast e dispositivos Cast:** quando você transmite, o Abbay envia o áudio do livro do seu celular pela sua rede local para o dispositivo escolhido, junto com o título e a capa para exibir.
- **Android Auto:** sua biblioteca e o livro que está tocando aparecem na tela do carro pelo Android Auto.
- **Widgets, o bloco de Configurações rápidas e as notificações** mostram o livro que está tocando no seu celular.
- **Recursos de movimento:** sacudir para estender o timer, virar para baixo para pausar e virar para voltar leem os sensores de movimento do celular apenas no aparelho. Nada é gravado nem enviado.

## Permissões

O Abbay usa a permissão de notificações (para mostrar os controles de reprodução e de downloads) e usa o acesso à internet para as fontes on-line acima. Ele não pede sua localização, contatos, câmera nem microfone.

## Crianças

O Abbay não é direcionado a crianças e não tem contas nem perfis. As estatísticas acima não são usadas para identificar ninguém.

## Seus direitos

A maior parte dos seus dados nunca sai do seu aparelho, então você os controla diretamente: apague livros ou limpe as estatísticas no app ou desinstale o Abbay. Você pode interromper os relatórios de falhas e as estatísticas de uso a qualquer momento nas Configurações. Para qualquer solicitação sobre dados mantidos pelo Firebase, inclusive com base na LGPD ou no GDPR, escreva para nós.

## Alterações nesta política

Se esta política mudar, atualizaremos esta página e a data de vigência.

## Contato

Dúvidas sobre esta política: [support@mobyleapps.com](mailto:support@mobyleapps.com).

</div>

</div>
</main>
