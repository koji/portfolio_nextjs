import styled from 'styled-components'
import { isntStyleProp } from 'src/styles/style-props'

export const Img = styled.img.withConfig({
  shouldForwardProp: isntStyleProp,
})`
  max-width: 100%;
  height: auto;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`
export const BlogCard = styled.div.withConfig({
  shouldForwardProp: isntStyleProp,
})`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 300px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
  background: #00c48d;
`
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  /* color: #9cc9e3; */
  color: #000;
  padding: 0.5rem 0;
  font-size: 2srem;
`

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  /* color: #e4e6e7; */
  color: #515a6a;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`

export const ExternalLinks = styled.a.withConfig({
  shouldForwardProp: isntStyleProp,
})`
  color: #000;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  /* background: #6b3030; */
  background: #b0c6fb;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #7a90c2;
  }
`

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`
export const Tag = styled.li.withConfig({
  shouldForwardProp: isntStyleProp,
})`
  color: #d8bfbf;
  color: #000;
  font-size: 1.5rem;
`
