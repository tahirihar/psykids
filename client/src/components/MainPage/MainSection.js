import React from 'react';
import { IoPlayCircleOutline } from 'react-icons/io5';
import { v4 as uuidv4 } from 'uuid';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';

const MainSection = () => {
  const items = [
    {
      value: '/images/band.jpg',
      title: 'смотреть онлайн',
      href: '/',
      icon: IoPlayCircleOutline,
    },
    {
      value: '/images/sea cat.jpg',
      title: 'смотреть онлайн',
      href: '/',
      icon: IoPlayCircleOutline,
    },
    {
      value: '/images/portrain.jpg',
      title: 'смотреть онлайн',
      href: '/',
      icon: IoPlayCircleOutline,
    },
  ];

  const itemsList = [
    {
      value: '/images/band.jpg',
     
      title: 'Группировка [1 сезон]',
      href: '/',
      key: uuidv4(),
      icon: IoPlayCircleOutline,
      discription:
        'Спин-офф про злодея Пингвина из киновселенной DC. Сериал расскажет о становлении персонажа, также известного под именем...',
    },
    {
      value: '/images/portrain.jpg',
      title: 'Портрет [2 сезон]',
      href: '/',
      key: uuidv4(),
      icon: IoPlayCircleOutline,
      discription:
        'Спин-офф про злодея Пингвина из киновселенной DC. Сериал расскажет о становлении персонажа, также известного под именем...',
    },
    {
      value: '/images/sea cat.jpg',
      title: 'У океана [4 сезон]',
      href: '/',
      key: uuidv4(),
      icon: IoPlayCircleOutline,
      discription:
        'Спин-офф про злодея Пингвина из киновселенной DC. Сериал расскажет о становлении персонажа, также известного под именем...',
    },
    {
      value: '/images/band.jpg',
      title: 'Группировка [1 сезон]',
      href: '/',
      key: uuidv4(),
      icon: IoPlayCircleOutline,
      discription:
        'Спин-офф про злодея Пингвина из киновселенной DC. Сериал расскажет о становлении персонажа, также известного под именем...',
    },
    {
      value: '/images/portrain.jpg',
      title: 'Портрет [2 сезон]',
      href: '/',
      key: uuidv4(),
      icon: IoPlayCircleOutline,
      discription:
        'Спин-офф про злодея Пингвина из киновселенной DC. Сериал расскажет о становлении персонажа, также известного под именем...',
    },
    {
      value: '/images/sea cat.jpg',
      title: 'У океана [4 сезон]',
      href: '/',
      key: uuidv4(),
      icon: IoPlayCircleOutline,
      discription:
        'Спин-офф про злодея Пингвина из киновселенной DC. Сериал расскажет о становлении персонажа, также известного под именем...',
    },
    {
      value: '/images/band.jpg',
      title: 'Группировка [1 сезон]',
      href: '/',
      key: uuidv4(),
      icon: IoPlayCircleOutline,
      discription:
        'Спин-офф про злодея Пингвина из киновселенной DC. Сериал расскажет о становлении персонажа, также известного под именем...',
    },
    {
      value: '/images/portrain.jpg',
      title: 'Портрет [2 сезон]',
      href: '/',
      key: uuidv4(),
      icon: IoPlayCircleOutline,
      discription:
        'Спин-офф про злодея Пингвина из киновселенной DC. Сериал расскажет о становлении персонажа, также известного под именем...',
    },
    {
      value: '/images/sea cat.jpg',
      title: 'У океана [4 сезон]',
      href: '/',
      key: uuidv4(),
      icon: IoPlayCircleOutline,
      discription:
        'Спин-офф про злодея Пингвина из киновселенной DC. Сериал расскажет о становлении персонажа, также известного под именем...',
    },
    {
      value: '/images/band.jpg',
      title: 'Группировка [1 сезон]',
      href: '/',
      key: uuidv4(),
      icon: IoPlayCircleOutline,
      discription:
        'Спин-офф про злодея Пингвина из киновселенной DC. Сериал расскажет о становлении персонажа, также известного под именем...',
    },
    {
      value: '/images/portrain.jpg',
      title: 'Портрет [2 сезон]',
      href: '/',
      key: uuidv4(),
      icon: IoPlayCircleOutline,
      discription:
        'Спин-офф про злодея Пингвина из киновселенной DC. Сериал расскажет о становлении персонажа, также известного под именем...',
    },
    {
      value: '/images/sea cat.jpg',
      title: 'У океана [4 сезон]',
      href: '/',
      key: uuidv4(),
      icon: IoPlayCircleOutline,
      discription:
        'Спин-офф про злодея Пингвина из киновселенной DC. Сериал расскажет о становлении персонажа, также известного под именем...',
    },
    {
      value: '/images/band.jpg',
      title: 'Группировка [1 сезон]',
      href: '/',
      key: uuidv4(),
      icon: IoPlayCircleOutline,
      discription:
        'Спин-офф про злодея Пингвина из киновселенной DC. Сериал расскажет о становлении персонажа, также известного под именем...',
    },
    {
      value: '/images/portrain.jpg',
      title: 'Портрет [2 сезон]',
      href: '/',
      key: uuidv4(),
      icon: IoPlayCircleOutline,
      discription:
        'Спин-офф про злодея Пингвина из киновселенной DC. Сериал расскажет о становлении персонажа, также известного под именем...',
    },
    {
      value: '/images/sea cat.jpg',
      title: 'У океана [4 сезон]',
      href: '/',
      key: uuidv4(),
      icon: IoPlayCircleOutline,
      discription:
        'Спин-офф про злодея Пингвина из киновселенной DC. Сериал расскажет о становлении персонажа, также известного под именем...',
    },
  ];
  return (
    <>
      <SectionOne items={items} />
      <SectionTwo itemsList={itemsList} />
    </>
  );
};

export default MainSection;
