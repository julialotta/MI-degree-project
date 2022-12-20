import { GlobalStyle } from "../components/style/fonts";
import background from "../assets/background.png";
import { FlexDiv, ImageDiv } from "../components/style/Wrappers";
import {
  StyledH2,
  StyledH3,
  StyledH5,
  StyledP,
} from "../components/style/StyledTextElements";
import { NoiseDiv } from "../components/NoiseDiv";
import { FaReact, FaCss3Alt, FaHtml5, FaFigma } from "react-icons/fa";
import { SiStyledcomponents, SiTypescript } from "react-icons/si";
import { AiOutlineWoman } from "react-icons/ai";
import { BsLaptop } from "react-icons/bs";
import { GrLocationPin } from "react-icons/gr";
import { MdOutlineCake } from "react-icons/md";
import { TbCircleDot } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";

export const AboutPage = () => {
  return (
    <>
      <GlobalStyle />
      <ImageDiv image={background}>
        <NoiseDiv className='noise' />
        <FlexDiv dir='column'>
          <StyledH2 fontSize='34px'>About</StyledH2>
          <FlexDiv dir='column' align='start' width='60%' gap='10px'>
            <StyledH3 fontSize='24px'>About</StyledH3>
            <FlexDiv dir='column'>
              <FlexDiv justify='start'>
                <AiOutlineWoman />
                <StyledP>Julia-Lotta Tinglöf</StyledP>
              </FlexDiv>
              <FlexDiv justify='start'>
                <MdOutlineCake />
                <StyledP>28 y/o</StyledP>
              </FlexDiv>
              <FlexDiv justify='start'>
                <BsLaptop />
                <StyledP>Aspiring Front End Developer</StyledP>
              </FlexDiv>
              <FlexDiv justify='start'>
                <GrLocationPin />
                <StyledP>Stockholm, Sweden</StyledP>
              </FlexDiv>
            </FlexDiv>

            <StyledP>
              With experience in marketing, project management and start-ups and
              with curiosity as my biggest driving force, I can contribute with
              disciplined energy going forward. Give me wifi, some time and a
              cup of coffee and I’ll solve anything.
            </StyledP>
            <StyledH3 fontSize='24px'>Experience</StyledH3>
            <FlexDiv justify='start'>
              <TbCircleDot />
              <StyledH5 fontSize='18px'>Freelance, Tingloef</StyledH5>
            </FlexDiv>
            <StyledP>
              juni 2022 | present <br />
              Stockholm <br />
              Consulting via Academic Work developing a React Native app from
              scratch for Resistant Minds Handelsbolag. Some of the features:
              User login, in-App purchases, a map with user location triggered
              events, time tracker and a stored HighScore.
            </StyledP>
            <FlexDiv justify='start'>
              <TbCircleDot />
              <StyledH5 fontSize='18px'>
                App Developer Consultant, Academic Work
              </StyledH5>
            </FlexDiv>
            <StyledP>
              nov 2021 -june 2022 <br />
              Stockholm <br />
              Consulting via Academic Work developing a React Native app from
              scratch for Resistant Minds Handelsbolag. Some of the features:
              User login, in-App purchases, a map with user location triggered
              events, time tracker and a stored HighScore.
            </StyledP>
            <FlexDiv justify='start'>
              <TbCircleDot />
              <StyledH5 fontSize='18px'>
                Project &#38; Marketing manager, Jubel
              </StyledH5>
            </FlexDiv>
            <StyledP>
              aug 2018-july 2021 <br />
              Stockholm <br />
              At Jubel I got the chance to work with many fantastic artists and
              their music. As a project manager and later marketing manager, I
              worked with PR and marketing for music releases. I have done
              everything from press shoot concepts, music video editing,
              guerrilla marketing, release production, social media content and
              strategies, digital marketing and traditional PR. I was also
              managing the social medias, website and digital marketing for
              Jubel itself.
            </StyledP>
            <StyledH5 fontSize='24px'>Education</StyledH5>
            <FlexDiv justify='start'>
              <TbCircleDot />
              <StyledH5 fontSize='18px'>
                Front End Developer, Medieinstitutet
              </StyledH5>
            </FlexDiv>
            <StyledP>
              aug 2021 | present <br />
              Stockholm <br />
              Studying Front End Developer at Medieinstitutet givs you the
              skills to use the programming languages and web technology
              required to produce advanced websites and web applications. The
              education contains everything from JavaScript, version control,
              framework, html, CSS, web design and usability / UX.
            </StyledP>
            <StyledH5 fontSize='24px'>Skills</StyledH5>
            <FlexDiv>
              <FaReact size='34px' />
              <SiStyledcomponents size='34px' />
              <FaCss3Alt size='34px' />
              <FaHtml5 size='34px' />
              <SiTypescript size='30px' />
              <FaFigma size='34px' />
              <IoLogoJavascript size='34px' />
            </FlexDiv>
          </FlexDiv>
        </FlexDiv>
      </ImageDiv>
    </>
  );
};
