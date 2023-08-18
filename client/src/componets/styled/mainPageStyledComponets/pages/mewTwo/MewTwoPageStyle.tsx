import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";

const StyledRedDiv = styled.div`
  width: 1000px;
  height: 2000px;
  background-color: red;
  position: relative;
  overflow: hidden;
  z-index: 2;
`;

const StyledPurpleDiv = styled.div`
  width: 1000px;
  height: 2000px;
  background-color: purple;
  position: relative;
  overflow: hidden;
  z-index: 2;
`;

const StyledAnimationContainerDiv = styled.div`
  display: flex;
  z-index: 2;
  position: relative;
  bottom: 800px;
`;

const AnimationComponent = ({ onComplete }: { onComplete: () => void }) => {
  const animationRefRed = useRef<HTMLDivElement>(null);
  const animationRefPurple = useRef<HTMLDivElement>(null);
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spinTimeline = gsap.timeline({
      onComplete: () => {
        const slideTimeline = gsap.timeline({
          onComplete: () => {
            // window.scrollTo(0, 0);
            onComplete();
          },
        });
        slideTimeline
          .to(animationRefRed.current, { x: "-1000px", duration: 1 })
          .to(animationRefPurple.current, { x: "1000px", duration: 1 }, 0);
      },
    });

    const animationTimeline = gsap.timeline();
    animationTimeline.fromTo(
      animationContainer.current,
      { rotation: 0 },
      { rotation: 720, duration: 3 }
    );

    spinTimeline.add(animationTimeline);

    return () => {
      spinTimeline.kill();
    };
  }, [onComplete]);

  useEffect(() => {
    animationContainer.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }, []);

  return (
    <StyledAnimationContainerDiv ref={animationContainer}>
      <StyledRedDiv ref={animationRefRed}></StyledRedDiv>
      <StyledPurpleDiv ref={animationRefPurple}></StyledPurpleDiv>
    </StyledAnimationContainerDiv>
  );
};

export const TestDiv = () => {
  const [shouldRenderAnimation, setShouldRenderAnimation] = useState(true);
  return (
    <div>
      {shouldRenderAnimation && (
        <AnimationComponent
          onComplete={() => setShouldRenderAnimation(false)}
        />
      )}
    </div>
  );
};

export const StyledImgBanner = styled.div`
  height: 80px;
  width: 100%;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR3srnSwlTXcB_FAau3WjhBe6PqVaZhHo8EQ&usqp=CAU");

  border-bottom: 4px solid gold;
`;

export const StyledTopImage = styled.div`
  height: 500px;
  width: 100%;
  background-image: url("https://scarletviolet.pokemon.com/_images/mew/header/en/fpo-header-bg.jpg");
  background-size: cover;
  background-position: center;
`;

export const StyledMewImage = styled.div`
  height: 415px;
  width: 400px;
  background-image: url("data:image/png;base64,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");
  background-size: cover;
  position: relative;
  top: 180px;
`;

export const MewPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 900px;
  text-align: center;
`;

export const ReceiveMewContainer = styled.div`
  width: 800px;
  text-align: start;
  font-size: 20px;
  border: 1px solid gold;
  position: relative;
  margin-top: 100px;
`;
