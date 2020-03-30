import React, { Component } from "react";

import axios from "axios";
import Chart from "react-apexcharts";

import { Container, Row, Col } from "reactstrap";

class CaseCharts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      chartOptions: [],
      chartSeriesCases: [],
      chartSeriesDeaths: [],
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php",
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
        const totalCases = [];
        const totalDeaths = [];
        const chartLabels = [];
        const chartCases = [];
        const chartDeaths = [];
        let i = 0;

        response.data.stat_by_country.forEach((item) => {
          totalCases.push(item.total_cases);
          totalDeaths.push(item.total_deaths);
        });

        Array.from(new Set(totalCases)).forEach((item) => {
          i += 1;
          chartLabels.push(`${i}. gün`);
          chartCases.push(item.split(",").join(""));
        });
        Array.from(new Set(totalDeaths)).forEach((item) => {
          chartDeaths.push(item === "" ? "0" : item.split(",").join(""));
        });

        const options = {
          chart: {
            background: "#fff",
            id: "basic-bar",
          },
          stroke: {
            curve: "smooth",
          },
          xaxis: {
            categories: chartLabels,
          },
        };
        const seriesCases = [
          {
            name: "Vaka Sayısı",
            data: chartCases,
          },
        ];
        const seriesDeaths = [
          {
            name: "Ölüm Sayısı",
            data: chartDeaths,
          },
        ];

        this.setState({
          chartOptions: options,
          chartSeriesCases: seriesCases,
          chartSeriesDeaths: seriesDeaths,
          isLoaded: true,
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      });
  }

  render() {
    const { error, isLoaded, chartOptions, chartSeriesCases, chartSeriesDeaths } = this.state;

    if (error) {
      return (
        <Container>
          <div className="case total-death">
            <div className="case-wrapper">
              <span className="case-title">Hata oluştu...</span>
              <span className="case-value">{error.message}</span>
            </div>
          </div>
        </Container>
      );
    }

    if (!isLoaded) {
      return (
        <Container>
          <div className="case active-case">
            <div className="case-wrapper">
              <span className="case-title">Yükleniyor...</span>
            </div>
          </div>
        </Container>
      );
    } else {
      return (
        <Container>
          <Row>
            <Col md="6">
              <Chart type="area" options={chartOptions} series={chartSeriesCases} />
            </Col>
            <Col md="6">
              <Chart type="area" options={chartOptions} series={chartSeriesDeaths} />
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

export default CaseCharts;
