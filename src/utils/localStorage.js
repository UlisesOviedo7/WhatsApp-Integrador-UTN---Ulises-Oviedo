
const defaultMessages = {
    1: [
      { id: 1, text: 'No sabes lo que me paso el otro dia jaja', sender: 'contact', time: '2:30 PM' },
      { id: 2, text: 'jaja ni me cuentes, seguro te mandaste alguna', sender: 'me', time: '2:32 PM' },
      { id: 3, text: 'he amigo como estas?', sender: 'contact', time: '2:35 PM' }
    ],
    2: [
      { id: 1, text: 'La proxima arrancamos el laburo con todo', sender: 'contact', time: '3:00 PM' },
      { id: 2, text: 'si xd para que no nos despidan devuelta', sender: 'me', time: '3:05 PM' },
      { id: 3, text: 'el proximo finde sale joda? jaja', sender: 'contact', time: '3:10 PM' }
    ],
    3: [
      { id: 1, text: 'Me vas a contar que paso al final con tu novia?', sender: 'contact',  time: '3:00 PM'},
      { id: 2, text: 'si, la corte y le dije solo amigos, muy intensa para mi', sender: 'me',  time: '3:00 PM'},
      { id: 3, text: 'jaja no podesss', sender: 'contact', time: '4:10 PM' }
    ]
  };
  

  export const getMessagesFromLocalStorage = (contactId) => {
    const messages = localStorage.getItem(`messages-${contactId}`);
    return messages ? JSON.parse(messages) : [];
  };
  
  export const saveMessagesToLocalStorage = (contactId, messages) => {
    localStorage.setItem(`messages-${contactId}`, JSON.stringify(messages));
  };
  

  export const initializeMessagesIfNeeded = (contactId) => {
    const messages = getMessagesFromLocalStorage(contactId);
    
    if (messages.length === 0) {
     
      const initialMessages = defaultMessages[contactId] || [];
      saveMessagesToLocalStorage(contactId, initialMessages);
    }
  };