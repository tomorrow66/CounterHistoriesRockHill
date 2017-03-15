import styled from 'styled-components';

const Laurels = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .laurelImg {
    width: calc(100%/3);
    padding: 10px;
    @media (min-width: 768px) {
      width: calc(100%/8);
      margin: 4px;
    }
  }
`

const _laurels = [
  { name: 'New Media Laurel', image: '/static/images/laurels/new_mediaFF.png' },
  { name: 'GCUFF Laurel', image: '/static/images/laurels/gcuff_laurel.png' },
  { name: 'HollyShorts Laurel', image: '/static/images/laurels/hollyshorts_laurel.png' },
  { name: 'CHRH Laurel Spotlight', image: '/static/images/laurels/chrh-laurel-spotlight.png' },
  { name: 'Taos laurel', image: '/static/images/laurels/taos_laurel.png' },
  { name: 'Tribute laurel', image: '/static/images/laurels/tribute_ff_laurel2.png'},
  { name: 'College Town Laurel', image: '/static/images/laurels/CTFF_laurel.png'},
  { name: 'MDIFF Laurel', image: '/static/images/laurels/MDIFF_laurel.png'},
  { name: 'FirstGlance Laurel', image: '/static/images/laurels/FGFF_laurel.png'},
  { name: 'West Chester Laurel', image: '/static/images/laurels/west_chester_laurel_w.png'},
  { name: 'Cayman Film Laurel', image: '/static/images/laurels/tony_laurels_white.png'},
  { name: 'Southern Shorts Laurel', image: '/static/images/laurels/southernshorts_laurel.png'},
  { name: 'Awareness Laurel', image: '/static/images/laurels/awarenessFF_laurel.png'},
  { name: 'Global Film Festival Laurel', image: '/static/images/laurels/global_f_f_boston.png' }
];

export default () => {
  const laurelItems = _laurels.map((laurel) => 
    <div className="laurelImg" key={laurel.name}>
      <img src={laurel.image} />
    </div>
  )
  return (
    <Laurels>{laurelItems}</Laurels>
  )
}