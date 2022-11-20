import React, { useState } from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

import "../styles/furnitures.css";

import furnitures from "../assets/data/furnitures";
import FurnituresList from "../components/UI/FurnituresList";

const Shop = () => {
  const [furnituresData, setFurnitresData] = useState(furnitures);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filteredFurnitures = furnitures.filter(
        (item) => item.category === "sofa"
      );

      setFurnitresData(filteredFurnitures);
    }
    if (filterValue === "Filter By Category") {
      const filteredFurnitures = furnitures.filter(
        (item) => item.categoryAll === "ALL"
      );

      setFurnitresData(filteredFurnitures);
    }
    if (filterValue === "chair") {
      const filteredFurnitures = furnitures.filter(
        (item) => item.category === "chair"
      );

      setFurnitresData(filteredFurnitures);
    }
    if (filterValue === "table") {
      const filteredFurnitures = furnitures.filter(
        (item) => item.category === "table"
      );

      setFurnitresData(filteredFurnitures);
    }
    if (filterValue === "storage") {
      const filteredFurnitures = furnitures.filter(
        (item) => item.category === "storage"
      );

      setFurnitresData(filteredFurnitures);
    }
    if (filterValue === "bed") {
      const filteredFurnitures = furnitures.filter(
        (item) => item.category === "bed"
      );

      setFurnitresData(filteredFurnitures);
    }
  };

  const handleSearch = (e) => {
    const searchItem = e.target.value;

    const searchedFurnitures = furnitures.filter((item) =>
      item.productName
        .toLocaleLowerCase()
        .includes(searchItem.toLocaleLowerCase())
    );

    setFurnitresData(searchedFurnitures);
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Furnitures" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter_widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category </option>
                  <option value="chair">Chair</option>
                  <option value="sofa">Sofa</option>
                  <option value="table">Table</option>
                  <option value="storage">Storage</option>
                  <option value="bed">Bed</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6">
              <div className="filter_widget">
                <select onChange={handleFilter}>
                  <option>Sort By </option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search_box">
                <span>
                  <i class="ri-search-2-line"></i>
                </span>
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={handleSearch}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container className="pt-0">
          <Row>
            {furnituresData.length === 0 ? (
              <h1 className="text-center fs-4">No furnitures are found!</h1>
            ) : (
              <FurnituresList data={furnituresData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
