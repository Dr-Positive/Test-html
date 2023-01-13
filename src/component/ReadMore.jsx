import React, { useState } from "react";
import { ContentBlock } from "./ContentBlock";
import "./ReadMore.module.scss";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <button onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "Подробнее" : " Скрыть"}
      </button>
    </p>
  );
};

const Content = () => {
  return (
    <div className="container">
      <h2>
        <ContentBlock
          title={"Выберите свой тариф на BLIZKO в Екатеринбурге"}
          subtitle={"ПОКУПКА ПОСЕТИТЕЛЕЙ ИЛИ ПЕРЕХОДОВ"}
          valid={false}
        >
          <ReadMore>
            Размещение на торговой площадке BLIZKO Место в каталогах BLIZKO в
            зависимости от цены посетителя. Оформление онлайн-магазина Готовые
            шаблоны дизайна магазина. Подключение онлайн-оплаты и доставки
            Подключим сервисы доставки и онлайн-оплаты при наличии у вас
            договора с партнером. Сервисы ЮKassа, Сбербанк, Pay Keeper,
            Альфа-банк, Boxberry, Деловые линии, СДЭК. Обслуживание магазина
            Сервисная команда вашей компании: контент-менеджер администрирует
            каталог магазина, менеджер по развитию предлагает инструменты
            площадки улучшения результат. Информационно-отчетный звонок или
            письмо - 1 раз в 2 месяца. Разработаем рекомендации для компании по
            улучшению результатов продвижения.
          </ReadMore>
        </ContentBlock>
      </h2>
    </div>
  );
};

export default Content;
