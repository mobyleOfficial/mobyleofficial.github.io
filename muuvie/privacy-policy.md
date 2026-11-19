---
layout: default
title: Muuvie Privacy Policy - Mobyle
description: How Muuvie, the social movie diary, handles your data.
permalink: /muuvie/privacy-policy/
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

<main class="policy" data-title-en="Muuvie Privacy Policy - Mobyle" data-title-pt="Política de Privacidade do Muuvie - Mobyle">
<div class="container" markdown="1">

<div class="lang-switch" role="group" aria-label="Language / Idioma">
  <button type="button" class="lang-switch__btn" data-set-lang="en" aria-pressed="true" lang="en" title="English">EN</button>
  <button type="button" class="lang-switch__btn" data-set-lang="pt" aria-pressed="false" lang="pt-BR" title="Português (Brasil)">PT-BR</button>
</div>

<div class="i18n" lang="en" markdown="1">

# Muuvie Privacy Policy

**Effective date:** November 19, 2026<br>
**Developer:** Mobyle<br>
**Contact:** [support@mobyleapps.com](mailto:support@mobyleapps.com)

This policy covers the Muuvie app for Android and iOS and the Muuvie servers it talks to. Muuvie is a social movie diary: you log what you watch, rate it, organize shelves, join marathons and film clubs, follow people and talk to them. To do that, Muuvie keeps an account for you on our servers. This page explains what we keep, why, who sees it, and how to delete it.

## Your account

You sign in with **Apple** or **Google**; Muuvie has no passwords. From the provider we receive:

- a stable identifier of your Apple or Google account, so you can sign in again;
- your e-mail address (with Apple it may be a private relay address), when the provider shares it;
- your name and profile picture, when the provider shares them, only to suggest a nickname and an avatar.

We use the e-mail only to keep one account per person and to answer you; we do not send marketing e-mails.

## What you add to Muuvie

Muuvie stores what you create so it works on any device:

- **Profile:** nickname, @handle, display name, pronouns, bio, links, avatar and banner image addresses, accent color and highlights.
- **Movie activity:** watch sessions (date, how much you watched, where, emotions, comments, GIFs), ratings and reviews, "watching now", shelves and locadoras, saved shelves, yearly goals, your diary (Caderninho) entries and moods, the bichinhos and missions you unlock, and the movies you visit in the Movie Universe.
- **Social activity:** who you follow, the activities you love, comments, your participation in marathons (maratonas) and film clubs (CineClubes), and the private messages (Sussurros) you exchange with mutual followers.
- **Imports:** when you import your history from Filmow or Letterboxd, we read the export files you choose, or your Filmow profile using a login session you start in the app. The Filmow session cookies are used only for that reading and are never stored. We keep the imported history and a report of the import.
- **Reports and blocks:** the accounts you block and the reports you send.

## Who sees it

- **Other users** see your profile, and see your activities, shelves, sessions and ratings according to the visibility you choose for each one: everyone, mutual followers only, or only you.
- **Sussurros** are seen only by you and the other person. They are stored on our servers (they are not end-to-end encrypted) so they reach every device you use; we do not read them, except to review a report about them.
- **Blocked accounts** do not see your profile, activities, comments or conversation, and you do not see theirs.
- **Our team** reviews reports of accounts and content and may read the reported content to decide on them.

We do not sell your data and we do not show ads.

## Service providers

We share data only with the providers that run Muuvie for us, and only what each one needs:

- **Our cloud hosting provider**, where our servers and database run.
- **Google Firebase**: Firebase Cloud Messaging delivers push notifications (it receives a device token and the text of the notification); Firebase Analytics and Crashlytics tell us which screens are used, how the app performs and why it crashed, with your device model, system and app version, approximate country and your Muuvie account id. See the [Firebase privacy information](https://firebase.google.com/support/privacy).
- **Apple and Google**, for sign-in.
- **TMDB (The Movie Database)** supplies movie data and images. Our servers ask TMDB for movies; your personal data is not sent to TMDB. Images are loaded from TMDB's servers, which see your IP address.
- **Tenor (Google)** answers the GIF searches you make; our servers send it only the search text.

## Push notifications

If you allow them, Muuvie sends notifications about messages, new followers, loves, marathons, film clubs and imports. You can turn each kind off in Settings › Notifications, or turn them all off in your device's settings.

## How long we keep it

We keep your data while your account exists. When you delete your account, your profile and everything you created are deleted from our database right away, including the comments other people left on your sessions and ratings. Copies in backups are overwritten within 30 days. Reports you sent or received are kept without your identity, to protect other users. Analytics data is kept by Firebase for up to 14 months and crash reports for up to 90 days.

## Deleting your account

In the app: **Profile › Settings › Delete account**. If you signed in with Apple, Apple asks you to confirm, and we also revoke Muuvie's access to your Apple ID. If you can no longer use the app, see [how to delete your account](/muuvie/delete-account/).

## Your rights

Depending on where you live (for example under Brazil's LGPD or the EU's GDPR), you may have the right to access, correct, export or delete your data, and to object to or restrict its use. You can edit your profile and content in the app and delete your account at any time. For anything else, write to [support@mobyleapps.com](mailto:support@mobyleapps.com) and we will answer within 15 days.

We process your data to provide the service you asked for (your account and what you create), with your consent (push notifications), and for our legitimate interest in keeping Muuvie safe and working (reports, blocks, crash reports and usage statistics).

## Security

Connections between the app and our servers are encrypted (HTTPS). Sessions use short-lived tokens that are revoked when you log out or delete your account.

## Children

Muuvie is not directed at children under 13 and we do not knowingly collect their data. If you believe a child has an account, write to us and we will delete it.

## Changes to this policy

If this policy changes, we will update this page and its effective date, and tell you in the app when the change is significant.

## Contact

Questions about this policy: [support@mobyleapps.com](mailto:support@mobyleapps.com).

See also the [Terms of Use](/muuvie/terms/).

</div>

<div class="i18n" lang="pt-BR" markdown="1">

# Política de Privacidade do Muuvie

**Data de vigência:** 19 de novembro de 2026<br>
**Desenvolvedor:** Mobyle<br>
**Contato:** [support@mobyleapps.com](mailto:support@mobyleapps.com)

Esta política se aplica ao app Muuvie para Android e iOS e aos servidores do Muuvie com os quais ele se comunica. O Muuvie é um diário de filmes social: você registra o que assiste, avalia, organiza estantes, participa de maratonas e cineclubes, segue pessoas e conversa com elas. Para isso, o Muuvie mantém uma conta sua nos nossos servidores. Esta página explica o que guardamos, por quê, quem vê e como apagar.

## Sua conta

Você entra com a **Apple** ou o **Google**; o Muuvie não tem senhas. Do provedor recebemos:

- um identificador fixo da sua conta Apple ou Google, para você poder entrar de novo;
- seu e-mail (na Apple, pode ser um endereço de retransmissão privado), quando o provedor o compartilha;
- seu nome e foto de perfil, quando o provedor os compartilha, só para sugerir um apelido e um avatar.

Usamos o e-mail apenas para manter uma conta por pessoa e para responder você; não enviamos e-mails de marketing.

## O que você coloca no Muuvie

O Muuvie guarda o que você cria para funcionar em qualquer aparelho:

- **Perfil:** apelido, @, nome de exibição, pronomes, bio, links, endereços das imagens de avatar e capa, cor de destaque e destaques.
- **Atividade com filmes:** sessões (data, quanto assistiu, onde, emoções, comentários, GIFs), notas e resenhas, "assistindo agora", estantes e locadoras, estantes salvas, metas do ano, as páginas e humores do seu Caderninho, os bichinhos e missões que você desbloqueia e os filmes que visita no Universo de Filmes.
- **Atividade social:** quem você segue, as atividades que você amou, comentários, sua participação em maratonas e cineclubes e as mensagens privadas (Sussurros) que você troca com quem se segue mutuamente com você.
- **Importações:** quando você importa seu histórico do Filmow ou do Letterboxd, lemos os arquivos de exportação que você escolhe, ou seu perfil do Filmow usando uma sessão que você abre no app. Os cookies dessa sessão do Filmow são usados só nessa leitura e nunca são guardados. Guardamos o histórico importado e um relatório da importação.
- **Denúncias e bloqueios:** as contas que você bloqueia e as denúncias que você envia.

## Quem vê

- **Outras pessoas** veem seu perfil e veem suas atividades, estantes, sessões e notas conforme a visibilidade que você escolhe para cada uma: todo mundo, só quem se segue mutuamente com você, ou só você.
- **Sussurros** são vistos só por você e pela outra pessoa. Eles ficam guardados nos nossos servidores (não têm criptografia de ponta a ponta) para chegar a todos os seus aparelhos; não os lemos, a não ser para analisar uma denúncia sobre eles.
- **Contas bloqueadas** não veem seu perfil, atividades, comentários nem conversa, e você não vê os delas.
- **Nossa equipe** analisa denúncias de contas e conteúdos e pode ler o conteúdo denunciado para decidir sobre ele.

Não vendemos seus dados e não exibimos anúncios.

## Prestadores de serviço

Compartilhamos dados só com os prestadores que operam o Muuvie para nós, e só o que cada um precisa:

- **Nosso provedor de hospedagem em nuvem**, onde rodam nossos servidores e banco de dados.
- **Google Firebase**: o Firebase Cloud Messaging entrega as notificações (recebe um token do aparelho e o texto da notificação); o Firebase Analytics e o Crashlytics nos mostram quais telas são usadas, como o app se comporta e por que ele falhou, com o modelo do aparelho, versões do sistema e do app, país aproximado e o id da sua conta no Muuvie. Veja as [informações de privacidade do Firebase](https://firebase.google.com/support/privacy).
- **Apple e Google**, para o login.
- **TMDB (The Movie Database)** fornece os dados e imagens dos filmes. Nossos servidores consultam o TMDB; seus dados pessoais não são enviados a ele. As imagens são carregadas dos servidores do TMDB, que veem seu endereço IP.
- **Tenor (Google)** responde às buscas de GIF que você faz; nossos servidores enviam só o texto da busca.

## Notificações

Se você permitir, o Muuvie envia notificações sobre mensagens, novos seguidores, amei, maratonas, cineclubes e importações. Você pode desligar cada tipo em Configurações › Notificações, ou todas nas configurações do aparelho.

## Por quanto tempo guardamos

Guardamos seus dados enquanto sua conta existir. Quando você exclui a conta, seu perfil e tudo o que você criou são apagados do nosso banco de dados na hora, inclusive os comentários que outras pessoas deixaram nas suas sessões e notas. Cópias em backups são sobrescritas em até 30 dias. Denúncias que você enviou ou recebeu são mantidas sem sua identificação, para proteger as outras pessoas. O Firebase guarda os dados de uso por até 14 meses e os relatórios de falhas por até 90 dias.

## Excluir sua conta

No app: **Perfil › Configurações › Excluir conta**. Se você entrou com a Apple, a Apple pede sua confirmação e também revogamos o acesso do Muuvie ao seu ID Apple. Se não consegue mais usar o app, veja [como excluir sua conta](/muuvie/delete-account/).

## Seus direitos

Conforme a lei do lugar onde você vive (por exemplo, a LGPD no Brasil ou o GDPR na União Europeia), você pode ter o direito de acessar, corrigir, exportar ou excluir seus dados e de se opor ao uso deles ou limitá-lo. Você pode editar seu perfil e seu conteúdo no app e excluir sua conta a qualquer momento. Para qualquer outro pedido, escreva para [support@mobyleapps.com](mailto:support@mobyleapps.com); respondemos em até 15 dias.

Tratamos seus dados para prestar o serviço que você pediu (sua conta e o que você cria), com seu consentimento (notificações) e pelo nosso legítimo interesse em manter o Muuvie seguro e funcionando (denúncias, bloqueios, relatórios de falhas e estatísticas de uso).

## Segurança

A conexão entre o app e nossos servidores é criptografada (HTTPS). As sessões usam tokens de curta duração, revogados quando você sai ou exclui a conta.

## Crianças

O Muuvie não é direcionado a crianças menores de 13 anos e não coletamos intencionalmente dados delas. Se você acha que uma criança tem uma conta, escreva para nós e a excluiremos.

## Alterações nesta política

Se esta política mudar, atualizaremos esta página e a data de vigência, e avisaremos no app quando a mudança for importante.

## Contato

Dúvidas sobre esta política: [support@mobyleapps.com](mailto:support@mobyleapps.com).

Veja também os [Termos de Uso](/muuvie/terms/).

</div>

</div>
</main>
