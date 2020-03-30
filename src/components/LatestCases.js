import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    axios({
      method: "GET",
      url: "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "ae7905fb56msh13eee060cd63290p1761c9jsnf9b0ebb3fb13",
      },
      params: {
        country: "turkey",
      },
    })
      .then((response) => {
        setData(response.data.latest_stat_by_country);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, data };
};

function LatestCases() {
  const { loading, data } = useFetch();

  return (
    <div className="latest-cases">
      <Container>
        {loading ? (
          <div className="case active-case">
            <div className="case-wrapper">
              <span className="case-title">Yükleniyor...</span>
            </div>
          </div>
        ) : (
          <Row>
            <Col md="6" lg="3">
              <div className="case total-case">
                <div className="case-wrapper">
                  <span className="case-title">
                    {data[0].total_cases} <small>(+{data[0].new_cases})</small>
                  </span>
                  <span className="case-value">Toplam Vaka Sayısı</span>
                </div>
              </div>
            </Col>
            <Col md="6" lg="3">
              <div className="case active-case">
                <div className="case-wrapper">
                  <span className="case-title">{data[0].active_cases}</span>
                  <span className="case-value">Aktif Vaka Sayısı</span>
                </div>
              </div>
            </Col>
            <Col md="6" lg="3">
              <div className="case total-death">
                <div className="case-wrapper">
                  <span className="case-title">
                    {data[0].total_deaths} <small>(+{data[0].new_deaths})</small>
                  </span>
                  <span className="case-value">Toplam Ölüm Sayısı</span>
                </div>
              </div>
            </Col>
            <Col md="6" lg="3">
              <div className="case total-recovered">
                <div className="case-wrapper">
                  <span className="case-title">{data[0].total_recovered}</span>
                  <span className="case-value">İyileşen Sayısı</span>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default LatestCases;
