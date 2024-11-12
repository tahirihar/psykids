import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../../asserts/footer.module.css';
import FooterList from './FooterList';

const Footer = () => {
  const items = [
    {
      key: uuidv4(),
      href: '/',
      title: {
        main: 'На главную',
        drama: 'Драмы',
        melodramas: 'Мелодрамы',
        trillers: 'Триллеры',
        biographical: 'Биографические',
        adventure: 'Приключения',
        texSup: 'Техническая поддержка',
        copyHolders: 'Правообладателям',
        agreement: 'Соглашение',
        contact: 'Связаться с нами',
        infor: 'Наша информация о зеркалах',
        FAQ: 'FAQ по сайту',
      },
    },
  ];
  const [isMobile, setisMobile] = useState(window.innerWidth <= 760);

  useEffect(() => {
    const handleResize = () => setisMobile(window.innerWidth <= 760);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        {isMobile ? (
          <>
            <FooterList items={items} start={6} end={9} />
            <FooterList items={items} start={9} end={12} />
          </>
        ) : (
          <>
            <FooterList items={items} start={0} end={3} />
            <FooterList items={items} start={3} end={6} />
            <FooterList items={items} start={6} end={9} />
            <FooterList items={items} start={9} end={12} />
          </>
        )}
      </div>
      <div className={styles.botoms}>
        <h1 className={styles.text}>
          PhysKids: смотреть фильмы и сериалы с английскими и русскими
          субтитрами и оригинальной озвучкой бесплатно
        </h1>
        <br />
        <p className={styles.paragraph}>
          В современном мире изучение английского языка становится все
          более популярным и востребованным. Особенно важно начинать
          изучение языка в детском возрасте, когда дети легко и быстро
          усваивают новую информацию. Одним из эффективных способов
          изучения языка является просмотр фильмов и сериалов на
          английском языке.
        </p>
        <br />
        <p className={styles.paragraph}>
          Однако, для маленьких детей сильное преобладание английской
          речи может быть сложным и запутывающим. Поэтому идеальным
          решением может стать просмотр фильмов и сериалов с
          субтитрами. Предлагаемый вариант позволяет смотреть контент
          на английском языке, одновременно читая его на родном языке.
        </p>
        <br />
        <p className={styles.paragraph}>
          В настоящее время существует множество онлайн-платформ,
          которые предлагают возможность смотреть фильмы и сериалы с
          английскими и русскими субтитрами, а также с оригинальной
          озвучкой. Более того, большинство из них предлагают доступ к
          контенту абсолютно бесплатно. Такой подход позволяет детям
          не только развивать слуховое восприятие и понимание на
          английском языке, но и не упускать детали и смысл сюжета
          благодаря русским субтитрам.
        </p>
        <br />
        <p className={styles.paragraph}>
          Все используемые аудиовизуальные материалы, представленные
          на данном сайте, являются собственностью их изготовителя
          (владельца прав) и охраняются международными правовыми
          конвенциями. Эти материалы предназначены только для
          ознакомления - для прочих целей Вы должны купить
          лицензионную запись.
        </p>
        <br />
        <p className={styles.whiteText}>
          Правообладателям, e-mail:{' '}
          <span className={styles.gold}>projectweball@gmail.com</span>{' '}
          или{' '}
          <a href="/" className={styles.gold}>
            обратная связь
          </a>
          , пожаловаться{' '}
          <a href="/" className={styles.gold}>
            ссылка
          </a>
        </p>

        <p className={styles.whiteText}>
          Другие вопросы и рекламодателям:
          <a href="/" className={styles.gold}>
            {' '}
            контакты
          </a>{' '}
        </p>
        <br />
        <p>
          <a href="/">
            <i>
              <b className={styles.mistake}>
                Если Вы заметили ошибку на сайте, просьба связаться с
                нами.
              </b>
            </i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
