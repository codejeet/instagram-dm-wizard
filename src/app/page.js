'use client'

import React, { useState } from "react";
import { Button, Typography, Container, Paper, Box, Grid } from "@mui/material";

export default function Home() {
  const [stage, setStage] = useState("start");


  const handleMessageCopy = (message) => {
    navigator.clipboard.writeText(message).then(
      () => alert("Message copied to clipboard!"),
      () => alert("Failed to copy message to clipboard.")
    );
  };

  const flow = {
  "start": {
		"message": "Hi! 👋 I'm Gulia from ScaleSystem.ai. Your medical spa looks amazing! Do you currently run any paid ads on social media platforms?",
		"actions": {
		  "Yes, we run ads": "yesAds",
		  "No, we don't run ads": "noAds"
		}
	  },
	  "yesAds": {
		"message": "That's great to hear! Are you happy with the results you’re seeing from your ads, or do you see room for improvement?",
		"actions": {
		  "Need improvement": "improvementNeeded",
		  "Happy with results": "happyWithResults"
		}
	  },
	  "improvementNeeded": {
		"message": "We can definitely help optimize your ads to get better results. Would you like to see how we could enhance your current campaigns?",
		"actions": {
		  "Yes, interested": "bookCall",
		  "Not interested": "start"
		}
	  },
	  "happyWithResults": {
		"message": "That's wonderful to hear! If you're ever looking to explore additional strategies or expand your reach, feel free to check out our services.",
		"actions": {
		  "Explore services": "exploreServices",
		  "No thanks": "start"
		}
	  },
	  "bookCall": {
		"message": "Awesome! Here’s a link to book a quick call so we can discuss further: https://calendly.com/d/2p3-hwf-ydb/scalesystem-ai-business-audit-kickoff-call?month=2024-05",
		"actions": {
		  "Back to Start": "start"
		}
	  },
	  "noAds": {
		"message": "Got it! Running ads can really help increase visibility and attract more clients to your medical spa. Interested in learning how we could help get you started?",
		"actions": {
		  "Yes, show me": "showInterest",
		  "No, thanks": "noInterest"
		}
	  },
	  "showInterest": {
		"message": "We'd love to show you the potential. You can learn more about our services and success stories here: https://calendly.com/d/2p3-hwf-ydb/scalesystem-ai-business-audit-kickoff-call?month=2024-05",
		"actions": {
		  "Book a call": "bookCallInterested",
		  "Maybe later": "start"
		}
	  },
	  "noInterest": {
		"message": "No worries at all! If you ever reconsider or want to explore other ways to enhance your medical spa, feel free to reach out or visit our site.",
		"actions": {
		  "Reconsider": "start",
		  "End Conversation": "end"
		}
	  },
	  "bookCallInterested": {
		"message": "If you think this could be a good fit, let’s discuss in more detail! Here’s where you can book a call with us: https://calendly.com/d/2p3-hwf-ydb/scalesystem-ai-business-audit-kickoff-call?month=2024-05",
		"actions": {
		  "Back to Start": "start"
		}
	  },
	  "exploreServices": {
		"message": "Here are our services: https://calendly.com/d/2p3-hwf-ydb/scalesystem-ai-business-audit-kickoff-call?month=2024-05. Take your time to explore and let us know if anything catches your eye!",
		"actions": {
		  "Book a call to discuss": "bookCall",
		  "Return to main menu": "start"
		}
	  },
	  "end": {
		"message": "Thank you for your time! Don't hesitate to contact us if you have any more questions. Have a great day!",
		"actions": {}
	  }
	}

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Gulia's Instagram DM Assistant
      </Typography>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="body1" gutterBottom>
          {flow[stage].message}
        </Typography>
		<Typography variant="h5" component="h1" gutterBottom>
			Select client's reponse below:
		</Typography>
        <Grid container spacing={2} justifyContent="center">
          {Object.entries(flow[stage].actions).map(([text, nextStage]) => (
            <Grid item key={text}>
              <Button variant="contained" color="primary" onClick={() => setStage(nextStage)}>
                {text}
              </Button>
            </Grid>
          ))}
        </Grid>
        <Box mt={2}>
          <Button variant="outlined" onClick={() => handleMessageCopy(flow[stage].message)}>
            Click to Copy message
          </Button>
        </Box>
		<Box mt={2}>
		  <Button variant="contained" onClick={() => setStage("start")}>
              Start Over
          </Button>
		</Box>
      </Paper>
    </Container>
  );
}
