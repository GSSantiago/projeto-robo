import React, { useEffect, useState } from "react";
import Messages from "../../../components/Messages";

function FeelingsChat() {
  const [emotion, setEmotion] = useState("");

  const statsConfig = {
    sendDatainterval: 5000,
    tickInterval: 1000,
    stopAfter: 7200000,
    licenseKey: "skd771eb20994b29b0807ea4bc641ecca4b026c8b959cb",
  };
  const statisticsUploader = new MorphCastStatistics.StatisticsUploader(
    statsConfig
  );

  useEffect(() => {
    // Initialize MorphCast API
    CY.loader()
      .licenseKey("sk3295b7530925aeef0db70edca86c715cef5060c54479")
      .addModule(CY.modules().FACE_AROUSAL_VALENCE.name, { smoothness: 0.7 })
      .addModule(CY.modules().FACE_EMOTION.name, { smoothness: 0.4 })
      .addModule(CY.modules().FACE_ATTENTION.name, { smoothness: 0.83 })
      .addModule(CY.modules().ALARM_LOW_ATTENTION.name, {
        timeWindowMs: 5000,
        initialToleranceMs: 7000,
        threshold: 0.33,
      })
      .addModule(CY.modules().FACE_WISH.name, { smoothness: 0.8 })
      .addModule(CY.modules().FACE_POSE.name, { smoothness: 0.65 })
      .addModule(CY.modules().FACE_AGE.name, { rawOutput: false })
      .addModule(CY.modules().FACE_GENDER.name, {
        smoothness: 0.95,
        threshold: 0.7,
      })
      .addModule(CY.modules().FACE_FEATURES.name, { smoothness: 0.9 })
      .addModule(CY.modules().FACE_DETECTOR.name, {
        maxInputFrameSize: 320,
        smoothness: 0.83,
      })
      .addModule(CY.modules().ALARM_MORE_FACES.name, {
        timeWindowMs: 3000,
        initialToleranceMs: 7000,
        threshold: 0.33,
      })
      .addModule(CY.modules().ALARM_NO_FACE.name, {
        timeWindowMs: 10000,
        initialToleranceMs: 7000,
        threshold: 0.75,
      })
      .addModule(CY.modules().DATA_AGGREGATOR.name, {
        initialWaitMs: 2000,
        periodMs: 1000,
      })
      .addModule(CY.modules().FACE_POSITIVITY.name, {
        smoothness: 0.4,
        gain: 2,
        angle: 17,
      })
      .load()
      .then(async ({ start, stop }) => {
        await start();
        await statisticsUploader.start();

        setTimeout(async () => {
          await statisticsUploader.stop();
          await stop();
        }, statsConfig.stopAfter);
      });

    // Event listener for MorphCast API to get emotion data
    const handleEmotionData = (evt) => {
      console.log("Event detail:", evt.detail); // Add this line to inspect the data

      // Adjust the following line based on the actual structure of evt.detail
      const emotionData = Array.isArray(evt.detail)
        ? evt.detail.find((data) => data.type === "FACE_EMOTION")
        : null;

      if (emotionData && emotionData.emotion) {
        setEmotion(emotionData.emotion);
      }
    };

    window.addEventListener(
      CY.modules().FACE_AROUSAL_VALENCE.eventName,
      (evt) => {
        /*const FACE_AROUSAL_VALENCE_EVENT = {
    output: {
      arousal: Number,
      valence: Number,
      affects38 : { "Afraid": Number, "Amused": Number, .. },
      affects98 : { "Adventurous": Number, "Afraid": Number, .. },
      quadrant : String
        }
      }
      */

        /* adicinado para gerar no consoleos detalhes do objeto FACE_AROUSAL_VALENCE */
        console.log("FACE_AROUSAL_VALENCE detail", evt.detail);

        /* 
      
      //adicinado para gerar no console as coordenadas de arouse e valencia
      console.log('Face arousal result:', evt.detail.output.arousal, 'Face valence result', evt.detail.output.valence);             
      

      // Armazenar valen_camera localmente
      localStorage.setItem('valen_camera', evt.detail.output.valence);

      // Recuperar valen_camera do armazenamento local
      const valen_camera_recuperado = localStorage.getItem('valen_camera');

      // Exibir valen_camera recuperado no console
      console.log('Valor de valen_camera recuperado:', valen_camera_recuperado);

      */
      }
    );

    let emotionData = []; // Array to store emotion data

    // Event listener for MorphCast API to get emotion data
    window.addEventListener(CY.modules().FACE_EMOTION.eventName, (evt) => {
      console.log("FACE_EMOTION detail", evt.detail);

      const dominantEmotion = evt.detail.output.dominantEmotion;
      const currentTime = new Date().toLocaleTimeString();

      console.log(`Dominant Emotion at ${currentTime}:`, dominantEmotion);

      emotionData.push({ time: currentTime, emotion: dominantEmotion });

      // Update the state with the latest dominant emotion
      setEmotion(dominantEmotion);
    });

    // Cleanup
    return () => {
      window.removeEventListener(
        CY.modules().FACE_EMOTION.eventName,
        handleEmotionData
      );
    };
  }, []);

  return (
    <>
      <Messages.Robot>
        <p>
          Olá! Eu sou o seu colega de curso, nascido com a mais recente
          tecnologia para estudar e aprender sobre programação e o dia a dia.
          Estou estudando diversas matérias e posso ajudá-lo de diversas
          maneiras caso precise. Você esta precisando de algo? Se você permitir,
          posso analisar a sua feição e assim podemos conversar sobre o que você
          está sentindo agora.
        </p>
        {emotion && <p>Parece que você está se sentindo {emotion}.</p>}
      </Messages.Robot>
    </>
  );
}

export default FeelingsChat;