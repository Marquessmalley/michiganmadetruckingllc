import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  Container,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { css } from "@emotion/react";
const Navbar = () => {
  const styles = {
    container: css`
      display: flex;
      align-items: center;
    `,
    logo: css`
      flex: 1;
    `,
    logoText: css`
      font-size: 1.5rem;
      font-weight: bold;
      color: black;
      @media (max-width: 768px) {
        white-space: nowrap;
      }
      @media (max-width: 750px) {
        text-align: center;
      }
      @media (max-width: 500px) {
        font-size: 1.2rem;
      }
      @media (max-width: 325px) {
        font-size: 1rem;
      }
    `,
    list: css`
      display: flex;
      color: black;
      @media (max-width: 750px) {
        display: none;
      }
    `,
    listText: css`
      font-weight: 300;
      font-size: 1.2rem;
    `,
    burger: css`
      color: black;
      display: none;
      @media (max-width: 750px) {
        display: inline;
      }
    `,
  };

  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ background: "#fff" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={styles.burger}
          >
            <MenuIcon />
          </IconButton>
          <Container sx={styles.container}>
            <Box sx={{ flexGrow: 1, display: { lg: "block" } }}>
              <Typography sx={styles.logoText}>
                Michigan Made Trucking
              </Typography>
            </Box>
            <List sx={styles.list}>
              {["About", "Services", "Contact"].map((item) => {
                return (
                  <ListItem sx={{ display: { xs: "none", sm: "block" } }}>
                    <ListItemButton>
                      <Typography sx={styles.listText}>{item}</Typography>
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Container>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={handleDrawerToggle}>
        <List>
          {["About", "Services", "Contact"].map((item) => {
            return (
              <ListItem>
                <ListItemButton>{item}</ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;
