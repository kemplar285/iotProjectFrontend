const dimmerIP = "http://192.168.1.9:8081/zeroconf/dimmable"
const tempHumiditySensorId = 'a480056d1b';

export async function setBrightness() {
    var body = {
        "deviceid": "10016705ce",
        "data": {
            "switch": "on",
            "brightness": 1,
            "mode": 0,
            "brightmin": 1,
            "brightmax": 255
        }
    }

    var params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }

    console.log(body);

    fetch(dimmerIP, params)
        .then((response) => {
            return response.json();
        })
        .catch(console.error);
}


export async function getTempSensorData() {
    const response = await fetch(`/api/getSensorData?deviceid=${tempHumiditySensorId}`);
    return await response.json();
}

export async function getAllConnectedSensors() {
    const response = await fetch(`/api/getDevices`);
    return await response.json();
}

