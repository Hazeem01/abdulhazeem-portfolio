"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Link,
  CssBaseline,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

// const metadata = {
//   title: "Abdulhazeem Adenekan - Portfolio",
//   description:
//     "Showcasing the skills and projects of Abdulhazeem Adenekan, Full-Stack Developer.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const navLinks = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Projects", href: "/projects" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <html lang='en'>
      <body>
        <CssBaseline />
        <AppBar position='static' sx={{ backgroundColor: "#2e3b55" }}>
          <Toolbar>
            <Link
              href='/'
              color='inherit'
              underline='none'
              sx={{ flexGrow: 1, fontSize: "1.25rem", fontWeight: "bold" }}
            >
              Abdulhazeem Portfolio
            </Link>
            {isMobile ? (
              <>
                <IconButton
                  edge='start'
                  color='inherit'
                  aria-label='menu'
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor='right'
                  open={drawerOpen}
                  onClose={toggleDrawer(false)}
                >
                  <List sx={{ width: 250 }}>
                    {navLinks.map((link, index) => (
                      <ListItem
                        key={index}
                        onClick={toggleDrawer(false)}
                        component='a'
                        href={link.href}
                      >
                        <ListItemText primary={link.text} />
                      </ListItem>
                    ))}
                  </List>
                </Drawer>
              </>
            ) : (
              navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  color='inherit'
                  underline='none'
                  sx={{ mx: 2 }}
                >
                  {link.text}
                </Link>
              ))
            )}
          </Toolbar>
        </AppBar>
        <Container maxWidth='lg' sx={{ py: 4 }}>
          {children}
        </Container>
        <footer
          style={{
            textAlign: "center",
            padding: "1rem",
            background: "#2e3b55",
            color: "#fff",
          }}
        >
          <Typography variant='body2'>
            &copy; {new Date().getFullYear()} Abdulhazeem Adenekan. All Rights
            Reserved.
          </Typography>
          <Stack direction='row' spacing={2} justifyContent='center' mt={2}>
            <Button href='https://github.com/Hazeem01' target='_blank'>
              GitHub
            </Button>
            <Button
              href='https://linkedin.com/in/abdulhazeem-adenekan'
              target='_blank'
            >
              LinkedIn
            </Button>
          </Stack>
        </footer>
      </body>
    </html>
  );
}
