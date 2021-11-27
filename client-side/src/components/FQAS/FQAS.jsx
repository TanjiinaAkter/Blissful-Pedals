import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Container from "../Common/Container";
import Title from "../Common/Title";
// eslint-disable-next-line no-unused-vars
const questions = [
  {
    question: "Do I need an appointment to come and look at bike?",
    answer:
      "Definitely not, come on in and we’re happy to help you find the right bike.",
  },
  {
    question: "How does it all work?",
    answer:
      "Great question, and we assume we’re talking about bikes here, but here’s how it works: You come to the store and we will work with you to understand your cycling goals, as modest or aggressive as they may be, and we’ll look to find the right bike, at the right price, in the right size, in a cool color, and with the right accessories to help you reach your goals. Even if those goals simply include easy neighborhood rides with your kids.",
  },
  {
    question: "How much do your bikes cost?",
    answer:
      "The cost of a bike can vary wildly. We have entry level adult bikes that start in the $560 range, and they pretty much top out at prices that would buy a really nice used car. Smaller kids’ bikes tend to fall into the range of $210-$400.",
  },
  {
    question: "What makes you better than the big box stores?",
    answer:
      "Well, if you need a soccer ball, a beer cooler, and a shotgun while you’re getting your bike, maybe we aren’t better. However if you want a great bike that will stand the test of time from a company that is passionate about giving our riders the best experience possible on awesome bikes backed by great bike companies like Trek and Cannondale, then we’re the place to get a bike. We’ll also try to get you in and out of the shop fast enough that there’ll still be time to pick up that soccer ball at one of the big box stores on the way home.",
  },
  {
    question: "Do you sell e-bikes?",
    answer: "You’d better believe it! We sell a lot of e-bikes.",
  },
  {
    question: "Do you sell bike racks for my car?",
    answer:
      "Yep, we have a number of bike racks that fit a variety of cars at a variety of price points.",
  },
  {
    question: "What else do you sell?",
    answer:
      "Well, you’re asking a lot of questions here, but we’re here to answer your questions, so we pretty much sell everything that will help you enjoy your bike. Some examples in no particular order would include helmets, shoes, gloves, bottles, more clothes than you can shake a stick at, tools, pumps, bags, pedals, saddles, tires, tubes, locks, lubes (for bikes), coffee, and Lemonheads. Actually we don’t sell the coffee and Lemonheads, those are free*. *Price subject to change.",
  },
];

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box py="3rem">
      <Container>
        <Title title="FQAS" />

        {questions.map(({ question, answer }, ind) => (
          <Accordion
            expanded={expanded === `panel1-${ind}`}
            onChange={handleChange(`panel1-${ind}`)}
            key={question}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${ind}bh-content`}
              id={`panel${ind}bh-header`}
            >
              <Typography sx={{ width: "100%", flexShrink: 0 }}>
                {question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
