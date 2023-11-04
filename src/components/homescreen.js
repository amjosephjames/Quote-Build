import React, {useState} from "react"
import styled from "styled-components"
import { MdCancel } from "react-icons/md";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import img from "./dev.gif"
import moment from "moment"

const Homescreen = () =>{
    const[data, setData] = useState([
      {
        id: 1,
        name: "Joseph",
        quote:
          "A path without obstacles leads to nowhere.",
        time: Date.now(),
        avatar: img,
      },
      {
        id: 2,
        name: "Daniel",
        quote:
          "Success is determination.",
        time: Date.now(),
        avatar: img,
      },
      {
        id: 3,
        name: "James",
        quote:
          "Life is like a yam",
        time: Date.now(),
        avatar: img,
      },
      {
        id: 4,
        name: "Joe",
        quote:
          "God is Great",
        time: Date.now(),
        avatar: img,
      },
    ]);
    return (
      <Container>
        <Wrapper>
          {data.map((props) => {
            return (
              <Card>
                <Top>
                  <Cancel>
                    <MdCancel />
                  </Cancel>
                  <Image src={props.avatar} alt="img" />
                </Top>
                <Quote>
                  <div>
                    <ImQuotesLeft />
                  </div>
                  <div> {props.quote} </div>
                  <div>
                    <ImQuotesRight />
                  </div>
                </Quote>
                <Name>{props.name}</Name>
                <Time> {moment(props.time).fromNow()}</Time>
              </Card>
            );
          })}
        </Wrapper>
      </Container>
    );
}
export default Homescreen

const Container = styled.div`
    width: 100%;
  min-height: 100vh;
  height: 100%;
  
`
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Card = styled.div`
  width: 250px;
  border-radius: 10px;
  background-color: white;
  margin: 20px;
  color: black;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;
const Cancel = styled.div`
  color: red;
  font-size: 20px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
const Quote = styled.div`
  text-align: center;
  font-style: italic;
`;
const Name = styled.div`
    font-size:15px;

`
const Time = styled.div`
  font-size: 15px;
`;