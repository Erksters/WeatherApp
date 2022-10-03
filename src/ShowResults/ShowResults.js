import React from "react";

const ShowResults = (props) => {
  const { dataArray } = props;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>DateForecast</th>
            <th>DateIssue</th>
            <th>Discussion</th>
            <th>ParameterName</th>
            <th>ReportingArea</th>
            <th>StateCode</th>
            <th>ActionDay</th>
            <th>AQI</th>
            <th>Longitude</th>
            <th>Latitude</th>
          </tr>
        </thead>

        <tbody>
          {dataArray.map((entry, index) => (
            <>
              <tr className="Explore-Row" key={index}>
                <td>{entry.DateForecast}</td>
                <td>{entry.DateIssue}</td>
                <td>{entry.Discussion}</td>
                <td>{entry.ParameterName}</td>
                <td>{entry.ReportingArea}</td>
                <td>{entry.StateCode}</td>
                <td>{entry.ActionDay.toString()}</td>
                <td>{entry.AQI}</td>
                <td>{entry.Longitude}</td>
                <td>{entry.Latitude}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ShowResults;
