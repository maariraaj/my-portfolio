import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faCss3Alt, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: faJs, color: '#f7df1e', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'HTML', icon: faHtml5, color: '#e34f26', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', icon: faCss3Alt, color: '#1572b6', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'React', icon: faReact, color: '#61dafb', link: 'https://reactjs.org/' },
    { name: 'Next.js', icon: faGlobe, color: '#000000', link: 'https://nextjs.org/' },
    { name: 'Redux', icon: faDatabase, color: '#764abc', link: 'https://redux.js.org/' },
  ];

  return (
    <Box
      sx={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h3" component="h1" sx={{ marginBottom: '2rem', fontFamily: 'Playfair Display, serif' }}>
        Skills
      </Typography>
      <Typography variant="h5" component="h2" sx={{ marginBottom: '2rem', fontFamily: 'Playfair Display, serif' }}>
        Frontend Development
      </Typography>
      <Grid container spacing={1} justifyContent="center">
        {skills.map((skill) => (
          <Grid item key={skill.name} xs={6} sm={4} md={2} sx={{ textAlign: 'center' }}>
            <Link href={skill.link} target="_blank" rel="noopener" sx={{ color: 'inherit' }}>
              <Box
                sx={{
                  fontSize: '4rem',
                  color: skill.color,
                  '&:hover': {
                    color: 'darken(skill.color, 20%)',
                  },
                }}
              >
                <FontAwesomeIcon icon={skill.icon} />
              </Box>
              <Typography variant="body1" sx={{ marginTop: '0.5rem' }}>
                {skill.name}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
