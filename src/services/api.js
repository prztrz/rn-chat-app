// @flow strict

export const mockMessages = [
  {
    id: '1',
    incoming: true,
    message: 'Hi Vladimir'
  },
  {
    id: '2',
    incoming: false,
    message: 'Hi Przemek'
  }
];

export const chats = [
  {
    id: '123',
    title: 'John',
    description: 'Hey there',
    avatar: 'http://www.codetic.net/demo/templates/Privado/img/avatar.png',
    messages: mockMessages
  }
];

export const getChats = () =>
  new Promise(resolve => setTimeout(() => resolve(chats), 1000));

export const getMessagesById = (id?: string) =>
  new Promise(resolve => setTimeout(() => resolve(mockMessages), 1000));
