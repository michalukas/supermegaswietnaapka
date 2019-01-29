from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import *
from rest_framework.authtoken.views import obtain_auth_token

router = routers.DefaultRouter()
router.register('games', GamesViewSet, base_name='games')


urlpatterns = [
    path('', include(router.urls)),
    path('token/', obtain_auth_token),
    path('admin/', admin.site.urls),
    path('auth/', include('rest_framework.urls')),

]
