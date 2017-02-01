import styled from 'styled-components';
import * as Table from 'reactabular-table';

const EventListing = styled.d

const screenings = [
  {
   id: 30,
   event: 'Global Cinema Film Festival',
   where: 'Belmont, MA',
   date: 'March 9th, 2017',
   time: '7:00pm'
 },
 {
   id: 29,
   event: 'SaMo Indie',
   where: 'Santa Monica, CA',
   date: 'November 3rd - 4th, 2016',
   time: 'TBA'
 },
 {
   id: 28,
   event: 'Italy International Film Festival',
   where: 'Milan, Italy',
   date: 'November 2nd - 7th, 2016',
   time: 'TBA'
 },
 {
   id: 27,
   event: 'Berlin International Film Festival',
   where: 'Berlin, Germany',
   date: 'October 24th, 2016',
   time: '10:05am'
 },
 {
   id: 26,
   event: 'Southern Shorts',
   where: 'Roswell, GA',
   date: 'October 15th, 2016',
   time: 'TBA'
 },
 {
   id: 25,
   event: 'Docs Without Borders Film Festival',
   where: 'Online',
   date: 'October 10th, 2016',
   time: 'TBA'
 },
 {
   id: 24,
   event: 'Awareness Film Festival',
   where: 'Los Angeles, CA',
   date: 'October 6th, 2016',
   time: '5:00pm'
 },
 {
   id: 23,
   event: 'Great Lakes International Film Festival',
   where: 'Online',
   date: 'Sept 22nd - Oct 1st, 2016',
   time: 'TBA'
 },
 {
   id: 22,
   event: 'ABFF Independent on ASPiRE',
   where: 'ASPiRE.tv Channel',
   date: 'August 11th, 2016',
   time: '9:00pm'
 },
 {
   id: 21,
   event: 'Cayman Island International Film Festival',
   where: 'Grand Cayman',
   date: 'July 2nd, 2016',
   time: '3:00pm'
 },
 {
   id: 20,
   event: 'NYC Indie Film Festival',
   where: 'New York, NY',
   date: 'April 27th, 2016',
   time: '12:00pm'
 },
 {
   id: 19,
   event: 'West Chester Film Festival',
   where: 'West Chester, PA',
   date: 'April 23rd, 2016',
   time: '9:15pm'
 },
 {
   id: 18,
   event: 'FirstGlance Film Fest',
   where: 'Los Angeles, CA',
   date: 'April 16th, 2016',
   time: '12:30pm - 1:45pm'
 },
 {
   id: 17,
   event: 'Taos Film Festival',
   where: 'Taos, NM',
   date: 'April 10th, 2016',
   time: '12:00pm - 2:00pm'
 },
 {
   id: 16,
   event: 'Maryland International Film Festival',
   where: 'Hagerstown, MD',
   date: 'April 2nd, 2016',
   time: '2:30pm'
 },
 {
   id: 15,
   event: 'LA Independent Artist Film Festival',
   where: 'Los Angeles, CA',
   date: 'March 19th, 2016',
   time: '1:00pm'
 },
 {
   id: 14,
   event: 'College Town Film Festival',
   where: 'State College, PA',
   date: 'March 19th, 2016',
   time: '1:30pm'
 },
 {
   id: 13,
   event: 'Tribute Film Festival',
   where: 'Abilene, TX',
   date: 'March 5th, 2016',
   time: '6:00pm'
 },
 {
   id: 12,
   event: 'Reel South ETV-HD Airing',
   where: 'North Carolina',
   date: 'Feb 18th, 2016',
   time: '9:30pm'
 },
 {
   id: 11,
   event: 'Reel South UNC-TV Airing',
   where: 'North Carolina',
   date: 'Jan 18th, 2016',
   time: '9:30pm'
 },
 {
   id: 10,
   event: 'TallGrass Film Festival',
   where: 'Wichita, KS',
   date: 'Oct 17th, 2015',
   time: '9:30am'
 },
 {
   id: 9,
   event: 'Greater Cleveland Urban Film Festival',
   where: 'Cleveland, OH',
   date: 'Sept 19th, 2015',
   time: '2:00pm'
 },
 {
   id: 8,
   event: 'HollyShorts',
   where: 'Hollywood, CA',
   date: 'August 20th, 2015',
   time: '12:00pm'
 },
 {
   id: 7,
   event: 'The Charles Aidikoff Screening Room',
   where: 'Beverly Hills, CA',
   date: 'June 11th, 2015',
   time: '7:00pm'
 },
 {
   id: 6,
   event: 'The Landmark Theatre',
   where: 'Los Angeles, CA',
   date: 'June 10th, 2015',
   time: '3:30pm'
 },
 {
   id: 5,
   event: 'KLCS Airing',
   where: 'Los Angeles, CA',
   date: 'March 3rd, 2015',
   time: '10:00pm'
 },
 {
   id: 4,
   event: 'South Carolina ETV Airing',
   where: 'South Carolina',
   date: 'February 22th, 2015',
   time: '3:30am'
 },
 {
   id: 3,
   event: 'South Carolina ETV Airing',
   where: 'South Carolina',
   date: 'February 20th, 2015',
   time: '10:30pm'
 },
 {
   id: 2,
   event: 'Screening',
   where: 'Rock Hill, SC',
   date: 'February 20th, 2015',
   time: '7:00pm'
 },
 {
   id: 1,
   event: 'KLCS Airing',
   where: 'Los Angeles, CA',
   date: 'February 3rd, 2015',
   time: '10:30pm'
 }
];

const columns = [
  {
    property: 'event',
    header: {
      label: 'Event'
    }
  },
  {
    property: 'where',
    header: {
      label: 'Where'
    }
  },
  {
    property: 'date',
    header: {
      label: 'Date'
    }
  },
  {
    property: 'time',
    header: {
      label: 'Time'
    }
  }
];

export default () => (
  <Table.Provider columns={columns}>
    <Table.Header />
    <Table.Body rows={screenings} rowKey="id"/>
    <Table.Header />
  </Table.Provider>
)