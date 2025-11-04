var APP_DATA = {
  "scenes": [
    {
      "id": "0-frente",
      "name": "Frente",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.414372131925493,
        "pitch": 0.09299287388657262,
        "fov": 1.4108347438219848
      },
      "linkHotspots": [
        {
          "yaw": 2.6479681597641918,
          "pitch": 0.21171033349403245,
          "rotation": 0,
          "target": "1-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.4707359069704715,
        "pitch": 0.10098332009749811,
        "fov": 1.4108347438219848
      },
      "linkHotspots": [
        {
          "yaw": -2.8875006153316285,
          "pitch": 0.5093742380033888,
          "rotation": 0,
          "target": "2-cocina"
        },
        {
          "yaw": 1.8088138536879033,
          "pitch": 0.31813016399022764,
          "rotation": 0,
          "target": "0-frente"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.3937455134928243,
        "pitch": 0.16207329448802454,
        "fov": 1.4108347438219848
      },
      "linkHotspots": [
        {
          "yaw": 2.6730335555471196,
          "pitch": 0.41180498719836045,
          "rotation": 0,
          "target": "3-garage"
        },
        {
          "yaw": -1.8863247830385141,
          "pitch": 0.2111858750068656,
          "rotation": 0,
          "target": "6-hall"
        },
        {
          "yaw": -0.6742300825668597,
          "pitch": 0.36486533817459765,
          "rotation": 0,
          "target": "1-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-garage",
      "name": "Garage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.6221684625040069,
        "pitch": 0.22214477100625452,
        "fov": 1.4108347438219848
      },
      "linkHotspots": [
        {
          "yaw": -1.3282651241425807,
          "pitch": 0.380994727219111,
          "rotation": 0,
          "target": "2-cocina"
        },
        {
          "yaw": -2.5779462059638423,
          "pitch": 0.30956786529000624,
          "rotation": 0,
          "target": "4-garage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-garage",
      "name": "Garage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.5462414531872533,
        "pitch": 0.1620732944880281,
        "fov": 1.4108347438219848
      },
      "linkHotspots": [
        {
          "yaw": -2.6193035505003763,
          "pitch": 0.30151875023254604,
          "rotation": 0,
          "target": "5-patio"
        },
        {
          "yaw": 0.727078676381522,
          "pitch": 0.17070084520554474,
          "rotation": 0,
          "target": "3-garage"
        },
        {
          "yaw": 0.33201694667448756,
          "pitch": 0.17530306789495853,
          "rotation": 0,
          "target": "2-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-patio",
      "name": "Patio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4108347438219848
      },
      "linkHotspots": [
        {
          "yaw": 0.49920900372652,
          "pitch": 0.10103291857074126,
          "rotation": 0,
          "target": "4-garage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.407898376782791,
        "pitch": 0.21786977669395213,
        "fov": 1.4108347438219848
      },
      "linkHotspots": [
        {
          "yaw": -0.6356382960617548,
          "pitch": 0.4595386375580688,
          "rotation": 0,
          "target": "2-cocina"
        },
        {
          "yaw": -1.827038267183008,
          "pitch": 0.5403117740014203,
          "rotation": 0,
          "target": "7-dormitorio"
        },
        {
          "yaw": 2.1640778348443632,
          "pitch": 0.6366126211634935,
          "rotation": 0,
          "target": "8-dormitorio"
        },
        {
          "yaw": -2.79202905094359,
          "pitch": 0.5598426804126433,
          "rotation": 0,
          "target": "9-dormitorio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-dormitorio",
      "name": "Dormitorio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8639646132592791,
          "pitch": 0.31283404355447075,
          "rotation": 0,
          "target": "6-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-dormitorio",
      "name": "Dormitorio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.2358477853983736,
        "pitch": 0.21488389974436473,
        "fov": 1.4108347438219848
      },
      "linkHotspots": [
        {
          "yaw": 1.3948381820872306,
          "pitch": 0.3979664470239648,
          "rotation": 0,
          "target": "6-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-dormitorio",
      "name": "Dormitorio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.8135163837377846,
        "pitch": 0.19880157240963214,
        "fov": 1.4108347438219848
      },
      "linkHotspots": [
        {
          "yaw": 1.00713837341522,
          "pitch": 0.2838770410304292,
          "rotation": 0,
          "target": "6-hall"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
