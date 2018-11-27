Kroki, które trzeba wykonać, aby odpalić aplikacje na komputerze:
1) Zainstalować "Node.js", "Git" oraz "yarn".
2) W konsoli wpisać "git clone git@github.com:michalukas/supermegaswietnaapka.git" + enter.
3) Przejść w konsoli do folderu z aplikacją i wpisać "yarn".
4) W konsoli, w folderze z aplikacją, wpisać "yarn start". 


Kroki do Django:
1) URUCHOMIĆ VIRTUAL ENVIRONMENT - na Windowsie odpalic activate w katalogu Scripts. Wtedy będziemy pracować na modułach już poinstalowanych i wszystko co się zainstaluje zainstaluje się jakby lokalnie w tym folderze, a nie na całym komputerze. Dzięki temu będziemy mieć te same wersje itp. Jeżeli coś wyskoczy że czegoś brakuje to pip install requirements. Jest to taki plik gdzie wrzucamy wszelkie moduły których używamy tzn. ich nazwy zgodne z instalacją przez pip. Jak coś trzeba dodatkowego to pip install <nazwa> i najlepiej od razu wrzucić <nazwa> do ww. pliku requirements to każdy będzie mógł sobie to odpalić u siebie bez zbędnego szukania.
2) Żeby odpalić serwer to wpisujemy python manage.py runserver (opcjonalnie może powiedzieć żeby wpisać python3 a nawet python3.6 czy 3.7). Uruchomi się na localhost:8000  
  
Do pisania w pythonie/django fajny jest pycharm. Można odpalić sobie tam konsolę przez alt+f12 (ale jak macie zainstalowane Geforce Experience to skrót moze być zajęty przez nVidie, trzeba go wtedy stamtad wywalić). Tam też można odpalić virtualenv i uzywac pip.  
Będziemy używać głównie DRF (Django Rest Framework) więc o tym module najlepiej poczytać.
