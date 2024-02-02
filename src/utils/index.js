function findModeInArray(emotions) {
  // Filtrar emoções undefined
  const filteredEmotions = emotions.filter((emotion) => emotion !== undefined);

  const frequencyMap = {};

  // Contar a frequência de cada emoção no array filtrado
  filteredEmotions.forEach((emotion) => {
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
  return mode;
}

export default findModeInArray;
