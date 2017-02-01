import styled from 'styled-components';

const NewsSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .newsItem {
    width: calc(100%/3);
    margin: 4px;
  }
`

const _newsItems = [
  { title: 'Southern Documentary Fund', link: '#', image:'/static/images/laurels/new_mediaFF.png' },
  { title: 'Deep South Magizine', link: '#', image: '/static/images/laurels/new_mediaFF.png' },
  { title: 'Deep South Magizine', link: '#', image: '/static/images/laurels/new_mediaFF.png' },
];

export default () => {
  const NewsItems = _newsItems.map((newsItem) => 
    <div className="newsItem" key={newsItem.title}>
      <a href={newsItem.link}>
        <img src={newsItem.image} />
        <h2>{newsItem.title}</h2>
      </a>
    </div>
  )
  return (
    <NewsSection>{NewsItems}</NewsSection>
  )
}