import React, { useEffect, useState } from "react";
import { Loader } from "../components/Loader";
import { NoiseDiv } from "../components/NoiseDiv";
import { GlobalStyle } from "../components/style/fonts";
import { colors } from "../components/style/Mixins";
import { StyledButton } from "../components/style/StyledButton";
import { StyledImage } from "../components/style/StyledImage";
import {
  StyledA,
  StyledH3,
  StyledNavLink,
  StyledP,
} from "../components/style/StyledTextElements";
import { FlexDiv } from "../components/style/Wrappers";

import { IHighscore } from "../models/IHighscore";
import { fetchHighscore } from "../utils/services/handleFetch.service";

export const HighscorePage = () => {
  const [highScores, setHighscore] = useState<IHighscore[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getTEch() {
      setIsLoading(true);
      const fetchedScore = await fetchHighscore();

      setHighscore(fetchedScore);
      if (fetchedScore !== undefined) setIsLoading(false);
    }
    getTEch();
  }, []);

  useEffect(() => {
    console.log("type", typeof highScores);
  }, [highScores]);

  return (
    <>
      <GlobalStyle />
      <FlexDiv
        position='relative'
        background={colors.green}
        minHeight='100vh'
        align='start'
      >
        <NoiseDiv className='noise' />
        {isLoading ? (
          <FlexDiv height='50vh'>
            <Loader />
          </FlexDiv>
        ) : (
          <>
            <FlexDiv
              dir='column'
              tabletDir='row'
              margin='30px 50px'
              height='100%'
              z='1'
              align='start'
              gap='20px'
            >
              <StyledNavLink fontSize='20px' to='/'>
                ←
              </StyledNavLink>
              <FlexDiv
                dir='column'
                justify='start'
                align='center'
                gap='30px'
                margin='0 30px 0 0'
              >
                <FlexDiv
                  dir='column'
                  justify='center'
                  align='center'
                  width='60%'
                  wrap='wrap'
                >
                  <FlexDiv justify='start' gap='30px' margin='0 0 20px 0'>
                    <StyledImage
                      src='/game.png'
                      width='120px'
                      borderRad='50%'
                    />
                    <StyledH3>Highscore Jullan DeBugger</StyledH3>
                    <StyledButton color='black' hovercolor='black'>
                      <StyledA
                        fontSize='14px'
                        href='http://127.0.0.1:5500/game/'
                      >
                        Spela
                      </StyledA>
                    </StyledButton>
                  </FlexDiv>
                  <FlexDiv width='60%' dir='column'>
                    <FlexDiv dir='column' margin='5px' align='start'>
                      <FlexDiv width='500px'>
                        <StyledP display='inline' fontSize='22px'>
                          <strong>Namn</strong>
                        </StyledP>
                        <StyledP display='inline' fontSize='22px'>
                          {" "}
                          <strong>Poäng</strong>
                        </StyledP>
                      </FlexDiv>
                    </FlexDiv>
                    {highScores?.map((score: IHighscore, i: number) => (
                      <FlexDiv
                        dir='column'
                        margin='5px'
                        key={score._id}
                        align='start'
                      >
                        <FlexDiv
                          background='black'
                          height='0.5px'
                          margin='0 0 10px 0'
                        />
                        <FlexDiv width='500px'>
                          <StyledP display='inline' fontSize='20px'>
                            {i + 1}. {score.name}
                          </StyledP>
                          <StyledP display='inline' fontSize='20px'>
                            {" "}
                            {score.score}
                          </StyledP>
                        </FlexDiv>
                        <FlexDiv></FlexDiv>
                      </FlexDiv>
                    ))}
                  </FlexDiv>
                </FlexDiv>
              </FlexDiv>
            </FlexDiv>
          </>
        )}
      </FlexDiv>
    </>
  );
};
