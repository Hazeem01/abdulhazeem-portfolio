import { Box, Typography, Button, Avatar, Stack } from "@mui/material";

export default function Home() {
  return (
    <Box textAlign="center" py={6}>
      <Avatar
        alt="Abdulhazeem Adenekan"
        src="/profile.jpg"
        sx={{
          width: { xs: 100, md: 150 },
          height: { xs: 100, md: 150 },
          margin: "0 auto",
          mb: 3,
        }}
      />
      <Typography variant="h3" gutterBottom>
        Abdulhazeem Adenekan
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        A mid-level Full-Stack Developer with over 3 years of experience
        building scalable web applications using React.js, Node.js, and AWS.
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        Currently open for backend development opportunities!
      </Typography>
      <Stack
        spacing={2}
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        mt={4}
      >
        <Button variant="contained" color="primary" href="/projects">
          View My Projects
        </Button>
        <Button variant="outlined" color="primary" href="/contact">
          Contact Me
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          href="/resume.pdf"
          target="_blank"
        >
          View My Resume
        </Button>
      </Stack>
    </Box>
  );
}