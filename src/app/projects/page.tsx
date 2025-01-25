import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const projects = [
  {
    title: "Portfolio Website",
    description: "This portfolio website, built using Next.js and MUI.",
    link: "https://github.com/Hazeem01/abdulhazeem-portfolio.git",
  },
  {
    title: "Coming soon",
    description:
      "Check back later for more projects 🙂",
  },
];

export default function Projects() {
  return (
    <Box py={6}>
      <Typography variant='h4' textAlign='center' gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant='h5' gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant='body2' color='textSecondary' paragraph>
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                {project.link ? (
                  <Button
                    size='small'
                    color='primary'
                    href={project.link}
                    target='_blank'
                  >
                    View on GitHub
                  </Button>
                ) : (
                  <Button size='small' color='primary' href='/'>
                    Go Home
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
