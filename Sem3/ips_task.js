const getData = async function () {
    const response = await fetch("https://kodaktor.ru/j/ips");
    const ipArray = await response.json();
    return ipArray;
}

const processArray = function (array) {
    return array.reduce((acc, {ip}) => {
        const currentIpIndex = acc.findIndex(el => el.hasOwnProperty(ip));
        if (currentIpIndex === -1) {
            return [...acc, {[ip]: 1}];
        }
        acc[currentIpIndex][ip]++;
        return acc;
    }, []).sort((a, b) => {
        const aIp = Object.values(a)[0];
        const bIp = Object.values(b)[0];
        return bIp - aIp;
    })
}

getData().then(arr => {
    console.log(processArray(arr));
})