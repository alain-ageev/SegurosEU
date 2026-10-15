import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaBand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Dúvidas sobre Consórcio",
  description:
    "Perguntas frequentes sobre consórcio Porto Bank: contemplação, lances, prazos e modalidades com a Edias.",
  path: "/consorcio/duvidas",
});

const faqs = [
  {
    q: 'Cálculo de parcelas',
    a: `A parcela do consórcio considera o crédito, a taxa de administração, o fundo de reserva e, quando houver, o seguro de vida.

Exemplo: carta de imóvel de R$ 200.000,00, taxa ADM total de 21%, fundo de reserva de 2% e seguro de vida de 0,031%, em 200 vezes.

Valor da carta: R$ 200.000,00
Taxa ADM: R$ 42.000,00 (21%)
Fundo de reserva: R$ 4.000,00 (2%)
Seguro de vida: R$ 62,00 (0,031%)

Valor total aproximado: R$ 246.062,00 (sem reajustes anuais do consórcio).

Em imóveis, para quem entra no início do grupo, o prazo costuma ficar próximo de 200 meses; quem entra depois costuma ter prazo menor. Parcelas e valores podem variar conforme o plano e a correção do crédito.`,
  },
  {
    q: 'Lance embutido',
    a: `É um valor retirado da própria carta, limitado até 30%, para ajudar no lance.
Após contemplação será descontado do valor original do consórcio, entenda como um empréstimo.
Ex: uma carta de 200 mil, onde 30% corresponde a 60 mil, dando esse valor de lance embutido, onde o cliente não precisará ter este dinheiro, pois pegará de empréstimo da própria Porto, após contemplação, receberá o valor de R$ 140.000,00, pois deverá devolver 60 mil reais que foi usado para dar o Lance Embutido à Porto Seguro.
*Lembrando que o percentual de Lance envolve o valor da carta, a taxa ADM, o fundo reserva e o seguro de vida.`,
  },
  {
    q: 'Consórcio é um bom investimento?',
    a: 'O consórcio é uma boa opção para adquirir bens de maior valor pois, diferente dos empréstimos e financiamentos, é livre de juros. Além disso, a modalidade oferece parcelamento integral e variedade de planos e prazos.',
  },
  {
    q: 'Como acessar informações da conta?',
    a: `Acompanhe todas as informações do seu consórcio, sempre que precisar e com toda praticidade no Aplicativo do Consórcio ou na Área do Cliente. Nestes canais, você pode:
Atualizar seus dados;
Emitir 2ª via de boleto;
Antecipar parcelas e quitar seu consórcio;
Emitir o extrato da sua cota;
Acompanhar o andamento do grupo;
Simular e oferecer um lance;
Conferir o resultado da assembleia.`,
  },
  {
    q: 'Como funciona o lance?',
    a: `O lance é uma das formas de acelerar a contemplação no consórcio.
Funciona assim: todo mês, até o início da respectiva assembleia, você pode oferecer um lance pelo App do Consórcio.
O valor oferecido é referente à antecipação do pagamento das parcelas futuras. Ou seja, caso seja contemplado, o valor pago poderá ser utilizado para reduzir o valor das parcelas restantes ou antecipar parcelas, reduzindo o prazo total de pagamento.`,
  },
  {
    q: 'O que é o fundo reserva?',
    a: 'O fundo de reserva no consórcio é o percentual, incluído na sua parcela, utilizado como garantia para possíveis imprevistos, como inadimplência ou demandas jurídicas. Caso esta reserva não seja utilizada, o valor será devolvido aos consorciados no encerramento do grupo, conforme sua contribuição.',
  },
  {
    q: 'Como transferir a titularidade?',
    a: `A transferência da cota para outra pessoa é uma alternativa prevista na Lei do Consórcio (Lei 11.795/2008), podendo ser realizada em dois momentos: antes ou após a contemplação. No momento da transferência, o novo titular adquire os direitos previstos no regulamento e, também, passa a ser responsável por todas as obrigações da cota.
Caso queira transferir a sua cota, entre em contato com a nossa Central de Relacionamento, de segunda a sexta-feira, das 8h às 20h (exceto feriados):
Grande São Paulo: (11) 3366-3006
Demais localidades: 0800-721-3006
Após entrar em contato via Central, o consorciado receberá por email o Formulário de Transferência que deverá ser preenchido e devolvido à administradora. Retornaremos sua solicitação em 3 dias úteis após o recebimento do formulário assinado.`,
  },
  {
    q: 'Redutor de parcelas',
    a: `Usando o exemplo anterior, temos:
É uma redução percentual no valor de pagamento da carta, ou seja, um desconto no valor original da parcela, onde, após contemplação, o cliente optará por pagar a diferença nas parcelas futuras e pegar o valor cheio da carta contratada ou continuar pagando com dedução e pegar a carta proporcional com um valor referente a essa redução.
Em uma carta de imóvel no valor de 200 mil o valor total do consórcio a ser pago com todas as taxas, sem os aumentos anuais ficaria em R$ 246.062 e o valor de suas parcelas em R$ 1.230,31.
Com redução de 25% a parcela inicial ficaria em R$ 922,73.`,
  },
  {
    q: 'Lance fixo',
    a: `É um subgrupo criado com um valor fixo de 40% predeterminado em lances.
Exemplo: em um grupo de 800 pessoas, cada um com 1 cota, 70 cadastram suas cotas como lance fixo.
Neste momento os lances normais, chamados de lance livre, contam com 730 pessoas, sendo criado um outro sorteio para 70 pessoas que fixaram o lance em 40%.
Detalhe: você poderá usar 30% do lance fixo através do lance embutido, onde você retira o valor da própria carta para o lance, fazendo com que, você descapitalize apenas 10% do valor.`,
  },
  {
    q: 'Consórcio ou Financiamento?',
    a: `A grande diferença entre consórcio e financiamento é que no primeiro não existe a cobrança de juros, só a correção do crédito — afinal, ele se assemelha a uma poupança. O bem ou serviço só vai poder ser adquirido na hora da contemplação, que pode acontecer da primeira à última prestação a ser paga.
Já no financiamento, há cobrança de juros, mas o bem ou serviço é adquirido imediatamente. O consórcio, portanto, é uma modalidade indicada às pessoas que não têm pressa para adquirir o seu bem por um preço mais justo.`,
  },
  {
    q: 'Resultado das assembleias',
    a: 'Os resultados das assembleias podem ser conferidos pelo seu Aplicativo do Consórcio ou pela Área do Cliente. Você também pode acompanhar a assembleia online, ao vivo, através do link enviado por e-mail e SMS.',
  },
  {
    q: 'Como funciona os sorteios?',
    a: `O sorteio é uma das formas de contemplação no consórcio. Na primeira assembleia do grupo, é realizado pela Porto Bank. E nos demais meses, ocorre por meio da primeira extração de cada mês da Loteria Federal.
Todos os consorciados têm a mesma chance de serem contemplados por sorteio, desde que estejam com o pagamento das parcelas em dia.`,
  },
  {
    q: 'Todos são contemplados?',
    a: 'Isso mesmo. Todos têm as mesmas chances de serem contemplados por sorteio ou lance durante as assembleias mensais. Mas, ao final da vigência do grupo, todos que ainda não receberam sua carta de crédito serão contemplados.',
  },
  {
    q: 'Como solicitar termo de quitação?',
    a: 'Para solicitar o termo de quitação do seu consórcio, acesse o Chat On-line da Porto Assistência: https://prime.altubots.com/chats/portoassistencia/8e525c6a71acc64d1ef320e92ef1088a/index.html',
  },
  {
    q: 'Parcelas pós contemplação',
    a: `Usando o exemplo anterior, temos:
Após contemplação da carta de crédito, onde a mesma está sendo paga com redução, o cliente pode escolher entre duas opções, como destacadas abaixo:
- Valor da carta após contemplação, sem reajustar a parcela -
De acordo com o exemplo anterior, o valor da parcela foi reduzido em 25%, sendo pago R$ 922,73 para uma carta de 200 mil reais.
Escolhendo esta opção e não reajustando o valor da parcela, a carta contemplada proporcionalmente também ficaria com uma redução de 25%, reajustando seu valor final em 200 mil - 25% (50 mil) = 150 mil reais, com isso, os valores mensais pagos pelo cliente, não seriam reajustados e ficariam os mesmos.
- Valor da carta após contemplação, reajustando a parcela -
De acordo com o exemplo anterior, o valor da parcela foi reduzido em 25%, sendo pago R$ 922,73 para uma carta de 200 mil reais.
*Supondo que o cliente tenha sido contemplado no sorteio de número 50 e que ainda faltem 150 para acabar o consórcio.
Neste caso o cliente teve uma redução de 25% em cinquenta parcelas, neste momento, o valor reduzido será acrescentado nas 150 parcelas futuras e o valor da parcela voltará ao seu valor original. Vamos fazer este cálculo, observando os exemplos anteriores para não haver dúvidas.
Valor original da parcela. = R$ 1.230,31
Valor com redução = R$ 922,73
Valor da economia mensal = R$ 307,58
Como temos 50 parcelas com redução antes da contemplação, o valor da economia mensal multiplicado por esses número de meses, deverão ser alocados nas parcelas futuras, sendo seu total:
Valor mensal de redução = R$ 307,58
Quantidade de meses com redução antes da contemplação = 50
Valor total da economia a ser distribuídos nas parcelas futuras = R$ 307,58 * 50 = R$ 15.379,00
Sendo assim, as demais 150 parcelas faltantes, ficariam da seguinte forma:
Valor original das parcelas vezes o período restante = R$ 1.230,31 * 150 = R$ 184.696,50
Valor devolvido da redução = R$ 15.379,00
Valor total restante a pagar = R$ 200.075,50
O novo valor da parcela do consórcio ficará em R$ 200.075,50 / 150 = R$ 1.333,84
* Lembrando que todos os valores calculados acima, estão sem os reajustes anuais, mas vale lembrar que os mesmos reajustes no valor da parcela, será proporcional no valor da carta de crédito e que após contemplação, o cliente receberá o valor da carta, mas os reajustes anuais nas parcelas continuam.
* Após contemplação, o cliente tem a opção de antecipar as parcelas do consórcio, caso queira.
* Após contemplação, o cliente poderá utilizar a carta de crédito quando quiser, podendo deixá-la aplicada na Porto Seguro e resgatando quando quiser. Se esse resgate for feito no final do prazo do consórcio, poderá pegar em dinheiro.`,
  },
  {
    q: 'Como fazer um consórcio?',
    a: `Para fazer um consórcio, é necessário definir qual é o seu objetivo, seja a compra de um imóvel, carro, caminhão, bike ou placa solar. Com o objetivo definido, basta solicitar uma proposta pelo nosso site ou procurar seu consultor.
Assim, um especialista em consórcio E Dias Corretora de Seguros poderá te ajudar a escolher o plano que atenda melhor seus objetivos e necessidades. É nessa hora que a duração do contrato, o valor do crédito e o número de parcelas são definidos.
Consórcio de Veículos para carros, vans e outros veículos novos e seminovos.
Consórcio Imobiliário para adquirir sua casa, apartamento, para a compra de imóveis comerciais, de veraneio, de terrenos, ou ainda para reformar ou quitar um financiamento. Nessa modalidade você pode utilizar 100% do saldo do seu FGTS para ofertar lance.
Consórcio de Bike para a aquisição de bike urbana, elétrica, de estrada, mountain bike ou moto elétrica.
Consórcio de Veículos Pesados para compra de caminhão, ônibus, tratores e implementos agrícolas e rodoviários.
Consórcio Sustentável para compra e instalação de placas solares em casas ou empresas.`,
  },
  {
    q: 'Tempo de fechamento dos grupos',
    a: `Conforme definido pela Lei do Consórcio (Lei 11.795/2008) , todas as administradoras têm até 90 dias a partir da venda da primeira cota para inaugurar um grupo.
No Consórcio Porto Bank, nunca tivemos grupos cancelados ou deixamos de contemplar nossos consorciados por falta de recursos no fundo comum.`,
  },
  {
    q: 'Como ser contemplado?',
    a: 'A contemplação é o momento em que você passa a ter o direito de utilizar o crédito para comprar seu imóvel, carro, moto, bike, caminhão ou placa solar. Há duas formas de ser contemplado no consórcio: a partir de sorteio ou de lance. É importante mencionar que, até o fim do contrato, todos os consorciados do grupo vão receber seu crédito.',
  },
  {
    q: 'O que é taxa de ADM?',
    a: 'A taxa de administração do consórcio é o valor, incluído na sua parcela, pago ao Consórcio Porto Bank pela criação e gestão do grupo. Seu percentual varia conforme o plano contratado. É com essa taxa que a administradora consegue manter a estrutura necessária para realizar as assembleias de contemplação e a gestão dos recursos financeiros, garantindo que o contrato seja cumprido por todos do grupo. Essa taxa não caracteriza uma forma de juros composto, pois representa um valor bem inferior quando comparada aos juros cobrados no financiamento. No Consórcio Porto Bank, por exemplo, a taxa de administração do consórcio de automóveis varia entre 15% e 18%, conforme o plano escolhido.',
  },
  {
    q: 'Como solicitar resgate?',
    a: 'Se o seu grupo já está encerrado e você foi comunicado que tem valores para resgatar, abra um ticket no canal de atendimento da Porto, informando dados pessoais, dados do consórcio e informações bancárias para pagamento. Após o envio, o andamento é comunicado por e-mail ou SMS. Formulário: https://www.portoseguroatendimento.com.br/pagamento_rnp',
  },
  {
    q: 'Cancelamento de consórcio',
    a: `Caso você precise cancelar o consórcio existem dois cenários:
Se seu grupo faz parte da Lei do Consórcio (Lei 11.795/2008) e foi inaugurado após 06/02/2009, você continuará participando de sorteios mensais, exclusivos para as cotas canceladas em cada grupo, realizados pela extração da Loteria Federal. E, caso não sejam sorteadas, terão seus valores devolvidos no encerramento do grupo. Ao ser contemplado terá a restituição do valor pago referente ao fundo comum, abatido a multa contratual.
Se o seu grupo é anterior à criação da lei, o prazo para devolução dos valores pagos é de 60 dias após o encerramento do grupo.`,
  },
  {
    q: 'O consórcio tem juros?',
    a: 'O consórcio não trabalha com juros bancários. Há taxa de administração diluída nas parcelas, conforme o regulamento do grupo.',
  },
  {
    q: 'Posso usar o crédito para quitar financiamento?',
    a: 'No consórcio de imóvel, a quitação de financiamento é uma das finalidades possíveis, dentro das condições do grupo.',
  },
  {
    q: 'Consórcio solar e bike estão disponíveis?',
    a: 'Sim. Há modalidades sustentáveis para placa solar e planos para bicicletas urbanas e elétricas.',
  },
];

export default function ConsorcioDuvidasPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqLd} />
      <Hero
        brand="Dúvidas"
        title="Consórcio sem mistério"
        description="Respostas objetivas para decidir com segurança — e um consultor Edias quando a pergunta for a sua."
        primaryCta={{ label: "Falar com consultor", href: "/contato" }}
        secondaryCta={{ label: "Ver planos", href: "/consorcio" }}
        compact
        imageSrc="/images/home/consorcio.jpg"
        imageAlt="Dúvidas sobre consórcio"
      />
      <section className="bg-[var(--edias-canvas)] py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Accordion>
            {faqs.map((item, index) => (
              <AccordionItem key={item.q} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-heading text-base text-[var(--edias-navy)]">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="whitespace-pre-line text-[var(--edias-ink-muted)]">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <CtaBand
        title="Ainda tem dúvidas?"
        description="Envie sua pergunta ou abra o checklist para agilizar a análise."
        secondaryHref="/checklist"
        secondaryLabel="Checklist"
      />
    </>
  );
}
