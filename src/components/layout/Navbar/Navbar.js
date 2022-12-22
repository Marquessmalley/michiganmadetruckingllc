import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  Link,
  ListItemButton,
  Container,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { css } from "@emotion/react";
import MMT from "../../../assets/MMT.svg";
import altLogo from "../../../assets/altLogo.svg";
const Navbar = () => {
  const styles = {
    container: css`
      display: flex;
      align-items: center;
      @media (max-width: 750px) {
        text-align: center;
      }
    `,
    logo: css`
      flex: 1;
    `,
    logoText: css`
      font-size: 1.5rem;
      font-weight: bold;
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
      color: #fff;
      @media (max-width: 750px) {
        display: none;
      }
    `,
    listBtn: css`
      .Mui-selected {
        background: green;
      }
    `,
    listText: css`
      font-weight: 300;
      font-size: 1.3rem;
    `,
    link: css`
      color: #fff;
      text-decoration: none;
    `,
    burger: css`
      color: #fff;
      display: none;

      @media (max-width: 750px) {
        display: inline;
      }
    `,
  };

  const [open, setOpen] = useState(false);
  const [selected, setSelcted] = useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleBtn = (e) => {
    console.log(e);
    setSelcted(true);
  };

  const drawerWidth = 200;

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ background: "#00004D" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={styles.burger}
            size="large"
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Container sx={styles.container}>
            <Box sx={{ flexGrow: 1, display: { lg: "block" } }}>
              <img
                src={MMT}
                alt="michigan made trucking"
                width="100"
                height="75"
              />
            </Box>
            <List sx={styles.list}>
              {[
                { id: 1, name: "About", to: "#About" },
                { id: 2, name: "Services", to: "#Services" },
                { id: 3, name: "Contact", to: "#Contact" },
              ].map((item, index) => {
                return (
                  <ListItem
                    key={item.id}
                    sx={{ display: { xs: "none", sm: "block" } }}
                  >
                    <ListItemButton
                      selected={true}
                      sx={styles.listBtn}
                      onClick={handleBtn}
                    >
                      <Link href={item.to} sx={styles.link}>
                        <Typography sx={styles.listText}>
                          {item.name}
                        </Typography>
                      </Link>
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Container>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        onClose={handleDrawerToggle}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#D6D6D6",
            fontSize: "1.5rem",
            fontWeight: "500",
          },
        }}
      >
        <CloseIcon sx={{ cursor: "pointer" }} onClick={closeDrawer} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={altLogo} alt="michigan made trucking" width="400" />
        </Box>

        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {[
            { id: 1, name: "About", to: "#About" },
            { id: 2, name: "Services", to: "#Services" },
            { id: 3, name: "Contact", to: "#Contact" },
          ].map((item, index) => {
            return (
              <ListItem key={index}>
                <ListItemButton>
                  <Link href={item.to} sx={styles.link}>
                    <Typography sx={styles.listText}>{item.name}</Typography>
                  </Link>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;
