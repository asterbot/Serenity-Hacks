import AudioRecord from './components/audiorecord';
import Heading from './components/heading';
import Table from './components/table'

export default function App() {
  const headers = ['Name', 'Age', 'Country'];
  const data = [
    ['John Doe', 'ABC', 'USA'],
    ['Jane Doe', 'DEF', 'Canada'],
    ['Bob Smith', 'GHI', 'UK'],
  ];

  return(
    <div className="App">
      <Heading />
      <AudioRecord />
      <Table headers={headers} data={data} />
    </div>
  );
}
