import React from "react";
import { RaisedButton, FloatingActionButton } from "material-ui";
import ArrowForward from "material-ui/svg-icons/navigation/arrow-forward";
import { Jumbotron } from "react-bootstrap";
import styled from "styled-components";

const StyledJumbotron = styled(Jumbotron)`
  border-radius: 6px;
  padding-left: 60px;
  padding-right: 60px;
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

class RotatingJumbotron extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: this.getRandomInt(0, this.props.quotes.length)
    };
    this.newQuote = this.newQuote.bind(this);
  }

  // Get random integer between [min, max)
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  newQuote() {
    this.setState({
      currentQuote: this.getRandomInt(0, this.props.quotes.length)
    });
  }

  render() {
    const { quotes } = this.props;
    const { currentQuote } = this.state;
    let { imageUrl } = quotes[currentQuote];
    if (imageUrl) imageUrl = `url(${imageUrl}) repeat 0 0`;
    return (
      <div style={{ backgroundImage: imageUrl }}>
        <StyledJumbotron>
          <h1>Quote of the Day</h1>
          <p>"{quotes[currentQuote].text}"</p>
          <p style={{ fontSize: "18px", fontStyle: "italic" }}>
            - {quotes[currentQuote].author}
          </p>
          <CenteredContainer>
            <RaisedButton
              href={quotes[currentQuote].sourceUrl}
              primary
              label={quotes[currentQuote].inviteTextOnUrlButton}
              target="_blank"
            />
            <FloatingActionButton
              onClick={this.newQuote}
              mini={true}
              secondary={true}
            >
              <ArrowForward />
            </FloatingActionButton>
          </CenteredContainer>
        </StyledJumbotron>
      </div>
    );
  }
}

RotatingJumbotron.defaultProps = {
  quotes: [
    {
      text:
        "Never let a problem to be solved become more important than a person to be loved.",
      author: "Thomas S. Monson",
      sourceUrl:
        "https://www.lds.org/general-conference/2008/10/finding-joy-in-the-journey?lang=eng",
      inviteTextOnUrlButton: "Read the talk",
      imageUrl:
        "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwi564j-mp7VAhVOwmMKHeWoDOkQjRwIBw&url=http%3A%2F%2Fwww.huffingtonpost.com%2F2014%2F03%2F20%2Fthomas-monson-fraud_n_5002299.html&psig=AFQjCNGPATa5m9JdZmqa8rqtPDlF1qhUxQ&ust=1500858287554669"
    },
    {
      text:
        "For our light affliction, which is but for a moment, worketh for us a far more exceeding and eternal weight of glory",
      author: "2 Corinthians 4:17",
      sourceUrl: "https://www.lds.org/scriptures/nt/2-cor/4.17",
      inviteTextOnUrlButton: "Read the Scripture"
    },
    {
      text:
        "These things I have spoken unto you, that in me ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the world.",
      author: "Jesus Christ",
      sourceUrl: "https://www.lds.org/scriptures/nt/john/16.33",
      inviteTextOnUrlButton: "Read the Scripture"
    },
    {
      text:
        "We become more substantive as we serve others—indeed, it is easier to ‘find’ ourselves because there is so much more of us to find!",
      author: "Spencer W. Kimball",
      sourceUrl:
        "https://www.lds.org/new-era/1981/03/president-kimball-speaks-out-on-service-to-others?lang=eng",
      inviteTextOnUrlButton: "Read the Article"
    }
  ]
};

export default RotatingJumbotron;
