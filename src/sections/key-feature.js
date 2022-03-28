/** @jsx jsx */
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
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Partnership deal',
    title: 'Partnership deal',
    text:
      'Porta semper lacus cursus feugiat primis ultrice ligula risus at auctor tempus feugiat impedit felis undo auctor augue mauris.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Pro Subscription',
    title: 'Pro Subscription',
    text:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.',
  },
];

export default function KeyFeature() {
  return (
   <section sx={{variant : 'section.keyFeature'}} id="feature">
     <Container>
       <SectionHeader slogan="Quality features" title="Your hard work is now made smarter"/>
       <Grid sx={styles.grid}>
         {data.map((item)=>(
           <FeatureCardColumn key={item.id} src={item.imgSrc} title={item.title} text={item.text} />
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
