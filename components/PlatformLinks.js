import styled from 'styled-components';

const Platforms = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-self: flex-start;
  padding: 0;

  li {
    display: flex;
    width: calc(100% / 3);
    padding: 8px;

    @media (min-width: 768px) {
      width: calc(100% / 6);
      padding: 0 8px;
    }
  }
`;

export default () => (
  <Platforms>
    <li><a href="http://a.co/hMguyJB" target="_blank"><img src="/static/images/amazon_video.png" alt="Amazon Video"/></a></li>
    <li><a href="https://play.google.com/store/movies/details/Counter_Histories_Rock_Hill?id=dpxgAwdVu9k&hl=en" target="_blank"><img src="/static/images/google_play.png" alt="Google Play Video"/></a></li>
    <li><a href="" target="_blank"><img src="/static/images/dish.png" alt="Dish"/></a></li>
    <li><a href="" target="_blank"><img src="/static/images/vudu.png" alt="Vudu"/></a></li>
    <li><a href="https://vimeo.com/ondemand/counterhistoriesrockhill" target="_blank"><img src="/static/images/vimeo_vod.png" alt="Vimeo VOD"/></a></li>
    <li><a href="" target="_blank"><img src="/static/images/shaw_media.png" alt="Shaw Media"/></a></li>
  </Platforms>
)