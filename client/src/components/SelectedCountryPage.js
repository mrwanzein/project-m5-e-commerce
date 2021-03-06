import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import SmallCompany from "./Items/SmallCompany";

export default function SelectedCountryPage() {
  const companies = useSelector((state) => state.auth.companies);
  const { country } = useParams();

  let findCompanies = companies.filter((companies) => {
    return companies.country === country;
  });

  const countryOrigin = findCompanies[0].country;
  return (
    <>
      <Section style={{ margin: "25px 25px" }}>
        Search by: {countryOrigin}
      </Section>
      {findCompanies.length > 5 && (
        <Alphabar>
          <Listletter>
            <Nav href="#">#</Nav>
          </Listletter>
          <Listletter>
            <Nav href="#A">A</Nav>
          </Listletter>
          <Listletter>
            <Nav href="#B">B</Nav>
          </Listletter>
          <Listletter>
            <Nav href="#C">C</Nav>
          </Listletter>
          <Listletter>
            <Nav href="#D">D</Nav>
          </Listletter>
          <Listletter>
            <Nav href="#E">E</Nav>
          </Listletter>
          <Listletter>
            <Nav href="#F">F</Nav>
          </Listletter>
          <Listletter>
            <Nav href="#G">G</Nav>
          </Listletter>
          <Listletter>
            <Nav href="#H">H</Nav>
          </Listletter>
          <Listletter>
            <Nav href="#I">I</Nav>
          </Listletter>
          <Listletter>
            <Nav href="#J">J</Nav>
          </Listletter>
          <Listletter>
            <Nav href="#J">K</Nav>
          </Listletter>
          <Listletter>
            <Nav href="#L">L</Nav>
          </Listletter>
          <Listletter>
            <Nav href="#M">M</Nav>
          </Listletter>
          <Listletter>
            <Nav href="#N">N</Nav>
          </Listletter>
          <Listletter>
            <Nav href="#O">O</Nav>
          </Listletter>
          <Listletter>
            <Nav href="#P">P</Nav>
          </Listletter>
          <Listletter>
            <Nav href="#P">Q</Nav>
          </Listletter>
          <Listletter>
            <Nav href="#P">R</Nav>
          </Listletter>
          <Listletter>
            <Nav href="#S">S</Nav>
          </Listletter>
          <Listletter>
            <Nav href="#T">T</Nav>
          </Listletter>
          <Listletter>
            <Nav href="#T">U</Nav>
          </Listletter>
          <Listletter>
            <Nav href="#V">V</Nav>
          </Listletter>
          <Listletter>
            <Nav href="#W">W</Nav>
          </Listletter>
          <Listletter>
            <Nav href="#X">X</Nav>
          </Listletter>
          <Listletter>
            <Nav href="#Y">Y</Nav>
          </Listletter>
          <Listletter>
            <Nav href="#Y">Z</Nav>
          </Listletter>
        </Alphabar>
      )}
      <Grid style={{ margin: "5px 5px" }}>
        {findCompanies
          .sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })
          .map((company, i, arr) => {
            let order = undefined;
            if (i > 0) order = arr[i - 1].name[0];
            if (order !== company.name[0]) {
              return (
                <Companies key={company.id}>
                  <FixingGrid id={company.name[0]}></FixingGrid>
                  <SmallCompany company={company} />
                </Companies>
              );
            } else return <SmallCompany key={company.id} company={company} />;
          })}
      </Grid>
    </>
  );
}

const Grid = styled.div`
  display: grid;
  grid: repeat(6, auto) / repeat(11, auto);
  gap: 2em;
`;

const Section = styled.div`
  font-size: 30px;
  font-family: "Cardo", serif;
  color: midnightblue;
`;
const Alphabar = styled.div`
  display: flex;
  justify-content: center;
`;
const FixingGrid = styled.div`
  grid-column-start: 1;
`;

const Nav = styled.a`
  font-size: 25px;
  display: block;
  float: left;
  text-align: center;
`;

const Listletter = styled.p`
  text-align: center;
  margin-left: 15px;
  cursor: pointer;
  &:hover {
    transform: scale(1.25);
  }
`;

const Companies = styled.div`
  display: contents;
`;
