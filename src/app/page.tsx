"use client";

import * as S from "@/styles/styles";

type TSummary = {
  icon: string;
  title: string;
  point: number;
  color: string;
  hoverColor: string;
};

export default function Home() {
  const summary: TSummary[] = [
    {
      icon: "reaction",
      title: "Reaction",
      point: 80,
      color: "rgba(255, 85, 85, .8)",
      hoverColor: "rgba(255, 85, 85, .1)",
    },
    {
      icon: "memory",
      title: "Memory",
      point: 92,
      color: "rgba(255, 178, 30, .8)",
      hoverColor: "rgba(255, 178, 30, .1)",
    },
    {
      icon: "verbal",
      title: "Verbal",
      point: 61,
      color: "rgba(0, 187, 143,.8)",
      hoverColor: "rgba(0, 187, 143,.1)",
    },
    {
      icon: "visual",
      title: "Visual",
      point: 72,
      color: "rgba(17, 37, 214, .8)",
      hoverColor: "rgba(17, 37, 214, .1)",
    },
  ];

  return (
    <S.Wrapper>
      <S.Container>
        <S.ResultContainer>
          <S.ResultTitle>Your Result</S.ResultTitle>
          <S.ResultCircle>
            <S.ResultCircleTitle>76</S.ResultCircleTitle>
            <S.ResultCircleSubtitle>of 100</S.ResultCircleSubtitle>
          </S.ResultCircle>
          <S.ResultDescTitle>Great</S.ResultDescTitle>
          <S.ResultDesc>
            You scored higher than 65% of the people who have taken these tests.
          </S.ResultDesc>
        </S.ResultContainer>
        <S.SummaryContainer>
          <S.SummaryTitle>Summary</S.SummaryTitle>
          {summary.map((v: TSummary, i: number) => (
            <S.SummaryStat key={`summary-${i}`} color={v.hoverColor}>
              <S.BorderTopLeft color={v.color}/>
              <S.BorderTopRight color={v.color}/>
              <S.BorderBottomLeft color={v.color}/>
              <S.BorderBottomRight color={v.color}/>
              <S.SummaryIcon
                style={{
                  backgroundImage: `url("./images/icon-${v.icon}.svg")`,
                }}
              />
              <S.SummaryText style={{ color: v.color }}>
                {v.title}
              </S.SummaryText>
              <S.SummaryPoint>
                <span style={{ color: "rgb(37, 33, 45)" }}>{v.point}</span> /
                100
              </S.SummaryPoint>
            </S.SummaryStat>
          ))}
          <S.SummaryButton>Continue</S.SummaryButton>
        </S.SummaryContainer>
      </S.Container>
    </S.Wrapper>
  );
}
