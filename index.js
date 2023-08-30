const { default: axios } = require("axios")

const busStop = '04121'
const api = `http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=${busStop}`

const config = {
  headers: {
    'AccountKey': 'xHrBZD3HTbqeGcgRVnd/1A=='
  }
}

// Create an asyncronous function
async function loadBusData() {
  console.log("start")
  
  // You can ONLY use await inside an async function
  // axios.get() gives me back a Promise<Object>
  const res = await axios.get(api, config)
    // .then((res) => console.log(res.status))
    // .catch((err) => {
    //   console.log(err)
    // })

  console.log(res.data.Services)
  console.log("end")
}

// Run async function
loadBusData() // :Promise<void>

// console.log("start")
// axios.get(api, config).then((res) => console.log(res.data))
// console.log("end")