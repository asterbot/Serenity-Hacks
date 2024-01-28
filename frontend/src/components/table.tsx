import React from 'react';

interface TableProps {
  headers: string[];
  data: string[][];
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
    // TODO: Make table centered
    return (
      <div className="theTable">
        <div style={tableContainerStyle}>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index} style={headerStyle}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((rowData, rowIndex) => (
                <tr key={rowIndex} style={rowStyle}>
                  {rowData.map((cellData, cellIndex) => (
                    <td key={cellIndex} style={cellStyle}>
                      {cellIndex === 0 ? (
                        <div className="audios" />
                      ) :cellIndex === 1 ? (
                        // Display the summary in the second column
                        <div className="summaries" />
                      ) : cellIndex === 2 ?(
                        <div className="moods" />
                      ) : cellData
                    }
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  


const tableContainerStyle: React.CSSProperties = {
  // height: '80%', // Optional: Adjust the width as needed
};

const headerStyle: React.CSSProperties = {
  background: '#f2f2f2',
  padding: '10px',
  borderBottom: '1px solid #ddd',
  color: 'black'    
};

const rowStyle: React.CSSProperties = {
  borderBottom: '1px solid #ddd',
};

const cellStyle: React.CSSProperties = {
  padding: '10px',
};

export default Table;
