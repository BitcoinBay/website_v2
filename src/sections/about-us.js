 
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Community Engagement',
    title: 'Community Engagement',
    text:
      'Building a grassroots blockchain ecosystem.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Adoption Strategy',
    title: 'Adoption Strategy',
    text:
      'Aid blockchain adoption for businesses.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Solutions Development',
    title: 'Solutions Development',
    text:
      'Decentralized applications, security and architecture.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Investor Relations',
    title: 'Investor Relations',
    text:
      'Connecting blockchain startups with investors.',
  },
];

export default function AboutUs() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="about-us">
      <Container>
        <SectionHeader
          slogan="A Bit About Us"
          title="Bitcoin Bay - What We Do"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
