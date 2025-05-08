
export interface PresetMessage {
  id: string;
  text: string;
  author: string;
  category: string;
}

export const presetMessages: PresetMessage[] = [
  {
    id: '1',
    text: 'You are capable of amazing things!',
    author: 'Joyful Word Sender',
    category: 'motivation'
  },
  {
    id: '2',
    text: 'Your smile brightens everyone\'s day!',
    author: 'Joyful Word Sender',
    category: 'compliment'
  },
  {
    id: '3',
    text: 'Believe in yourself and you\'re already halfway there.',
    author: 'Theodore Roosevelt',
    category: 'motivation'
  },
  {
    id: '4',
    text: 'Every day may not be good, but there is something good in every day.',
    author: 'Alice Morse Earle',
    category: 'positivity'
  },
  {
    id: '5',
    text: 'You are enough just as you are.',
    author: 'Meghan Markle',
    category: 'affirmation'
  },
  {
    id: '6',
    text: 'The sun himself is weak when he first rises, and gathers strength and courage as the day gets on.',
    author: 'Charles Dickens',
    category: 'encouragement'
  },
  {
    id: '7',
    text: 'In the middle of difficulty lies opportunity.',
    author: 'Albert Einstein',
    category: 'motivation'
  },
  {
    id: '8',
    text: 'Your potential is endless. Go do what you were created to do.',
    author: 'Joyful Word Sender',
    category: 'encouragement'
  }
];

export const getRandomPresetMessage = (): PresetMessage => {
  return presetMessages[Math.floor(Math.random() * presetMessages.length)];
};

export const getPresetMessagesByCategory = (category: string): PresetMessage[] => {
  return presetMessages.filter(message => message.category === category);
};
