import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  /* background-image: url("./desktop-design.jpg"); */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Container = styled.div`
  display: flex;
  height: 27.73rem;
  width: 39.9rem;
  border-radius: 1.78rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(48, 59, 89, 0.15);
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    border-radius: 0;
  }
`;

// ## Result Container & Children ##
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  padding: 2rem;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgb(49, 43, 230) 0%,
    rgb(101, 66, 255) 100%
  );
  border-radius: 2rem;
  position: relative;
  gap: 2rem;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    border-radius: 0 0 2rem 2rem;
  }
`;

export const ResultTitle = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.7);
  transform: translateX(-2px);
  font-weight: 600;
`;

export const ResultCircle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 11rem;
  width: 11rem;
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export const ResultCircleTitle = styled.h2`
  font-size: 3.85rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 1);
  transform: translateX(-1px);
`;

export const ResultCircleSubtitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.3);
  transform: translateX(-1px) translateY(-7px);
  font-weight: 600;
`;

export const ResultDescTitle = styled.h2`
  font-size: 1.75rem;
  color: white;
  transform: translateX(-2px);
  font-weight: 500;
  margin-top: -12px;
`;

export const ResultDesc = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  padding: 0 18px;
  text-align: center;
  margin-top: -20px;
`;

// ## Summary Container & Children ##
export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  padding: 2rem 2.3rem;
  height: 100%;
  gap: 0.95rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const SummaryTitle = styled.h1`
  font-size: 1.3rem;
  transform: translateX(-2px);
  font-weight: 800;
  color: rgb(38, 49, 72);
  margin-bottom: 10px;
`;

export const SummaryStat = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  width: 100%;
  border-radius: 0.5rem;
  position: relative;
  &:hover {
    background-color: ${(props) => props.color};
  }
`;

const BorderCorner = styled.div`
  position: absolute;
  height: 10px;
  width: 10px;
  opacity: 0.2;
  background-color: transparent;
`;

export const BorderTopLeft = styled(BorderCorner)`
  top: 0;
  left: 0;
  border-radius: 15px 0 0 0;
  border-top: 1px solid ${(props) => props.color};
  border-left: 1px solid ${(props) => props.color};
`;

export const BorderTopRight = styled(BorderCorner)`
  top: 0;
  right: 0;
  border-radius: 0 15px 0 0;
  border-top: 1px solid ${(props) => props.color};
  border-right: 1px solid ${(props) => props.color};
`;

export const BorderBottomLeft = styled(BorderCorner)`
  bottom: 0;
  left: 0;
  border-radius: 0 0 0 15px;
  border-bottom: 1px solid ${(props) => props.color};
  border-left: 1px solid ${(props) => props.color};
`;

export const BorderBottomRight = styled(BorderCorner)`
  bottom: 0;
  right: 0;
  border-radius: 0 0 15px 0;
  border-bottom: 1px solid ${(props) => props.color};
  border-right: 1px solid ${(props) => props.color};
`;

export const SummaryIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18px;
  width: 18px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 0.75rem;
`;

export const SummaryText = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: rgb(38, 49, 72);
  margin-left: 0.7rem;
`;

export const SummaryPoint = styled.div`
  font-size: 1rem;
  color: rgb(38, 49, 72);
  margin-left: auto;
  margin-right: 0.8rem;
  color: rgba(0, 0, 0, 0.4);
  font-weight: 800;
`;

export const SummaryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.1rem;
  width: 102%;
  border-radius: 1.5rem;
  background: rgb(48, 58, 90);
  border: none;
  cursor: pointer;
  margin-top: 1.1rem;
  margin-left: -2px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  transform: translateY(1px);
  &:hover {
    background: linear-gradient(
      0deg,
      rgb(49, 43, 230) 0%,
      rgb(101, 66, 255) 100%
    );
  }
`;