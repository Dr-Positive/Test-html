import "./App.scss";
import logo from "./image/LOGO_BLIZKO.png";
import plans from "./image/tariff_plans.png";
import client1 from "./image/Client2.png";
import client2 from "./image/Client2.png";
import client1small from "./image/Client1small.png";
import client2small from "./image/Client2small.png";
import T_small from "./image/T_small.png";
import vk_small from "./image/vk_small.png";
import youtube_small from "./image/youtube_small.png";
import telegram_small from "./image/telegram_small.png";
import whatsapp_small from "./image/whatsapp_small.png";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import { ContentBlock } from "./component/ContentBlock.jsx";
import { PackageBlock } from "./component/PackageBlock.jsx";
import { ButtonLink } from "./component/buttonLink.jsx";
import React, { useState } from "react";
import Content from "./component/ReadMore.jsx";

function App() {
  return (
    <div>
      <div className="header">
        <div className="header__inner">
          <div className="logo">
            <p className="logo__link">
              <img src={logo} alt="logo" />
            </p>
          </div>
          <div className="menu">
            <button className="menu__btn"></button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container__image">
          <div className="plan">
            <div>
              <div className="plan__title">Тарифные планы</div>
              <img src={plans} alt="logo" className="plan__image" />
              <div className="plan__pcimage"></div>
            </div>

            <div className="plan__text">
              Зарегистрируйте компанию и начинйте продажи на BLIZKO
            </div>
          </div>
        </div>

        <div>
          <ContentBlock
            title={"BLIZKO - федеральная торговая площадка"}
            text={
              "Здесь каждый месяц миллионы покупателей выбирают товары и услуги от десятков тысяч компаний. Пройдите простую регистрацию и получите доступ в кабинет компании. Вам будут доступны все сервисы для продаж через BLIZKO, публикация товаров и услуг, управление размещением товаров в листинге."
            }
            btntext={"Подобрать тариф"}
            href={
              "https://ekb.blizko.ru/sellers/reklama#popup:marquiz_62e3cc855316b4004d15d55f"
            }
          ></ContentBlock>

          

<Content></Content>

          <ContentBlock
            text={
              "Для клиентов с развитыми интернет-магазинами мы готовы предоставить переходы заинтересованных покупателей на соответствующие товарные страницы интернет-магазинов. Предложение зависит от рыночного сегмента клиента и рассчитывается индивидуально."
            }
            btntext={"Зарегестрировать компанию"}
            href={
              "https://ekb.blizko.ru/company_wizard/new?page=sellersreklama&button=true&type=rc_standart"
            }
          ></ContentBlock>
         
          <ContentBlock
            title={
              "Эффективные дополнительные каналы для привлечения покупателей и роста заявок"
            }
            subtitle={"Контекстная реклама"}
            text={
              "Подключим дополнительные рекламные каналы: контекстную рекламу, социальные сети и т.д."
            }
            btntext={"Подробнее"}
            href={"https://ekb.blizko.ru/sellers/megatraffic"}
          ></ContentBlock>

          <ContentBlock
            subtitle={"Баннерная реклама"}
            text={
              "Выделим ваши предложения, разместив медийный баннер в товарных рубриках на торговой площадке BLIZKO."
            }
            btntext={"Подробнее"}
            href={"https://ekb.blizko.ru/sellers/banner"}
          ></ContentBlock>

          <ContentBlock
            subtitle={" Реклама в соцсетях"}
            text={
              "Приведем на ваш сайт дополнительных посетителей из социальных сетей."
            }
            btntext={"Подробнее"}
            href={"https://ekb.blizko.ru/sellers/social_network"}
          ></ContentBlock>


            <div className="reviewsBlock">
              <div className="reviewsBlock__image">
                <img src={client1small} alt="client1small" />
              </div>
              <div className="reviewsBlock__title">
                <h1>
                  Николай Михайлович Ильяшенко, руководитель отдела продаж
                  БилдТехно, Краснодар
                </h1>
              </div>
              <div className="reviewsBlock__imagetext">
                <h3>Пакет Серебряный</h3>
              </div>
              <div className="reviewsBlock__subtitle">
                <p>Нас отлично находят</p>
              </div>
              <div className="reviewsBlock__text">
                <p>
                  Получаем постоянное внимание со стороны менеджеров - при том,
                  что нам редко требуются какие-либо работы по сайту на BLIZKO,
                  ассортимент у нас стабильный, цены договорные. Размещаемся мы
                  на BLIZKO только в Краснодаре, а заявки к нам поступают и из
                  Хабаровска, и из Калининграда - мы продаем высокотехнологичные
                  полимеры для ремонта и защиты различных материалов, таких
                  сайтов всего несколько в стране, поэтому нас отлично находят.{" "}
                </p>
                <div>
                  <button className="button">
                    <a href="https://ekb.blizko.ru/sellers/response">Подробнее</a>
                  </button>
                </div>
              </div>
           
          </div>
          <div>
            <div className="reviewsBlock">
              <div className="reviewsBlock__image">
                <img src={client2small} alt="client2" />
              </div>
              <div className="reviewsBlock__title">
                <h1>
                  Сайдмагомедова Яна Сергеевна , менеджер по рекламе «НПК
                  «Специальная металлургия», Екатеринбург
                </h1>
              </div>
              <div className="reviewsBlock__imagetext">
                <h3>Пакет Платиновый</h3>
              </div>
              <div className="reviewsBlock__subtitle">
                <p>По нашим ключевым запросам мы в первых строках</p>
              </div>
              <div className="reviewsBlock__text">
                <p>
                  Нам нравится работа всех сотрудников, с которыми мы успели
                  поработать за несколько лет. Нам всегда оперативно отвечают и
                  помогают. Что касается сайта, то с ним довольно удобно
                  работать, все интуитивно понятно. По выдаче: в поисковие
                  blizko.ru по многим нашим ключевым запросам мы в первых
                  строках, это большой плюс.
                </p>
                <div>
                  <button className="button">
                    <a href="https://ekb.blizko.ru/sellers/response">Подробнее</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="packageBlock">
            <div className="packageBlock__title">
              <h1>ывыв</h1>
            </div>
            <div className="packageBlock_text">
              <p>
                Подходит большинству компаний с каталогом до 1000 товаров или
                услуг. В пакет входят все базовые опции для быстрого старта
                продаж. Подробнее
              </p>
            </div>

            <div className="packageBlock_cost">
              <p>12руб</p>
            </div>
          </div> */}
          <PackageBlock
            title={"ПАКЕТ СТАНДАРТ"}
            cost={"Цена от 47 900 ₽/год"}
            text={
              "Подходит большинству компаний с каталогом до 1000 товаров или услуг. В пакет входят все базовые опции для быстрого старта продаж."
            }            
          ></PackageBlock>
          
          <PackageBlock
            title={"ПАКЕТ ОПТИМУМ"}
            cost={"Цена от 107 900 ₽/год"}
            text={
              "Рекомендован компаниям услугового рынка и товарного рынка с ассортиментом до 1000 единиц.В данный пакет входит индивидуальный дизайн главной страницы, качественная проработка каталога и товаров. Все эти работы увеличат количество посетителей на сайте и конверсию, а значит и продажи."
            }
          ></PackageBlock>
          <PackageBlock
            title={"ПАКЕТ ПРЕМИУМ"}
            cost={"Цена от 127 900 ₽/год"}
            text={
              "Тарифный план c максимальными возможностями, обеспечивающий трафик на ваш сайт не только с портала BLIZKO, но и с поисковых систем. Рекомендуется компаниям с ассортиментом от 1000 товаров, большим количеством групп товаров, широкой географией продаж и/или для городов-миллионников. В данный тарифный план включены услуги, напрямую влияющие на рост продаж и стабильный трафик на сайт клиента: индивидуальный дизайн главной страницы, проработка каталога и товаров, медийная кампания, подключение он-лайн сервисов доставки и оплаты."
            }
          ></PackageBlock>
        </div>
      </div>

      <div className="footer">
        <div className="footerBlock">
          <div className="footerBlock__title">
            <h5>BLIZKO для бизнеса</h5>
            <h4 className="footerBlock__text">Как продавать на BLIZKO:</h4>
            <h4 className="footerBlock__paragraph">Старт интернет продаж</h4>
            <h4 className="footerBlock__paragraph">Рост интернет продаж</h4>
            <h4 className="footerBlock__text">Прайс-лист</h4>
            <h4 className="footerBlock__text">Как создать сайт на BLIZKO</h4>
            <h4 className="footerBlock__text">Отзывы наших клиентов</h4>
          </div>
        </div>
        <div className="footerBlock">
          <div className="footerBlock__title">
            <h5>Развитие продаж</h5>
            <h4 className="footerBlock__text">Помощь по работе с BLIZKO</h4>
            <h4 className="footerBlock__text">Расписание вебинаров</h4>
          </div>
        </div>
        <div className="footerBlock">
          <div className="footerBlock__title">
            <h5>Контакты</h5>
            <div className="footerBlock__title">
              <h5>8-800-700-191</h5>
            </div>
          </div>
        </div>
        <div className="footerBlock">
          <div className="footerBlock__title">
            <h5>Мы в соцсетях</h5>
            <img src={telegram_small} alt="telegram__logo" />
            <img src={whatsapp_small} alt="whatsapp_logo" />
          </div>
          <img src={T_small} alt="T_logo" />
          <img src={vk_small} alt="vk_logo" />
          <img src={youtube_small} alt="youtube_logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
