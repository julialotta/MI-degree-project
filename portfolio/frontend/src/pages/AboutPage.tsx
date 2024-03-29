import { GlobalStyle } from "../components/style/fonts";
import profile from "../assets/profilepicture.png";
import { FlexDiv } from "../components/style/Wrappers";
import {
  StyledA,
  StyledH2,
  StyledH3,
  StyledH5,
  StyledP,
} from "../components/style/StyledTextElements";
import { NoiseDiv } from "../components/NoiseDiv";
import { AiOutlineWoman } from "react-icons/ai";
import { BsLaptop } from "react-icons/bs";
import { GrLocationPin } from "react-icons/gr";
import { MdOutlineCake } from "react-icons/md";
import { RxDot, RxDotFilled } from "react-icons/rx";
import { colors } from "../components/style/Mixins";
import { StyledImage } from "../components/style/StyledImage";
import { useEffect, useState } from "react";
import { fetchTech } from "../utils/services/handleFetch.service";
import { Loader } from "../components/Loader";

export const AboutPage = () => {
  const [tech, setTech] = useState<String[]>(["Db not running"]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getTEch() {
      const fetchedTech = await fetchTech();

      setTech(fetchedTech);
      setIsLoading(false);
    }
    getTEch();
  }, []);

  return (
    <>
      <GlobalStyle />

      <FlexDiv
        background={colors.orange}
        minHeight='100vh'
        padding='50px 10px 10px 10px'
        align='start'
      >
        <NoiseDiv className='noise' />
        {isLoading ? (
          <FlexDiv>
            <Loader />
          </FlexDiv>
        ) : (
          <>
            <FlexDiv dir='column' margin='10px 0 0 0'>
              <StyledH2>About</StyledH2>
              <FlexDiv
                margin='40px 0'
                dir='column'
                align='center'
                width='70%'
                gap='10px'
              >
                <FlexDiv
                  margin='20px 0 0 0'
                  gap='30px'
                  align='start'
                  tabletDir='row'
                  width='80%'
                  laptopWidth='70%'
                  dir='column'
                  justify='center'
                >
                  <FlexDiv dir='column' align='center' justify='center'>
                    <StyledImage
                      width='200px'
                      src={profile}
                      alt='Julia-Lotta Tinglöf'
                    />
                    <StyledP textAlign='center'>
                      Foto:{" "}
                      <StyledA
                        fontSize='18 px'
                        href='https://www.instagram.com/robinzeijlon/'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Robin Zeijlon
                      </StyledA>
                    </StyledP>
                  </FlexDiv>
                  <FlexDiv dir='column'>
                    <FlexDiv dir='column'>
                      <FlexDiv justify='start' gap='5px'>
                        <AiOutlineWoman size={"14px"} />
                        <StyledP>Julia-Lotta Tinglöf</StyledP>
                      </FlexDiv>
                      <FlexDiv justify='start' gap='5px'>
                        <MdOutlineCake size={"14px"} />
                        <StyledP> 28 y/o</StyledP>
                      </FlexDiv>
                      <FlexDiv justify='start' gap='5px'>
                        <BsLaptop size={"13px"} />
                        <StyledP>Front End Developer</StyledP>
                      </FlexDiv>
                      <FlexDiv justify='start' gap='5px'>
                        <GrLocationPin size={"14px"} />
                        <StyledP>Stockholm, Sweden</StyledP>
                      </FlexDiv>
                    </FlexDiv>
                    <StyledP>
                      With experience in marketing, project management and
                      start-ups and with curiosity as my biggest driving force,
                      I can contribute with disciplined energy going forward.
                      Give me wifi, some time and a cup of coffee and I’ll solve
                      anything.
                    </StyledP>
                  </FlexDiv>
                </FlexDiv>
                <FlexDiv align='start' dir='column'>
                  <StyledH3 fontSize='24px'>Experience</StyledH3>
                  <FlexDiv justify='start' margin='20px 0 0 0'>
                    <RxDotFilled />
                    <StyledH5 fontSize='18px'>Freelance, Tingloef</StyledH5>
                  </FlexDiv>
                </FlexDiv>
                <StyledP margin='-8px 0 0 0'>
                  juni 2022 - present | Stockholm <br />
                  Consulting via Academic Work developing a React Native app
                  from scratch for Resistant Minds Handelsbolag. Some of the
                  features: User login, in-App purchases, a map with user
                  location triggered events, time tracker and a stored
                  HighScore.
                </StyledP>
                <FlexDiv justify='start' margin='20px 0 0 0'>
                  <RxDotFilled />
                  <StyledH5 fontSize='18px'>
                    App Developer Consultant, Academic Work
                  </StyledH5>
                </FlexDiv>
                <StyledP margin='-8px 0 0 0'>
                  nov 2021 - june 2022 | Stockholm <br />
                  Consulting via Academic Work developing a React Native app
                  from scratch for Resistant Minds Handelsbolag. Some of the
                  features: User login, in-App purchases, a map with user
                  location triggered events, time tracker and a stored
                  HighScore.
                </StyledP>
                <FlexDiv justify='start' margin='20px 0 0 0'>
                  <RxDotFilled />
                  <StyledH5 fontSize='18px'>
                    Project &#38; Marketing manager, Jubel
                  </StyledH5>
                </FlexDiv>
                <StyledP margin='-8px 0 0 0'>
                  aug 2018 - july 2021 | Stockholm <br />
                  At Jubel I got the chance to work with many fantastic artists
                  and their music. As a project manager and later marketing
                  manager, I worked with PR and marketing for music releases. I
                  have done everything from press shoot concepts, music video
                  editing, guerrilla marketing, release production, social media
                  content and strategies, digital marketing and traditional PR.
                  I was also managing the social medias, website and digital
                  marketing for Jubel itself.
                </StyledP>

                <FlexDiv align='start' dir='column' margin='20px 0 0 0'>
                  <StyledH5 fontSize='24px'>Education</StyledH5>
                  <FlexDiv justify='start' margin='20px 0 0 0'>
                    <RxDotFilled />
                    <StyledH5 fontSize='18px'>
                      Front End Developer, Medieinstitutet
                    </StyledH5>
                  </FlexDiv>
                </FlexDiv>
                <StyledP margin='-8px 0 0 0'>
                  aug 2021 | present | Stockholm <br />
                  Studying Front End Developer at Medieinstitutet givs you the
                  skills to use the programming languages and web technology
                  required to produce advanced websites and web applications.
                  The education contains everything from JavaScript, version
                  control, framework, html, CSS, web design and usability / UX.
                </StyledP>
                <FlexDiv margin='0 0 0 20px' dir='column'>
                  <FlexDiv>
                    <RxDot />{" "}
                    <StyledP>
                      Internship | Full stack developer | Istya, Paris
                    </StyledP>
                  </FlexDiv>
                  <FlexDiv>
                    <RxDot />
                    <StyledP>
                      Internship | Front end developer | Rhyme Sthlm, Stockholm
                    </StyledP>
                  </FlexDiv>
                </FlexDiv>
                <FlexDiv align='start' dir='column' margin='20px 0 0 0'>
                  <StyledH5 fontSize='24px'>Skills</StyledH5>
                </FlexDiv>
                <FlexDiv justify='start' width='100%' wrap='wrap'>
                  {tech.map((tech: String, i: number) => (
                    <FlexDiv width='max-content' margin='5px' key={i}>
                      <FlexDiv border='1px solid black' borderRad='3px'>
                        <StyledP fontSize='14px'>{tech}</StyledP>
                      </FlexDiv>
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
