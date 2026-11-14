---
layout: default
title: Pomodogo Privacy Policy - Mobyle
description: How Pomodogo, the focus timer with a dog that keeps you company, handles your data.
permalink: /pomodogo/privacy-policy/
extra_css:
  - /assets/pomodogo/css/lang.css
extra_js:
  - /assets/pomodogo/js/lang.js
---
<script>
  /* Pick the language before the first paint (lang.js does the rest). */
  (function () {
    var lang = null;
    try { lang = localStorage.getItem('pomodogo.lang'); } catch (e) {}
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

<main class="policy" data-title-en="Pomodogo Privacy Policy - Mobyle" data-title-pt="Política de Privacidade do Pomodogo - Mobyle">
<div class="container" markdown="1">

<div class="lang-switch" role="group" aria-label="Language / Idioma">
  <button type="button" class="lang-switch__btn" data-set-lang="en" aria-pressed="true" lang="en" title="English">EN</button>
  <button type="button" class="lang-switch__btn" data-set-lang="pt" aria-pressed="false" lang="pt-BR" title="Português (Brasil)">PT-BR</button>
</div>

<div class="i18n" lang="en" markdown="1">

# Pomodogo Privacy Policy

**Effective date:** November 14, 2026<br>
**Developer:** Mobyle<br>
**Contact:** [support@mobyleapps.com](mailto:support@mobyleapps.com)

This policy covers Pomodogo for Android and its Wear OS companion. In short: **Pomodogo has no accounts and no server of its own.** What you do in the app stays on your device, unless you turn on the backup to your own Google Drive. It sends anonymous usage statistics and crash reports so we can fix problems (you can turn this off), and it shows no ads.

## What stays on your device

Pomodogo keeps the following on your device, and none of it is sent to us:

- **Your focus history:** sessions, durations, tags, notes, the timeline and its stickers, and your statistics.
- **Your tasks** and the tags you create.
- **Your room and dogs:** bones (the in-app currency), items, gifts, achievements, the dogs' names and the lines you write for them.
- **Your custom sounds:** recordings made with the microphone or audio taken from files you pick.
- **Settings:** timers, blocking mode and allowed apps, ambient sounds and other preferences.

Uninstalling Pomodogo deletes all of this, unless you use the cloud backup described below.

## Cloud backup (Google Drive)

The backup is **off by default**. When you turn it on in Settings › Cloud backup, Pomodogo asks for access to your Google account and saves **one file** with your history, tasks, tags, bones, items, achievements, lines, custom sounds and settings in the **hidden app folder of your own Google Drive**. It syncs once a day at the time you choose, and when you tap *Sync now*.

- Pomodogo only asks for the `drive.appdata` permission: it can see only its own file, **never your other files in Drive**.
- The file goes directly from your device to your Google Drive. Mobyle does not receive it and cannot read it.
- Google stores it under the [Google Privacy Policy](https://policies.google.com/privacy). The file counts towards your Drive storage.
- To stop syncing, turn the backup off. To delete the file, go to Google Drive on the web › Settings › Manage apps › Pomodogo › *Delete hidden app data*, or remove Pomodogo's access in your [Google account](https://myaccount.google.com/connections).

Pomodogo's use and transfer of information received from Google APIs adheres to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements. That data is used only to back up and restore your Pomodogo data, is never used for ads, and is never sold or shared with anyone.

## Usage statistics and crash reports

Pomodogo uses **Google Firebase Analytics** and **Firebase Crashlytics**. They collect:

- **How the app is used:** when the first-run tour is finished; when a focus session starts, ends or fails, with its mode (pomodoro or stopwatch), length in minutes and blocking mode; when the Pro screen is opened and the result of a Pro purchase; and in-app shop purchases made with bones.
- **Two settings:** whether you are Pro and which blocking mode you use.
- **Device information:** device model, Android version, app version, language and approximate country (from the IP address).
- **Crash reports:** when the app crashes or an error happens (for example a failed backup), a technical report of what went wrong, with the details above.
- **An app instance ID:** a random identifier created by Firebase. It is not your name, email or phone number, and it is reset when you reinstall the app.

**Nothing you write is ever sent:** task names, notes, tags, the dogs' names and their lines stay on your device.

We use this only to find and fix bugs and to improve the app. Google processes it under the [Firebase privacy information](https://firebase.google.com/support/privacy) and the [Google Privacy Policy](https://policies.google.com/privacy). Analytics data is kept for up to 14 months and crash reports for up to 90 days.

**Turning it off:** Settings › Privacy › *Send usage data and errors*. When it is off, nothing is sent.

## Purchases (Pomodogo Pro)

Pro is sold through **Google Play**, which handles the payment. Mobyle never sees your card or payment details. To confirm what you bought and restore it on another device, Pomodogo uses **RevenueCat**, which receives the purchase receipt from Google Play, a random app user ID, the app version, device information and IP address. RevenueCat processes it under its [privacy policy](https://www.revenuecat.com/privacy/).

## Permissions

Every permission below is optional and asked only when you turn on the feature that needs it.

- **Accessibility service (app blocking):** in the Allow list and Strict modes, Pomodogo uses Android's accessibility service only to know **which app is in front during a focus session**, so it can cover the apps you blocked. It reads only the name of the app package that opens, never what is on the screen or what you type (it is declared without access to window content). Nothing it sees is stored or sent, and it does nothing outside a focus session. To build the list of allowed apps, Pomodogo reads the list of apps installed on your device; that list stays on your device.
- **Microphone:** used only (1) to record a custom sound when you tap record, and (2) for the Pro voice feature, which listens for your dog's name during a focus session while it is turned on. Recordings stay on your device (and in your backup, if you use it). Voice recognition uses your device's speech recognition service and prefers to run on the device; depending on your device and language, that service (usually Google's) may process the audio under its own privacy policy. Pomodogo keeps only whether the name was heard: neither the audio nor the transcript is stored or sent.
- **Calendar:** if you choose a calendar, each completed focus session is added to it as an event. Pomodogo reads only the list of your calendars to let you choose, never your events. Events added to a calendar synced with an account (such as Google Calendar) are synced by that account.
- **Health Connect (mindfulness):** if you turn it on, Pomodogo **writes** your focus sessions to Health Connect as mindfulness sessions (start and end time). It does not read any health data. This data is not sent to us, not used for ads and not shared with anyone. You can revoke access at any time in Health Connect.
- **Notifications, alarms and the lock screen:** to show the timer while you are away from the app, to ring when a session ends on time, and to show your dog and the countdown over the lock screen during focus.
- **Wear OS:** the watch app talks to the phone app through Google Play services to start, follow and cancel sessions. It only sends the timer's state and your commands.
- **Photos and files:** Pomodogo has no access to your photos or files. It opens only the audio or video file you pick in the system file picker (to make a custom sound), and saves images you choose to save (such as a shared achievement) to Pictures › Pomodogo.

## What you choose to share

- **Sharing achievements:** images and videos go only where you send them through Android's share sheet.
- **Emails to us:** if you write to us, we use your message and address only to answer you.

## Your rights

Depending on where you live (for example under Brazil's LGPD or the EU's GDPR), you may have the right to access, correct or delete data about you, and to object to its use. Because Pomodogo has no accounts, we cannot link usage statistics to you, and we have no copy of your app data: it is on your device and, if you turned the backup on, in your own Google Drive, where you can delete it as described above. Turning statistics off stops new data from being sent; to ask for anything else, write to [support@mobyleapps.com](mailto:support@mobyleapps.com).

## Children

Pomodogo is not directed at children under 13 and does not knowingly collect personal information from them.

## Changes to this policy

If this policy changes, we will update this page and its effective date.

## Contact

Questions about this policy: [support@mobyleapps.com](mailto:support@mobyleapps.com).

See also the [Terms of Use](/pomodogo/terms/).

</div>

<div class="i18n" lang="pt-BR" markdown="1">

# Política de Privacidade do Pomodogo

**Data de vigência:** 14 de novembro de 2026<br>
**Desenvolvedor:** Mobyle<br>
**Contato:** [support@mobyleapps.com](mailto:support@mobyleapps.com)

Esta política se aplica ao Pomodogo para Android e ao app complementar para Wear OS. Em resumo: **o Pomodogo não tem contas nem servidor próprio.** O que você faz no app fica no seu aparelho, a não ser que você ative o backup no seu próprio Google Drive. Ele envia estatísticas de uso anônimas e relatórios de falhas para corrigirmos problemas (você pode desativar isso), e não exibe anúncios.

## O que fica no seu aparelho

O Pomodogo guarda no seu aparelho o seguinte, e nada disso é enviado para nós:

- **Seu histórico de foco:** sessões, durações, tags, notas, a timeline e seus stickers, e suas estatísticas.
- **Suas tarefas** e as tags que você cria.
- **Sua sala e seus cachorros:** ossinhos (a moeda do app), itens, presentes, conquistas, os nomes dos cachorros e as falas que você escreve para eles.
- **Seus sons personalizados:** gravações feitas com o microfone ou áudio tirado de arquivos que você escolhe.
- **Configurações:** timers, modo de bloqueio e apps permitidos, sons ambientes e outras preferências.

Desinstalar o Pomodogo apaga tudo isso, a não ser que você use o backup na nuvem descrito abaixo.

## Backup na nuvem (Google Drive)

O backup vem **desativado**. Quando você o ativa em Ajustes › Backup na nuvem, o Pomodogo pede acesso à sua conta Google e salva **um arquivo** com seu histórico, tarefas, tags, ossinhos, itens, conquistas, falas, sons personalizados e configurações na **pasta oculta do app no seu próprio Google Drive**. Ele sincroniza uma vez por dia no horário que você escolher, e quando você toca em *Sincronizar agora*.

- O Pomodogo pede apenas a permissão `drive.appdata`: ele só enxerga o próprio arquivo, **nunca seus outros arquivos do Drive**.
- O arquivo vai direto do seu aparelho para o seu Google Drive. A Mobyle não o recebe e não consegue lê-lo.
- O Google o armazena conforme a [Política de Privacidade do Google](https://policies.google.com/privacy?hl=pt-BR). O arquivo ocupa espaço do seu Drive.
- Para parar de sincronizar, desative o backup. Para apagar o arquivo, abra o Google Drive na web › Configurações › Gerenciar apps › Pomodogo › *Excluir dados ocultos do app*, ou remova o acesso do Pomodogo na sua [conta Google](https://myaccount.google.com/connections).

O uso e a transferência de informações recebidas das APIs do Google pelo Pomodogo seguem a [Política de Dados do Usuário dos Serviços de API do Google](https://developers.google.com/terms/api-services-user-data-policy), incluindo os requisitos de Uso Limitado. Esses dados são usados apenas para fazer e restaurar o backup dos seus dados do Pomodogo, nunca para anúncios, e nunca são vendidos nem compartilhados com ninguém.

## Estatísticas de uso e relatórios de falhas

O Pomodogo usa o **Google Firebase Analytics** e o **Firebase Crashlytics**. Eles coletam:

- **Como o app é usado:** quando o tour inicial é concluído; quando uma sessão de foco começa, termina ou falha, com o modo (pomodoro ou cronômetro), a duração em minutos e o modo de bloqueio; quando a tela do Pro é aberta e o resultado de uma compra do Pro; e compras feitas com ossinhos na loja do app.
- **Duas configurações:** se você é Pro e qual modo de bloqueio usa.
- **Informações do aparelho:** modelo, versão do Android, versão do app, idioma e país aproximado (pelo endereço IP).
- **Relatórios de falhas:** quando o app fecha sozinho ou acontece um erro (por exemplo, um backup que falhou), um relatório técnico do que deu errado, com os detalhes acima.
- **Um identificador de instalação:** um código aleatório criado pelo Firebase. Não é seu nome, e-mail nem telefone, e muda quando você reinstala o app.

**Nada do que você escreve é enviado:** nomes de tarefas, notas, tags, os nomes dos cachorros e as falas deles ficam no seu aparelho.

Usamos esses dados apenas para encontrar e corrigir erros e melhorar o app. O Google os trata conforme as [informações de privacidade do Firebase](https://firebase.google.com/support/privacy) e a [Política de Privacidade do Google](https://policies.google.com/privacy?hl=pt-BR). Os dados de uso ficam guardados por até 14 meses e os relatórios de falhas por até 90 dias.

**Como desativar:** Ajustes › Privacidade › *Enviar dados de uso e erros*. Desativado, nada é enviado.

## Compras (Pomodogo Pro)

O Pro é vendido pelo **Google Play**, que cuida do pagamento. A Mobyle nunca vê seu cartão nem seus dados de pagamento. Para confirmar o que você comprou e restaurar em outro aparelho, o Pomodogo usa o **RevenueCat**, que recebe o comprovante da compra do Google Play, um identificador aleatório do app, a versão do app, informações do aparelho e o endereço IP. O RevenueCat trata esses dados conforme a [política de privacidade](https://www.revenuecat.com/privacy/) dele.

## Permissões

Todas as permissões abaixo são opcionais e só são pedidas quando você ativa o recurso que precisa delas.

- **Serviço de acessibilidade (bloqueio de apps):** nos modos Lista liberada e Estrito, o Pomodogo usa o serviço de acessibilidade do Android apenas para saber **qual app está na frente durante uma sessão de foco**, para cobrir os apps que você bloqueou. Ele lê só o nome do pacote do app que abre, nunca o que está na tela nem o que você digita (o serviço é declarado sem acesso ao conteúdo das janelas). Nada do que ele vê é guardado ou enviado, e ele não faz nada fora de uma sessão de foco. Para montar a lista de apps permitidos, o Pomodogo lê a lista de apps instalados no aparelho; essa lista fica no aparelho.
- **Microfone:** usado apenas (1) para gravar um som personalizado quando você toca em gravar e (2) no recurso de voz do Pro, que escuta o nome do seu cachorro durante uma sessão de foco enquanto estiver ativado. As gravações ficam no aparelho (e no seu backup, se você usar). O reconhecimento de voz usa o serviço de reconhecimento de fala do aparelho e dá preferência ao processamento no próprio aparelho; dependendo do aparelho e do idioma, esse serviço (normalmente o do Google) pode processar o áudio conforme a política de privacidade dele. O Pomodogo guarda só se o nome foi ouvido: nem o áudio nem a transcrição são guardados ou enviados.
- **Agenda:** se você escolher uma agenda, cada sessão de foco concluída é adicionada a ela como um evento. O Pomodogo lê apenas a lista das suas agendas para você escolher, nunca seus eventos. Eventos adicionados a uma agenda sincronizada com uma conta (como o Google Agenda) são sincronizados por essa conta.
- **Health Connect (mindfulness):** se você ativar, o Pomodogo **grava** suas sessões de foco no Health Connect como sessões de mindfulness (horário de início e fim). Ele não lê nenhum dado de saúde. Esses dados não são enviados para nós, não são usados para anúncios e não são compartilhados com ninguém. Você pode revogar o acesso a qualquer momento no Health Connect.
- **Notificações, alarmes e tela de bloqueio:** para mostrar o timer enquanto você está fora do app, tocar quando a sessão termina na hora certa e mostrar seu cachorro e a contagem sobre a tela de bloqueio durante o foco.
- **Wear OS:** o app do relógio conversa com o app do celular pelo Google Play Services para iniciar, acompanhar e cancelar sessões. Ele envia apenas o estado do timer e seus comandos.
- **Fotos e arquivos:** o Pomodogo não tem acesso às suas fotos nem aos seus arquivos. Ele só abre o arquivo de áudio ou vídeo que você escolhe no seletor do sistema (para criar um som personalizado) e salva as imagens que você escolhe salvar (como uma conquista compartilhada) em Imagens › Pomodogo.

## O que você escolhe compartilhar

- **Compartilhar conquistas:** imagens e vídeos vão apenas para onde você os envia pelo menu de compartilhamento do Android.
- **E-mails para nós:** se você nos escrever, usamos sua mensagem e seu endereço apenas para responder.

## Seus direitos

Conforme a lei do lugar onde você vive (por exemplo, a LGPD no Brasil ou o GDPR na União Europeia), você pode ter o direito de acessar, corrigir ou excluir dados sobre você e de se opor ao uso deles. Como o Pomodogo não tem contas, não conseguimos associar as estatísticas de uso a você, e não temos cópia dos seus dados do app: eles estão no seu aparelho e, se você ativou o backup, no seu próprio Google Drive, onde você pode apagá-los como descrito acima. Desativar as estatísticas impede o envio de novos dados; para qualquer outro pedido, escreva para [support@mobyleapps.com](mailto:support@mobyleapps.com).

## Crianças

O Pomodogo não é direcionado a crianças menores de 13 anos e não coleta intencionalmente informações pessoais delas.

## Alterações nesta política

Se esta política mudar, atualizaremos esta página e a data de vigência.

## Contato

Dúvidas sobre esta política: [support@mobyleapps.com](mailto:support@mobyleapps.com).

Veja também os [Termos de Uso](/pomodogo/terms/).

</div>

</div>
</main>
