import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";
import Container from "../../components/Container/Container";
import Landing from "../../layouts/Landing/Landing";
import IndexList from "./components/IndexList/IndexList";
import IndexSlider from "./components/IndexSlider/IndexSlider";
import IndexWinnersLine from "./components/IndexWinners/IndexWinnersLine";
import {
  IndexBlock,
  IndexBrands,
  IndexBrandsFirst,
  IndexBrandsFirstText,
  IndexBrandsSecond,
  IndexBrandsSecondLogo,
  IndexBrandsSecondText,
  IndexBrandsThird,
  IndexBrandsThirdLogo,
  IndexBrandsThirdText,
  IndexGreeting,
  IndexGreetingBackground,
  IndexGreetingBody,
  IndexGreetingBottomText,
  IndexGreetingConnect,
  IndexGreetingContent,
  IndexGreetingMoneyBox,
  IndexGreetingText,
  IndexGreetingTitle,
  IndexHow,
  IndexHowBackground,
  IndexHowBlurredCircle,
  IndexHowBody,
  IndexHowLogo,
  IndexHowNeeds,
  IndexHowNeedsItem,
  IndexHowNeedsItemContent,
  IndexHowNeedsItemHeader,
  IndexHowNeedsItemImageBlock,
  IndexHowNeedsItemImageFirst,
  IndexHowNeedsItemImageForth,
  IndexHowNeedsItemImageSecond,
  IndexHowNeedsItemImageThird,
  IndexHowNeedsItemImageThirdWatch,
  IndexHowNeedsItemLink,
  IndexHowNeedsItemNumber,
  IndexHowNeedsItemText,
  IndexHowNeedsItemTitle,
  IndexHowNeedsRow,
  IndexHowNeedsTitle,
  IndexHowText,
  IndexHowTitle,
  IndexQuestions,
  IndexQuestionsBody,
  IndexQuestionsMoneyBox,
  IndexQuestionsTitle,
  IndexWinners,
  IndexWinnersBody,
  IndexWinnersTitle,
} from "./IndexStyles";

function Index() {
  return (
    <Landing>
      <IndexBlock>
        <IndexGreeting>
          <Container>
            <IndexGreetingBody>
              <IndexGreetingMoneyBox alt="money-box" src="/images/big-money-box.svg" />
              <IndexGreetingMoneyBox alt="money-box" src="/images/money-box.svg" />
              <IndexGreetingMoneyBox alt="money-box" src="/images/big-money-box.svg" />
              <IndexGreetingMoneyBox alt="money-box" src="/images/money-box.svg" />
              <IndexGreetingBackground alt="background" src="/images/rected-background.svg" />
              <IndexGreetingContent>
                <IndexGreetingTitle>
                  Самые прозрачные <br /> <span>розыгрыши</span>
                </IndexGreetingTitle>
                <IndexGreetingText>CryptoRaffles - децентрализованная платформа для организации розыгрышей призов, построенная на блокчейне сети Ethereum.</IndexGreetingText>
                <IndexGreetingBottomText>Каждый участник имеет реальную возможность выиграть, благодаря прозрачному и честному механизму работы. Каждый этап можно легко отследить и подтвердить соответствие правилам.</IndexGreetingBottomText>
                <IndexGreetingConnect>Подключиться</IndexGreetingConnect>
              </IndexGreetingContent>
              <IndexSlider
                items={[
                  {
                    id: "Raffle # 0x323ff",
                    wallet: "@ Nike",
                    price: "$9,445",
                    timerDate: Date.now(),
                  },
                  {
                    id: "Raffle # 7fh12ba",
                    wallet: "@ Baxter",
                    price: "$100,087",
                    timerDate: Date.now(),
                  },
                  {
                    id: "Raffle # 3da71c5",
                    wallet: "@ Jango",
                    price: "$49,615",
                    timerDate: Date.now(),
                  },
                ]}
              />
            </IndexGreetingBody>
          </Container>
        </IndexGreeting>
        <IndexBrands>
          <IndexBrandsFirst>
            <IndexBrandsFirstText>BASED ON</IndexBrandsFirstText>
          </IndexBrandsFirst>
          <IndexBrandsSecond>
            <IndexBrandsSecondLogo alt="ethereum" src="/images/ethereum.svg" />
            <IndexBrandsSecondText>Ethereum </IndexBrandsSecondText>
          </IndexBrandsSecond>
          <IndexBrandsThird>
            <IndexBrandsThirdLogo alt="chainlink" src="/images/chainlink.svg" />
            <IndexBrandsThirdText>Chainlink</IndexBrandsThirdText>
          </IndexBrandsThird>
        </IndexBrands>
        <IndexWinners>
          <Container>
            <IndexWinnersBody>
              <IndexWinnersTitle>Счастливые победители:</IndexWinnersTitle>
            </IndexWinnersBody>
          </Container>
          <IndexWinnersLine
            items={[
              {
                tokens: "2",
                wallet: "@ Nike",
                price: "$9,445",
                timerDate: Date.now(),
              },
              {
                tokens: "2",
                wallet: "@ Nike",
                price: "$9,445",
                timerDate: Date.now(),
              },
              {
                tokens: "2",
                wallet: "@ Nike",
                price: "$9,445",
                timerDate: Date.now(),
              },
            ]}
          />
        </IndexWinners>
        <IndexHow id="how">
          <IndexHowBlurredCircle />
          <Container>
            <IndexHowBody>
              <IndexHowBackground alt="background" src="/images/rected-background.svg" />
              <IndexHowTitle>Как это работает:</IndexHowTitle>
              <IndexHowText>
                <span>CryptoRaffles построен на базе смарт-контрактов, которые содержат в себе точные неизменяемые правила. </span>Что гарантирует полную честность в проведении розыгрышей. Ни автор розыгрыша, ни его оператор не имеют возможности как либо манипулировать
                результатами.
              </IndexHowText>
              <IndexHowText> Денежные призы загружаются на контракт до начала розыгрыша, откуда могут быть сняты только победителями при соответствующих правилам условиях.</IndexHowText>
              <IndexHowLogo alt="logo" src="/images/how-logo.svg" />
              <IndexHowNeeds>
                <IndexHowNeedsTitle>Для участия в розыгрыше необходимо:</IndexHowNeedsTitle>
                <IndexHowNeedsRow>
                  <IndexHowNeedsItem>
                    <IndexHowNeedsItemHeader>
                      <IndexHowNeedsItemNumber>1</IndexHowNeedsItemNumber>
                      <IndexHowNeedsItemTitle>Подключиться</IndexHowNeedsItemTitle>
                    </IndexHowNeedsItemHeader>
                    <IndexHowNeedsItemImageBlock>
                      <IndexHowNeedsItemImageFirst alt="step" src="/images/first-step.svg" />
                    </IndexHowNeedsItemImageBlock>
                    <IndexHowNeedsItemContent>
                      <IndexHowNeedsItemText>
                        Подключиться к веб приложению <br /> с помощью Ethereum кошелька
                      </IndexHowNeedsItemText>
                      <IndexHowNeedsItemLink>Подключиться</IndexHowNeedsItemLink>
                    </IndexHowNeedsItemContent>
                  </IndexHowNeedsItem>
                  <IndexHowNeedsItem>
                    <IndexHowNeedsItemHeader>
                      <IndexHowNeedsItemNumber>2</IndexHowNeedsItemNumber>
                      <IndexHowNeedsItemTitle>Стать участником</IndexHowNeedsItemTitle>
                    </IndexHowNeedsItemHeader>
                    <IndexHowNeedsItemImageBlock>
                      <IndexHowNeedsItemImageSecond alt="step" src="/images/second-step.svg" />
                    </IndexHowNeedsItemImageBlock>
                    <IndexHowNeedsItemContent>
                      <IndexHowNeedsItemText>Принять участие в активном раффле, приобретая любое количество токенов или зарегистрироваться для участия в гиве, выполнив его условия.</IndexHowNeedsItemText>
                    </IndexHowNeedsItemContent>
                  </IndexHowNeedsItem>
                  <IndexHowNeedsItem>
                    <IndexHowNeedsItemHeader>
                      <IndexHowNeedsItemNumber>3</IndexHowNeedsItemNumber>
                      <IndexHowNeedsItemTitle>Дождаться окончания</IndexHowNeedsItemTitle>
                    </IndexHowNeedsItemHeader>
                    <IndexHowNeedsItemImageBlock>
                      <IndexHowNeedsItemImageThird alt="step" src="/images/third-step.svg" />
                      <IndexHowNeedsItemImageThirdWatch alt="watch" src="/images/sand-watch.svg" />
                    </IndexHowNeedsItemImageBlock>
                    <IndexHowNeedsItemContent>
                      <IndexHowNeedsItemText>
                        Дождаться окончания раффла/ гива <br /> и проверить ваш результат.
                      </IndexHowNeedsItemText>
                    </IndexHowNeedsItemContent>
                  </IndexHowNeedsItem>
                  <IndexHowNeedsItem>
                    <IndexHowNeedsItemHeader>
                      <IndexHowNeedsItemNumber>4</IndexHowNeedsItemNumber>
                      <IndexHowNeedsItemTitle>Забрать свой выигрыш</IndexHowNeedsItemTitle>
                    </IndexHowNeedsItemHeader>
                    <IndexHowNeedsItemImageBlock>
                      <IndexHowNeedsItemImageForth alt="step" src="/images/fourth-step.svg" />
                    </IndexHowNeedsItemImageBlock>
                    <IndexHowNeedsItemContent>
                      <IndexHowNeedsItemText>В случае выигрыша - произвести мгновенный вывод средств.</IndexHowNeedsItemText>
                    </IndexHowNeedsItemContent>
                  </IndexHowNeedsItem>
                </IndexHowNeedsRow>
              </IndexHowNeeds>
            </IndexHowBody>
          </Container>
        </IndexHow>
        <IndexQuestions id="faq">
          <Container>
            <IndexQuestionsBody>
              <IndexQuestionsTitle>Часто задаваемые вопросы</IndexQuestionsTitle>
              <IndexQuestionsMoneyBox alt="money-box" src="/images/money-box.svg" />
              <IndexList
                items={[
                  {
                    title: "Чем CryptoRaffles отличаются от других розыгрышей?",
                    text: "Проект построен на базе блокчейна Ethereum, с использованием смарт-контрактов, которые в точности описывают правила взаимодействия для каждого участника. Что позволяет утверждать о полной честности и доказуемости результатов наших розыгрышей.",
                  },
                  {
                    title: "Как выбирается победитель и насколько честно это происходит?",
                    text: "CryptoRaffles децентрализованный проект с открытым исходным кодом, таким образом любой может ознакомиться и подтвердить, что механика полностью честна и безопасна. Также перед запуском проекта, был проведен профессиональный аудит независимой стороной. Более подробно с проектом можно ознакомиться по ссылке. ",
                  },
                  {
                    title: "Как я могу принять участие в раффлах?",
                    text: "Для участия вам понадобится ethereum кошелек с нативным ETH токеном для оплаты газа и токеном, выбранным создателем конкретного раффла. Чаще всего используются наиболее популярные токены: ETH, USDC (erc20), USDT Tehter (erc20). Если вы не знакомы с работой децентрализованных приложений, рекомендуем прочитать подробную инструкцию. ",
                  },
                  {
                    title: "В случае выигрыша в раффлах как я могу получить свой приз?",
                    text: "Как только раффл окончен и выявлены победители, вы сможете вывести полученные средства со смарт-контракта, используя тот же ethereum кошелек с которого был приобретен выигравший токен. Выплаты производятся в автоматическом режиме, без участия третих лиц. И главное, что ваш выигрыш останется полностью анонимным.",
                  },
                  {
                    title: "Что произойдет с моими деньгами, если по какой-то причине раффл не будет проведен?",
                    text: "В случае, если раффл будет остановлен по техническим причинам, вы сможете без проблем вывести все вложенные средства. Обратите внимание, что администраторы проекта не имеют доступа к поступившим на контракт средствам. Все средства распределяются согласно правилам, заданным в смарт-контракте.",
                  },
                  {
                    title: "Как я могу принять участие в гивах?",
                    text: "Для участия вам понадобится ethereum кошелек, а также аккаунт в соцсети, необходимый по условиям авторов гива. Перед началом игры вам нужно ознакомиться с условиями, необходимыми к выполнению до начала регистрации. После того как все условия будут выполнены и проверены на соответствие нашими алгоритмами, вы сможете зарегистрироваться для участия совершенно бесплатно. ",
                  },
                  {
                    title: "В случае выигрыша в гиве как я могу получить свои средства?",
                    text: "Как только гив окончен и выявлены победители, вы сможете вывести полученные средства со смарт-контракта, используя тот же ethereum кошелек с которого была произведена регистрация. Выплаты производятся в автоматическом режиме, без участия третих лиц. И главное, что ваш выигрыш останется полностью анонимным.",
                  },
                  {
                    title: "Что такое gas costs и почему я должен платить комиссии за транзакции?",
                    text: "Вознаграждения за включение транзакций в текущий блок, выплачиваются в адрес майнеров в качестве оплаты за выполненную работу. Стоимость газа может значительно изменятся в зависимости от загруженности сети, таким образом регулируя пропускную способность. В этом случае вы можете установить вручную меньшую цену за газ и подождать включения транзакции в последующие блоки в порядке очереди. Этот вариант рекомендуется только для опытных пользователей. Также вы можете       подождать более благоприятного времени дня, когда сеть будет наименее загружена, что существенно снизит ваши затраты на комиссию.",
                  },
                  {
                    title: "Что делать если у меня возникли трудности и я не могу самостоятельно разобраться?",
                    text: "В таком случае вы можете написать в telegram: @OxCryptoRaffles нашему оператору. Он с удовольствием решит любые ваши затруднения.",
                  },
                ]}
              ></IndexList>
            </IndexQuestionsBody>
          </Container>
        </IndexQuestions>
      </IndexBlock>
    </Landing>
  );
}

export default Index;
