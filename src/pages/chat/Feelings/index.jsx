import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Messages from "../../../components/Messages";

function FeelingsChat() {
  const [emotion, setEmotion] = useState("");
  const [isAllow, setIsAllow] = useState(false);
  const [isActive, setActive] = useState(0);


  const navigate = useNavigate();


  const userMessages = [
    {
      id: 4,
      content: 'Sim, pode analisar a minha feição',
      onClick: () => setIsAllow(true)
    },
    {
      id: 5,
      content: 'Não, prefiro que você não analise minha feição',
      response: 'Tudo bem, podemos pensar em outra coisa para fazer',
      redirect: '/chat'
   },
  ]

  const statsConfig = {
    sendDatainterval: 5000,
    tickInterval: 1000,
    stopAfter: 7200000,
    licenseKey: "skd771eb20994b29b0807ea4bc641ecca4b026c8b959cb",
  };
  const statisticsUploader = new MorphCastStatistics.StatisticsUploader(
    statsConfig
  );

  const initializeMorph = () => {
     CY.loader()
     .licenseKey("skd771eb20994b29b0807ea4bc641ecca4b026c8b959cb")
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

   const handleEmotionData = (evt) => {
     console.log("Event detail:", evt.detail); // Add this line to inspect the data

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
       console.log("FACE_AROUSAL_VALENCE detail", evt.detail);

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
  }

  const redirectTo = (link) => { setTimeout(() => navigate(link), 4000)}

  if(isAllow) return(
  <>
  </>)

  return (
    <>
      <Messages.Robot>
        <p>
          Preciso da sua permissão para analisar sua feição, posso ?
        </p>
      </Messages.Robot>
      {userMessages.map((message) => 
            <Messages.User 
               isActive={isActive == message.id} 
               key={message.id} 
               onClick={() => {
                  if(!isActive){
                     setActive(message.id)
                     message.redirect ? redirectTo(message.redirect) : message.onClick()
                  }
               }} 
               seconds={message.id / 2}
            >
               {message.content}
            </Messages.User>
         )   
      }

      {!!isActive && 
      <Messages.Robot typeanimate="true" fitContent>
         {userMessages.find(message => message.id == isActive)?.response || 'Ótimo, vamos lá então.'}
      </Messages.Robot>
    }
    </>
  )
  }

export default FeelingsChat;