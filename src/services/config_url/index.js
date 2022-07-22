//je sais pas est-ce que c le bon serveur ou nn !!!
const API_URL = "http://192.168.100.16:3003"
const Apis = {
    post_login: `${API_URL}/custom/gta/pages/data/global/api-login.php`,
    get_employeeID:`${API_URL}/custom/gta/pages/data/pointing/physical-pointing/physical-daily-data-for-pointings.php`,

}
export { API_URL, Apis };