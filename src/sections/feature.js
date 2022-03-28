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
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Pro Subscription',
    title: 'Pro Subscription',
    text:
      'Porta semper lacus cursus feugiat primis ultrice ligula risus at auctor tempus feugiat impedit felis undo auctor augue mauris.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Files Sharing',
    title: 'Files Sharing',
    text:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ',
  },
];

export default function Feature() {
  return (
   <section sx={{ variant : 'section.features'}} >
     {/* <Container>
       <SectionHeader slogan="Quality features" title="Amazign useful features"/>

       <Grid sx={styles.grid}>
         {data.map((item)=>(
           <FeatureCard key={item.id} src={item.imgSrc} alt={item.altText} text={item.text}/>
         ))}
       </Grid>
     </Container> */}
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
