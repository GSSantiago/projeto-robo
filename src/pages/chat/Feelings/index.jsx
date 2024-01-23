import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Messages from "../../../components/Messages";

function FeelingsChat() {
  const [emotion, setEmotion] = useState("");
  const [isActive, setActive] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize MorphCast API
    CY.loader()
      .licenseKey("skd771eb20994b29b0807ea4bc641ecca4b026c8b959cb")
      .addModule(CY.modules().FACE_AROUSAL_VALENCE.name, { smoothness: 0.7 })
      .addModule(CY.modules().FACE_EMOTION.name, { smoothness: 0.4 })
      .addModule(CY.modules().FACE_ATTENTION.name, { smoothness: 0.83 })
      .addModule(CY.modules().DATA_AGGREGATOR.name, {
        initialWaitMs: 2000,
        periodMs: 1000,
      })
      .load()
      .then(({ start, stop }) => {
        // Store the start function for later use
        window.startEmotionAnalysis = start;
      });

    // Event listener for MorphCast API to get emotion data
    const handleEmotionData = (evt) => {
      const emotionData = evt.detail.find(
        (data) => data.type === "FACE_EMOTION"
      );
      if (emotionData && emotionData.emotion) {
        setEmotion(emotionData.emotion);
      }
    };

    window.addEventListener(
      CY.modules().DATA_AGGREGATOR.eventName,
      handleEmotionData
    );

    // Cleanup
    return () => {
      window.removeEventListener(
        CY.modules().DATA_AGGREGATOR.eventName,
        handleEmotionData
      );
    };
  }, []);

  const startEmotionAnalysis = () => {
    // Start the emotion analysis if the start function is available
    if (window.startEmotionAnalysis) {
      window.startEmotionAnalysis();
    }
  };

  const userMessages = [
    {
      id: 1,
      content: "Analise minha feição, por favor.",
      action: startEmotionAnalysis,
    },
    // ... other user messages ...
  ];

  const redirectTo = (link) => {
    setTimeout(() => navigate(link), 3000);
  };

  return (
    <>
      <Messages.Robot>
        {
          <p>
            Olá! Eu sou o seu colega de curso, nascido com a mais recente
            tecnologia para estudar e aprender sobre programação e o dia a dia.
            Estou estudando diversas matérias e posso ajudá-lo de diversas
            maneiras caso precise. Você esta precisando de algo ? Se você
            permitir, posso analisar a sua feição e assim podemos conversar
            sobre o que você está sentindo agora, ou, talvez queira saber onde
            fica as salas aqui no nosso departamento, já sei, você quer saber as
            curiosidades da faculdade com a computação ?{" "}
          </p>
        }
        {<p>Parece que você está se sentindo {emotion}.</p>}
      </Messages.Robot>

      {userMessages.map((message) => (
        <Messages.User
          isActive={isActive === message.id}
          key={message.id}
          onClick={() => {
            if (!isActive) {
              setActive(message.id);
              message.action ? message.action() : redirectTo(message.redirect);
            }
          }}
        >
          {message.content}
        </Messages.User>
      ))}
    </>
  );
}

export default FeelingsChat;
