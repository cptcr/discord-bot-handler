const si = require("systeminformation")

async function getSystemInfo() {
    try {
        const cpuInfo = await si.cpu();
        console.log("-> CPU: ", `${cpuInfo.manufacturer} ${cpuInfo.brand}`);
        const memInfo = await si.memLayout();
        memInfo.forEach((mem, index) => {
            console.log(`-> RAM Slot ${index + 1}: ${mem.manufacturer || "No data available"} ${mem.partNum}`);
        });
        const gpuInfo = await si.graphics();
        gpuInfo.controllers.forEach((gpu, index) => {
            console.log("-> GPU ", `${index + 1}: ${gpu.model}`);
        });
    } catch (error) {
        console.error("Error occurred while getting system information: ", `${error}`);
    }
}

module.exports = { getSystemInfo }