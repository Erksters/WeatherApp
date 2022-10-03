import React from "react";
import CityData from "./CityZips.json";

const Table = (props) => {
  const { cityName, zipCode, zipCheckBox, setZipCode, setCityName } = props;

  const filterByName = (entryName) => {
    if (entryName.toUpperCase().indexOf(`${cityName.toUpperCase()}`) > -1) {
      return true;
    } else {
      return false;
    }
  };

  const filterByZip = (entryZip) => {
    if (entryZip.indexOf(`${zipCode}`) > -1) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>State</th>
            <th>Zip</th>
          </tr>
        </thead>

        <tbody>
          {Object.keys(CityData).map((entry, index) => (
            <>
              {zipCheckBox ? (
                //   Filter by Zip Code
                <>
                  {filterByZip(CityData[entry].Zipcode.toString()) ? (
                    <tr
                      className="Explore-Row"
                      key={index}
                      onClick={() => {
                        setZipCode(CityData[entry].Zipcode.toString());
                        setCityName(entry);
                      }}
                    >
                      <td>{entry}</td>
                      <td>{CityData[entry].State}</td>
                      <td>{CityData[entry].Zipcode}</td>
                    </tr>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                // Filter by String
                <>
                  {filterByName(entry) ? (
                    <tr
                      className="Explore-Row"
                      onClick={() => {
                        setZipCode(CityData[entry].Zipcode.toString());
                        setCityName(entry);
                      }}
                      key={index}
                    >
                      <td>{entry}</td>
                      <td>{CityData[entry].State}</td>
                      <td>{CityData[entry].Zipcode}</td>
                    </tr>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
