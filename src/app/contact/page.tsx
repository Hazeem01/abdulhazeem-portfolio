import { Box, Typography, Stack, Button } from "@mui/material";

export default function Contact() {
  return (
    <Box textAlign="center" py={6}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        Feel free to reach out via email or connect with me on GitHub or
        LinkedIn.
      </Typography>
      <Stack
        spacing={2}
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
      >
        <Button variant="contained" href="mailto:hazeem4877@gmail.com">
          Email
        </Button>
        <Button
          variant="outlined"
          href="https://github.com/Hazeem01"
          target="_blank"
        >
          GitHub
        </Button>
        <Button
          variant="outlined"
          href="https://linkedin.com/in/abdulhazeem-adenekan"
          target="_blank"
        >
          LinkedIn
        </Button>
      </Stack>
    </Box>
  );
}