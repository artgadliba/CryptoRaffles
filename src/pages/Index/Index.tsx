import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { ethers } from "ethers";
import { getETHPrice } from "../../utils/getETHPrice";
import { numberWithCommas } from "../../utils/numberWithCommas";
import truncateEthAddress from "truncate-eth-address";

interface IIndexSlider {
  raffleID?: string;
  giveawayID?: string;
  end_timestamp: number;
  grand_prize: number;
  paytoken: string;
  owner: string;
  promo_name: string;
}

interface IWinnerData {
  wallet: string;
  giveaway_name?: string;
  raffle_name?: string;
  prize: string;
  emojiFirst: string;
  emojiSecond: string;
  emojiThird: string;
}

function Index() {
  const [items, setItems] = useState<Array<IIndexSlider>>();
  const [winners, setWinners] = useState<Array<IWinnerData>>([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/promotions/")
    .then(res => {
      let promoData = res.data;
      setItems(promoData);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/winners/")
    .then(res => {
      let data = res.data;
      let paytoken = data.paytoken;
      let winnersList: Array<IWinnerData> = []
      for (let i = 0; i < data.length; i ++) {
        let playerPrize = 0;
        if (paytoken = "0x0000000000000000000000000000000000000000") {
          getETHPrice()
          .then(ethRate => {
            let formatedPrize = ethers.utils.formatEther(String(data[i].prize));
            playerPrize = Math.round(Number(formatedPrize) * ethRate);
          })
          .catch(err => {
            console.log(err);
          })
        } else {
          playerPrize = Math.round(data[i].prize / 10 ** 6);
        }
        if (data[i].raffle_name != undefined) {
          winnersList.push({
            wallet: truncateEthAddress(data[i].wallet),
            raffle_name: data[i].raffle_name,
            prize: "$" + numberWithCommas(playerPrize),
            emojiFirst: `/images/emoji/${Math.floor(Math.random() * 20) + 1}.png`,
            emojiSecond: `/images/emoji/${Math.floor(Math.random() * 20) + 1}.png`,
            emojiThird: `/images/emoji/${Math.floor(Math.random() * 20) + 1}.png`
          })
        } else if (data[i].giveaway_name != undefined) {
          winnersList.push({
            wallet: truncateEthAddress(data[i].wallet),
            giveaway_name: data[i].giveaway_name,
            prize: "$" + numberWithCommas(playerPrize),
            emojiFirst: `/images/emoji/${Math.floor(Math.random() * 20) + 1}.png`,
            emojiSecond: `/images/emoji/${Math.floor(Math.random() * 20) + 1}.png`,
            emojiThird: `/images/emoji/${Math.floor(Math.random() * 20) + 1}.png`
          })
        }
      }
      if (winnersList.length === data.length) {
        setWinners(winnersList);
      }
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

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
                <IndexGreetingBottomText>Каждый участник имеет реальную возможность выиграть, благодаря прозрачному и честному механизму работы. Каждый этап можно легко отследить и подтвердить его соответствие правилам.</IndexGreetingBottomText>
                <IndexGreetingConnect to="/account">Подключиться</IndexGreetingConnect>
              </IndexGreetingContent>
              <IndexSlider items={items}/>
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
          <IndexWinnersLine items={winners} />
        </IndexWinners>
        <IndexHow id="how">
          <IndexHowBlurredCircle />
          <Container>
            <IndexHowBody>
              <IndexHowBackground alt="background" src="/images/rected-background.svg" />
              <IndexHowTitle>Как это работает:</IndexHowTitle>
              <IndexHowText>
                <span>CryptoRaffles построен на базе смарт контрактов, которые содержат в себе точные неизменяемые правила. </span>Что гарантирует полную честность в проведении розыгрышей. Ни автор розыгрыша, ни его оператор не имеют возможности как либо манипулировать
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
                      <IndexHowNeedsItemLink to="/account">Подключиться</IndexHowNeedsItemLink>
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
                    text: "Проект представляет собой децентрализованную платформу, построенную на неизменяемых смарт контрактах в блокчейне Ethereum, которые в точности описывают правила взаимодействия для каждого участника. Что позволяет утверждать о полной честности и доказуемости результатов наших розыгрышей. Перед запуском проекта, был проведен профессиональный аудит независимой стороной.",
                    openHeight: 210,
                    openMobileHeight: 340,
                    openMobileHeightSmall: 420,
                  },
                  {
                    title: "Как выбирается победитель и насколько честно это происходит?",
                    text: "Каждый этап розыгрышей будет записан в блокчейн, откуда не может быть удален или как-либо изменен. Для определения победителей нами используется ведущий международный сервис оракулов данных Chainlink, предоставляющий подтвержденные рандомно-генерируемые значения. Chainlink сотрудничают с крупнейшими мировыми крипто проектами, управляющими миллиардами долларов через свои смарт контракты. Что подтверждает надежность предлагаемых ими решений.",
                    openHeight: 240,
                    openMobileHeight: 370,
                    openMobileHeightSmall: 450,
                  },
                  {
                    title: "Как я могу принять участие в раффлах?",
                    text: "Для участия вам понадобится ethereum кошелек с нативным ETH токеном для оплаты транзакции и токенами для оплаты, указанными в условиях участия. Чаще всего используются наиболее популярные токены: ETH, USDC (erc20), USDT Tehter (erc20). Если у вас пока нет зарегистрированного кошелька, вы можете легко создать его не выходя из нашего приложения.",
                    openHeight: 210,
                    openMobileHeightSmall: 370,
                  },
                  {
                    title: "В случае победы в раффлах как я могу получить свой выигрыш?",
                    text: "Как только раффл окончен и выявлены победители, вы сможете вывести призовые токены со смарт контракта, используя тот же ethereum кошелек с которого был приобретен выигравший токен. Выплаты производятся в автоматическом режиме, без участия третих лиц. И главное, что ваш выигрыш останется полностью анонимным.",
                    openHeight: 210,
                    openMobileHeight: 290,
                    openMobileHeightSmall: 320,
                  },
                  {
                    title: "Что произойдет с моими деньгами, если по какой-то причине раффл не будет проведен?",
                    text: "В случае, если раффл будет остановлен по техническим причинам, вы сможете без проблем вывести все вложенные средства. Обратите внимание, что администраторы проекта не имеют доступа к поступившим на контракт средствам. Все средства распределяются согласно правилам, заданным в смарт контракте.",
                    openHeight: 210,
                    openMobileHeight: 290,
                  },
                  {
                    title: "Как я могу принять участие в гивах?",
                    text: "Для участия вам понадобится ethereum кошелек, а также аккаунт в соцсети, указанный в условиях автором гива. Перед началом игры вам нужно ознакомиться с условиями и выполнить их. Выполнение условий проверяется автоматически при помощи алгоритмов в момент регистрации. Участие бесплатное. Если у вас пока нет зарегистрированного кошелька, вы можете легко создать его не выходя из нашего приложения.",
                    openHeight: 210,
                    openMobileHeight: 340,
                    openMobileHeightSmall: 390,
                  },
                  {
                    title: "В случае победы в гиве как я могу получить свой выигрыш?",
                    text: "Как только гив окончен и выявлены победители, вы сможете вывести призовые токены со смарт контракта, используя тот же ethereum кошелек с которого была произведена регистрация. Выплаты производятся в автоматическом режиме, без участия третих лиц. И главное, что ваш выигрыш останется полностью анонимным.",
                    openHeight: 210,
                    openMobileHeight: 290,
                  },
                  {
                    title: "Что такое gas costs и почему я должен платить комиссии за транзакции?",
                    text: "Вознаграждения за включение транзакций в текущий блок, выплачиваются в адрес майнеров в качестве оплаты за выполненную работу. Стоимость газа может значительно изменятся в зависимости от загруженности сети, таким образом регулируя пропускную способность. В этом случае вы можете установить вручную меньшую цену за газ и подождать включения транзакции в последующие блоки в порядке очереди. Этот вариант рекомендуется только для опытных пользователей. Также вы можете       подождать более благоприятного времени дня, когда сеть будет наименее загружена, что существенно снизит ваши затраты на комиссию.",
                    openHeight: 270,
                    openMobileHeight: 445,
                    openMobileHeightSmall: 570,
                  },
                  {
                    title: "Для чего нужна транзакция разрешения смарт контракту на управление токенами?",
                    text: "Любое взаимодействие с децентрализованными платформами, в том числе и CryptoRaffles, происходит через смарт контракты.  Для отправки токенов ERC20 на контракт через вызов его функции (например при покупке токенов), сначала необходимо предоставить контракту разрешение на управление вашими токенами. Сумма на которую вы предоставляете разрешение - определяется вами. Но она не может быть меньше стоимости на которую вы приобретаете токены. Если вы планируете покупать токены неоднократно, вы можете дать разрешение на большую сумму, чем нужна вам сейчас. Таким образом, вы можете сэкономить на комиссиях за будущие транзакции.",
                    openHeight: 270,
                    openMobileHeight: 470,
                    openMobileHeightSmall: 570,
                  },
                  {
                    title: "Что делать если у меня возникли трудности и я не могу самостоятельно разобраться?",
                    text: "В таком случае вы можете написать в telegram: @OxCryptoRaffles нашему оператору. Он ооперативно решит любые ваши затруднения.",
                    openHeight: 155,
                    openMobileHeight: 190,
                    openMobileHeightSmall: 215,
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
