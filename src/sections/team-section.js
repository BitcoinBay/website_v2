/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

import Leo from 'assets/team/Leo.png';
import Jerry from 'assets/team/Jerry.png';
import Antoine from 'assets/team/Antoine.png';
import Gaurav from 'assets/team/Gaurav.png';
import Allwyn from 'assets/team/Allwyn.png';
import Juan from 'assets/team/Juan.jpg';

const data = [
  {
    id: 1,
    imgSrc: Leo,
    altText: 'Leo Fiadzinu',
    title: 'Leo Fiadzinu',
    designation: 'CEO',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/leonard-fiadzinu-cfa-cmt-caia-a43a1a1/',
        icon: <FaLinkedin />,
      },
      // {
      //   id: 2,
      //   name: 'twitter',
      //   path: '#',
      //   icon: <FaTwitter />,
      // },
      // {
      //   id: 3,
      //   name: 'instagram',
      //   path: '#',
      //   icon: <FaInstagram />,
      // },
    ],
  },
  {
    id: 2,
    imgSrc: Jerry,
    altText: 'Jerry Qian',
    title: 'Jerry Qian',
    designation: 'Core Operations',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/jerry-qian-4ba2a79a/',
        icon: <FaLinkedin />,
      },
      // {
      //   id: 2,
      //   name: 'twitter',
      //   path: '#',
      //   icon: <FaTwitter />,
      // },
      // {
      //   id: 3,
      //   name: 'instagram',
      //   path: '#',
      //   icon: <FaInstagram />,
      // },
    ],
  },
  {
    id: 3,
    imgSrc: Antoine,
    altText: 'Antoine de Vuyst',
    title: 'Antoine de Vuyst',
    designation: 'Blockchain Development',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/antoine-de-vuyst-49a74194/',
        icon: <FaLinkedin />,
      },
      // {
      //   id: 2,
      //   name: 'twitter',
      //   path: '#',
      //   icon: <FaTwitter />,
      // },
      // {
      //   id: 3,
      //   name: 'instagram',
      //   path: '#',
      //   icon: <FaInstagram />,
      // },
    ],
  },
  {
    id: 4,
    imgSrc: Gaurav,
    altText: 'Gaurav Sharma',
    title: 'Gaurav Sharma',
    designation: 'Business Development',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/gauravksharma9/',
        icon: <FaLinkedin />,
      },
      // {
      //   id: 2,
      //   name: 'twitter',
      //   path: '#',
      //   icon: <FaTwitter />,
      // },
      // {
      //   id: 3,
      //   name: 'instagram',
      //   path: '#',
      //   icon: <FaInstagram />,
      // },
    ],
  },
  {
    id: 5,
    imgSrc: Allwyn,
    altText: "Allwyn d'Souza",
    title: "Allwyn d'Souza",
    designation: 'Business Development',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/company/bitcoinbay',
        icon: <FaLinkedin />,
      },
      // {
      //   id: 2,
      //   name: 'twitter',
      //   path: '#',
      //   icon: <FaTwitter />,
      // },
      // {
      //   id: 3,
      //   name: 'instagram',
      //   path: '#',
      //   icon: <FaInstagram />,
      // },
    ],
  },
  {
    id: 6,
    imgSrc: Juan,
    altText: 'Juan Montoya',
    title: 'Juan Montoya',
    designation: 'Design & Strategy',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/jmport/',
        icon: <FaLinkedin />,
      },
      // {
      //   id: 2,
      //   name: 'twitter',
      //   path: '#',
      //   icon: <FaTwitter />,
      // },
      // {
      //   id: 3,
      //   name: 'instagram',
      //   path: '#',
      //   icon: <FaInstagram />,
      // },
    ],
  },
];

export default function TeamSection() {
  return (
    <section id="team">
      <Container>
        <br />
        <SectionHeader
          slogan="our team"
          title="The most qualified and talented individuals"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
