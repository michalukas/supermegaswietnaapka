import requests #pip install requests
import json
import io


reply = requests.get("https://api.steampowered.com/ISteamApps/GetAppList/v2/")
siteContent = reply.text
jsonFormat = json.loads(siteContent)["applist"]["apps"]
outputFile = io.open("steamAppList.csv", "w", encoding="utf8")
sep = ";"
for i in jsonFormat:
     oneRecord = ""
     id = str(i["appid"])
     try:
          reply = requests.get("https://store.steampowered.com/api/appdetails/?appids=" + id, timeout=10)
     except:
          continue
     if reply.status_code == requests.codes.ok:
          siteContent = reply.text
          jsonFormat2 = json.loads(siteContent)
          if jsonFormat2 is not None:
               if jsonFormat2[id]["success"] == True:
                    oneRecord += id + sep + i["name"]
                    oneRecord += sep + jsonFormat2[id]["data"]["type"]
                    oneRecord += sep + jsonFormat2[id]["data"]["header_image"]
                    platforms = jsonFormat2[id]["data"]["platforms"]
                    platformsStr = ""
                    if platforms["windows"] == True:
                         platformsStr += "windows "
                    if platforms["mac"] == True:
                         platformsStr += "mac "
                    if platforms["linux"] == True:
                         platformsStr += "linux "
                    oneRecord += sep + platformsStr + "\n"
     outputFile.write(oneRecord)
outputFile.close()
