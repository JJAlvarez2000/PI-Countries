"use strict";
const express = require("express");
const router = express.Router();

const sequelize = require("sequelize");
const { Op } = require("sequelize");
const { Country, Season, Activity } = require("../db");

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    let { name } = req.query;
    if (name === "" || name === undefined) {
      let data = await Country.findAll({
        include: [{ model: Activity }],
      });
      res.json(data);
    } else if (name) {
      const country = await Country.findAll({
        where: sequelize.where(
          sequelize.fn("unaccent", sequelize.col("country.name")),
          {
            [Op.iLike]:
              name
                .normalize("nfd")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase() + "%",
          }
        ),
        include: [{ model: Activity }],
      });

      if (country.length !== 0) {
        res.json(country);
      } else {
        res.json([]);
      }
    }
  } catch (error) {
    console.log("/routes/countries.js get / error: ", error);
  }
});

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const countryid = await Country.findOne({
      where: { id: id },
      include: [{ model: Activity, include: [{ model: Season }] }],
    });
    if (countryid !== null) {
      res.json(countryid);
    } else {
      res.json("Pais no encontrado");
    }
  } catch (error) {
    console.log("/routes/countries.js get /:id error: ", error);
  }
});

module.exports = router;
