---
layout: default
title: Delete your Muuvie account - Mobyle
description: How to delete your Muuvie account and what is deleted.
permalink: /muuvie/delete-account/
extra_css:
  - /assets/muuvie/css/lang.css
extra_js:
  - /assets/muuvie/js/lang.js
---
<script>
  /* Pick the language before the first paint (lang.js does the rest). */
  (function () {
    var lang = null;
    try { lang = localStorage.getItem('muuvie.lang'); } catch (e) {}
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

<main class="policy" data-title-en="Delete your Muuvie account - Mobyle" data-title-pt="Excluir sua conta do Muuvie - Mobyle">
<div class="container" markdown="1">

<div class="lang-switch" role="group" aria-label="Language / Idioma">
  <button type="button" class="lang-switch__btn" data-set-lang="en" aria-pressed="true" lang="en" title="English">EN</button>
  <button type="button" class="lang-switch__btn" data-set-lang="pt" aria-pressed="false" lang="pt-BR" title="Português (Brasil)">PT-BR</button>
</div>

<div class="i18n" lang="en" markdown="1">

# Delete your Muuvie account

Muuvie, by Mobyle.

## In the app

1. Open **Profile** and tap the gear icon (**Settings**).
2. Tap **Delete account** at the bottom and confirm.
3. If you signed in with Apple, Apple asks you to confirm once more.

The account is deleted right away and you are signed out on this device.

## Without the app

If you can no longer open Muuvie, e-mail [support@mobyleapps.com](mailto:support@mobyleapps.com?subject=Delete%20my%20Muuvie%20account) from the e-mail of your Apple or Google account, with the subject "Delete my Muuvie account" and your @handle if you remember it. We confirm that the address is yours and delete the account within 7 days.

## What is deleted

Everything linked to your account: your profile, watch sessions, ratings and reviews, shelves and locadoras, diary, goals, bichinhos and missions, follows, loves, comments (and the comments others left on your sessions and ratings), conversations and messages, the marathons and film clubs you created, imports, notification settings and the devices registered for push.

## What is kept

- Reports you sent or received are kept without your identity, to protect other users.
- Copies in backups are overwritten within 30 days.

See the [Privacy Policy](/muuvie/privacy-policy/) for details.

</div>

<div class="i18n" lang="pt-BR" markdown="1">

# Excluir sua conta do Muuvie

Muuvie, da Mobyle.

## Pelo app

1. Abra o **Perfil** e toque na engrenagem (**Configurações**).
2. Toque em **Excluir conta**, no fim da lista, e confirme.
3. Se você entrou com a Apple, a Apple pede mais uma confirmação.

A conta é excluída na hora e você sai do app neste aparelho.

## Sem o app

Se não consegue mais abrir o Muuvie, mande um e-mail para [support@mobyleapps.com](mailto:support@mobyleapps.com?subject=Excluir%20minha%20conta%20do%20Muuvie) a partir do e-mail da sua conta Apple ou Google, com o assunto "Excluir minha conta do Muuvie" e seu @ se lembrar. Confirmamos que o endereço é seu e excluímos a conta em até 7 dias.

## O que é apagado

Tudo o que está ligado à sua conta: perfil, sessões, notas e resenhas, estantes e locadoras, Caderninho, metas, bichinhos e missões, quem você segue, amei, comentários (e os comentários que outras pessoas deixaram nas suas sessões e notas), conversas e mensagens, as maratonas e cineclubes que você criou, importações, preferências de notificação e os aparelhos registrados para notificações.

## O que é mantido

- Denúncias que você enviou ou recebeu são mantidas sem sua identificação, para proteger as outras pessoas.
- Cópias em backups são sobrescritas em até 30 dias.

Veja a [Política de Privacidade](/muuvie/privacy-policy/) para mais detalhes.

</div>

</div>
</main>
