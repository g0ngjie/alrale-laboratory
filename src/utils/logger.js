import { mount } from "@beeweb/logger";

mount({
    traceId: "alrale-laboratory",
    // serverURL: 'http://logger.alrale.cn',
    mapURI: "http://api.map.baidu.com/location/ip?ak=RD3fQS8GA1UeR4Ig10ejdEkTg1OfwuV3",
    encryptionFunc: logger => console.log("[debug]logger:", logger),
});
