const currentWeather = [
  {
    "LocalObservationDateTime": "2022-11-27T13:32:00+02:00",
    "EpochTime": 1669548720,
    "WeatherText": "Cloudy",//----------------------------------------------------------------------
    "WeatherIcon": 7,//----------------------------------------------------------------------
    "HasPrecipitation": false,
    "PrecipitationType": null,
    "IsDayTime": true,
    "Temperature": {
      "Metric": { //----------------------------------------------------------------------
        "Value": 23.3,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {//----------------------------------------------------------------------
        "Value": 74,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "RealFeelTemperature": {//----------------------------------------------------------------------
      "Metric": {
        "Value": 22.5,
        "Unit": "C",
        "UnitType": 17,
        "Phrase": "Pleasant"
      },
      "Imperial": {
        "Value": 72,
        "Unit": "F",
        "UnitType": 18,
        "Phrase": "Pleasant"
      }
    },
    "RealFeelTemperatureShade": {
      "Metric": {
        "Value": 21.6,
        "Unit": "C",
        "UnitType": 17,
        "Phrase": "Pleasant"
      },
      "Imperial": {
        "Value": 71,
        "Unit": "F",
        "UnitType": 18,
        "Phrase": "Pleasant"
      }
    },
    "RelativeHumidity": 45,
    "IndoorRelativeHumidity": 45,
    "DewPoint": {
      "Metric": {
        "Value": 10.6,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 51,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "Wind": {//----------------------------------------------------------------------
      "Direction": {
        "Degrees": 90,
        "Localized": "E",
        "English": "E"
      },
      "Speed": {
        "Metric": {
          "Value": 14.9,
          "Unit": "km/h",
          "UnitType": 7
        },
        "Imperial": {
          "Value": 9.3,
          "Unit": "mi/h",
          "UnitType": 9
        }
      }
    },
    "WindGust": {
      "Speed": {
        "Metric": {
          "Value": 16.4,
          "Unit": "km/h",
          "UnitType": 7
        },
        "Imperial": {
          "Value": 10.2,
          "Unit": "mi/h",
          "UnitType": 9
        }
      }
    },
    "UVIndex": 1,//----------------------------------------------------------------------
    "UVIndexText": "Low",
    "Visibility": {
      "Metric": {
        "Value": 16.1,
        "Unit": "km",
        "UnitType": 6
      },
      "Imperial": {
        "Value": 10,
        "Unit": "mi",
        "UnitType": 2
      }
    },
    "ObstructionsToVisibility": "",
    "CloudCover": 100,
    "Ceiling": {
      "Metric": {
        "Value": 7376,
        "Unit": "m",
        "UnitType": 5
      },
      "Imperial": {
        "Value": 24200,
        "Unit": "ft",
        "UnitType": 0
      }
    },
    "Pressure": {
      "Metric": {
        "Value": 1015.9,
        "Unit": "mb",
        "UnitType": 14
      },
      "Imperial": {
        "Value": 30,
        "Unit": "inHg",
        "UnitType": 12
      }
    },
    "PressureTendency": {
      "LocalizedText": "Falling",
      "Code": "F"
    },
    "Past24HourTemperatureDeparture": {
      "Metric": {
        "Value": 2.5,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 4,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "ApparentTemperature": {
      "Metric": {
        "Value": 23.3,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 74,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "WindChillTemperature": {
      "Metric": {
        "Value": 23.3,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 74,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "WetBulbTemperature": {
      "Metric": {
        "Value": 15.6,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 60,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "Precip1hr": {
      "Metric": {
        "Value": 0,
        "Unit": "mm",
        "UnitType": 3
      },
      "Imperial": {
        "Value": 0,
        "Unit": "in",
        "UnitType": 1
      }
    },
    "PrecipitationSummary": {
      "Precipitation": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "PastHour": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "Past3Hours": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "Past6Hours": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "Past9Hours": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "Past12Hours": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "Past18Hours": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "Past24Hours": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      }
    },
    "TemperatureSummary": {
      "Past6HourRange": {
        "Minimum": {
          "Metric": {
            "Value": 15.1,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 59,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Maximum": {
          "Metric": {
            "Value": 23.3,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 74,
            "Unit": "F",
            "UnitType": 18
          }
        }
      },
      "Past12HourRange": {
        "Minimum": {
          "Metric": {
            "Value": 8.5,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 47,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Maximum": {
          "Metric": {
            "Value": 23.3,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 74,
            "Unit": "F",
            "UnitType": 18
          }
        }
      },
      "Past24HourRange": {
        "Minimum": {
          "Metric": {
            "Value": 8.5,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 47,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Maximum": {
          "Metric": {
            "Value": 23.3,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 74,
            "Unit": "F",
            "UnitType": 18
          }
        }
      }
    },
    "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
  }
]