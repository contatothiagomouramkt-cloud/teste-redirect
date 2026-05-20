export default {
  async fetch(request) {
    const userAgent = request.headers.get("user-agent") || "";
    const ip = request.headers.get("cf-connecting-ip") || "";

    const botUAs = [
      'facebookexternalhit', 'facebot', 'facebookbot',
      'adsbot', 'googlebot', 'bingbot', 'twitterbot',
      'linkedinbot', 'slackbot', 'whatsapp', 'telegrambot',
      'crawler', 'spider', 'headless', 'phantom', 'python',
      'curl', 'wget', 'java/', 'apache-httpclient'
    ];

    const metaIPs = [
      '66.220.', '69.63.', '69.171.', '173.252.',
      '31.13.', '157.240.', '179.60.', '204.15.'
    ];

    const isBot = botUAs.some(b => userAgent.toLowerCase().includes(b));
    const isMeta = metaIPs.some(p => ip.startsWith(p));

    if (isBot || isMeta) {
      return new Response(null, {
        status: 302,
        headers: { Location: 'https://grupojogadorcaro.com.br/quem-e-jota' }
      });
    }

    const numeros = [
      "5575936181361", // T37
      "5575936181364", // T54
      "5575936181023", // D42
      "5575936181246", // D95
      "5575936181038", // D48
      "5575936180904", // D24
      "5575936180872", // D17
      "5575936180919", // D28
      "5575936180852", // D16
      "5575936181228", // D90
      "5575936181028", // D44
      "5575936180938", // D32
    ];

    const mensagens = [
      "Fala Jota, me manda a boa, quero iniciar hoje!",
      "E ai JP, manda a boa pra mim, quero iniciar!",
      "Jotap, quero iniciar hoje, me manda a boa!",
      "Fala irmao, me manda aquela boa pra iniciar hoje!",
      "JP, manda a oportunidade de hoje, quero iniciar!",
      "E ai Jota, quero iniciar hoje, manda pra mim!"
    ];

    const numero = numeros[Math.floor(Math.random() * numeros.length)];
    const mensagem = encodeURIComponent(
      mensagens[Math.floor(Math.random() * mensagens.length)]
    );

    const url = /Android|iPhone|iPad/i.test(userAgent)
      ? `whatsapp://send?phone=${numero}&text=${mensagem}`
      : `https://api.whatsapp.com/send?phone=${numero}&text=${mensagem}`;

    return new Response(null, {
      status: 302,
      headers: { Location: url },
    });
  },
};
