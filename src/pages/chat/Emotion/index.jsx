import Messages from "../../../components/Messages";
import Grid from "../../../components/Gridbox";
import colors from "../../../../constants/colors";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import emotions from "../../../../constants/emotion";

function EmotionChat() {
  const { emotion } = useParams();
  const dominantEmotion = emotions.find(
    (x) => x.emotion.toLowerCase() === emotion
  );

  const globalStyle = {
    fontFamily: "Roboto, sans-serif",
  };

  const emotionDetailsStyle = {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "18px",
    color: "#FFFF",
    marginBottom: "20px",
  };

  const emotionDetailsImageStyle = {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "18px",
    color: "#000",
    marginBottom: "20px",
  };

  const emotionTextStyle = {
    fontWeight: "bold",
  };

  const imageStyle = {
    borderRadius: "10px",
    width: "100%",
    height: "auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const referenceStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "normal",
  };

  return (
    <div style={globalStyle}>
      <Messages.Robot>
        Aqui estão algumas informações detalhadas sobre a emoção selecionada:
      </Messages.Robot>

      <Grid.Wrapper>
        <Grid.Box>
          <h4 style={emotionDetailsStyle}>Explicação Detalhada:</h4>
          <p style={emotionTextStyle}>{dominantEmotion?.details}</p>
        </Grid.Box>

        <Grid.Box bgColor={colors.yellow} color="#000">
          <h4 style={emotionDetailsImageStyle}>Técnica Meditativa:</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              height: "auto",
              marginTop: "20px",
            }}
          >
            <img
              src={dominantEmotion?.image_link}
              alt={`Imagem representando ${dominantEmotion?.emotion}`}
              style={imageStyle}
            />
          </div>
        </Grid.Box>

        <Grid.Box>
          <h4 style={emotionDetailsStyle}>Referências:</h4>
          <ul>
            {dominantEmotion?.references.map((ref, index) => (
              <li key={index}>
                <a
                  href={ref.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={referenceStyle}
                >
                  {ref.title}
                </a>
              </li>
            ))}
          </ul>
        </Grid.Box>
      </Grid.Wrapper>
    </div>
  );
}

export default EmotionChat;
