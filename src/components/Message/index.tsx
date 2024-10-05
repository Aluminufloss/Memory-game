import styled from "styled-components";
import media from "@/utils/media";

type PropsType = {
  message: string;
};

const Message: React.FC<PropsType> = (props) => {
  return (
    <StyledMessage>
      <h3 className="message">{props.message}</h3>
    </StyledMessage>
  );
};

const StyledMessage = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 220px; 
  height: auto; 
  padding: 20px;

  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.colorValues.black};

  background-color: ${(props) => props.theme.colorValues.primary};

  ${media.desktop} {
    width: 180px; 
  }

  .message {
    ${(props) => props.theme.typography.fnSemiBold};
    ${(props) => props.theme.typography.fnTitle3};
    color: ${(props) => props.theme.colorValues.black}; 
  }

  opacity: 0;
  animation: fadeIn 0.3s forwards ease-in-out;
  animation-delay: 0.2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default Message;
