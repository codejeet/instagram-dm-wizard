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
		  "My ads Need improvement": "improvementNeeded",
		  "Happy with results": "happyWithResults"
		}
	  },
	  "improvementNeeded": {
		"message": "We can definitely help optimize your ads to get better results. Would you like to see how we could enhance your current campaigns?",
		"actions": {
		  "Yes, interested": "exploreServices",
		  "Not interested (Proceed to Next Lead)": "start"
		}
	  },
	  "happyWithResults": {
		"message": "That's wonderful to hear! If you're ever looking to explore additional strategies or expand your reach, feel free to check out our services at https://scalesystem.ai/",
		"actions": {
		  "Explore services": "exploreServices",
		  "No thanks (Proceed to Next Lead)": "start"
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
		"message": "We'd love to show you the potential. You can learn more about our services and success stories here, If it sounds convincing, I encourge you to book a call with us: https://scalesystem.ai/ ",
		"actions": {
		  "I'd like to Book a call": "bookCallInterested",
		  "Maybe later (Proceed to Next Lead)": "start"
		}
	  },
	  "noInterest": {
		"message": "No worries at all! If you ever reconsider or want to explore other ways to enhance your medical spa, feel free to reach out or visit our site. https://scalesystem.ai/",
		"actions": {
		  "End Conversation": "end"
		}
	  },
	  "bookCallInterested": {
		"message": "If you think this could be a good fit, let’s discuss in more detail! Here’s where you can book a call with us: https://calendly.com/d/2p3-hwf-ydb/scalesystem-ai-business-audit-kickoff-call?month=2024-05",
		"actions": {
		  "Back to Start (Proceed to Next Lead)": "start"
		}
	  },
	  "exploreServices": {
		"message": "We run ads on Meta, Tiktok, and Google, as well as other unique offerings like Ai-powered content generation, google maps SEO ranking, among others. Our pricing is flexible based on your circumstances. We have a guarantee, so that if you don't make more money than you spend with us within 3 months, you get 3 more months free. To book at call with us and to see our success stories, check out our website at https://scalesystem.ai/. ",
		"actions": {
		  "Return to main menu (Proceed to Next Lead)": "start"
		}
	  },
	  "end": {
		"message": "Thank you for your time! Don't hesitate to contact us if you have any more questions. Have a great day!",
		"actions": {
		  "Return to main menu (Proceed to Next Lead)": "start"
		}	  
	  }
	}

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Gulia's Instagram DM Assistant
      </Typography>
      <Paper elevation={3} sx={{ padding: 4 }}>
	    <Grid container spacing={2} justifyContent="center">
			<Button variant="contained" color="primary" onClick={() => setStage("start")}>
				Return To Main Menu
			</Button>
		</Grid>
		<Box mt={2}>
        <Typography variant="body1" gutterBottom>
          {flow[stage].message}
        </Typography>
		    <Grid container spacing={2} sx={{ padding: 4 }} justifyContent="center">

			<Button variant="contained" onClick={() => handleMessageCopy(flow[stage].message)}>
				Click to Copy message
			</Button>
        		</Grid>
		<Typography variant="h5" component="h1" gutterBottom>
			Select leads's reponse below:
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
		</Box>
      </Paper>
    </Container>
  );
}
