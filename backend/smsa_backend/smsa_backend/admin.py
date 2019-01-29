from django.contrib import admin
from .models import AuthUser, Games

admin.site.register(AuthUser)
admin.site.register(Games)
