import React, { useEffect, useState } from "react";
import { Loader } from "../components/Loader";
import { NoiseDiv } from "../components/NoiseDiv";
import { GlobalStyle } from "../components/style/fonts";
import { colors } from "../components/style/Mixins";
import { StyledNavLink, StyledP } from "../components/style/StyledTextElements";
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
      console.log("fetchedScore", fetchedScore);

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
          <Loader />
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
              <StyledNavLink to='/'>Tillbaka</StyledNavLink>

              <FlexDiv
                dir='column'
                justify='start'
                align='start'
                gap='30px'
                margin='0 30px 0 0'
              >
                <FlexDiv dir='column' justify='start' width='100%' wrap='wrap'>
                  {highScores?.map((score: IHighscore, i: number) => (
                    <FlexDiv dir='column' margin='5px' key={score._id}>
                      <FlexDiv background='black' height='0.5px' dir='column' />

                      <StyledP fontSize='20px'>
                        {" "}
                        {i + 1}. {score.name} - {score.score}
                      </StyledP>
                    </FlexDiv>
                  ))}
                </FlexDiv>
              </FlexDiv>
            </FlexDiv>
          </>
        )}
      </FlexDiv>
    </>
  );
};
