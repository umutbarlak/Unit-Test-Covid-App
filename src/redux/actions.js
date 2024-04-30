import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { headers } from "../constants/index";

export const getData = createAsyncThunk("countryData", async (country) => {
  const params = {
    q: country,
  };

  const res1 = axios.get("https://covid-19-statistics.p.rapidapi.com/reports", {
    params,
    headers,
  });

  const res2 = axios.get(`https://restcountries.com/v3.1/name/${country}`);

  //country === "United States" ? "usa" :

  const responses = await Promise.all([res1, res2]);

  const covid = {
    ...responses[0].data.data[0],
    ...responses[0].data.data[0].region,
  };

  delete covid.region;
  delete covid.cities;

  return {
    covid: covid,
    country: responses[1].data[responses[1].data.length - 1],
  };
});
