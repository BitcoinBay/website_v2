/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Adoption Strategy',
    title: 'Adoption Strategy',
    text:
      "Whether it's merchant adoption or decentralized finance, we value in educating from the blockchain fundamentals. Our Bitcoin Bay meetups and workshops are beginner-friendly with a wide range of technical and business related content.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Ideation Assessment',
    title: 'Ideation Assessment',
    text:
      'Let Bitcoin Bay help your blockchain project with comprehensive analysis and evaluative feedback. With our blockchain expertise, we provide an effective diagnosis and recommended actions for successful execution.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Blockchain Development',
    title: 'Blockchain Development',
    text:
      'Bitcoin Bay constantly updates our hands-on knowledge of blockchain development practices. Let our experts help catalyze your blockchain project, providing comprehensive insight into the pros and cons of various approaches.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Investor Relations',
    title: 'Investor Relations',
    text:
      'Bitcoin Bay has built a reputation for vetting blockchain projects. Since 2017, our team has evaluated dozens of projects. We help filter out teams that raise red flags, and highlight projects that have strong prospective viability.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Blockchain Expertise"
          title="Expertise and Execution Services"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
