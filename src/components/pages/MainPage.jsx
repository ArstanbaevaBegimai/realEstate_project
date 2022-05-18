import {
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Container, Pagination } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import HouseCard from "../HouseCard";
import MainPageStyle from "./MainPageStyle.css";
import { houseContext } from "../contexts/HouseContext";
import Footer from "../Footer";
import Loader from "../Loader";
import Search from "../Search";
import { useSearchParams } from "react-router-dom";
import FilterList from "@mui/icons-material/FilterList";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const style = {
  height: "80%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "70%", md: "30%" },
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "scroll",
};

const MainPage = () => {
  const { houses, getAllHouses, pagesCount, _limit } = useContext(houseContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFiltered, setIsFiltered] = useState(false);
  const [activePage, setActivePage] = useState(1);

  const navigate = useNavigate();
  let query = window.location.search;
  console.log(query);

  useEffect(() => {
    if (query === "") {
      setSearchParams("");
      setIsFiltered(false);
      setFilters({
        priceFrom: 0,
        priceTo: 1000000000000,
        areaFrom: 0,
        areaTo: 1000000000000,
        rooms: undefined,
      });
    }
  }, [query]);

  const filterInitState = {
    priceFrom: 0,
    priceTo: 100000,
    areaFrom: 0,
    areaTo: 100000,
    rooms: undefined,
  };

  const [filters, setFilters] = useState({
    priceFrom: 0,
    priceTo: 100000,
    areaFrom: 0,
    areaTo: 100000,
    rooms: undefined,
  });

  const params = {
    q: search,
    _page: activePage,
    _limit,
  };

  useEffect(() => {
    getAllHouses();
  }, []);

  useEffect(() => {
    setSearchParams(params);
    getAllHouses();
  }, [search]);

  useEffect(() => {
    setSearchParams(params);
    getAllHouses();
  }, [activePage]);

  useEffect(() => {
    if (isFiltered === false) {
      getAllHouses();
    }
  }, [isFiltered]);

  const filterHandler = () => {
    let filterParam = {
      price_gte: filters.priceFrom,
      price_lte: filters.priceTo,
      area_gte: filters.areaFrom,
      area_lte: filters.areaTo,
      rooms: +filters.rooms,
    };
    if (!filters.rooms) {
      filterParam = {
        price_gte: filters.priceFrom,
        price_lte: filters.priceTo,
        area_gte: filters.areaFrom,
        area_lte: filters.areaTo,
      };
    }
    setSearchParams(filterParam);
    setIsFiltered(true);
    getAllHouses();
  };

  const resetHandler = () => {
    let filterParam = {
      price_gte: 0,
      price_lte: 1000000000000,
      area_gte: 0,
      area_lte: 1000000000000,
      rooms: undefined,
    };
    setFilters({
      priceFrom: 0,
      priceTo: 1000000000000,
      areaFrom: 0,
      areaTo: 1000000000000,
      rooms: undefined,
    });
    setIsFiltered(false);
    setSearchParams("");
  };

  if (!houses) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  return (
    <div className="container">
      <div className="wallpaper">
        <div className="components-group">
          <Search search={search} setSearch={setSearch} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "50%",
              margin: "10px auto",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              mr="20px"
              variant="h6"
            >
              ...Search by filters <ArrowForward sx={{ marginLeft: "10px" }} />
            </Typography>
            <div>
              {/* MODAL */}
              <IconButton onClick={handleOpen}>
                <FilterList />
              </IconButton>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Box>
                    <Typography variant="h6" textAlign="center">
                      Price
                    </Typography>
                    <TextField
                      fullWidth
                      sx={{ my: "20px" }}
                      label="From"
                      value={filters.priceFrom}
                      onChange={(e) => {
                        setFilters({
                          ...filters,
                          priceFrom: e.target.value,
                        });
                      }}
                    />
                    <TextField
                      fullWidth
                      sx={{ my: "20px" }}
                      label="To"
                      value={filters.priceTo}
                      onChange={(e) => {
                        setFilters({
                          ...filters,
                          priceTo: e.target.value,
                        });
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6" textAlign="center">
                      Area m²
                    </Typography>
                    <TextField
                      fullWidth
                      sx={{ my: "20px" }}
                      label="From"
                      value={filters.areaFrom}
                      onChange={(e) => {
                        setFilters({
                          ...filters,
                          areaFrom: e.target.value,
                        });
                      }}
                    />
                    <TextField
                      fullWidth
                      sx={{ my: "20px" }}
                      label="To"
                      value={filters.areaTo}
                      onChange={(e) => {
                        setFilters({
                          ...filters,
                          areaTo: e.target.value,
                        });
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6" textAlign="center">
                      Rooms
                    </Typography>
                    <TextField
                      fullWidth
                      sx={{ my: "20px" }}
                      label="Rooms"
                      value={filters.rooms}
                      onChange={(e) => {
                        setFilters({
                          ...filters,
                          rooms: e.target.value,
                        });
                      }}
                    />
                    <Box sx={{ display: { xs: "block", md: "flex" } }}>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          mr: "10px",
                          my: "10px",
                          backgroundColor: "#000",
                          color: "#fff",
                          "&:hover": {
                            color: "#000",
                            backgroundColor: "#fff",
                          },
                        }}
                        onClick={() => {
                          filterHandler();
                          handleClose();
                        }}
                      >
                        Apply Filters
                      </Button>
                      <Button
                        variant="contained"
                        fullWidth
                        disabled={isFiltered ? false : true}
                        sx={{
                          backgroundColor: "#000",
                          color: "#fff",
                          "&:hover": {
                            color: "#000",
                            backgroundColor: "#fff",
                          },
                        }}
                        onClick={() => {
                          resetHandler();
                          handleClose();
                        }}
                      >
                        Reset Filters
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Modal>
            </div>
          </Box>
        </div>
      </div>

      <Container
        sx={{
          width: "90%",
          my: "50px",
          display: "flex",
          justifyContent: "space-between",
          gap: "30px",
          flexWrap: "wrap",
          my: "80px",
        }}
      >
        {houses.map((house) => {
          return (
            <HouseCard
              key={house.id}
              title={house.title}
              rooms={house.rooms}
              area={house.area}
              price={house.price}
              currency={house.currency}
              description={house.description}
              image={house.image}
              city={house.city}
              id={house.id}
            />
          );
        })}
      </Container>
      <Pagination
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
        count={pagesCount}
        page={activePage}
        onChange={(event, value) => setActivePage(value)}
      />

      <Footer />
    </div>
  );
};

export default MainPage;
