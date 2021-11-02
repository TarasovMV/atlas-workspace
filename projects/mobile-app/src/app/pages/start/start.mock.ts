import {IStartPageItem} from "./start.model";

export const SLIDES: IStartPageItem[] = [
    {
        id: 1,
        icon: 'assets/icon/info.svg',
        image: 'assets/images/potential.png',
        title: 'Карта потенциала',
        description: `Приложение предоставит доступ к карте потенциала ОНПЗ, на которой Вы сможете ознакомиться с показателями определенной установки и перейти к подробной информации`
    },
    {
        id: 2,
        icon: 'assets/icon/support.svg',
        image: 'assets/images/activity.png',
        title: 'Мероприятия и ограничения',
        description: `База данных тех направлений, по которым нужно развивать эффективность завода ОНПЗ. Содержит в себе ограничения, которые не позволяют достичь установке эталонных значений, мероприятия, которые уже реализуются и банк идей.`
    },
    {
        id: 3,
        icon: 'assets/icon/monitoring.svg',
        image: 'assets/images/communication.png',
        title: 'Быстрые коммуникации',
        description: `Пользователя приложения получают канал коммуникации, который позволяет быть в курсе потребностей и проблем предприятия. Все пользователи смогут обсуждать в единой комнате важные вопросы`
    }
];
