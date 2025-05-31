let request = require('request');

function device1TemperatureData() {
  let randomValue = Math.floor((Math.random() * (32 - 17) + 17)); // 10~100 사이의 랜덤 실수 생성

  let options = {
    method: 'POST',
    url: 'http://172.28.6.239:8080/TinyIoT/my_device1/temperature/data?',
    headers: {
      Accept: 'application/json',
      'X-M2M-RI': '12345',
      'X-M2M-Origin': 'Carrot',
      'Content-Type': 'application/json; ty=4',
      'X-M2M-RVI': '2a'
    },
    body: JSON.stringify({
      "m2m:cin": {
        "con": String(randomValue)
      }
    })
  };

  request(options, function (error, response) {
    if (error) {
      console.error('device1TemperatureData Error occurred:', error);
      return;
    }
    console.log('device1TemperatureData Response:', response.body);
  });
}

function device1TemperatureLocation() {
  let options = {
    method: 'POST',
    url: 'http://172.28.6.239:8080/TinyIoT/my_device1/temperature/location?',
    headers: {
      Accept: 'application/json',
      'X-M2M-RI': '12345',
      'X-M2M-Origin': 'Carrot',
      'Content-Type': 'application/json; ty=4',
      'X-M2M-RVI': '2a'
    },
    body: JSON.stringify({
      "m2m:cin": {
        "con": "37.560247, 126.831765"
      }
    })
  };

  request(options, function (error, response) {
    if (error) {
      console.error('device1TemperatureLocation Error occurred:', error);
      return;
    }
    console.log('device1TemperatureLocation Response:', response.body);
  });
}

function device1HumidityData() {
  let randomValue = (Math.random() * (70 - 23) + 23); // 10~100 사이의 랜덤 실수 생성

  let options = {
    method: 'POST',
    url: 'http://172.28.6.239:8080/TinyIoT/my_device1/humidity/data?',
    headers: {
      Accept: 'application/json',
      'X-M2M-RI': '12345',
      'X-M2M-Origin': 'Carrot',
      'Content-Type': 'application/json; ty=4',
      'X-M2M-RVI': '2a'
    },
    body: JSON.stringify({
      "m2m:cin": {
        "con": String(randomValue)
      }
    })
  };

  request(options, function (error, response) {
    if (error) {
      console.error('device1HumidityData Error occurred:', error);
      return;
    }
    console.log('device1HumidityData Response:', response.body);
  });
}

function device1HumidityLocation() {
  let options = {
    method: 'POST',
    url: 'http://172.28.6.239:8080/TinyIoT/my_device1/humidity/location?',
    headers: {
      Accept: 'application/json',
      'X-M2M-RI': '12345',
      'X-M2M-Origin': 'Carrot',
      'Content-Type': 'application/json; ty=4',
      'X-M2M-RVI': '2a'
    },
    body: JSON.stringify({
      "m2m:cin": {
        "con": "37.560247, 126.831765"
      }
    })
  };

  request(options, function (error, response) {
    if (error) {
      console.error('device1HumidityLocation Error occurred:', error);
      return;
    }
    console.log('device1HumidityLocation Response:', response.body);
  });
}

function device1VoltageData() {
  let randomValue = (Math.random() * (13 - 8) + 8).toFixed(2); // 10~100 사이의 랜덤 실수 생성

  let options = {
    method: 'POST',
    url: 'http://172.28.6.239:8080/TinyIoT/my_device1/voltage/data?',
    headers: {
      Accept: 'application/json',
      'X-M2M-RI': '12345',
      'X-M2M-Origin': 'Carrot',
      'Content-Type': 'application/json; ty=4',
      'X-M2M-RVI': '2a'
    },
    body: JSON.stringify({
      "m2m:cin": {
        "con": String(randomValue)
      }
    })
  };

  request(options, function (error, response) {
    if (error) {
      console.error('device1VoltageData Error occurred:', error);
      return;
    }
    console.log('device1VoltageData Response:', response.body);
  });
}

function device1EnergyConsumptionData() {
  let randomValue = (Math.random() * (350 - 122) + 122).toFixed(2); // 10~100 사이의 랜덤 실수 생성

  let options = {
    method: 'POST',
    url: 'http://172.28.6.239:8080/TinyIoT/my_device1/energyConsumption/data?',
    headers: {
      Accept: 'application/json',
      'X-M2M-RI': '12345',
      'X-M2M-Origin': 'Carrot',
      'Content-Type': 'application/json; ty=4',
      'X-M2M-RVI': '2a'
    },
    body: JSON.stringify({
      "m2m:cin": {
        "con": String(randomValue)
      }
    })
  };

  request(options, function (error, response) {
    if (error) {
      console.error('device1EnergyConsumptionData Error occurred:', error);
      return;
    }
    console.log('device1EnergyConsumptionData Response:', response.body);
  });
}

function device1CurrentData() {
  let randomValue = (Math.random() * (18 - 14) + 14).toFixed(2); // 10~100 사이의 랜덤 실수 생성

  let options = {
    method: 'POST',
    url: 'http://172.28.6.239:8080/TinyIoT/my_device1/current/data?',
    headers: {
      Accept: 'application/json',
      'X-M2M-RI': '12345',
      'X-M2M-Origin': 'Carrot',
      'Content-Type': 'application/json; ty=4',
      'X-M2M-RVI': '2a'
    },
    body: JSON.stringify({
      "m2m:cin": {
        "con": String(randomValue)
      }
    })
  };

  request(options, function (error, response) {
    if (error) {
      console.error('device1CurrentData Error occurred:', error);
      return;
    }
    console.log('device1CurrentData Response:', response.body);
  });
}
//-------------------------------------------
function device2TemperatureData() {
  let randomValue = Math.floor((Math.random() * (32 - 17) + 17)); // 10~100 사이의 랜덤 실수 생성

  let options = {
    method: 'POST',
    url: 'http://172.28.6.239:8080/TinyIoT/my_device2/temperature/data?',
    headers: {
      Accept: 'application/json',
      'X-M2M-RI': '12345',
      'X-M2M-Origin': 'Cow',
      'Content-Type': 'application/json; ty=4',
      'X-M2M-RVI': '2a'
    },
    body: JSON.stringify({
      "m2m:cin": {
        "con": String(randomValue)
      }
    })
  };

  request(options, function (error, response) {
    if (error) {
      console.error('device2TemperatureData Error occurred:', error);
      return;
    }
    console.log('device2TemperatureData Response:', response.body);
  });
}

function device2TemperatureLocation() {
  let options = {
    method: 'POST',
    url: 'http://172.28.6.239:8080/TinyIoT/my_device2/temperature/location?',
    headers: {
      Accept: 'application/json',
      'X-M2M-RI': '12345',
      'X-M2M-Origin': 'Cow',
      'Content-Type': 'application/json; ty=4',
      'X-M2M-RVI': '2a'
    },
    body: JSON.stringify({
      "m2m:cin": {
        "con": "37.550448, 126.837945"
      }
    })
  };

  request(options, function (error, response) {
    if (error) {
      console.error('device2TemperatureLocation Error occurred:', error);
      return;
    }
    console.log('device2TemperatureLocation Response:', response.body);
  });
}

function device2HumidityData() {
  let randomValue = (Math.random() * (70 - 23) + 23); // 10~100 사이의 랜덤 실수 생성

  let options = {
    method: 'POST',
    url: 'http://172.28.6.239:8080/TinyIoT/my_device2/humidity/data?',
    headers: {
      Accept: 'application/json',
      'X-M2M-RI': '12345',
      'X-M2M-Origin': 'Cow',
      'Content-Type': 'application/json; ty=4',
      'X-M2M-RVI': '2a'
    },
    body: JSON.stringify({
      "m2m:cin": {
        "con": String(randomValue)
      }
    })
  };

  request(options, function (error, response) {
    if (error) {
      console.error('device2HumidityData Error occurred:', error);
      return;
    }
    console.log('device2HumidityData Response:', response.body);
  });
}

function device2HumidityLocation() {
  let options = {
    method: 'POST',
    url: 'http://172.28.6.239:8080/TinyIoT/my_device2/humidity/location?',
    headers: {
      Accept: 'application/json',
      'X-M2M-RI': '12345',
      'X-M2M-Origin': 'Cow',
      'Content-Type': 'application/json; ty=4',
      'X-M2M-RVI': '2a'
    },
    body: JSON.stringify({
      "m2m:cin": {
        "con": "37.550448, 126.837945"
      }
    })
  };

  request(options, function (error, response) {
    if (error) {
      console.error('device2HumidityLocation Error occurred:', error);
      return;
    }
    console.log('device2HumidityLocation Response:', response.body);
  });
}

function device2VoltageData() {
  let randomValue = (Math.random() * (13 - 8) + 8).toFixed(2); // 10~100 사이의 랜덤 실수 생성

  let options = {
    method: 'POST',
    url: 'http://172.28.6.239:8080/TinyIoT/my_device2/voltage/data?',
    headers: {
      Accept: 'application/json',
      'X-M2M-RI': '12345',
      'X-M2M-Origin': 'Cow',
      'Content-Type': 'application/json; ty=4',
      'X-M2M-RVI': '2a'
    },
    body: JSON.stringify({
      "m2m:cin": {
        "con": String(randomValue)
      }
    })
  };

  request(options, function (error, response) {
    if (error) {
      console.error('device2VoltageData Error occurred:', error);
      return;
    }
    console.log('device2VoltageData Response:', response.body);
  });
}

function device2EnergyConsumptionData() {
  let randomValue = (Math.random() * (350 - 122) + 122).toFixed(2); // 10~100 사이의 랜덤 실수 생성

  let options = {
    method: 'POST',
    url: 'http://172.28.6.239:8080/TinyIoT/my_device2/energyConsumption/data?',
    headers: {
      Accept: 'application/json',
      'X-M2M-RI': '12345',
      'X-M2M-Origin': 'Cow',
      'Content-Type': 'application/json; ty=4',
      'X-M2M-RVI': '2a'
    },
    body: JSON.stringify({
      "m2m:cin": {
        "con": String(randomValue)
      }
    })
  };

  request(options, function (error, response) {
    if (error) {
      console.error('device2EnergyConsumptionData Error occurred:', error);
      return;
    }
    console.log('device2EnergyConsumptionData Response:', response.body);
  });
}

function device2CurrentData() {
  let randomValue = (Math.random() * (18 - 14) + 14).toFixed(2); // 10~100 사이의 랜덤 실수 생성

  let options = {
    method: 'POST',
    url: 'http://172.28.6.239:8080/TinyIoT/my_device2/current/data?',
    headers: {
      Accept: 'application/json',
      'X-M2M-RI': '12345',
      'X-M2M-Origin': 'Cow',
      'Content-Type': 'application/json; ty=4',
      'X-M2M-RVI': '2a'
    },
    body: JSON.stringify({
      "m2m:cin": {
        "con": String(randomValue)
      }
    })
  };

  request(options, function (error, response) {
    if (error) {
      console.error('device2CurrentData Error occurred:', error);
      return;
    }
    console.log('device2CurrentData Response:', response.body);
  });
}

// 10초(10,000밀리초)마다 postData 함수 실행
setInterval(device1TemperatureData, 10000);
setInterval(device1TemperatureLocation, 10000);
setInterval(device1HumidityData, 10000);
setInterval(device1HumidityLocation, 10000);
setInterval(device1VoltageData, 30000);
setInterval(device1EnergyConsumptionData, 30000);
setInterval(device1CurrentData, 30000);

setInterval(device2TemperatureData, 10000);
setInterval(device2TemperatureLocation, 10000);
setInterval(device2HumidityData, 10000);
setInterval(device2HumidityLocation, 10000);
setInterval(device2VoltageData, 30000);
setInterval(device2EnergyConsumptionData, 30000);
setInterval(device2CurrentData, 30000);