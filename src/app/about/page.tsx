import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
} from "@mui/material";

const skills = [
  {
    category: "Programming Languages",
    items: "Python, Java, C, JavaScript, TypeScript, React, React Native",
  },
  { category: "Backend", items: "Node.js, Express.js, RESTful APIs" },
  { category: "Database", items: "PostgreSQL, MongoDB, MySQL" },
  { category: "Tools", items: "Git, AWS, Docker, CI/CD, Material UI, Ant Design" },
];

export default function About() {
  return (
    <Box py={6}>
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
      <Typography variant="h4" textAlign="center" gutterBottom>
        About Me
      </Typography>
      <Typography
        variant="body1"
        color="textSecondary"
        textAlign="center"
        mb={4}
      >
        A Full-Stack Developer with over 3 years of experience in building
        scalable web applications, leveraging modern tools like React, Node.js,
        AWS, and Docker to deliver high-performance solutions. Currently pursuing a BEng in Computer Science at Anglia Ruskin University.
      </Typography>
      <Button
        variant="outlined"
        color="secondary"
        href="/resume.pdf"
        target="_blank"
        sx={{ mb: 4 }}
      >
        View My Resume
      </Button>
      <Typography variant="h5" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={4}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{skill.category}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {skill.items}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}