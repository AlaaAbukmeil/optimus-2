import { useState } from "react";
function TrueSvg() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="device-svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M12 2C6.4898 2 2 6.4898 2 12C2 17.5102 6.4898 22 12 22C17.5102 22 22 17.5102 22 12C22 6.4898 17.5102 2 12 2ZM15.5714 10.4694L11.4898 14.551C11.2857 14.6531 11.1837 14.7551 10.9796 14.7551C10.7755 14.7551 10.5714 14.6531 10.4694 14.551L8.42857 12.5102C8.12245 12.2041 8.12245 11.6939 8.42857 11.3878C8.73469 11.0816 9.2449 11.0816 9.55102 11.3878L11.0816 12.9184L14.6531 9.34694C14.9592 9.04082 15.4694 9.04082 15.7755 9.34694C15.8776 9.7551 15.8776 10.1633 15.5714 10.4694Z"
          fill="#2effaf"
        ></path>{" "}
      </g>
    </svg>
  );
}
function FalseSvg() {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      className="device-svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          fill="#f00000"
          fill-rule="evenodd"
          d="M8,16 C12.4183,16 16,12.4183 16,8 C16,3.58172 12.4183,0 8,0 C3.58172,0 0,3.58172 0,8 C0,12.4183 3.58172,16 8,16 Z M4.29289,4.29289 C4.68342,3.90237 5.31658,3.90237 5.70711,4.29289 L8,6.58579 L10.2929,4.29289 C10.6834,3.90237 11.3166,3.90237 11.7071,4.29289 C12.0976,4.68342 12.0976,5.31658 11.7071,5.70711 L9.41421,8 L11.7071,10.2929 C12.0976,10.6834 12.0976,11.3166 11.7071,11.7071 C11.3166,12.0976 10.6834,12.0976 10.2929,11.7071 L8,9.41421 L5.70711,11.7071 C5.31658,12.0976 4.68342,12.0976 4.29289,11.7071 C3.90237,11.3166 3.90237,10.6834 4.29289,10.2929 L6.58579,8 L4.29289,5.70711 C3.90237,5.31658 3.90237,4.68342 4.29289,4.29289 Z"
        ></path>{" "}
      </g>
    </svg>
  );
}

function displayObjectContent(object: any) {
  let titles = Object.keys(object);
  return (
    <div>
      {titles.map((title, index) => (
        <p className="device-metrics device-status">
          {title}: {object[title]}
        </p>
      ))}
    </div>
  );
}

function ShowDeviceInfo(props: any) {
  if (props.deviceInfo) {
    return (
      <div className="device-container device-info-container-2">
        <img
          src={props.deviceInfo.deviceImage}
          className="device-image"
          alt=""
        />
        <p className="device-id">Device Id: {props.deviceInfo.deviceId}</p>
        <p className="device-id">Device Type: {props.deviceInfo.deviceType}</p>
        <p className="device-location">{`Location: ${props.deviceInfo.location}`}</p>
        <div className="device-status-container">
          <p className="device-status">{props.deviceInfo.status}</p>
          {props.deviceInfo.status == "connected" ? <TrueSvg /> : <FalseSvg />}
        </div>
        <p className="device-location">
          Last Time Seen: {props.deviceInfo.lastTimeSeen}
        </p>
        <p className="device-location">
          Last Payload: {displayObjectContent(props.deviceInfo.lastPayload)}
        </p>
      </div>
    );
  }else{
    return <div></div>
  }
}
function Devices() {
  function cancelDeviceInfo(event: any) {
    setDeviceInfoDisplay("none");
  }
  function showDeviceInfo(event: any, deviceInfo: any) {
    console.log(deviceInfo)
    setDeviceInfo(deviceInfo);
    setDeviceInfoDisplay("flex");
  }
  let [deviceInfoDisplay, setDeviceInfoDisplay] = useState("none");
  
  let devices = [
    {
      deviceId: "CityU-1",
      deviceType: "Air Quality",
      deviceImage:
        "https://cdn.weweb.io/designs/3b1ef9d0-d898-454b-a292-2a203e87e0ad/sections/MicrosoftTeams-image__1_.png?_wwcv=1678789707147",
      status: "connected",
      lastTimeSeen: "21/11/2023 12:59",
      lastPayload: { temperature: 15, co2: 305, humidity: 20 },
      location: "Hong Kong > Lux X > 3/F > office",
    },
    {
      deviceId: "CityU-2",
      deviceType: "Air Quality",
      deviceImage:
        "https://cdn.weweb.io/designs/3b1ef9d0-d898-454b-a292-2a203e87e0ad/sections/MicrosoftTeams-image__1_.png?_wwcv=1678789707147",
      status: "disconnected",
      lastTimeSeen: "21/11/2023 12:59",
      lastPayload: { temperature: 15, co2: 305, humidity: 20 },
      location: "Hong Kong > Lux X > 3/F > office",
    },
    {
      deviceId: "CityU-3",
      deviceType: "Air Quality",
      deviceImage:
        "https://cdn.weweb.io/designs/3b1ef9d0-d898-454b-a292-2a203e87e0ad/sections/MicrosoftTeams-image__1_.png?_wwcv=1678789707147",
      status: "connected",
      lastTimeSeen: "21/11/2023 12:59",
      lastPayload: { temperature: 15, co2: 305, humidity: 20 },
      location: "Hong Kong > Lux X > 3/F > office",
    },
  ];
  let [deviceInfo, setDeviceInfo] = useState(devices[0]);

  return (
    <div>
      <div className="devices-container">
        {devices.map((device, index) => (
          <div
            className="device-container"
            onClick={(event) => showDeviceInfo(event, device)}
          >
            <img src={device.deviceImage} className="device-image" alt="" />
            <p className="device-id">Device Id: {device.deviceId}</p>
            <p className="device-location">{`Location: ${device.location}`}</p>
            <div className="device-status-container">
              <p className="device-status">{device.status}</p>
              {device.status == "connected" ? <TrueSvg /> : <FalseSvg />}
            </div>
          </div>
        ))}
      </div>
      <div className="device-info-container-1" style={{ display:deviceInfoDisplay  }} onClick={(event: any) => cancelDeviceInfo(event)}>
        <ShowDeviceInfo
          deviceInfo={deviceInfo}
        />
      </div>
    </div>
  );
}

export default Devices;
