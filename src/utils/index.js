function findModeInArray(emotions) {
  // Normalizar as emoções: minúsculas e sem espaços
  const normalizedEmotions = emotions.map((emotion) =>
    emotion.toLowerCase().replace(/\s+/g, "")
  );

  const frequencyMap = {};

  // Contar a frequência de cada emoção normalizada
  normalizedEmotions.forEach((emotion) => {
    if (frequencyMap[emotion]) {
      frequencyMap[emotion]++;
    } else {
      frequencyMap[emotion] = 1;
    }
  });

  // Encontrar a emoção mais frequente
  let maxCount = 0;
  let mode = [];
  for (const emotion in frequencyMap) {
    if (frequencyMap[emotion] > maxCount) {
      maxCount = frequencyMap[emotion];
      mode = [emotion];
    } else if (frequencyMap[emotion] === maxCount) {
      mode.push(emotion);
    }
  }

  // Retorna a moda. Se houver múltiplas emoções com a mesma frequência máxima, todas serão retornadas.
  return mode.length === 1 ? mode[0].toLowerCase() : mode.toLowerCase();
}

export default findModeInArray;
