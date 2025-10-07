import { UptimeKumaClient } from "uptime-kuma-rest-api"

const uptimeKumaClient = new UptimeKumaClient({
    host: "http://uptimekuma.tld",
    authentication: {
        username: "",
        password: "uk1_aJxxxxxxxxxxxxxxxxxxx"
    }
})

const entryPage = await uptimeKumaClient.main.getEntryPage()
console.log(`entryPage \n${JSON.stringify(entryPage)}`)

const uptimekuma = await uptimeKumaClient.main.getStatus("uptimekuma")
console.log(`uptimekuma \n${JSON.stringify(uptimekuma)}`)

const heartbeat = await uptimeKumaClient.main.getHeartbeat("uptimekuma")
console.log(`heartbeat \n${JSON.stringify(heartbeat)}`)

const overallStatusBadge = await uptimeKumaClient.badges.getOverallStatusBadge("uptimekuma")
console.log(`overallStatusBadge \n${overallStatusBadge}`)

const monitorStatusBadge = await uptimeKumaClient.badges.getMonitorBadge(27)
console.log(`monitorStatusBadge \n${monitorStatusBadge}`)

const monitorUptimeBadge = await uptimeKumaClient.badges.getMonitorUptimeBadge(27, "1h")
console.log(`monitorUptimeBadge \n${monitorUptimeBadge}`)

const monitorPingBadge = await uptimeKumaClient.badges.getMonitorPingBadge(27, "1h")
console.log(`monitorPingBadge \n${monitorPingBadge}`)

const monitorCertificateExpiryBadge = await uptimeKumaClient.badges.getMonitorCertificateExpiryBadge(27)
console.log(`monitorCertificateExpiryBadge \n${monitorCertificateExpiryBadge}`)

