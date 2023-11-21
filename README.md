# Proyecto WorkShopFinal PeakU
 Node/Vite/React/MySql

Integrantes del proyecto:

- [@JenniferAS26](https://github.com/JenniferAS26)

- [@JivaJR](https://github.com/JivaJR)

- [@Kalixt044](https://github.com/Kalixt044)

#### Get all items

http 
  GET /api/hoteles


| Parameter | Type     | Default               |
| :-------- | :------- | :------------------------- |
| `pais` | `string` | *All.* |
| `ciudad` | `string` | *All*. |
| `limit` | `string` | *10*. |


http
  GET /api/destinos

Return all available cities.

http
  GET /api/promociones

Return all available promotions.

http 
  GET /api/hoteles


| Parameter | Type     | Required               |
| :-------- | :------- | :------------------------- |
| `username` | `string` | *Yes* |
| `email` | `string` | *Yes*. |
| `password` | `string` | *Yes*. |

http 
  GET /api/login


| Parameter | Type     | Required               |
| :-------- | :------- | :------------------------- |
| `email` | `string` | *Yes*. |
| `password` | `string` | *Yes*. |

Return userName if the acount exist.

http 
  GET /api/usuarios


| Parameter | Type     | Required               |
| :-------- | :------- | :------------------------- |
| `email` | `string` | *Yes*. |

This EndPoint is used to know if alrady exist a user whit the email.
### Deploy Vercel: https://work-shop-final-peaku.vercel.app/
