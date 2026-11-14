---
layout: default
title: Pomodogo Terms of Use - Mobyle
description: Terms of use for Pomodogo, the focus timer with a dog that keeps you company.
permalink: /pomodogo/terms/
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

<main class="policy" data-title-en="Pomodogo Terms of Use - Mobyle" data-title-pt="Termos de Uso do Pomodogo - Mobyle">
<div class="container" markdown="1">

<div class="lang-switch" role="group" aria-label="Language / Idioma">
  <button type="button" class="lang-switch__btn" data-set-lang="en" aria-pressed="true" lang="en" title="English">EN</button>
  <button type="button" class="lang-switch__btn" data-set-lang="pt" aria-pressed="false" lang="pt-BR" title="Português (Brasil)">PT-BR</button>
</div>

<div class="i18n" lang="en" markdown="1">

# Pomodogo Terms of Use

**Effective date:** November 14, 2026<br>
**Developer:** Mobyle<br>
**Contact:** [support@mobyleapps.com](mailto:support@mobyleapps.com)

These terms apply to the Pomodogo app for Android and its Wear OS companion, distributed by Mobyle (for example on Google Play). By installing or using Pomodogo you agree to them. If you do not agree, please do not use the app.

## The app

Pomodogo is a focus timer: a dog keeps you company while you focus, and finished sessions earn gifts and bones to decorate its room. Pomodogo is free to download and use. Some features are part of **Pomodogo Pro**, a paid upgrade.

## Pomodogo Pro

- **Plans:** Pro is offered as a monthly or annual subscription, and as a one-time lifetime purchase. Prices are shown in the app and on Google Play before you buy, in your local currency.
- **Payment:** purchases are made through your Google Play account and are subject to the [Google Play Terms of Service](https://play.google.com/about/play-terms/).
- **Free trial:** a plan may include a free trial. If you do not cancel at least 24 hours before the trial ends, the subscription starts and you are charged.
- **Automatic renewal:** subscriptions renew automatically at the end of each period, at the then-current price, unless you cancel at least 24 hours before the end of the period.
- **Cancelling:** you can cancel at any time in Google Play › Payments & subscriptions › Subscriptions. Uninstalling the app does not cancel a subscription. After cancelling, Pro stays active until the end of the period you paid for.
- **Refunds:** refunds are handled by Google Play according to its [refund policies](https://support.google.com/googleplay/answer/2479637), without prejudice to the rights you have under consumer protection laws.
- **Restoring:** use *Restore purchases* in the app to get Pro back on a new device or after reinstalling, with the same Google account.
- **Changes:** we may change which features are part of Pro or its prices. Price changes to an existing subscription follow Google Play's rules and are notified in advance.

## Bones, gifts and items

Bones, gifts, dogs and room items are part of the game inside the app. They are earned by focusing and spent only in the app. They **have no monetary value**, cannot be sold, transferred or exchanged for money, and are not refunded. We may rebalance how many bones you earn and what items cost.

Your bones and items are stored on your device. If you uninstall the app or lose your device without using the cloud backup, they are lost, and we cannot restore them.

## App blocking

The blocking modes are a tool to help you focus, not a parental control or security feature. Calls, alarms and essential system screens are never blocked. Do not rely on Pomodogo to block apps in situations where safety or obligations depend on it, and turn blocking off whenever you need full access to your device.

## Your content

The tasks, notes, tags, names, lines and sounds you create belong to you. We claim no rights over them, and we never receive them: they are stored on your device and, if you turn it on, in your own Google Drive backup. See the [Privacy Policy](/pomodogo/privacy-policy/).

**You are responsible for keeping copies of your data.** Uninstalling the app, clearing its data or losing your device deletes it unless the cloud backup is on.

When you import audio or video to make a custom sound, make sure you have the right to use it.

## Acceptable use

Do not reverse engineer, modify or redistribute the app, its artwork, animations or sounds, or try to get Pro features without paying, except where the law allows it.

## Name and artwork

The Pomodogo name, logo, icon, dogs, artwork, animations and sounds belong to Mobyle or its licensors and are protected by law. These terms do not give you any right to use them outside the app.

## Third-party services

Pomodogo relies on services from other companies, such as Google Play, Google Drive, Health Connect, Firebase and RevenueCat. Their use is also subject to those companies' own terms. We are not responsible for their availability.

## Feedback

If you send us suggestions or bug reports, we may use them to improve Pomodogo without owing you anything.

## No warranty

Pomodogo is provided "as is", without warranties of any kind, to the extent permitted by law. We work to keep the timer accurate and your data safe, but we cannot guarantee that the app will be free of errors or that data will never be lost.

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

# Termos de Uso do Pomodogo

**Data de vigência:** 14 de novembro de 2026<br>
**Desenvolvedor:** Mobyle<br>
**Contato:** [support@mobyleapps.com](mailto:support@mobyleapps.com)

Estes termos se aplicam ao app Pomodogo para Android e ao app complementar para Wear OS, distribuídos pela Mobyle (por exemplo, no Google Play). Ao instalar ou usar o Pomodogo, você concorda com eles. Se não concordar, não use o app.

## O app

O Pomodogo é um timer de foco: um cachorro faz companhia enquanto você se concentra, e as sessões concluídas rendem presentes e ossinhos para decorar a sala dele. O Pomodogo é gratuito para baixar e usar. Alguns recursos fazem parte do **Pomodogo Pro**, uma versão paga.

## Pomodogo Pro

- **Planos:** o Pro é oferecido como assinatura mensal ou anual, e como compra única vitalícia. Os preços aparecem no app e no Google Play antes da compra, na sua moeda local.
- **Pagamento:** as compras são feitas pela sua conta do Google Play e seguem os [Termos de Serviço do Google Play](https://play.google.com/about/play-terms/).
- **Teste grátis:** um plano pode incluir um período de teste grátis. Se você não cancelar pelo menos 24 horas antes do fim do teste, a assinatura começa e é cobrada.
- **Renovação automática:** as assinaturas são renovadas automaticamente ao fim de cada período, pelo preço vigente, a não ser que você cancele pelo menos 24 horas antes do fim do período.
- **Cancelamento:** você pode cancelar a qualquer momento em Google Play › Pagamentos e assinaturas › Assinaturas. Desinstalar o app não cancela a assinatura. Depois de cancelar, o Pro continua ativo até o fim do período já pago.
- **Reembolsos:** os reembolsos são tratados pelo Google Play conforme as [políticas de reembolso](https://support.google.com/googleplay/answer/2479637?hl=pt-BR) dele, sem prejuízo dos seus direitos pelo Código de Defesa do Consumidor e outras leis de proteção ao consumidor.
- **Restaurar:** use *Restaurar compras* no app para recuperar o Pro em um aparelho novo ou depois de reinstalar, com a mesma conta Google.
- **Alterações:** podemos mudar quais recursos fazem parte do Pro ou seus preços. Mudanças de preço em uma assinatura existente seguem as regras do Google Play e são avisadas com antecedência.

## Ossinhos, presentes e itens

Ossinhos, presentes, cachorros e itens da sala fazem parte do jogo dentro do app. Eles são ganhos com o foco e só podem ser gastos no app. Eles **não têm valor monetário**, não podem ser vendidos, transferidos nem trocados por dinheiro, e não são reembolsáveis. Podemos reequilibrar quantos ossinhos você ganha e quanto custam os itens.

Seus ossinhos e itens ficam guardados no seu aparelho. Se você desinstalar o app ou perder o aparelho sem usar o backup na nuvem, eles se perdem, e não conseguimos recuperá-los.

## Bloqueio de apps

Os modos de bloqueio são uma ferramenta para ajudar você a se concentrar, não um controle parental nem um recurso de segurança. Ligações, alarmes e telas essenciais do sistema nunca são bloqueados. Não dependa do Pomodogo para bloquear apps em situações em que sua segurança ou suas obrigações dependam disso, e desative o bloqueio sempre que precisar de acesso total ao aparelho.

## Seu conteúdo

As tarefas, notas, tags, nomes, falas e sons que você cria pertencem a você. Não reivindicamos nenhum direito sobre eles e nunca os recebemos: eles ficam no seu aparelho e, se você ativar, no backup do seu próprio Google Drive. Veja a [Política de Privacidade](/pomodogo/privacy-policy/).

**Você é responsável por manter cópias dos seus dados.** Desinstalar o app, limpar os dados dele ou perder o aparelho apaga tudo, a não ser que o backup na nuvem esteja ativado.

Ao importar áudio ou vídeo para criar um som personalizado, garanta que você tem o direito de usá-lo.

## Uso aceitável

Não faça engenharia reversa, não modifique nem redistribua o app, suas artes, animações ou sons, e não tente obter os recursos do Pro sem pagar, exceto onde a lei permitir.

## Nome e artes

O nome Pomodogo, o logotipo, o ícone, os cachorros, as artes, as animações e os sons pertencem à Mobyle ou a seus licenciantes e são protegidos por lei. Estes termos não dão nenhum direito de usá-los fora do app.

## Serviços de terceiros

O Pomodogo depende de serviços de outras empresas, como Google Play, Google Drive, Health Connect, Firebase e RevenueCat. O uso deles também está sujeito aos termos dessas empresas. Não somos responsáveis pela disponibilidade deles.

## Sugestões

Se você nos enviar sugestões ou relatos de erros, podemos usá-los para melhorar o Pomodogo sem que isso gere qualquer obrigação.

## Sem garantias

O Pomodogo é fornecido "no estado em que se encontra", sem garantias de qualquer tipo, na medida permitida pela lei. Trabalhamos para manter o timer preciso e seus dados seguros, mas não podemos garantir que o app não terá erros nem que dados nunca serão perdidos.

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
