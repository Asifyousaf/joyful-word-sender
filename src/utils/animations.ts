
export const getRandomAnimation = (): string => {
  const animations = [
    'animate-float',
    'animate-pulse-soft',
    'animate-bounce-soft'
  ];
  
  return animations[Math.floor(Math.random() * animations.length)];
};

export const getRandomGradient = (): string => {
  const gradients = [
    'from-joy-pink to-joy-purple',
    'from-joy-purple to-joy-blue',
    'from-joy-blue to-joy-green',
    'from-joy-green to-joy-yellow',
    'from-joy-yellow to-joy-orange',
    'from-joy-orange to-joy-pink'
  ];
  
  return gradients[Math.floor(Math.random() * gradients.length)];
};
